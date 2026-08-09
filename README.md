# Hood Lab at Purdue

This repository contains the complete source and archived public content for
the Hood Lab website:

- Live website: <https://www.hoodlabpurdue.com/>
- GitHub repository: <https://github.com/jonhood11/hoodlabpurdue>
- Local checkout: `/Users/jonathanhood/GitHub/Purdue/hoodlabpurdue`

The site was migrated from Wix to Astro and is hosted free through GitHub
Pages. Wix currently serves only as the registrar for `hoodlabpurdue.com`; its
paid website-plan auto-renewal is off.

## Start here

Read [`WEBSITE.md`](WEBSITE.md) for the plain-language website handbook. It
explains:

- where every kind of content lives;
- how to edit pages, news posts, images, navigation, and styling;
- how GitHub Pages publishes the site;
- how the custom domain and Wix registration are configured;
- current costs and renewal status;
- validation, recovery, and rollback procedures.

## Quick local preview

```bash
npm install
npm run dev
```

## Validate a production build

```bash
npm run check
npm run build
npm run verify -- dist /
```

Pushing an approved change to the default branch starts the GitHub Actions
deployment in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Supporting records

- [`WEBSITE.md`](WEBSITE.md) — complete website handbook and editing guide.
- [`_STATE.md`](_STATE.md) — current status, decisions, and next action.
- [`DNS-CUTOVER.md`](DNS-CUTOVER.md) — DNS cutover evidence and exact rollback.
- [`GOAL.md`](GOAL.md) — original Wix-to-GitHub migration objective and proof.
