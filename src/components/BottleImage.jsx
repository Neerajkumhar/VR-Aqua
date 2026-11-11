export default function BottleImage({
  product,
  size = '1liter',
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  decorative = false,
}) {
  const isLiter = size === '1liter'
  // Some artwork filenames contain spaces and a curly apostrophe. A raw space
  // breaks srcset parsing, so every asset URL is percent-encoded consistently.
  const src = encodeURI(isLiter ? product.image1L : product.image500ml)
  const webp = encodeURI(isLiter ? product.image1LWebp : product.image500mlWebp)
  const label = isLiter ? '1 litre' : '500 ml'

  return (
    <picture className={`bottle-image ${className}`.trim()}>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={decorative ? '' : `${product.name} customized water bottle, ${label}`}
        width={isLiter ? 941 : 994}
        height={isLiter ? 1672 : 1582}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        draggable="false"
        aria-hidden={decorative ? 'true' : undefined}
      />
    </picture>
  )
}
