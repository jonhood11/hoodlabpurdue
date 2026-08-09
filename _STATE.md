# Hood Lab Website State

## 2026-08-09

### Completed

- Archived 39 public Wix routes: 8 regular pages and 31 news posts.
- Downloaded and validated 48 original media files (47 MB).
- Rebuilt the site in Astro with matching Hood Lab styling and responsive layouts.
- Preserved all public paths, including `/blank-6` and every `/post/...` URL.
- Passed Astro checks, production and preview builds, and local link/media audits.
- Reviewed desktop and 390-pixel mobile captures with no horizontal overflow.
- Published and verified all 39 routes at the GitHub Pages HTTPS preview.
- Prepared a rollback-safe DNS cutover runbook with the current Wix record snapshot.
- Audited 73 external URLs and replaced the one retired Fall 2022 Purdue mailing-list link with an archival note.
- Cut production DNS from Wix hosting to GitHub Pages on 2026-08-09.
- Enabled and verified HTTPS for `www.hoodlabpurdue.com` and its apex redirect.
- Reverified all 39 legacy routes directly against GitHub over production HTTPS.
- Turned off Wix Core auto-renewal; premium features remain active until Aug 3, 2028.
- Kept the Wix domain subscription active at $42.70 per two-year renewal cycle.
- Added `WEBSITE.md`, a complete plain-language handbook covering repository
  structure, editing, publishing, verification, domain management, Wix status,
  costs, recovery, and durable operating rules.
- Expanded `README.md` into the clear entry point for the repository and linked
  all operational records.
- Added `AGENTS.md` so future Codex tasks immediately use this repository,
  validate changes, sync intentionally, and avoid the Wix editor.
- Added a future-request workflow and a detailed, approval-gated domain-transfer
  checklist to `WEBSITE.md`.

### Waiting

- Residual resolver/browser caches may show Wix for up to the former one-hour DNS TTL.

### Decisions

- Use Astro for maintainable static pages and Markdown news posts.
- Use GitHub Pages for free hosting.
- Preserve the existing domain and URL paths.
- Build and verify a preview before any production DNS change.

### Important files

- `GOAL.md` — durable objective and completion proof.
- `astro.config.mjs` — static-site configuration.
- `src/content/news/` — durable Markdown copies of all Wix news posts.
- `public/media/` — original-quality local media archive.
- `scripts/verify-build.mjs` — route and local-link verification.
- `.github/workflows/deploy.yml` — GitHub Pages production deployment.
- `DNS-CUTOVER.md` — exact production switch, validation, and rollback steps.
- `WEBSITE.md` — complete website, publishing, domain, and maintenance handbook.
- `AGENTS.md` — concise operating instructions for future Codex website tasks.

### Next useful action

- Use `WEBSITE.md` as the starting point for future website work. Keep the
  inexpensive domain registration active unless Jonathan later chooses a
  different registrar or a GitHub-only URL.
