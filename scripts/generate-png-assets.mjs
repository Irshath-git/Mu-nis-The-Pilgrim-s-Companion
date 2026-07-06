/**
 * Generates PNG brand assets (PWA icons + Open Graph placeholder) from the
 * MUNIS mark geometry without any image dependencies. Pure Node: rasterises
 * round-capped arcs + circles with analytic anti-aliasing, encodes PNG via
 * node:zlib.
 *
 * Run: node scripts/generate-png-assets.mjs
 */
import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'brand')
mkdirSync(outDir, { recursive: true })

// ---------- colours ----------
const EMERALD_950 = [0x00, 0x37, 0x2e]
const EMERALD_900 = [0x00, 0x48, 0x3a]
const WHITE = [0xff, 0xff, 0xff]
const GOLD = [0xc8, 0xa9, 0x51]

const TAU = Math.PI * 2
const rad = (deg) => (deg * Math.PI) / 180

/**
 * Signed-distance coverage (0..1) of point p against a round-capped arc.
 * Arc: centre c, radius R, half stroke width hw, from angle a0 (math
 * convention, y-up) sweeping CCW by `sweep`.
 */
function arcCoverage(px, py, cx, cy, R, hw, a0, sweep) {
  const dx = px - cx
  const dy = cy - py // flip to math y-up
  let theta = Math.atan2(dy, dx)
  let delta = theta - a0
  delta = ((delta % TAU) + TAU) % TAU
  let nx, ny
  if (delta <= sweep) {
    const nr = Math.hypot(dx, dy)
    if (nr === 0) {
      nx = cx + R
      ny = cy
    } else {
      nx = cx + (dx / nr) * R
      ny = py + ((py - cy) / nr) * R * -1 // recompute below properly
      // nearest point on circle in screen coords:
      nx = cx + (dx / nr) * R
      ny = cy - (dy / nr) * R
    }
  } else {
    const e0x = cx + R * Math.cos(a0)
    const e0y = cy - R * Math.sin(a0)
    const a1 = a0 + sweep
    const e1x = cx + R * Math.cos(a1)
    const e1y = cy - R * Math.sin(a1)
    const d0 = Math.hypot(px - e0x, py - e0y)
    const d1 = Math.hypot(px - e1x, py - e1y)
    if (d0 < d1) {
      nx = e0x
      ny = e0y
    } else {
      nx = e1x
      ny = e1y
    }
  }
  const sd = Math.hypot(px - nx, py - ny) - hw
  return Math.min(1, Math.max(0, 0.5 - sd))
}

function circleCoverage(px, py, cx, cy, r) {
  const sd = Math.hypot(px - cx, py - cy) - r
  return Math.min(1, Math.max(0, 0.5 - sd))
}

/** Paint src colour over dst with coverage alpha. */
function blend(pixels, idx, colour, alpha) {
  if (alpha <= 0) return
  pixels[idx] = Math.round(pixels[idx] * (1 - alpha) + colour[0] * alpha)
  pixels[idx + 1] = Math.round(pixels[idx + 1] * (1 - alpha) + colour[1] * alpha)
  pixels[idx + 2] = Math.round(pixels[idx + 2] * (1 - alpha) + colour[2] * alpha)
  pixels[idx + 3] = 255
}

/**
 * Draw the MUNIS mark (64-unit design space) at `scale`, offset (ox, oy).
 * Layers: big arc (white), small arc (white 75%), gold dot.
 */
function drawMark(pixels, W, H, scale, ox, oy) {
  const shapes = [
    { kind: 'arc', c: [32, 33], R: 21, hw: 4, a0: rad(95), sweep: rad(240), colour: WHITE, opacity: 1 },
    { kind: 'arc', c: [35.5, 36.5], R: 7.5, hw: 3.25, a0: rad(120), sweep: rad(200), colour: WHITE, opacity: 0.75 },
    { kind: 'dot', c: [44.04, 15.8], r: 4.2, colour: GOLD, opacity: 1 },
  ]
  for (const s of shapes) {
    const cx = ox + s.c[0] * scale
    const cy = oy + s.c[1] * scale
    const reach = s.kind === 'arc' ? (s.R + s.hw) * scale + 2 : s.r * scale + 2
    const x0 = Math.max(0, Math.floor(cx - reach))
    const x1 = Math.min(W - 1, Math.ceil(cx + reach))
    const y0 = Math.max(0, Math.floor(cy - reach))
    const y1 = Math.min(H - 1, Math.ceil(cy + reach))
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const cov =
          s.kind === 'arc'
            ? arcCoverage(x + 0.5, y + 0.5, cx, cy, s.R * scale, s.hw * scale, s.a0, s.sweep)
            : circleCoverage(x + 0.5, y + 0.5, cx, cy, s.r * scale)
        blend(pixels, (y * W + x) * 4, s.colour, cov * s.opacity)
      }
    }
  }
}

/** Fill with a top-to-bottom emerald blend. */
function fillBackground(pixels, W, H) {
  for (let y = 0; y < H; y++) {
    const t = y / H
    const col = [
      Math.round(EMERALD_950[0] * (1 - t) + EMERALD_900[0] * t),
      Math.round(EMERALD_950[1] * (1 - t) + EMERALD_900[1] * t),
      Math.round(EMERALD_950[2] * (1 - t) + EMERALD_900[2] * t),
    ]
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4
      pixels[i] = col[0]
      pixels[i + 1] = col[1]
      pixels[i + 2] = col[2]
      pixels[i + 3] = 255
    }
  }
}

// ---------- PNG encoding ----------
const CRC_TABLE = new Int32Array(256).map((_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c
})

function crc32(buf) {
  let c = -1
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ -1) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}

function encodePng(pixels, W, H) {
  const raw = Buffer.alloc((W * 4 + 1) * H)
  for (let y = 0; y < H; y++) {
    raw[y * (W * 4 + 1)] = 0 // filter: none
    pixels.copy(raw, y * (W * 4 + 1) + 1, y * W * 4, (y + 1) * W * 4)
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(W, 0)
  ihdr.writeUInt32BE(H, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function makeIcon(size, name) {
  const pixels = Buffer.alloc(size * size * 4)
  fillBackground(pixels, size, size)
  // Mark occupies the centre ~62% so maskable crops stay safe
  const scale = (size * 0.62) / 64
  const offset = (size - 64 * scale) / 2
  drawMark(pixels, size, size, scale, offset, offset)
  writeFileSync(join(outDir, name), encodePng(pixels, size, size))
  console.log(`wrote ${name} (${size}x${size})`)
}

function makeOg() {
  const W = 1200
  const H = 630
  const pixels = Buffer.alloc(W * H * 4)
  fillBackground(pixels, W, H)
  // Faint oversized ring, off-canvas right — quiet texture
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const cov = arcCoverage(x + 0.5, y + 0.5, 1050, 315, 420, 1.5, 0, TAU - 0.0001)
      blend(pixels, (y * W + x) * 4, GOLD, cov * 0.18)
    }
  }
  const scale = 5.4
  drawMark(pixels, W, H, scale, (W - 64 * scale) / 2, (H - 64 * scale) / 2)
  writeFileSync(join(outDir, 'munis-og.png'), encodePng(pixels, W, H))
  console.log('wrote munis-og.png (1200x630)')
}

makeIcon(192, 'munis-app-icon-192.png')
makeIcon(512, 'munis-app-icon-512.png')
makeOg()
