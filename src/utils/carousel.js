export function circularOffset(index, active, total) {
  let offset = index - active

  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total

  return offset
}

/**
 * Maps a slide's position on the arc to translation, lift, scale, opacity and
 * stacking order. `dragFraction` is the in-progress pointer offset measured in
 * slide steps, so neighbouring bottles slide and fade continuously with the
 * pointer instead of jumping between slots.
 */
export function carouselItemStyle({ offset, dragFraction, span, arc, step }) {
  const position = offset + dragFraction
  const distance = Math.abs(position)
  const edgeFade = distance <= span ? 1 : Math.max(0, 1 - (distance - span))
  const scale = scaleAtDistance(distance)
  const opacity = Math.max(0, 1 - distance * 0.16) * edgeFade

  return {
    x: position * step,
    y: -arc * distance * distance,
    scale,
    opacity,
    z: Math.max(1, Math.round(120 - distance * 12)),
    interactive: distance <= span,
  }
}

// Authored size stops keep desktop side bottles at roughly 210/168/148px
// against a 280px centre, then interpolate smoothly while dragging.
const SCALE_STOPS = [1, 0.75, 0.6, 0.53]

function scaleAtDistance(distance) {
  if (distance >= SCALE_STOPS.length - 1) return SCALE_STOPS[SCALE_STOPS.length - 1]

  const index = Math.floor(distance)
  const mix = distance - index
  return SCALE_STOPS[index] * (1 - mix) + SCALE_STOPS[index + 1] * mix
}

/**
 * Breakpoint-specific stage measurements. These are deliberately re-authored
 * per range rather than scaled down from the desktop arc.
 */
export function carouselMetrics(width) {
  if (width >= 1160) {
    return {
      span: 3,
      center: 280,
      step: Math.round(Math.min(196, Math.max(168, width * 0.145))),
      arc: 5,
      stage: 392,
    }
  }

  if (width >= 880) {
    return {
      span: 2,
      center: 250,
      step: Math.round(width * 0.17),
      arc: 4.5,
      stage: 356,
    }
  }

  if (width >= 620) {
    return {
      span: 2,
      center: 220,
      step: Math.round(width * 0.19),
      arc: 4,
      stage: 320,
    }
  }

  const narrow = width < 300
  const center = narrow ? 176 : 200

  return {
    span: 1,
    center,
    step: Math.round(width * (narrow ? 0.37 : 0.35)),
    arc: 4,
    stage: center + 88,
  }
}
