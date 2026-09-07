import type { ImageLoaderProps } from 'next/image'

/**
 * Global next/image loader (wired up via `images.loaderFile` in next.config.ts).
 *
 * Sanity images are resized by Sanity's own CDN rather than proxied through
 * /_next/image. That avoids the optimizer downloading the multi-megabyte
 * original for every asset on a cache miss, and lets the already-global Sanity
 * CDN handle format negotiation.
 *
 * Anything else (local files in /public) falls through to the built-in
 * optimizer, which is what Next would have done anyway.
 */
export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith('https://cdn.sanity.io/')) {
    const url = new URL(src)
    url.searchParams.set('auto', 'format')
    url.searchParams.set('fit', 'max')
    url.searchParams.set('w', String(width))
    url.searchParams.set('q', String(quality ?? 80))
    return url.toString()
  }

  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality ?? 75}`
}
