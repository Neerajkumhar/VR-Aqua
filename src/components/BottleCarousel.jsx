import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { collectionSlides } from '../data/products'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { carouselItemStyle, carouselMetrics, circularOffset } from '../utils/carousel'
import ActiveProductInfo from './ActiveProductInfo'
import BottleCarouselItem from './BottleCarouselItem'

const AUTOPLAY_MS = 1800
const RESUME_DELAY_MS = 2000
const DRAG_THRESHOLD = 8

const wrap = (value, total) => ((value % total) + total) % total

export default function BottleCarousel() {
  const slides = collectionSlides
  const total = slides.length
  const reduced = usePrefersReducedMotion()

  const carouselRef = useRef(null)
  const stageRef = useRef(null)
  const cooldownTimer = useRef(0)
  const drag = useRef({ pointerId: null, startX: 0, startY: 0, axis: null, moved: false })
  const dragFractionRef = useRef(0)

  const [active, setActive] = useState(0)
  const [metrics, setMetrics] = useState(() => carouselMetrics(1200))
  const [hovered, setHovered] = useState(false)
  const [focusWithin, setFocusWithin] = useState(false)
  const [inView, setInView] = useState(true)
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === 'undefined' || !document.hidden,
  )
  const [dragging, setDragging] = useState(false)
  const [dragFraction, setDragFraction] = useState(0)
  const [cooldown, setCooldown] = useState(false)

  useLayoutEffect(() => {
    const node = stageRef.current
    if (!node) return undefined

    const measure = () => setMetrics(carouselMetrics(node.clientWidth))
    measure()

    if (!('ResizeObserver' in window)) {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }

    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onVisibility = () => setPageVisible(!document.hidden)
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    const node = carouselRef.current
    if (!node || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.16,
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => window.clearTimeout(cooldownTimer.current), [])

  const autoplayPaused =
    reduced || hovered || focusWithin || dragging || cooldown || !inView || !pageVisible

  // One timeout that is re-armed whenever the active slide changes, so manual
  // navigation always gets a full beat before autoplay moves again.
  useEffect(() => {
    if (autoplayPaused) return undefined

    const id = window.setTimeout(() => {
      setActive((current) => (current + 1) % total)
    }, AUTOPLAY_MS)

    return () => window.clearTimeout(id)
  }, [autoplayPaused, active, total])

  const step = useCallback(
    (direction) => {
      setActive((current) => wrap(current + direction, total))
    },
    [total],
  )

  const handleSelect = useCallback((index) => {
    if (drag.current.moved) return
    setActive(index)
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      step(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      step(1)
    }
  }

  const handleFocus = (event) => {
    const visible = event.target.matches?.(':focus-visible')
    setFocusWithin(Boolean(visible))
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false)
  }

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      axis: null,
      moved: false,
    }
  }

  const handlePointerMove = (event) => {
    const state = drag.current
    if (state.pointerId !== event.pointerId) return

    const dx = event.clientX - state.startX
    const dy = event.clientY - state.startY

    if (!state.axis) {
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return
      // Vertical intent is left to the page; only horizontal movement drags.
      state.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'

      if (state.axis === 'x') {
        stageRef.current?.setPointerCapture?.(event.pointerId)
        setDragging(true)
      }
    }

    if (state.axis !== 'x') return

    state.moved = true
    const fraction = Math.max(-1.5, Math.min(1.5, dx / metrics.step))
    dragFractionRef.current = fraction
    setDragFraction(fraction)
  }

  const endDrag = (event) => {
    const state = drag.current
    if (state.pointerId !== event.pointerId) return

    if (stageRef.current?.hasPointerCapture?.(event.pointerId)) {
      stageRef.current.releasePointerCapture(event.pointerId)
    }

    if (state.moved) {
      // Moving bottles right brings the previous slide to the centre, so the
      // active index moves against the pointer fraction.
      const snapped = Math.round(dragFractionRef.current)
      if (snapped !== 0) {
        setActive((current) => wrap(current - snapped, total))
      }

      setDragFraction(0)
      dragFractionRef.current = 0
      setDragging(false)
      setCooldown(true)

      window.clearTimeout(cooldownTimer.current)
      cooldownTimer.current = window.setTimeout(() => setCooldown(false), RESUME_DELAY_MS)
    }

    drag.current = { ...state, pointerId: null }
  }

  const activeIndex = wrap(active, total)

  return (
    <div
      ref={carouselRef}
      className={`carousel ${dragging ? 'is-dragging' : ''}`.trim()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={stageRef}
        className="carousel__stage"
        style={{ '--stage-h': `${metrics.stage}px` }}
        role="group"
        aria-roledescription="carousel"
        aria-label="Customized bottle collection"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {slides.map((slide, index) => (
          <BottleCarouselItem
            key={slide.id}
            slide={slide}
            offset={circularOffset(index, activeIndex, total)}
            metrics={metrics}
            dragFraction={dragFraction}
            isActive={index === activeIndex}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>

      <ActiveProductInfo slide={slides[activeIndex]} />
    </div>
  )
}
