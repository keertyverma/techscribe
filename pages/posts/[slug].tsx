import PostContent from "@/components/posts/post-detail/PostContent";
import React from "react";
import { GetStaticProps } from "next";
import { getPostData, getPostFiles } from "@/helper/posts-util";
import { PostType } from "@/types";

interface Props {
  post: PostType;
}

const PostDetailPage = ({ post }: Props) => {
  return <PostContent post={post} />;
};

export function getStaticPaths() {
  const slugs = getPostFiles().map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const postData = getPostData(params?.slug as string);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //10 min
  };
};

export default PostDetailPage;
