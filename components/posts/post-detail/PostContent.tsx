import React from "react";
import ReactMarkdown from "react-markdown";

import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import { PostType } from "@/types";
import Image from "next/image";

interface Props {
  post: PostType;
}

const PostContent = ({ post }: Props) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers: object = {
    p(paragraph: { children?: boolean; node?: any }) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
