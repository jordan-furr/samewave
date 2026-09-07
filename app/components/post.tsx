import { POSTS_QUERY_RESULT } from '@/sanity/types'
import { urlFor, imageDimensions } from '@/sanity/lib/image'
import Image from 'next/image'
import { Categories } from './Categories'

// Mirrors the grid in page.css: 1 col, 2 cols, then 2/3/4 cols inside a 66% column.
const POST_IMAGE_SIZES =
    '(max-width: 349px) 100vw, (max-width: 867px) 50vw, (max-width: 1217px) 33vw, (max-width: 1517px) 22vw, 17vw'

type PostProps = POSTS_QUERY_RESULT[0] & { priority?: boolean }

export function Post(props: PostProps) {
    const { title, mainImage, year, categories, priority = false } = props
    const dimensions = imageDimensions(mainImage)

    return (
        <div className='postCont'>
            <div className='mb1'>
                {mainImage && dimensions ? (
                    <Image
                        src={urlFor(mainImage).url()}
                        alt={mainImage?.alt || title || ""}
                        width={dimensions.width}
                        height={dimensions.height}
                        quality={80}
                        sizes={POST_IMAGE_SIZES}
                        priority={priority}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                ) : null}
            </div>
            <div className='w-100 flex-col mb4'>
                <span className=''>
                    {title}
                </span>
                Year: {year}
                <Categories categories={categories} />
            </div>
        </div>
    )
}
