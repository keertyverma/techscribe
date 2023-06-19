import React from "react";
import ReactMarkdown from "react-markdown";

import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import { PostType } from "@/types";

interface Props {
  post: PostType;
}

const PostContent = ({ post }: Props) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
