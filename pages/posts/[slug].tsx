import PostContent from "@/components/posts/post-detail/PostContent";
import React, { Fragment } from "react";
import { GetStaticProps } from "next";
import { getPostData, getPostFiles } from "@/helper/posts-util";
import { PostType } from "@/types";
import Head from "next/head";

interface Props {
  post: PostType;
}

const PostDetailPage = ({ post }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
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
