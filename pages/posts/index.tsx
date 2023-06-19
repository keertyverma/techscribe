import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/helper/posts-util";
import { PostType } from "@/types";

interface Props {
  posts: PostType[];
}

const AllPostPage = ({ posts }: Props) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
