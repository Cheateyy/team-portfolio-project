# team-portfolio-project

## team members and their GitHub usernames:

-Abdellah Elkhalil Kessoum: Cheateyy
-Abdelali Mokhati: abdelaliMokhati
-Abderraouf Adel Garamida: adel66
-Sadjeda Benhamed: sadjeda
-Minetellah Chouit: Minet Ellah Chouit
-Badis Belkessam: badis-byte

## link of website
https://cheateyy.github.io/team-portfolio-project/

## deliverables

## Team Retrospective Analysis

### Most significant technical challenge
Our biggest technical blocker surfaced during deployment to GitHub Pages. Because the site is hosted under a repository subpath (`/team-portfolio-project/`), Vite’s default asset URLs and React Router’s default base caused 404s for hashed CSS/JS and a blank page on refresh. The root causes were (1) a missing `base` option in `vite.config.js`, (2) a `BrowserRouter` without a `basename`, and (3) some image references using literal paths (for example, `src/assets/*.jpg`) that aren’t valid after bundling. We resolved this by setting `base: '/team-portfolio-project/'` in Vite, adding `basename="/team-portfolio-project"` to the router, importing local images so Vite fingerprints and rewrites them, and replacing network-based placeholder avatars with inline SVG fallbacks. This combination stabilized asset resolution and routing across local dev, preview, and production.

### Representative merge conflict and resolution
A notable conflict occurred when two branches modified the hero section concurrently: one refactored layout and styling (new background/typography) while another introduced a decorative ellipse and spacing changes. Git reported conflicts in `src/components/Hero.jsx` and `Hero.css`. Resolution steps:
1. Pulled the latest `main` into the feature branch and inspected conflicts in VS Code.
2. Compared competing blocks, preserved the structural changes (background layer + ellipse element), and reconciled CSS by merging selectors instead of duplicating them (e.g., keeping `.hero-ellipse` and aligning `.hero` with `align-items: flex-start`).
3. Ran the dev server locally to verify layout and z-index ordering, then linted and re-tested the routing and responsive behavior.
4. Rebased to produce a linear history and pushed the resolved branch for review.

### PR and peer review effectiveness
The pull request and review workflow materially improved quality and prevented regressions. Reviews surfaced cross-cutting concerns—deployment base paths, router basename, and asset handling—that might be overlooked in isolated changes. Inline comments led to concrete fixes: converting literal asset paths to module imports, adopting a gradient text treatment through CSS clipping, and standardizing member detail pages. Checklists in PR descriptions (build, lint, run) reduced broken deployments, and required approvals promoted collective ownership. The outcome was a cleaner, more reliable codebase with consistent UI patterns, fewer runtime 404s, and clearer conventions for assets and routing. Going forward, we’ll keep small, focused PRs, use preview links/screenshots for UI diffs, and maintain a short “deployment readiness” checklist in each PR to sustain this quality bar.