import FeaturedPost from "@/components/home-page/FeaturedPost";
import Hero from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/helper/posts-util";
import { PostType } from "@/types";
import Head from "next/head";
import { Fragment } from "react";

interface Props {
  posts: PostType[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>TechScribe</title>
        <meta
          name="description"
          content="Discover the world of web development with our tech blog. Stay updated on industry trends and unleash your potential."
        />
      </Head>
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
