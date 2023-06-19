import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "content/posts");

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extentions
  const filePath = path.join(postDirectory, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);
  const { title, image, excerpt, date, isFeatured } = data;

  const postData = {
    slug: postSlug,
    title,
    content: content,
    excerpt,
    date,
    image,
    isFeatured,
  };

  return postData;
}

export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
