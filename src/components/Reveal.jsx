import { useReveal } from '../hooks/useReveal'

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  thresholdClass = '',
  ...props
}) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className} ${thresholdClass}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
