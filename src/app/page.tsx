import { categories } from "@/categories";
import { Posts } from "@/components/posts";
import { getPosts } from "@/posts";

export default async function Home() {
  const posts = await getPosts();

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      <Posts posts={posts} />

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
