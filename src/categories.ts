export const categories = ["dog", "cat", "rock"] as const;

export type Category = typeof categories[number];