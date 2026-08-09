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
- The production DNS change is documented but not performed without Jonathan's
  action-time approval.

## Checkpoints

- [x] Inventory routes, public content, and media.
- [x] Rebuild the shared layout and responsive styling.
- [x] Rebuild regular pages.
- [x] Import all news posts.
- [x] Validate routes, links, media, and accessibility.
- [ ] Publish and verify the GitHub Pages preview.
- [ ] Prepare rollback-safe DNS cutover instructions.

## Safety boundary

Do not change Wix DNS, cancel Wix, transfer the domain, or cut over production
until the replacement is verified and Jonathan approves the DNS mutation at
action time.
