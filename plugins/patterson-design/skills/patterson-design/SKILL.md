---
name: patterson-design
description: >-
  Design and generate on-brand interfaces, assets, prototypes, pages, dashboards,
  and slide decks for Patterson Companies, the dental and veterinary distributor.
  Use when asked to "design a Patterson page", "build a Patterson dashboard", "make
  an on-brand Patterson slide", "style this for Patterson", or when the work involves
  Patterson branding, the navy and sky palette, or Proxima Nova type. Provides the
  design tokens, brand voice, component library, and logos to produce work that
  matches the Patterson brand.
license: LicenseRef-Patterson-Internal
---

# Patterson Companies — Design System

Patterson Companies distributes products, technology, and services to the oral
health (dental) and animal health (veterinary) industries. Its brand promise is
*"Trusted Expertise. Unrivaled Support."* Work should read as calm, clinical, and
corporate: confident but warm, never flashy.

Read `references/brand-guide.md` before generating anything — it is the full guide
to color, type, voice, motion, iconography, and imagery.

## Producing work

**Visual artifacts** (slides, mocks, one-off pages, prototypes): build a standalone
HTML file that links `assets/styles.css` and uses the tokens directly. Copy any
brand asset it needs (a logo from `assets/brand/`) beside the HTML so the file
renders on its own. This covers most requests.

**Production code**: link `assets/styles.css`, consume the components from the
runtime (below), and reference tokens rather than literal values so the result stays
on brand and maintainable.

When a request has no specific brief, ask what to build, ask a few focused questions,
then produce the artifact or the code.

## Tokens

Reference CSS custom properties; do not hardcode hex, pixel, or font values. Tokens
live in `assets/tokens/`; `assets/styles.css` imports them. Two layers exist: brand
primitives (`--pat-navy: #003767`, `--pat-sky: #00A8E1`, the gray ramp and tints)
and semantic aliases that point at them (`--surface-card`, `--text-body`, `--accent`,
`--focus-ring`). Prefer the semantic aliases in product UI. The component runtime
resolves these variable names at render time, so keep the names intact.

## Brand rules

- Navy `#003767` and sky `#00A8E1` carry the brand; cool grays carry text and
  structure. Green, teal, and purple appear only in charts and infographics.
- Buttons are pills, solid navy shifting to sky on hover. Cards use a 10px radius,
  inputs 6px.
- Shadows are soft and navy-tinted (`rgba(0,55,103,…)`), never neutral black.
- Focus shows a 3px sky ring (`--ring-focus`).
- Type is Proxima Nova, with Figtree as the bundled fallback. Headlines are bold
  navy, body is cool gray at 1.6 line-height, and large sky numbers (`Stat`) are a
  signature.
- Motion is restrained: 120–320ms, `cubic-bezier(0.2,0,0.2,1)`, fades and short
  slides, no bounces or loops.
- Icons are Lucide line icons: 2px stroke, rounded caps, `stroke="currentColor"`.
- No emoji and no unicode glyphs as icons.
- Voice uses "we" for Patterson and "you" for the customer, short declarative
  sentences, and numbers as proof points. See `references/brand-guide.md`.

## Runtime

Production code links `assets/styles.css` and reads components from the global
`window.PattersonCompaniesDesignSystem_1f7cbe`:

- core: Button, IconButton, Badge, Stat, Card
- forms: Input, Select, Checkbox, Radio, Switch
- feedback: Alert, Tabs

Per-component usage — variants, props, and examples — is in
`references/components/<Name>.prompt.md`. `assets/_ds_bundle.js` and
`assets/_ds_manifest.json` are prebuilt; treat them as read-only.

## Files

- `references/brand-guide.md` — the full brand guide. Grep it for a topic:
  `CONTENT FUNDAMENTALS` (voice), `VISUAL FOUNDATIONS`, `ICONOGRAPHY`.
- `references/components/` — per-component usage docs.
- `references/adherence-rules.json` — lint rules that flag off-brand values; apply
  them when reviewing production code.
- `assets/styles.css`, `assets/tokens/` — the stylesheet entry and design tokens.
- `assets/_ds_bundle.js`, `assets/_ds_manifest.json` — the component runtime.
- `assets/brand/` — logo lockups (white, navy, sky, square).
- `assets/fonts/` — Proxima Nova faces.

## Full source

This skill bundles what most work needs. The complete source — corporate and
storefront UI kits, page and deck templates, specimen galleries, brand photography,
and component source — lives in the `Patterson-Agents/design-system` repository.
Clone it when a task calls for those:

```
sh scripts/fetch-full-source.sh
```
