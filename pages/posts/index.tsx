import AllPosts from "@/components/posts/AllPosts";
import { PostType } from "@/types";
import React from "react";

const DUMMY_POSTS: PostType[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production.Unlock the power of server-side rendering and effortless React development with Next.js. Create fast and dynamic web applications with ease. Stay ahead of the curve with Next.js and elevate your web development projects.",
    date: "2023-06-19",
  },
  {
    slug: "getting-started-with-nextjs-2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production.Unlock the power of server-side rendering and effortless React development with Next.js. Create fast and dynamic web applications with ease. Stay ahead of the curve with Next.js and elevate your web development projects.",
    date: "2023-06-19",
  },
  {
    slug: "getting-started-with-nextjs-3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production.Unlock the power of server-side rendering and effortless React development with Next.js. Create fast and dynamic web applications with ease. Stay ahead of the curve with Next.js and elevate your web development projects.",
    date: "2023-06-19",
  },
  {
    slug: "getting-started-with-nextjs-4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production.Unlock the power of server-side rendering and effortless React development with Next.js. Create fast and dynamic web applications with ease. Stay ahead of the curve with Next.js and elevate your web development projects.",
    date: "2023-06-19",
  },
];

const AllPostPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostPage;
