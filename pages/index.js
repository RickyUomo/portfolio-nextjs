import Head from "next/head";
import { PostCard, Categories, PostWidget } from "@/components";
import { getPosts } from "@/services";
import { getCategories } from "@/services";

export default function Home({ posts, categories }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Ricky Portfolio</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky top-8">
            <PostWidget />
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
}

// getStaticProps can only use in page component. the component in pages folder
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: {
      posts,
      categories,
    },
  };
}
