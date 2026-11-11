import { carouselItemStyle } from '../utils/carousel'
import BottleImage from './BottleImage'

export default function BottleCarouselItem({
  slide,
  offset,
  metrics,
  dragFraction,
  isActive,
  onSelect,
}) {
  const geometry = carouselItemStyle({
    offset,
    dragFraction,
    span: metrics.span,
    arc: metrics.arc,
    step: metrics.step,
  })

  const height = Math.max(90, Math.round(metrics.center * geometry.scale))
  const hidden = !geometry.interactive

  return (
    <button
      type="button"
      className={`carousel-item ${isActive ? 'is-active' : ''}`.trim()}
      style={{
        '--x': `${geometry.x.toFixed(2)}px`,
        '--y': `${geometry.y.toFixed(2)}px`,
        '--o': geometry.opacity.toFixed(3),
        '--z': geometry.z,
        '--bottle-h': `${height}px`,
      }}
      tabIndex={-1}
      aria-label={`${slide.name}, ${slide.sizeLabel}`}
      aria-current={isActive ? 'true' : undefined}
      aria-hidden={hidden ? 'true' : undefined}
      data-inert={hidden ? 'true' : 'false'}
      onClick={onSelect}
    >
      <span className="carousel-item__frame">
        <BottleImage product={slide.product} size={slide.size} decorative />
      </span>
      <span className="carousel-item__caption" aria-hidden="true">
        <span className="carousel-item__name">{slide.name}</span>
        <span className="carousel-item__size">{slide.sizeLabel}</span>
      </span>
    </button>
  )
}
