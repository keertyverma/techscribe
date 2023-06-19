import React from "react";
import classes from "./AllPosts.module.css";
import { PostType } from "@/types";
import PostGrid from "./PostGrid";

interface Props {
  posts: PostType[];
}

const AllPosts = ({ posts }: Props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
