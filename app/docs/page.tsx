import { readMDXFile } from "app/lib/posts";
import path from "path";
import { CustomMDX } from "app/components/mdx";

export const metadata = {
  title: "Mechy Keyboard - Docs",
  description:
    "Mechy Keyboard Documentation - Learn how to use Mechy Keyboard and its features.",
};

export default function BlogPosts() {
  const { content } = readMDXFile(
    path.join(process.cwd(), "content", "docs.mdx")
  );
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        Mechy Keyboard Documentation
      </h1>
      <article className="prose prose-quoteless prose-primary">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
