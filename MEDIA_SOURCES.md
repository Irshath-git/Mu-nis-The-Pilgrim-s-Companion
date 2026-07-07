# Media Sources

All third-party media is self-hosted (never hotlinked). Derivatives (crops,
downscales, trims, re-encodes) were produced locally for web performance.

## Photographs

| File | Source | Author | License |
| --- | --- | --- | --- |
| `public/media/hero/lone-pilgrim.jpg` | Supplied with the project brief (Image A) | — | Project-supplied |
| `public/media/about/mecca-crowd.jpg` | Supplied with the project brief (Image B) | — | Project-supplied |
| `public/media/ar/pilgrim-path.png` | Supplied by the project owner (illustrative render of a pilgrim walking a mosque walkway) | — | Project-supplied |
| `public/media/journey/mecca-aerial.jpg` | [Wikimedia Commons — "Mecca From Above (153954)"](https://commons.wikimedia.org/wiki/File:Mecca_From_Above_(153954).jpg) | NASA / ISS Expedition 69 (astronaut photograph ISS069-E-39069) | Public domain |

## Video

| File | Source | Author | License |
| --- | --- | --- | --- |
| `public/media/journey/tawaf-loop.webm` / `.mp4` / `tawaf-poster.jpg` | [Wikimedia Commons — "Time lapse of Masjid al-Ḥarām (kaaba) & hajj rites"](https://commons.wikimedia.org/wiki/File:Time_lapse_of_Masjid_al-%E1%B8%A4ar%C4%81m_(kaaba)_%26_hajj_rites.webm) | Masajida Allah | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |

Derivative notes: an 18-second segment (2:38–2:56) was trimmed, cropped
(1920×860 — removing the uploader's burned-in top/bottom watermark bars),
downscaled to 1280px and re-encoded (VP9 + H.264, audio removed). On-page
attribution is shown as a caption chip on the band itself; this file records
the full provenance.

## Usage map

- **Hero** — `lone-pilgrim.jpg` (preloaded; the only above-the-fold image).
- **About Us** — `mecca-crowd.jpg` (lazy).
- **AR Maps** — `pilgrim-path.png` as the simulated camera feed (lazy).
- **Sacred band (before Across the Journey)** — `tawaf-loop` video, muted /
  looped / `preload="none"`, plays only while visible; falls back to
  `tawaf-poster.jpg` under `prefers-reduced-motion` or Save-Data.
- **Final CTA** — `mecca-aerial.jpg` under an emerald duotone grade (lazy).
