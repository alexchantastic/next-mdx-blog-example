import type { MDXComponents } from "mdx/types";
import { Heading } from "@/components/heading";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    ...components,
  };
}
