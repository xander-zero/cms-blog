import Head from "next/head";
import Categories from "../components/Categories/Categories";
import PostCard from "../components/PostCard/PostCard";
import PostWidget from "../components/PostWidget/PostWidget";

import { getPosts } from "../services/index";

export default function Home({ posts }) {
  // const posts = [
  //   {
  //     title: "React Testing",
  //     excerpt: "Learn React Testing",
  //   },
  //   {
  //     title: "React with tailwindcss",
  //     excerpt: "Learn React with tailwindcss",
  //   },
  // ];
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}
