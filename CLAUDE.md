# MUNIS — مُؤْنِس (Competition Website)

Single-page React + Vite + TypeScript site presenting the MUNIS pilgrim-companion
prototype for a Hajj & Umrah technology competition.

## Commands

- `npm run dev` — dev server
- `npm run build` — type-check + production build (must always pass)
- `npm run lint` — ESLint
- `npm test` — Vitest (jsdom + Testing Library)

## Architecture

- No CSS framework: structured CSS-variable design system in `src/styles/`
  (`tokens.css` → `base.css` → `utilities.css`), per-component CSS files
  co-located with components. Use CSS **logical properties** (`inline-start`,
  `margin-inline`, …) so RTL works without overrides.
- All user-visible copy lives in `src/data/*.ts` as `Bilingual` objects
  `{ en, ar }`; components resolve text through the `useLanguage()` context.
  Never hard-code visible strings inside components.
- Icons: `lucide-react` only. Motion: CSS transitions + `useInView` hook;
  every animation must respect `prefers-reduced-motion`.

## Non-negotiable brand rules

- Arabic brand name is exactly **مُؤْنِس** (with those diacritics) — never respell it.
- Arabic/English wordmarks are real HTML text, never SVG paths.
- Colours come only from the tokens in `src/styles/tokens.css`. Gold is an
  accent, never a background. Red/amber only for functional safety states.
- Logo assets live in `public/brand/`; never display a logo presentation board.
- No invented statistics, partners, testimonials, certifications or dates.
  Future capabilities must be labelled Prototype / Planned Pilot / Future
  Authorised Integration.
- Never imply government endorsement or existing official integration.

## Accessibility baseline

WCAG 2.2 AA: semantic landmarks first, ARIA second; visible focus; full
keyboard support; 44px touch targets; no colour-only meaning; RTL must never
clip Arabic text.
