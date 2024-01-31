import { categories, type Category } from "@/categories";
import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import {
  getPaginatedPostsByCategory,
  postsPerPage,
} from "@/posts";
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;

  // 404 if the category does not exist
  if (categories.indexOf(category) == -1) notFound();

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main>
      <h1>Category: {category}</h1>
      <Posts posts={posts} />

      <Pagination
        baseUrl={`/category/${category}/page`}
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
