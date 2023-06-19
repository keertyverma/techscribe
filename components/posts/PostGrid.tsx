import React from "react";
import classes from "./PostGrid.module.css";
import { PostType } from "@/types";
import PostItem from "./PostItem";

interface Props {
  posts: PostType[];
}

const PostGrid = ({ posts }: Props) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
