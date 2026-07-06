# Stitch Project: Mu'nis Desktop Hero & Navigation
**Project ID:** `995561863295099117`  
**Device Type:** `DESKTOP`  
**Visibility:** `PUBLIC`  

---

## 1. Core Visual Layout & Composition
This project governs the visual layout, spacing, and spiritual themes of the website wrapper:
- **Global Constraints**: The content container pad uses `clamp(1.25rem, 4.5vw, 2.75rem)` and bounds the page layout to `--container-max: 1240px`.
- **Desktop Navigation Bar**:
  - Direct links on the header block: *Overview*, *About Us*, *The Problem*, and *The Solution*.
  - Collapses into a hamburger menu button at viewport widths `< 1024px`.
  - Floating status header bar triggers scroll-based visual state transitions (shifts from transparent to blurred ivory surface).
- **Mobile Navigation Drawer**:
  - Triggered by a modern outline icon menu button.
  - Renders a sliding side panel (`inline-size: min(360px, 88vw)`) from the leading edge (mirrored for RTL).
  - Navigation actions in the drawer map to interactive demos: *How It Works*, *AR Maps*, *Accessibility*, and *Experience Prototype*.
  - Backdrop uses dark overlay opacity (`rgba(24, 34, 53, 0.6)`) and soft blur (`backdrop-filter: blur(8px)`).
- **Cinematic Hero Composition**:
  - Soft background lights based on radial gradients representing the dawn.
  - Centered smartphone interactive chassis highlighting the product core.

## 2. Spiritual Atmosphere & Theme Guidelines
The website's spiritual tone is built on clean, modern design details:
- **Islamic Geometry Overlays**: Subtle geometric tile background grids (`.pattern-overlay`) styled with low opacity to feel premium yet unobtrusive.
- **Calm Elevations**: Soft shadows (`--shadow-soft`, `--shadow-lift`) elevate card headers and action frames without visual clutter.
- **Border Treatments**: Large card radius (`20px`) and button radius (`12px`) create a friendly, approachable, and calm look.

## 3. Responsive Breakpoints
- **Desktop Grid Breakpoint**: `1024px` collapses the top-header menu into a hamburger button.
- **Mobile Badge Simplification**: `< 560px` strips border boundaries off buttons and switches the language selectors into minimal text buttons to save screen real estate.
