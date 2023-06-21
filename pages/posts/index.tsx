import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/helper/posts-util";
import { PostType } from "@/types";
import Head from "next/head";
import { Fragment } from "react";

interface Props {
  posts: PostType[];
}

const AllPostPage = ({ posts }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
