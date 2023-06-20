import React from "react";
import ReactMarkdown from "react-markdown";

import { PostType } from "@/types";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";

interface Props {
  post: PostType;
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
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

    code(code: CodeProps) {
      const { inline, className, children, ...props } = code;
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, "")}
          style={atomDark}
          language={match[1]}
        />
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
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
