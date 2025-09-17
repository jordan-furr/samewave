// app/categories/[slug]/page.tsx
import "@/app/styles/page.css";
import { sanityFetch } from "@/sanity/lib/live";
import { CAT_POSTS_QUERY, CATEGORY_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/app/components/post";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const categoryRes = await sanityFetch({
        query: CATEGORY_QUERY,
        params: { slug },
    });

    const category = categoryRes.data

    const { data: posts } = await sanityFetch({
        query: CAT_POSTS_QUERY,
        params: { categorySlug: slug },
    });

    return (
        <main>
            <div className="pageCont">
                <div className="mainContent">
                    <div className="postsHalf">
                        {posts.length > 0 ? (
                            posts.map((post: any) => (
                                <li key={post._id}>
                                    <Post {...post} />
                                </li>
                            ))
                        ) : (
                            <p>No posts found in this category.</p>
                        )}
                    </div>
                    <div className="infoHalf">
                        {category?.description && <p>{category.description}</p>}
                    </div>
                </div>
            </div>
        </main>
    );
}
