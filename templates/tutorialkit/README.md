<!-- @template name="TutorialKit" description="Patterson-branded TutorialKit starter — a themed interactive-tutorial platform with a sample author→validate lesson." -->
# Template — Patterson TutorialKit

A ready-to-run [TutorialKit](https://tutorialkit.dev) project, skinned in the
Patterson Companies brand. Copy this folder to start an interactive tutorial /
workshop that already looks and reads as Patterson.

## Run it

```sh
npm install
npm run dev        # boots the themed TutorialKit at http://localhost:4321
```

Other scripts: `npm run build`, `npm run preview`, `npm run check` (`astro check`).

## What's branded, and where

| Concern | File | Notes |
|---------|------|-------|
| **Theme** | `theme.css` | The full `--tk-*` surface mapped to Patterson tokens. Four selectable themes via `data-theme`: `light` (default), `dark` (navy canvas), `dental` (sky-forward), `veterinary` (teal/green). TutorialKit auto-imports it from the project root. Ends with a small "component reinforcement" block that binds the brand to the two surfaces TutorialKit doesn't token by default (the top-bar background and markdown prose). |
| **Logo** | `public/logo.svg`, `public/logo-dark.svg` | The Patterson wordmark on the navy top bar (white lockup works in both modes). |
| **Astro config** | `astro.config.mjs` | Standard `@tutorialkit/astro` wiring (dev toolbar off). |
| **UnoCSS** | `uno.config.ts` | Wires UnoCSS to the `@tutorialkit/theme` preset so the shell's utility/icon classes are generated. **Required** — without it the top bar collapses and icons vanish. |
| **Collection** | `src/content/config.ts` | Declares the `tutorial` content collection with TutorialKit's `contentSchema` (also what `astro check` validates against). |
| **Content** | `src/content/tutorial/` | The lessons. Numbered folders set order; each level has a `meta.md`, lessons add `content.md`. |
| **Base workspace** | `src/templates/default/` | The starter filesystem booted into the WebContainer; lesson `_files/` are layered on top. **Required** — its absence 404s `template-default.json`. |

To re-theme, edit `theme.css` only — every value traces back to a Patterson brand
primitive (navy `#003767`, sky `#00A8E1`, cool grays, and the teal/blue/amber/red
semantic set). A live, install-free preview of the themed shell lives at
`../../ui_kits/tutorialkit/index.html`.

> Built and verified against TutorialKit **1.6** (Astro 4). The theme is loaded
> via TutorialKit's variable system; a handful of `--tk-*` tokens the default
> chrome doesn't consume in 1.6 are reinforced at the bottom of `theme.css`.

## The sample lesson — the author→validate model

TutorialKit lessons run in a **WebContainer** (Node compiled to the browser), which
can't run AI agents or make network calls. So the hands-on loop is always:

1. The learner **authors an artifact** in the editor.
2. The learner **runs a Node validator** in the terminal.
3. The terminal shows **pass/fail** — instant, checkable feedback.

The included lesson (`Foundations → Design Tokens → Define the Patterson brand
tokens`) has the learner complete a `brand-tokens.css`, then runs `validate.mjs`
(dependency-free, Node stdlib) to lint it against the brand. `_files/` is the
starting state; `_solution/` (the **Solve** button) is the finished artifact.

## Add your own lesson

```
src/content/tutorial/
  <n>-part/meta.md            # type: part
    <n>-chapter/meta.md       # type: chapter
      <n>-lesson/
        content.md            # type: lesson + the markdown body
        _files/               # editor starting state (+ validate.mjs)
        _solution/            # completed state (+ identical validate.mjs)
```

Set `focus:` to a file that exists in `_files/`, keep `previews: false` for
author→validate lessons, and derive any `ins={…}`/`del={…}` code annotations from a
real `diff` between `_files` and `_solution`.
