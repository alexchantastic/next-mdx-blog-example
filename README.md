# next-mdx-blog-example

This is an example project that demonstrates how a blog built with [Next.js](https://nextjs.org/) (App Router) and [MDX](https://www.mdxjs.com/) might work.

Read the full walkthrough at https://www.alexchantastic.com/building-a-blog-with-next-and-mdx

## Setup

Clone the repository:

```sh
git clone git@github.com:alexchantastic/next-mdx-blog-example.git
```

Change directories into the project and install dependencies:

```sh
cd next-mdx-blog-example
npm install
```

## Usage

Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project structure

```
src/
├── app/
│   ├── (posts)/
│   ├── category/
│   │   ├── [category]/
│   │   └── page/
│   │       └── [page]/
│   └── page/
│       └── [page]/
└── components/
```
