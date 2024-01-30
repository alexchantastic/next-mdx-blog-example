import { categories, type Category } from "@/categories";
import { type Post } from "@/posts";
import { readdir } from "fs/promises";
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;

  // 404 if the category does not exist
  if (categories.indexOf(category) == -1) notFound();

  const slugs = (
    await readdir("./src/app/(posts)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await slugs.reduce<Promise<Post[]>>(async (acc, cur) => {
    const { name } = cur;
    const { metadata } = await import(`../../(posts)/${name}/page.mdx`);

    if (metadata.categories.indexOf(category) !== -1) {
      (await acc).push({ slug: name, ...metadata });
    }

    return acc;
  }, Promise.resolve([]));

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return (
    <main>
      <h1>Category: {category}</h1>
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
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat,
  }));
}
