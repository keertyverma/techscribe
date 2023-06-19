import FeaturedPost from "@/components/home-page/FeaturedPost";
import Hero from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/helper/posts-util";
import { PostType } from "@/types";
import { Fragment } from "react";

interface Props {
  posts: PostType[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <Fragment>
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
