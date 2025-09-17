import { POSTS_QUERYResult } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Categories } from './Categories'

export function Post(props: POSTS_QUERYResult[0]) {
    const { title, mainImage, categories, year } = props

    return (
        <main>
            <div className='postCont'>
                <div className='mb1'>
                    {mainImage ? (
                        <Image
                            className=""
                            src={urlFor(mainImage)
                                .quality(90)
                                .auto("format")
                                .url()}
                            alt={mainImage?.alt || title || ""}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    ) : null}
                </div>
                <div className='w-100 flex-col mb6'>
                    <span className=''>
                        {title}
                    </span>
                    {year}
                    <Categories categories={categories} />
                </div>
            </div>
        </main>
    )
}