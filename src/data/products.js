export const bottleSizeLabels = {
  '500ml': '500 ML',
  '1liter': '1 Litre',
}

const design = ({ id, name, size500, size1l, collectionSizes = ['500ml', '1liter'] }) => ({
  id,
  name,
  image500ml: `/assets/${size500}.png`,
  image1L: `/assets/${size1l}.png`,
  image500mlWebp: `/assets/optimized/${size500}.webp`,
  image1LWebp: `/assets/optimized/${size1l}.webp`,
  // Which image files the catalogue is allowed to show. The hero owns the
  // Jodhpur 1 Litre file, so the catalogue displays its 500 ML companion only.
  collectionSizes,
})

export const products = [
  design({
    id: 'golden-grill',
    name: 'Golden Grill',
    size500: 'Golden Grill-500ml',
    size1l: 'Golden Grill-1liter',
  }),
  design({
    id: 'la-pinoz',
    name: "La Pino'z Pizza",
    size500: 'La Pino’z-500ml',
    size1l: 'La Pino’z Pizza-1liter',
  }),
  design({
    id: 'jodhpur-wedding',
    name: 'Jodhpur Wedding',
    size500: 'Jodhpur Wedding-500ml',
    size1l: 'Jodhpur Wedding-1liter',
    collectionSizes: ['500ml'],
  }),
  design({
    id: 'visuark',
    name: 'Visuark',
    size500: 'visuark-500ml',
    size1l: 'visuark-1liter',
  }),
  design({
    id: 'berozgaar-cafe',
    name: 'Berozgaar Cafe',
    size500: 'Berozgaar Cafe-500ml',
    size1l: 'Berozgaar Cafe-1liter',
  }),
  design({
    id: 'garba',
    name: 'Garba',
    size500: 'Garba-500ml',
    size1l: 'Garba-1liter',
  }),
  design({
    id: 'kesar-restaurant',
    name: 'Kesar Restaurant',
    size500: 'Kesar Restaurant-500ml',
    size1l: 'Kesar Restaurant-1liter',
  }),
  design({
    id: 'wedding-themed',
    name: 'Wedding Themed',
    size500: 'Wedding Themed-500ml',
    size1l: 'Wedding Themed-1liter',
  }),
  design({
    id: 'panchkula-bhawan',
    name: 'Panchkula Bhawan',
    size500: 'Panchkula Bhawan-500ml',
    size1l: 'Panchkula Bhawan-1liter',
  }),
  design({
    id: 'ramdev-dosa-corner',
    name: 'Ramdev Dosa Corner',
    size500: 'Ramdev Dosa Corner-500ml',
    size1l: 'Ramdev Dosa Corner-1liter',
  }),
  design({
    id: 'shiv-shakti',
    name: 'Shiv Shakti',
    size500: 'Shiv Shakti-500ml',
    size1l: 'Shiv Shakti-1liter',
  }),
  design({
    id: 'ketli',
    name: 'Ketli',
    size500: 'Ketli-500ml',
    size1l: 'Ketli-1liter',
  }),
]

const slideImage = (product, size) =>
  size === '1liter'
    ? { image: product.image1L, imageWebp: product.image1LWebp }
    : { image: product.image500ml, imageWebp: product.image500mlWebp }

/**
 * The showcase runs through every collection file exactly once. The two size
 * passes are kept apart so consecutive slides never repeat the same business,
 * and the hero's Jodhpur 1 Litre file stays out of the collection.
 */
export const collectionSlides = ['500ml', '1liter'].flatMap((size) =>
  products
    .filter((product) => product.collectionSizes.includes(size))
    .map((product) => {
      const { image, imageWebp } = slideImage(product, size)

      return {
        id: `${product.id}-${size}`,
        product,
        productId: product.id,
        name: product.name,
        size,
        sizeLabel: bottleSizeLabels[size],
        sizes: product.collectionSizes,
        sizeLabels: product.collectionSizes.map((entry) => bottleSizeLabels[entry]),
        image,
        imageWebp,
      }
    }),
)
