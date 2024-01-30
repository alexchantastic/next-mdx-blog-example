import { type Category } from "./categories";

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
}