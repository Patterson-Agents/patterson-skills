---
name: patterson-design-system
description: Generate well-branded interfaces, screens, slides and assets for Patterson Companies (oral & animal health distribution) — for production code or throwaway prototypes/mocks. Contains the full brand foundation (colors, typography, fonts, logos, imagery), reusable React component primitives, and a Claude Code handoff doc. Invoke when building anything that should look like Patterson, or when handing the system to a developer.
user-invocable: true
---

# Patterson Companies Design System

Read `reference/design-guide.md` for the complete brand guide (voice, visual foundations,
iconography, do/don't). Read `CLAUDE_CODE_HANDOFF.md` to implement this system in a real
codebase. Explore `tokens/`, `components/`, and `assets/` for the raw material.

## How to use this skill
- **Prototypes / mocks / slides:** link `styles.css`, copy the assets you need out of
  `assets/`, and build static HTML using the CSS custom properties (tokens). Output files the
  user can open directly.
- **Production code:** follow `CLAUDE_CODE_HANDOFF.md` — port the tokens into the target
  codebase's theme and recreate the components with its existing patterns/libraries.
- **No brief given:** ask what the user wants to build, ask a few focused questions, then act
  as an expert Patterson designer producing HTML artifacts *or* production code as needed.

## Quick reference
- **Brand:** Patterson Companies, Inc. — *"Trusted Expertise. Unrivaled Support."* Since 1877.
  B2B distributor for dental + animal health. Confident, warm, plain-spoken. **No emoji.**
- **Colors:** Navy `#003767`, Sky `#00A8E1`, cool gray `#58585B`, white. Secondary blue
  `#147EC2`/`#6DCFF6`; tertiary green `#7BC24D` / teal `#00817D` / purple `#522E91` for data only.
- **Type:** **Proxima Nova** (self-hosted in `assets/fonts/`; Figtree is the free fallback,
  Arial is the PowerPoint-safe fallback). Bold navy headlines, cool-gray body at 1.6, big sky stats.
- **Shape:** Pill buttons (navy→sky on hover), 10px cards, soft navy-tinted shadows, 3px sky
  focus ring. Clean, calm, corporate — never flashy. Icons: Lucide, 2px stroke, `currentColor`.
- **Files:** `styles.css` (entry), `tokens/`, `components/` (core/forms/feedback), `assets/`
  (`brand/` logos + imagery, `fonts/`), `reference/design-guide.md`, `CLAUDE_CODE_HANDOFF.md`.
