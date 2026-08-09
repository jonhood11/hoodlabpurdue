# Domain cutover and rollback

This runbook moves `hoodlabpurdue.com` from Wix hosting to the verified GitHub
Pages build. Wix remains the registrar. Do not transfer or cancel the domain.

## Safety boundary

Do not perform this runbook until Jonathan has reviewed the preview and approved
the production DNS change at action time. Keep the Wix site and plan intact
during the cutover and observation period.

## Verified preview

- Preview: <https://jonhood11.github.io/hoodlabpurdue/>
- Repository: <https://github.com/jonhood11/hoodlabpurdue>
- Hosting cost: free GitHub Pages for this public repository.

## Current Wix records (rollback snapshot, 2026-08-09)

| Name | Type | Current value |
| --- | --- | --- |
| `@` | `A` | `185.230.63.107` |
| `@` | `A` | `185.230.63.171` |
| `@` | `A` | `185.230.63.186` |
| `www` | `CNAME` | `cdn1.wixdns.net` |
| domain | `NS` | `ns0.wixdns.net`, `ns1.wixdns.net` |

No MX or apex TXT records were returned by public DNS when this snapshot was
taken. Confirm the complete Wix DNS table immediately before editing it and do
not change unrelated records.

## Cutover

1. In GitHub repository Settings → Pages, set the custom domain to
   `www.hoodlabpurdue.com`. Keep HTTPS enforcement on when GitHub makes the
   option available.
2. Change the Pages build environment in `.github/workflows/deploy.yml`:
   - `BASE_PATH: /`
   - `SITE_URL: https://www.hoodlabpurdue.com`
3. Build, verify, commit, push, and confirm the workflow succeeds.
4. In Wix DNS, replace only the three existing `@` A records with GitHub's four
   A records:

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

5. Change only the `www` CNAME from `cdn1.wixdns.net` to
   `jonhood11.github.io` (do not include `/hoodlabpurdue`).
6. Optional IPv6 support can be added with these four `@` AAAA records:

   ```text
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```

GitHub recommends configuring both the apex and `www` forms. With
`www.hoodlabpurdue.com` selected as the custom domain, GitHub redirects the apex
domain to `www`. DNS changes can take up to 24 hours to propagate. See GitHub's
[custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Verification before declaring success

- GitHub Pages reports the DNS check as successful.
- `https://www.hoodlabpurdue.com/` and `https://hoodlabpurdue.com/` both load the
  GitHub build with a valid certificate.
- All 39 legacy routes return successful responses.
- Desktop and mobile screenshots match the approved preview.
- Internal links and locally stored media pass `npm run verify -- dist /`.
- The Wix site remains available in the Wix dashboard for rollback.

Leave the Wix hosting plan in place for at least seven days after a clean
cutover. Cancel only the Wix website hosting plan after explicit approval; keep
the domain registration and renewal active.

## Rollback

If the custom domain, certificate, or routes fail, restore the Wix snapshot:

1. Restore the three `@` A records to `185.230.63.107`, `185.230.63.171`, and
   `185.230.63.186`.
2. Restore the `www` CNAME to `cdn1.wixdns.net`.
3. Remove any GitHub AAAA records added during cutover.
4. Recheck both apex and `www` over HTTPS until Wix is serving again.

The GitHub repository and preview can remain intact during rollback.
