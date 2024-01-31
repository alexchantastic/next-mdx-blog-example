import { readdir } from "fs/promises";
import { type Category } from "./categories";

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
}

export async function getPosts(): Promise<Post[]> {
  const slugs = (
    await readdir("./src/app/(posts)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  return posts;
}

export async function getPostsByCategory({ category }: { category: Category }) {
  const allPosts = await getPosts();

  const posts = allPosts.filter(
    (post) => post.categories.indexOf(category) !== -1
  );

  return posts;
}
