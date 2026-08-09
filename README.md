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

The GitHub Actions workflow deploys the production site to
`https://www.hoodlabpurdue.com/`. GitHub Pages provides the hosting while Wix
remains the domain registrar.

The production switch and exact rollback records are in `DNS-CUTOVER.md`.
