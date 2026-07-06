# Mu'nis Unified Design Specifications (Sakinah Horizon)

This document establishes the unified design specifications for the **Mu'nis (مُؤْنِس)** platform. It aligns the desktop web components and the interactive mobile prototype under the canonical **Sakinah Horizon** visual system.

---

## 1. Color System (Sakinah Horizon)
The unified design uses the following canonical palette. No other colors should be introduced.

| Token Name | HEX Code | Purpose |
| :--- | :--- | :--- |
| `Night Indigo` | `#24324A` | Primary branding, headers, key buttons |
| `Midnight Navy` | `#182235` | Main container background, phone frame chassis, footers |
| `Moon Ivory` | `#F6F1E8` | Calm content background, panels, body copy on dark surfaces |
| `Desert Sand` | `#D9C7A8` | Accent tags, primary highlights, Huda voice headers |
| `Mist Blue` | `#B8CED8` | Active paths, secondary text indicators, guidelines |
| `Rose Clay` | `#C98D78` | High priority alerts, guide pins, destination points |
| `Soft Slate` | `#697481` | Secondary text copy, labels, icon containers |
| `Cloud Mist` | `#E8EEF0` | Tabs, card borders, secondary input backdrops |

---

## 2. Typography
Typography supports both Latin and Arabic character sets seamlessly.

- **Primary Headings**: `Manrope Variable` (Latin) / `Noto Kufi Arabic` (Arabic)
- **Body / Interface**: `Inter Variable` (Latin) / `Noto Kufi Arabic` (Arabic)

### Website Type Scale (Fluid)
- **Hero Title**: `clamp(2.7rem, 1.5rem + 4.4vw, 5.1rem)`
- **Section Heading (H2)**: `clamp(2rem, 1.35rem + 2.4vw, 3.4rem)`
- **Card Title (H3)**: `clamp(1.35rem, 1.2rem + 0.6vw, 1.7rem)`
- **Lead Text**: `clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)`
- **Body Text**: `1rem`
- **Small Label**: `0.9rem`

### Mobile-App Type Scale (Fixed)
- **App Bar Brand**: `0.86rem` (Bold Arabic مُؤْنِس)
- **In-App Title**: `0.92rem` (Bold)
- **In-App Body / Instruction**: `0.8rem`
- **Pills / Status Badges**: `0.62rem`
- **Sub-labels**: `0.68rem` / `0.7rem`
- **Micro-notes**: `0.58rem`

---

## 3. Spacing, Radii, and Shadows
- **Section Spacing**: `clamp(3.25rem, 2rem + 4.6vw, 7rem)` for padding blocks.
- **Content Padding**: `clamp(1.25rem, 4.5vw, 2.75rem)`.
- **Radii**:
  - Cards & Modules: `20px` (`--radius-card`)
  - Inside-phone Cards: `14px`
  - Action Buttons: `12px` (`--radius-btn`)
  - Small Controls / Pills: `10px` (`--radius-sm`) / `999px` (`--radius-pill`)
- **Shadow System**:
  - `var(--shadow-soft)`: Base card shadow (`0 10px 28px -14px rgba(0, 55, 46, 0.12)`)
  - `var(--shadow-lift)`: Hover states (`0 18px 44px -18px rgba(0, 55, 46, 0.2)`)
  - `var(--shadow-phone)`: Mock phone elevations (`0 36px 80px -28px rgba(0, 55, 46, 0.35)`)

---

## 4. Component Visual Elements

### Button Variants
1. **Primary Button (`.btn--primary` / `.ph-btn--primary`)**:
   - Background: `var(--night-indigo)`
   - Text: `var(--pure-white)`
2. **Secondary Button (`.btn--secondary` / `.ph-btn--secondary`)**:
   - Border: `1.5px solid var(--border-soft)`
   - Background: `var(--pure-white)`
   - Text: `var(--night-indigo)`
3. **Outline Light Button (`.btn--outline-light`)**:
   - Border: `1.5px solid rgba(246, 241, 232, 0.3)`
   - Background: `transparent`
   - Text: `var(--moon-ivory)`

### Card Variants
1. **Light Content Card (`.card`)**:
   - Background: `var(--pure-white)`
   - Border: `1px solid var(--border-soft)`
2. **Dark Cinematic Card (`.card--dark` / `.ph-card--dark`)**:
   - Background: `var(--night-indigo)`
   - Border: `1px solid var(--midnight-navy)`
   - Text: `var(--moon-ivory)`

### Form Controls
- **Input Wrap**: Relies on `var(--cloud-mist)` backdrops, with `1.5px` border styling.
- **Focus Rings**: Focused input borders use `var(--rose-clay)` or `var(--night-indigo)` glow effects.

---

## 5. Mobile Companion Visual Identity

### Huda Status Indicators
- **Active State**: Pulser is green (`var(--success)`). Label: `هُدى متصلة / Huda Companion`.
- **Listening State**: Pulser is warm desert sand (`var(--desert-sand)`). Label: `هُدى: تستمع... / Huda: Listening...`.
- **Understanding State**: Pulser is warning yellow (`var(--warning)`). Label: `هُدى: تفهم... / Huda: Thinking...`.

### AR Map Overlays
- **Direction Path**: Floating translucent blue arrow path using `var(--mist-blue)` colors.
- **Group Leader Indicator**: Glowing leader node pulsing with `var(--desert-sand)` light effects.
- **Rest/Help Markers**: Rose clay circular nodes with haptic/audio cue flags.

---

## 6. Layout Mirroring & Localization (RTL)
To ensure accessibility and professional local rendering in both English (LTR) and Arabic (RTL):
- **Logical Spacing**: Stylesheets must use logical properties:
  - `margin-inline-start` instead of `margin-left`
  - `padding-inline` instead of `padding-left`/`padding-right`
  - `inset-inline-start` instead of `left`
  - `border-inline-start` instead of `border-left`
- **Icon Swapping**: Back arrows and directional chevron icons (`lucide-react` chevrons) must apply the `.flip-rtl` helper class, rotating them 180 degrees in RTL.
- **Arabic Diacritics**: Ensure diacritics on brand wordmarks (مُؤْنِس and هُدى) are preserved in real HTML text with ample line height adjustments (`padding-block: 0.2em`) to prevent letters clipping.
