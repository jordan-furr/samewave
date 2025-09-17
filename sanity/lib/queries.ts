import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...18]{
  _id, 
  title, 
  slug, 
  mainImage,
  year,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  )
}`)

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, 
  body, 
  mainImage,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title,
      year
    },
    []
  )
}`)

export const CAT_POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current) && $slug in categories[]->slug.current][0...18]{
  _id, 
  title, 
  slug, 
  mainImage,
  year,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  )
}`)

export const CATEGORY_QUERY = defineQuery(`*[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    description,
    slug
  }
  `)