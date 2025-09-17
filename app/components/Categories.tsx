import { POSTS_QUERYResult } from '@/sanity/types'

type CategoriesProps = {
  categories: NonNullable<POSTS_QUERYResult[0]>['categories']
}

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="f"
    >
      {category.title}
    </span>
  ))
}