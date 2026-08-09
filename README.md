# Hood Lab at Purdue

Source for the Hood Lab website at <https://www.hoodlabpurdue.com/>.

The site is built with Astro and deployed as static files through GitHub Pages.
News posts live alongside the source so changes are reviewable and reversible.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run check
npm run build
npm run verify -- dist /
```

The GitHub Actions workflow deploys a project-site preview at
`https://jonhood11.github.io/hoodlabpurdue/`. The custom domain remains on Wix
until the preview is approved and the DNS cutover is performed separately.

The production switch and exact rollback records are in `DNS-CUTOVER.md`.
