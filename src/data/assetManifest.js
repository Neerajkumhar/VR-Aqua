import { collectionSlides, products } from './products'

/**
 * Every bottle image file on the site is assigned to exactly one section.
 * The hero uses the 1 Litre Jodhpur Wedding study; its 500 ML companion is the
 * only Jodhpur image that appears in the collection. Every other design keeps
 * both formats inside the catalogue.
 *
 * This module throws during development and build if a file is assigned twice.
 */

const HERO_PRODUCT_ID = 'jodhpur-wedding'
const HERO_SIZE = '1liter'

const labelForSize = (size) => (size === '1liter' ? '1 Litre' : '500 ML')

export const heroProduct = products.find((product) => product.id === HERO_PRODUCT_ID)

const heroAsset = {
  productId: heroProduct.id,
  productName: heroProduct.name,
  imagePath: heroProduct.image1L,
  size: labelForSize(HERO_SIZE),
  assignedSection: 'hero',
  used: true,
}

const collectionAssets = collectionSlides.map((slide) => ({
  productId: slide.productId,
  productName: slide.name,
  imagePath: slide.image,
  size: slide.sizeLabel,
  assignedSection: 'collection',
  used: true,
}))

export const productAssetManifest = [heroAsset, ...collectionAssets]

const seenPaths = new Map()

for (const asset of productAssetManifest) {
  const existing = seenPaths.get(asset.imagePath)

  if (existing) {
    throw new Error(
      `Duplicate bottle asset: "${asset.imagePath}" is assigned to ${existing.assignedSection} (${existing.productName}) and ${asset.assignedSection} (${asset.productName}).`,
    )
  }

  seenPaths.set(asset.imagePath, asset)
}

export const manifestSummary = {
  totalImages: productAssetManifest.length,
  heroImages: productAssetManifest.filter((asset) => asset.assignedSection === 'hero').length,
  collectionImages: productAssetManifest.filter((asset) => asset.assignedSection === 'collection').length,
}
