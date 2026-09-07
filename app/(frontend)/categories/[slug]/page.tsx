// app/categories/[slug]/page.tsx
import "@/app/styles/page.css";
import { sanityFetch } from "@/sanity/lib/live";
import { CAT_POSTS_QUERY, CATEGORY_QUERY, CATEGORY_SLUGS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/components/post";

// Prerender every category at build time instead of rendering on demand.
export async function generateStaticParams() {
    const slugs = await client.fetch(CATEGORY_SLUGS_QUERY);
    return slugs.filter((s): s is { slug: string } => Boolean(s.slug));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const [{ data: posts }, { data: category }] = await Promise.all([
        sanityFetch({ query: CAT_POSTS_QUERY, params: { slug } }),
        sanityFetch({ query: CATEGORY_QUERY, params: { slug } }),
    ]);

    if (!posts) return <p>Category not found</p>;

    return (
        <main>
            <div className="pageCont">
                <div className="mainContent">
                    <div className="grid-bg"></div>
                    <ul className="postsHalf">
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <li key={post._id}>
                                    <Post {...post} priority={index < 4} />
                                </li>
                            ))
                        ) : (
                            <p>No posts found in this category.</p>
                        )}
                    </ul>
                    <div className="infoHalf">
                        {category?.description && <p>{category.description}</p>}
                    </div>
                </div>
            </div>
        </main>
    );
}
