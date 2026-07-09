# Claude Code Handoff — Patterson Companies Design System

This bundle is the **Patterson Companies design system**: brand foundation (color, type,
fonts, logos, imagery), a set of **React component primitives**, and the full brand guide.
Use it to implement Patterson-branded UI in a real codebase.

## About these files

The files here are **design references and source primitives**, not a drop-in package.
- `tokens/*.css` and `styles.css` are **real, portable CSS** — you can ship them as-is, or
  port the values into the target codebase's theme system (Tailwind config, MUI theme,
  CSS-in-JS tokens, SwiftUI color set, etc.).
- `components/**/*.jsx` are **plain React + inline-style** implementations that reference the
  CSS custom properties. They are intentionally framework-light so they read as a spec. In a
  real codebase, **recreate each component using that codebase's established patterns and
  component library** rather than copying these verbatim — but the props contract
  (`*.d.ts`), states, and exact values are authoritative.
- `components/**/*.card.html` are **usage demos**. They reference a compiler-generated
  `_ds_bundle.js` that is **not** included here — ignore the script tag; read them only for
  "how is this component composed and what props/states exist."

**Fidelity: high.** Colors, typography, spacing, radii, shadows, and interaction states are
final and exact. Recreate pixel-faithfully.

This is a **design system**, not a single feature — implement it as shared foundation
(theme + component library) that product screens then build on.

---

## 1. Install the foundation first

### Fonts
The brand font is **Proxima Nova** (Adobe Fonts / Typekit). Licensed `.woff2` files are
bundled in `assets/fonts/` and declared in `tokens/fonts.css`:

| File | weight | style |
|---|---|---|
| `proxima-nova-400.woff2` | 400 | normal |
| `proxima-nova-700.woff2` | 700 | normal |
| `proxima-nova-italic.woff2` | 400 | italic |

- If your org has the Adobe Fonts license, prefer the **Typekit embed**
  `https://use.typekit.net/rul6mjk.css` (the kit Patterson's own sites use) over self-hosting.
- **Fallbacks:** Figtree (free Google Fonts, closest match) → system sans. **Arial** is the
  PowerPoint/email-safe fallback Patterson uses in documents.
- Do **not** alias a different family to the `proxima-nova` name.

### Tokens
`styles.css` is the single entry point — it `@import`s the six token files. Either ship the
whole `tokens/` folder, or copy the `:root` custom properties into your theme. Everything
below is defined there.

---

## 2. Design tokens (exact values)

### Color — brand
| Token | Hex | Use |
|---|---|---|
| `--pat-navy` | `#003767` | Primary brand. Headlines, primary buttons, hero/footer bands, logo. (PMS 540) |
| `--pat-sky` | `#00A8E1` | Accent. Hover state, links emphasis, big stats, focus ring. (PMS 2995) |
| `--pat-gray` | `#58585B` | Body copy. (Cool Gray 11) |
| `--pat-white` | `#FFFFFF` | Page background |

### Color — secondary (depth, not dominant)
`--pat-blue #147EC2` · `--pat-blue-light #6DCFF6` · `--pat-gray-light #ECECEC`

### Color — tertiary (charts / infographics ONLY, never page chrome)
`--pat-green #7BC24D` · `--pat-teal #00817D` · `--pat-purple #522E91`

### Color — tints (data viz, subtle fills)
Navy: `#335f85` `#6687a4` `#99afc2` `#ccd7e1` `#e5ebf0` (80/60/40/20/10)
Sky: `#33b9e7` `#66caed` `#99dcf3` `#ccedf9` `#e5f6fc` (80/60/40/20/10)

### Color — neutral ramp (cool grays)
`--pat-ink #1d1d20` (headings) · `700 #46464a` · `600 #58585B` · `500 #7c7c80` ·
`400 #a3a3a7` · `300 #c9c9cc` · `200 #e2e2e4` · `100 #ECECEC` · `50 #f6f7f8`

### Color — semantic status
| Intent | fg | bg |
|---|---|---|
| success | `#00817D` | `#e5f2f1` |
| info | `#147EC2` | `#e7f1f9` |
| warning | `#d98a00` | `#fbf1df` |
| danger | `#c0392b` | `#f8eae8` |

### Semantic aliases (reference these in product UI, not raw hex)
`--text-strong` navy · `--text-heading` ink · `--text-body` gray-600 · `--text-muted`
gray-500 · `--text-link` blue → `--text-link-hover` navy · `--surface-page` white ·
`--surface-subtle` gray-50 · `--surface-muted` gray-100 · `--surface-brand` navy ·
`--border-subtle` gray-200 · `--border-default` gray-300 · `--border-strong` gray-400 ·
`--accent` sky · `--focus-ring` sky.

### Typography
- **Families:** `--font-sans: 'proxima-nova', 'Figtree', system-ui, …, Arial, sans-serif`;
  `--font-mono: 'IBM Plex Mono', …`. Display uses the same sans.
- **Weights:** 300 / 400 / 500 / 600 / 700 / 800 / 900 (`--fw-light`…`--fw-black`). Headlines
  700–900; body 400; labels/buttons 600.
- **Scale (fluid `clamp`, px shown at desktop):** display ~72 (`--fs-display`) · h1 ~52 ·
  h2 ~40 · h3 ~28 · h4 20 · h5 17 · lead 20 · body 16 · sm 14 · xs 12 · stat ~64 (`--fs-stat`).
- **Line height:** tight 1.05 · heading 1.15 · body 1.6 · relaxed 1.75.
- **Letter spacing:** display/headings tight (`-0.02em`/`-0.01em`); eyebrows/overlines
  UPPERCASE `+0.08em` (`--ls-caps`).

### Spacing — 4px base
`--space-1` 4 · `2` 8 · `3` 12 · `4` 16 · `5` 24 · `6` 32 · `7` 40 · `8` 48 · `9` 64 ·
`10` 80 · `11` 96 · `12` 128 (px). Section rhythm 64–128. Container max **1240px**, readable
text measure **720px**.

### Radii
xs 2 · sm 4 · **md 6 (inputs)** · **lg 10 (cards)** · xl 16 · 2xl 24 · **pill 999 (buttons,
badges)**. Never sharp 0px on interactive elements.

### Shadows — soft, navy-tinted (`rgba(0,55,103,…)`), NOT neutral black
- `--shadow-xs` `0 1px 2px /.06`
- `--shadow-sm` `0 1px 3px /.08, 0 1px 2px /.06` ← default card
- `--shadow-md` `0 4px 12px /.10, 0 2px 4px /.06`
- `--shadow-lg` `0 12px 28px /.12, 0 4px 10px /.07` ← card hover
- `--shadow-xl` `0 24px 48px /.16`
- Focus ring `--ring-focus`: `0 0 0 3px rgba(0,168,225,0.45)`.

### Motion — restrained
Durations 120 / 200 / 320ms (`--dur-fast/base/slow`). Easing `--ease-standard`
`cubic-bezier(0.2,0,0.2,1)`; entrances `--ease-out` `cubic-bezier(0.16,1,0.3,1)`. Fades +
short slides only. **No bounces, no infinite loops, no decorative animation.**

### Controls
Heights sm 34 / **md 44 (default, min hit target)** / lg 54. Borders 1px structural, 2px
emphasis/button-outline.

---

## 3. Components

Each lives in `components/<group>/<Name>.jsx` with a `<Name>.d.ts` (props contract) and
`<Name>.prompt.md` (one-line "what & when" + usage). Read the `.d.ts` for the authoritative
prop list. Recreate with your codebase's conventions; keep the values/states below.

### core/
- **Button** — pill. Variants: `primary` (solid navy → **sky on hover**, the signature
  interaction), `sky` (sky → navy on hover), `outline` (navy outline → fills navy), `ghost`
  (navy-10 wash on hover), `onDark` (white pill for navy bgs). Sizes sm/md/lg. Props:
  `fullWidth`, `disabled`, `iconLeft`, `iconRight`. Press = 1px translate-down.
- **IconButton** — circular icon-only; md = 44px. Variants solid/sky/ghost/subtle. Requires
  `label` (a11y).
- **Badge** — uppercase pill. Soft-tint by default, `solid` for filled. Tones navy/sky/green/
  teal/purple/gray/warning/danger.
- **Stat** — oversized figure + label (signature device, e.g. `98%` / "of customers reached
  in 1–2 days"). Tones sky/navy/teal/green; `align` left/center.
- **Card** — white surface, 1px `--border-subtle`, `--shadow-sm`, 10px radius. Optional 4px
  top accent stripe (`accent` navy/sky/green/teal/purple). `interactive` lifts 3px →
  `--shadow-lg` on hover. `elevation` none→lg.

### forms/  (all use the 3px sky focus ring; 44px tall; md radius)
- **Input** — labelled text field; `helper`, `error` (red border+ring), `iconLeft`,
  `required`, `disabled`.
- **Select** — restyled native select with brand chevron. `options` = strings or
  `{value,label}`.
- **Checkbox** — square, **sky fill + white tick** when on. Controlled/uncontrolled.
- **Radio** — sky dot. `Radio.Group` manages a set + selection.
- **Switch** — sky track + white knob when on.

### feedback/
- **Alert** — inline banner, left accent bar in tone color. Tones info/success/warning/
  danger/brand. Optional `title`, `icon`, `onClose`.
- **Tabs** — horizontal, **sky underline** on active tab. Controlled/uncontrolled; `tabs` =
  strings or `{value,label}`.

---

## 4. Iconography
**Lucide** (https://lucide.dev) — line icons, **2px stroke, rounded caps/joins**, sized
16–24px, colored via `currentColor` (inherits navy/sky/gray). `npm i lucide-react`. No
filled/duotone styles. **No emoji, no unicode glyphs as icons** — off-brand for B2B health.

---

## 5. Voice & content rules (when writing UI copy)
- Confident, warm, plain-spoken. "We" for Patterson, "you/your" for the customer.
- Short declarative sentences. Title Case only for the brand promise + product names;
  sentence case elsewhere; UPPERCASE letter-spaced eyebrows.
- Numbers as proof points, shown large (use `Stat`): "since 1877", "98%", "60 fulfillment
  centers", "86,000,000 U.S. households".
- Tagline: **"Trusted Expertise. Unrivaled Support."** Purpose: *"We strengthen the people
  who keep us and our animals healthy."*
- **No emoji, ever.**

---

## 6. Assets (`assets/brand/`)
- `patterson-logo-white.svg` / `-navy.svg` / `-sky.svg` — horizontal lockup (wave mark +
  PATTERSON wordmark), **viewBox cropped tight** to the artwork (≈3.16:1) — size by height,
  no internal padding.
- `patterson-logo-square.svg` (sky bg) / `-square-navy.svg` — square badge variants.
- `wave-bg-navy.png` — navy background with wave watermark (hero/section bands).
- `photo-markets.png` — 4-market photo band (service tech · vet · dental · equine).
- `value-prop.png` — "Trusted Expertise. Unrivaled Support." chevron + 5 value pillars.
- `color-palette.png` — brand-guide palette page (reference).
- **Not included:** brand-specific Patterson Dental / Patterson Veterinary horizontal
  lockups (CORS-restricted CDN) — request `logo-dental.svg` / `logo-vet.svg` if needed.

Imagery direction: warm, authentic, natural-light photography of practitioners, animals and
operations. Navy scrim (`--overlay-scrim` ≈55%) only when text sits over an image.

---

## 7. Suggested implementation order
1. Port `tokens/` into your theme (or ship `styles.css` + `tokens/` directly) and load the
   fonts.
2. Build the **core** components (Button, Card, Badge, Stat, IconButton) in your framework.
3. Build **forms** + **feedback**.
4. Wire the **Lucide** icon set.
5. Compose product screens — see `reference/design-guide.md` for full visual foundations,
   and the design-system project's `ui_kits/` (corporate website, dental/vet storefront) and
   `templates/` (corporate page, two decks) for real compositions.

## Reference
- `reference/design-guide.md` — complete brand guide (voice, visual foundations, iconography,
  sources, do/don't). Read it for anything not covered above.
- `styles.css` + `tokens/` — authoritative token values.
- `components/**` — `.jsx` (impl), `.d.ts` (props), `.prompt.md` (usage), `.card.html` (demo).
