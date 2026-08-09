# Hood Lab Website Handbook

This is the durable, plain-language guide to the Hood Lab website. It records
where the website lives, how it works, how to change it safely, how it is
published, and what remains at Wix.

## At a glance

| Item | Current arrangement |
| --- | --- |
| Public website | <https://www.hoodlabpurdue.com/> |
| Alternate address | <https://hoodlabpurdue.com/> redirects to `www` |
| Source repository | <https://github.com/jonhood11/hoodlabpurdue> |
| Local repository | `/Users/jonathanhood/GitHub/Purdue/hoodlabpurdue` |
| Site generator | Astro |
| Website hosting | GitHub Pages, free |
| Domain registrar | Wix |
| Wix website plan | Auto-renewal off |
| Wix business email | None |
| Domain renewal | Active through July 4, 2028 |
| Current domain cost | $42.70 for two years, about $21.35 per year |

The website no longer depends on Wix hosting. Keeping the domain at Wix does
not require keeping a Wix website plan.

## What is stored here

This repository is the authoritative editable source for the public website.
It includes the site's layouts, pages, news posts, styling, original media,
deployment configuration, and verification tools.

Important locations:

| Path | Purpose |
| --- | --- |
| `src/pages/` | Main website routes and page templates |
| `src/content/pages/` | Markdown content for regular pages |
| `src/content/news/` | Markdown copies of all migrated news posts |
| `src/layouts/` | Shared page layout and metadata |
| `src/components/` | Header, footer, and reusable page pieces |
| `src/styles/global.css` | Site-wide colors, typography, spacing, and responsive styling |
| `public/media/` | Locally archived website images and other public media |
| `public/CNAME` | Custom-domain declaration used by GitHub Pages |
| `.github/workflows/deploy.yml` | Automatic GitHub Pages build and deployment |
| `scripts/verify-build.mjs` | Checks generated routes, links, and media |
| `DNS-CUTOVER.md` | DNS history, production verification, and rollback |
| `_STATE.md` | Current project status and decisions |

The migration preserved 39 public Wix routes: eight regular pages and 31 news
posts. It also archived 48 original media files locally so the live site does
not depend on Wix-hosted images.

## How to edit the website

### Regular pages

Most page content is either a file in `src/pages/` or Markdown in
`src/content/pages/`.

- Edit Markdown when the page is primarily text and links.
- Edit the corresponding Astro file when the page has custom layout or data.
- Keep existing public paths unless there is a deliberate redirect plan;
  external links and search results may still depend on them.

### News posts

Each news item is a Markdown file in `src/content/news/`. To add a post, copy a
recent post, give it a unique filename, update its frontmatter, and write the
body in Markdown. The filename becomes the post slug unless the content
configuration says otherwise.

Before publishing, confirm the title, date, summary, image path, external links,
and final URL.

### Images and other media

Store durable public assets under `public/media/` and use a root-relative URL,
such as `/media/example.jpg`. Avoid linking to temporary cloud storage or Wix
media URLs. Use descriptive filenames and useful alternative text.

### Navigation, footer, and appearance

- Main navigation: `src/components/Header.astro`
- Footer: `src/components/Footer.astro`
- Shared page shell and metadata: `src/layouts/BaseLayout.astro`
- Global appearance and mobile layout: `src/styles/global.css`

Check both desktop and narrow mobile widths after changing shared layout or
styling.

## Previewing changes locally

The site requires Node.js and npm. From this repository:

```bash
npm install
npm run dev
```

Astro prints the local preview address. The development server updates as files
are changed.

Before publishing, run the full validation sequence:

```bash
npm run check
npm run build
npm run verify -- dist /
```

What these checks do:

- `npm run check` checks Astro and TypeScript source.
- `npm run build` generates the static production site in `dist/`.
- `npm run verify -- dist /` checks expected routes, local links, and media in
  the generated production build.

Generated folders such as `dist/`, preview output, dependency folders, and
migration caches are local working artifacts; they are not the source of truth.

## Publishing through GitHub Pages

GitHub Pages hosts the generated static site at no charge. The deployment
workflow is `.github/workflows/deploy.yml`.

Normal publishing flow:

1. Edit the source files.
2. Run the checks above.
3. Review the exact Git changes.
4. Commit and push the approved change to GitHub.
5. Let the GitHub Actions deployment finish.
6. Verify the changed page at <https://www.hoodlabpurdue.com/>.

The custom domain must remain declared as `www.hoodlabpurdue.com`, and GitHub
Pages HTTPS enforcement should remain enabled.

## Domain and Wix status

Wix is currently only the domain registrar and DNS manager. It is not hosting
the production website.

Current subscription state, verified August 9, 2026:

- Wix Core website-plan auto-renewal is off.
- The prepaid plan remains visible until its term ends, but no renewal is
  scheduled.
- There is no paid Wix business-email subscription.
- The `hoodlabpurdue.com` domain registration remains active and renewing.
- The most recent domain payment was $42.70 for a two-year term ending July 4,
  2028.

Do not delete the Wix account or cancel the domain while keeping
`hoodlabpurdue.com`. Losing the registration could allow someone else to acquire
the domain. The inexpensive choices are:

1. Keep Wix only as registrar and continue using free GitHub Pages hosting.
2. Before the 2028 renewal, transfer the domain to a lower-cost registrar and
   preserve the GitHub Pages DNS records.
3. If the custom domain is no longer wanted, deliberately turn off its renewal
   and use the free GitHub Pages address instead.

A registrar transfer is optional and should be performed only after checking
the current price, transfer lock, registrant email, DNS records, and renewal
date. A transfer changes who manages the domain; it does not require rebuilding
the website.

## Production DNS

The public domain points to GitHub Pages using GitHub's standard records:

| Name | Type | Value |
| --- | --- | --- |
| `@` | `A` | `185.199.108.153` |
| `@` | `A` | `185.199.109.153` |
| `@` | `A` | `185.199.110.153` |
| `@` | `A` | `185.199.111.153` |
| `www` | `CNAME` | `jonhood11.github.io` |

Do not replace these with Wix hosting records unless intentionally rolling the
site back. Do not change unrelated DNS records without first understanding
their purpose. The complete pre-cutover Wix snapshot and rollback procedure are
in `DNS-CUTOVER.md`.

## Verification after a deployment

For an ordinary content update, verify at least:

- the GitHub Actions deployment succeeded;
- the changed production URL loads over HTTPS;
- images and links on the changed page work;
- the page is readable on desktop and mobile.

For layout, routing, domain, or dependency changes, also verify:

- both the apex and `www` addresses work;
- old public URLs still resolve;
- the production build and repository verification pass;
- there is no horizontal overflow at a narrow mobile width;
- the GitHub Pages custom-domain and HTTPS settings remain healthy.

## Recovery and rollback

Git history makes content and code changes reversible. If a deployment is bad,
revert the responsible commit and allow GitHub Pages to redeploy.

If the custom domain stops working:

1. Check the latest GitHub Pages deployment.
2. Check the repository's Pages custom-domain and HTTPS status.
3. Check the public `A` and `CNAME` records against the table above.
4. Use `DNS-CUTOVER.md` only if a full rollback to the old Wix-hosting records
   is intentionally required.

The Wix site may remain visible in the Wix dashboard during the prepaid term,
but it is not the production source. Make all normal website updates in this
repository.

## Durable operating rules

- Treat this GitHub repository as the authoritative website source.
- Keep public content and media local to the repository when licensing and file
  size permit.
- Never commit passwords, authentication state, billing identifiers, private
  correspondence, student information, or unpublished restricted material.
- Review links and dates before publishing.
- Validate locally, sync intentionally, and verify the production result.
- Keep the domain registration active unless Jonathan explicitly decides to
  abandon `hoodlabpurdue.com`.
