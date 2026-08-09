# Hood Lab Website Instructions

This repository is the authoritative source for the public Hood Lab website at
<https://www.hoodlabpurdue.com/>.

## Start every website task here

1. Read `README.md`, `WEBSITE.md`, and `_STATE.md`.
2. Inspect the current Git status and preserve unrelated changes.
3. Make website edits in this repository, not in the Wix editor.
4. Run `npm run check`, `npm run build`, and
   `npm run verify -- dist /` before publishing.
5. Review the exact diff, commit only the intended files, sync to GitHub, and
   verify the changed production URL after deployment.

## Current hosting and domain boundary

- GitHub Pages hosts the production website for free.
- Wix no longer hosts the production website and its Core-plan auto-renewal is
  off.
- Wix currently remains the registrar and DNS manager for
  `hoodlabpurdue.com`; keep the domain active unless Jonathan explicitly asks
  to abandon it.
- A future registrar transfer is optional. Follow the checklist in
  `WEBSITE.md` and preserve the GitHub Pages DNS records.
- Never delete the Wix account, cancel the domain, transfer the domain, or
  change production DNS without Jonathan's explicit action-time approval.

## Content rules

- Preserve existing public URLs unless a deliberate redirect is added.
- Store news in `src/content/news/`, durable public media in `public/media/`,
  and ordinary page content in `src/pages/` or `src/content/pages/`.
- Never commit credentials, authentication state, transfer authorization
  codes, billing identifiers, private correspondence, student information, or
  restricted unpublished material.
