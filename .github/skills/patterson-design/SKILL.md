---
name: patterson-design
description: Design and generate on-brand interfaces, assets, prototypes, pages, dashboards, and slide decks for Patterson Companies (dental and veterinary distribution). Use for any request to make something look on-brand for Patterson, or when the work involves Patterson branding, the navy and sky palette, or Proxima Nova.
---

# Patterson Companies — Design System

Design for Patterson Companies, the dental and veterinary distributor. Brand promise:
*"Trusted Expertise. Unrivaled Support."*

The design system lives in this repository at
`plugins/patterson-design/skills/patterson-design/`. Work from those files:

1. `plugins/patterson-design/skills/patterson-design/SKILL.md` — the working
   instructions (output modes, tokens, brand rules, runtime, file map).
2. `plugins/patterson-design/skills/patterson-design/references/brand-guide.md` —
   the full brand guide.

Build with the tokens in `.../assets/` and the component docs in `.../references/`.

## Brand rules

Navy `#003767` and sky `#00A8E1`; pill buttons (navy to sky on hover); 10px cards;
soft navy-tinted shadows; 3px sky focus ring; Proxima Nova type (Figtree fallback);
Lucide line icons at 2px stroke. Reference CSS custom properties
(`var(--pat-navy)`, `var(--fs-body)`); never hardcode values. No emoji.

For visual artifacts, build standalone HTML that links `assets/styles.css` and copies
any referenced brand asset beside it. For production, link `assets/styles.css` and
read components from `window.PattersonCompaniesDesignSystem_1f7cbe`.
