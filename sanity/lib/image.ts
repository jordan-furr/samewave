import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

type SanityImage = {
  asset?: { _ref?: string }
  crop?: {
    top?: number
    bottom?: number
    left?: number
    right?: number
  } | null
} | null | undefined

const REF_DIMENSIONS = /-(\d+)x(\d+)-\w+$/

/**
 * Intrinsic dimensions are encoded in the asset `_ref`, so we can reserve the
 * right aspect ratio at render time without an extra query for metadata.
 */
export function imageDimensions(source: SanityImage) {
  const match = source?.asset?._ref?.match(REF_DIMENSIONS)
  if (!match) return null

  let width = Number(match[1])
  let height = Number(match[2])

  const crop = source?.crop
  if (crop) {
    width = Math.round(width * (1 - (crop.left ?? 0) - (crop.right ?? 0)))
    height = Math.round(height * (1 - (crop.top ?? 0) - (crop.bottom ?? 0)))
  }

  if (!width || !height) return null
  return { width, height }
}
