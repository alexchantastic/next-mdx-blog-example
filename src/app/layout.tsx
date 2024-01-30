import type { Metadata } from "next";

import "./global.css";

export const metadata: Metadata = {
  title: "Next.js MDX Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
