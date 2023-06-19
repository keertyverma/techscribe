import React from "react";
import classes from "./FeaturedPost.module.css";
import PostGrid from "../posts/PostGrid";
import { PostType } from "@/types";

interface Props {
  posts: PostType[];
}

const FeaturedPost = ({ posts }: Props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
