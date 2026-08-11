# Hood Lab Website State

## 2026-08-10 (evening) — Home intro + Li–Cs text live

- Jonathan wrote the home intro himself (dictated, Claude edited): goal
  line ("understand and control the interactions between light and
  quantum emitters"), two-platform line, then a paragraph each on atoms
  and molecules, with colloidal quantum dots folded onto the end of the
  molecules paragraph (his chosen option 3 of 3). Source material: his
  tenure letter-writer research statement at
  `Purdue/Admin/Tenure/letter_writer_packet/research_statement_v2.md`
  plus the abstracts/intros of all 21 papers.
- Li–Cs research section: Claude wrote a SHORT first pass at Jonathan's
  request ("make it short, I will edit it later") — tweezer platform +
  the photon-budget challenge, then Li 99.95% imaging, the unified
  cooling theory, the Cs quadrupole line and vortex-beam OAM, and
  current work toward light collection and a nanophotonic interface.
  He intends to rewrite it.
- Theses caption deleted at his request ("that is lame") — the page now
  shows just the "Our Graduation Count!" heading beside the champagne
  photo. Dead `.count-copy p` style removed with it. Live in eec8071.
- STILL PLACEHOLDER AND PUBLIC: Theory and Colloidal Quantum Dots
  section text only (Claude drafts, gold DRAFT COPY chips visible).
  He knows; go-live was his call. These are the last two writing slots.

## 2026-08-10 — REDESIGN IS LIVE

- Jonathan said "commit and push everything." Done: commit 5f43caf on
  main (handbook branch fast-forwarded in and deleted local+remote),
  Pages deploy succeeded, production verified (routes, new media,
  signature, favicon all 200; home shows the new timeline).
- KNOWINGLY LIVE WITH PLACEHOLDERS: home welcome ("Text to be added."),
  Li–Cs research section placeholder, Theory/QD DRAFT chips, Claude's
  Theses caption. Jonathan's text pass tomorrow replaces these; wire his
  words in and push again.
- Committed per his instruction, with one standing-policy exception:
  `paper-assets/**/page1-journal.png` (18 bulk publisher-page renders)
  are gitignored — regenerable via the proxy route; the 9 page images
  the site uses shipped in public/media with his explicit approval.
- After the text pass: consider re-crediting the quadrupole Publications
  entry with its full citation (PRA 112, 043109 (2025)).

## 2026-08-10 — Session close; Jonathan's text pass is next (tomorrow)

- Decision: "Lab life" photo gallery goes at the BOTTOM of the Team page
  (curated 6–10 best, no dates); event-anchored photos (farewells,
  parties, defenses) go in News as dated posts. No separate tab.
- Lab-life picks so far, from the contact sheet
  (http://localhost:8936/lablife.html, manifest in session scratch):
  #1 optical-table work shot (dfd400_1d9e…20~mv2.jpg),
  #13 bowling group photo (current home hero),
  #27 renovated-lab move-in. Plus a found extra:
  `Purdue/Teaching/PHYS349/public-site/figures/tweezer_experiment.jpg`
  (purple apparatus + tweezer-array inset). Jonathan will hunt his Box
  folder for more group/party photos and supply them later — do NOT
  search his cloud drives (he declined that); he delivers files.
  Reminder: the 15 deleted archive lab-pictures remain recoverable in
  the OneDrive recycle bin until ~2026-09-09 (FirstMOT, singleatom.gif,
  2020–21 lab shots) if he wants any of them for the gallery.
- TOMORROW (Jonathan writes, Claude wires): home welcome text; Research
  Li–Cs section text; bless/rewrite Theory + Colloidal Quantum Dots
  drafts; Theses champagne caption. All slots wear gold placeholders or
  DRAFT chips. Then: build the Team lab-life gallery when photos arrive,
  decide journal-page-images-on-site question, full pipeline, commit for
  his diff review, push on his explicit OK, verify production.
- Servers left running: hoodlab-dev (4322), paper-review sheet server
  (8936: /, /compare.html, /lablife.html).

## 2026-08-10 — Paper-post covers rewired (fig1 + first page)

- Jonathan's decision after a side-by-side comparison: news-feed covers
  use each paper's FIRST FIGURE; the paper's FIRST PAGE (journal version
  where available, arXiv otherwise) is embedded in the post body. All
  9 paper posts rewired, each visually verified: ACS Nano, Maxwell,
  Vapor Phase, NatRevMat review, Quadrupole (old caption-baked cover
  replaced by clean fig), Cooling theory, "Accepted to Nature Physics"
  (previously imageless — cover added), superradiance-arXiv, Li-imaging.
  Assets copied to `public/media/paper-*.png` (17 files) — NOTE: this
  puts publisher-formatted page images on the deployed site; Jonathan
  approved the pattern ("do that") but it stays on the go-live checklist.
- Home welcome paragraph replaced with a dashed-gold "Text to be added."
  placeholder at Jonathan's request (he writes the real text later).
- Nicety spotted: PRA journal page shows the full citation for the
  quadrupole paper (Phys. Rev. A 112, 043109 (2025)) — the Publications
  entry still has the bare "Phys. Rev. A" label; enrich later.
- Minor: both superradiance posts (arXiv + accepted) share the same fig1
  cover; swap the arXiv one to fig02 if Jonathan minds the repeat.
- Research page stripped per Jonathan: Li–Cs section is now heading +
  "Text to be added." placeholder + papers only (he writes it); Theory
  and Colloidal Quantum Dots keep draft text but lost their figures
  (both were borrowed stand-ins); DBT untouched. Sections without
  figures render single-column.
- Footer fixed: the CSS-inverted white Wix logo (which turned the gold
  "University" line blue-gray) replaced by the OFFICIAL Purdue
  Black-Gold signature from `assets/purdue-logos/` →
  `public/media/purdue-sig-black-gold.png`, no filters. Site-wide via
  the shared Footer component.

## 2026-08-10 — Archive triage complete

- Jonathan reviewed all 99 OneDrive-archive files on a numbered contact
  sheet and triaged by number. Result: `archive-website/` is GONE;
  24 keepers now live in `assets/` (logos / jon / purdue-logos / figures
  — see its README). Everything else deleted per his instruction,
  including the lab-picture set and his same-day named portraits
  (Karl/Maria/PeanaDavid). Safety nets: scratchpad tarball
  `archive-website-final-state.tgz` (~96 MB, this session only),
  `/tmp/claude-dl/Website.zip`, and the OneDrive recycle bin (~30 days).
  `assets/` is deliberately outside `public/` so nothing deploys without
  a deliberate copy.

## 2026-08-10 — Assembled, awaiting Jonathan's go-live

- All chosen designs are the real pages; mockups moved out of the repo
  (session scratchpad `hoodlab-design-mockups/`) and the two retired
  Wix-export markdown files deleted. Build = exactly the original 39
  routes; check/build/verify all pass.
- Team polish per Jonathan: grid kept; emails now full clickable mailto
  (obfuscation dropped as security theater); "Previous Members" split
  into "Previous Graduate Students & Postdocs" (Peana, Phatak, Blodgett)
  and "Former Undergraduates" (Montes Bejarano, Lampkins, Terry). New
  `public/favicon.svg` (atom on the #232020 chip) wired in BaseLayout.
- Jonathan then removed the hiring line ("implied for a research group";
  may return later) and settled the title convention: "Name, PhD" suffix
  for all previous grads/postdocs, matching his own entry. Start years
  considered and rejected. Home "three areas" wording + /open-positions
  redirect + Scholar sync deferred to later.
- NEXT with Jonathan: the Research content-and-pictures pass (see go-live
  blockers below — Theory/QD copy, section figures, review placement).
- Publications era split (Jonathan chose option B over deleting): Purdue
  years (>= 2022, `PURDUE_START` in publications.astro) grouped by year,
  then one flat ruled group "Before Purdue — PI's postdoc and PhD work"
  with inline years. All 21 papers kept in the data, so the Research
  Theory bin keeps the 2017 Green's-function paper. Comparison mockups
  (design/pa,pb) deleted after the pick. Pipeline passes (39 routes).
- Paper-asset harvest (Jonathan's request): for every paper, gather each
  MAIN-TEXT figure without captions + a first-page image, into
  `paper-assets/<slug>/` (untracked working library, not in the site
  build; README.md index inside). Method: arXiv e-print sources give the
  original caption-free figure files; page1.png rendered from the arXiv
  PDF. Script: session scratchpad `harvest_papers.py`; sources cached in
  scratchpad `paper-harvest/`. Two content bugs found and fixed in
  `src/data/publications.ts`: the Wix site had crossed arXiv links
  (Green's-function 2017 is 1606.04977, not 1708.03296; PNAS band-edge
  2016 is 1603.02771, not 1606.04977). Also resolved missing arXiv ids:
  PRX 2021 = 2012.09043, Li-imaging 2023 = 2305.02405, many-body review
  = 2511.20797. Jonathan signed into EZproxy; journal first pages were
  fetched via the Method-5 headless route: 18/19 published papers carry
  `page1-journal.png` beside the arXiv `page1.png`. Deferred: Optics
  Express 2020 (Radware CAPTCHA — not bypassed, per policy). Publisher
  PDFs live only in session scratch (`journal-pdfs/`), never committed;
  whether the page IMAGES may be committed/published is an explicit
  Jonathan decision before go-live. Findings: APS blocks direct headless
  fetches but serves through EZproxy (route everything via the proxy);
  AIP PDF links render inline on click — navigate the resolved
  article-pdf URL directly; ACS Nano DOI = 10.1021/acsnano.5c19465 (the
  arXiv title differs — the paper was retitled at publication). Harvest
  totals: 118 figures + 21 arXiv pages + 18 journal pages, 21 papers.
- Dev-server note: Astro dev serves stale compiled components after
  multi-file rewrites — restart the dev server rather than debugging
  phantom style bugs.
- Still blocking go-live (content, not code): Theory + QD research
  descriptions are Claude DRAFTS (gold chips); Theses caption line is
  Claude's placeholder; many-body review placement (DBT vs QD)
  unconfirmed; "antiderivative and tensor coding project" undecoded.
- On "make it live": commit for Jonathan's diff review, push on his
  explicit OK, verify production URLs.

## 2026-08-10 — Home-page redesign exploration (in progress)

### Direction from Jonathan

- Move away from the black background site-wide; white/light backgrounds,
  with black kept as an accent (the logo's black chip is welcome).
- Kill the square news-card grid everywhere, including the `/blog` page later.
- The home page should carry the news itself: roughly the 10 most recent
  items, so visitors never have to click "News" to see what is happening.
- The `HOoD LAB` logo (white on baked #232020, no alpha) may be used but is
  optional. On light pages it works as a black chip, seamless on a #232020
  band, or CSS-inverted (`filter: invert(1) brightness(1.18)` +
  `mix-blend-mode: multiply`) for a black-on-white wordmark.

### Mockups (uncommitted preview routes, not linked, noindex)

- `src/pages/design/w1.astro` … `w10.astro` — ten white-background home-page
  concepts, each with a different news-feed treatment (lead+list, description
  rows, right rail, timeline, year digest, media rows, split sticky, gold
  briefing, newspaper, numbered ledger). `_data.ts` holds shared content;
  `index.astro` is the hub. `a/b/c.astro` are round 1 (a = light editorial
  Jonathan liked; b/c dark, direction dropped).
- Nothing committed or deployed; delete or adopt after Jonathan picks.

### Round 2 verdicts and round 3 (2026-08-10, later)

- Feed winner: W4's timeline (rail, dots, year badges) — but entries must be
  roomier with ONE BIG landscape figure per item (his papers each have a nice
  landscape figure), text left / figure right, like W6's rows. W2's
  date+title+description format fine but needs pictures; W1 lacked
  separation; W5/W7/W9/W10 rejected (W9's serif "formal text" — sans only).
- Round 3 consensus mockups: `x1.astro` (cards on white), `x2.astro` (flat
  panels on warm paper, chip logo, split hero), `x3.astro` (black logo band,
  open hairline rows). All: timeline spine + 10 items + 16:9 figure right +
  2-line clamped descriptions.

### X3 chosen and applied to the real site (2026-08-10, third pass)

- Jonathan picked X3. Applied site-wide, uncommitted, verified page-by-page
  in dev plus `npm run check` (clean) and `npm run build` (56 pages):
  - `global.css` flipped to the light theme (white page, #232020 band,
    gold #8a6a17 accent, hairline #e9e6df; `.content-panel` neutralized;
    `.page-heading` = left title with 3px black rule).
  - `Header.astro` = X3 black band (seamless logo, tagline, centered nav);
    `Footer.astro` = light footer with inverted Purdue logo.
  - New `components/NewsTimeline.astro` renders the X3 feed; used by
    `index.astro` (10 latest + "All news" link) and `blog/index.astro`
    (all posts) so Home and News look identical. `NewsCard.astro` deleted.
  - `research.astro` (rounded 16:9 area cards, ruled headings),
    `team.astro` (boxless circular portraits, gold emails),
    `publications.astro` / `theses.astro` (plain typographic columns),
    `post/[slug].astro` (ruled article header) restyled; content untouched.
- Home hero needed `height: auto` — width/height attrs otherwise override
  the CSS `aspect-ratio` crop (mockups had no attrs, real pages do).
- Jonathan will now review page-by-page and give content/style feedback.
- Publications round (2026-08-10, fourth pass): Jonathan approved the X3
  rollout, then asked for 5 publications options — organized, sorted by
  year, journal + arXiv links prominent; images secondary (small OK).
  Built `design/_pubs.ts` (structured, faithful transcription of
  `content/pages/publications.md`, real years for the pre-2021 group, the
  one bare arXiv id linkified) and mockups `p1`–`p5`: year-rail / timeline /
  dense ledger with Hood bolded / cards with small thumbs / venue badges.
  Jonathan chose P5 (venue badges). It is now the real page:
  `src/data/publications.ts` is the single source of truth (design mockups
  re-export it), `src/pages/publications.astro` renders the badge layout,
  and `content/pages/publications.md` is retired from the page but not yet
  deleted — remove it (and the /design/ previews) in the pre-publish
  cleanup. Check and build pass (61 pages).
- Theses round (2026-08-10, fifth pass): three mockups from structured
  `design/_theses.ts` (faithful; Peana's all-caps title stored title-case;
  portraits reused from Team media): `t1` timeline rail, `t2` portrait
  rows, `t3` publications-match badges. The champagne "Our Graduation
  Count!" photo kept in all three; T1/T2 carry a PLACEHOLDER caption line
  ("One bottle for every defense…") that is Claude's wording, not
  Jonathan's — replace or approve before adopting.
  Jonathan chose T2 (portrait rows). It is now the real page:
  `src/data/theses.ts` is the source of truth, `src/pages/theses.astro`
  renders portrait rows, `content/pages/theses.md` retired from the page
  (delete in pre-publish cleanup). The placeholder caption line is still
  on the live page pending Jonathan's wording. Check and build pass (64
  pages). Remaining before publish: his page-by-page content edits, strip
  `/design/` + retired markdown, full verify pipeline, commit, push on
  his go-ahead.
- BEFORE any publish: remove or exclude `src/pages/design/` (previews build
  into dist; they are noindex but should not deploy), then run the full
  check/build/verify pipeline per `AGENTS.md`.

### Research-page restructure round (2026-08-10, sixth pass)

- Jonathan's plan: four research sections — Theory, the Lithium–Cesium
  Apparatus, Dibenzoterrylene (DBT), Colloidal Quantum Dots — each with a
  description and links to its papers.
- `src/data/publications.ts` now has an `area` tag (theory/lics/dbt/qd);
  Claude's mapping: theory = Maxwell operator + Phatak cooling theory +
  2017 Green's-function paper; lics = Cs quadrupole cooling + Li imaging;
  dbt = Nature Physics + ACS Nano + vapor phase + many-body review
  (review placement provisional); qd = none yet (first paper coming).
- Mockups `r1`–`r5` (+`r3sub` example sub-page) from `design/_research.ts`:
  long-scroll / feed rows / sub-pages / sticky pills / papers rail. Li–Cs
  and DBT descriptions reuse Jonathan's existing research text; THEORY and
  QD descriptions are DRAFT copy (flagged with gold "draft copy" chips).
- UNRESOLVED: Jonathan mentioned "the antiderivative and tensor coding
  project" (dictation garble) — unknown item, ask what it is and where it
  belongs.
- Verdict: R2's narrative rows + R5's parchment papers bin at the BOTTOM
  of each section, built for growth (paragraphs/images are arrays). Now
  the real page: `src/data/research.ts` (Li–Cs section carries 2 figures
  to prove multi-figure support) + rewritten `src/pages/research.astro`.
  Theory and QD copy still DRAFT (visible gold chips) awaiting his
  rewrite; many-body review provisionally in DBT. `design/_research.ts`
  is a frozen mockup copy, deleted with /design/ at cleanup. Check and
  build pass (70 pages).

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
