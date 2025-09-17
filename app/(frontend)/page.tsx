import "../styles/page.css";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  return (
    <div className="pageCont">
      <main>
        <div className="mainContent">
          {posts.map((post) => (
            <li key={post._id}>
              {post?.mainImage ? (
                <Image
                  className="w-100 postImg"
                  src={urlFor(post.mainImage)
                    .quality(90)
                    .auto("format")
                    .url()}
                  alt={post?.mainImage?.alt || ""}
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
              <div className="postTitle">
                {post?.title}
              </div>
            </li>
          ))}
        </div>
      </main>
    </div>
  );
}
