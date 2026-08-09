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

### Waiting

- Jonathan's preview review and explicit action-time approval for the domain cutover.

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
- `.github/workflows/deploy.yml` — GitHub Pages preview deployment.
- `DNS-CUTOVER.md` — exact production switch, validation, and rollback steps.

### Next useful action

- Review the preview. If approved, execute `DNS-CUTOVER.md` under action-time
  approval and keep Wix available through the observation window.
