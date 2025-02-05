import { formatDate, getBlogPosts, getDocs, readMDXFile } from "app/lib/posts";
import path from "path";
import { CustomMDX } from "app/components/mdx";
import Link from "next/link";

export const metadata = {
  title: "Mechy Keyboard - Docs",
  description:
    "Mechy Keyboard Documentation - Learn how to use Mechy Keyboard and its features.",
};

export default function BlogPosts() {
  let allDocs = getDocs();
  return (
    <section className="w-full max-w-screen-md px-4 mx-auto overflow-x-hidden">
      <h1 className="mb-8 text-5xl font-bold tracking-tight">Our Blog</h1>
      <div>
        {allDocs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col mb-5 space-y-1 text-lg font-semibold transition-opacity duration-200 hover:opacity-80"
              href={`/docs/${post.slug}`}
            >
              <div className="flex flex-col items-start justify-between w-full space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">
                  {post.metadata.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
