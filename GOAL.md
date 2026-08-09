# Goal: Hood Lab Wix to GitHub Pages

## Objective

Rebuild the complete public Hood Lab website as a static Astro site, publish it
through GitHub Pages, and preserve `hoodlabpurdue.com`, its current public URLs,
content, images, and visual identity.

## Completion proof

- Every URL in the live Wix sitemaps has a corresponding generated route or an
  intentional redirect.
- All public page and post content is present locally with durable media files.
- The static build and Astro checks pass.
- Automated internal-link and media checks pass.
- Desktop and mobile visual comparisons have been reviewed.
- A GitHub Pages preview is live and independently verified.
- Jonathan approved the production DNS change at action time; both the apex and
  `www` domain now point to the verified GitHub Pages deployment over HTTPS.
- Wix Core auto-renewal is off, while the inexpensive Wix domain registration
  remains active.

## Checkpoints

- [x] Inventory routes, public content, and media.
- [x] Rebuild the shared layout and responsive styling.
- [x] Rebuild regular pages.
- [x] Import all news posts.
- [x] Validate routes, links, media, and accessibility.
- [x] Publish and verify the GitHub Pages preview.
- [x] Prepare rollback-safe DNS cutover instructions.
- [x] Cut over and verify the production custom domain after approval.
- [x] Turn off Wix website-plan auto-renewal while retaining the domain.

## Safety boundary

The production cutover was completed only after the replacement was verified
and Jonathan approved the DNS mutation at action time. Keep the domain
registration active unless Jonathan explicitly decides to transfer or abandon
`hoodlabpurdue.com`.
