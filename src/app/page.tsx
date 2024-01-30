import { categories } from "@/categories";
import { type Post } from "@/posts";
import { readdir } from "fs/promises";

export default async function Home() {
  const slugs = (
    await readdir("./src/app/(posts)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts: Post[] = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      <ol>
        {posts.map(({ slug, title, publishDate, categories }) => (
          <li key={slug}>
            <h2>
              <a href={slug}>{title}</a>
            </h2>
            <p>
              <strong>Published:</strong>{" "}
              {new Date(publishDate).toLocaleDateString()}{" "}
              <strong>Categories:</strong>{" "}
              {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)}
            </p>
          </li>
        ))}
      </ol>

      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <a href={`category/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
