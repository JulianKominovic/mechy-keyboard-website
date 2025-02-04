import { readMDXFile } from "app/lib/posts";
import path from "path";
import { CustomMDX } from "app/components/mdx";

export const metadata = {
  title: "Mechy Keyboard - Changelog",
  description:
    "Mechy Keyboard Changelog - Stay up to date with the latest changes to Mechy Keyboard.",
};

export default function BlogPosts() {
  const { content } = readMDXFile(
    path.join(process.cwd(), "content", "changelog.mdx")
  );
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        See what's new with Mechy Keyboard
      </h1>
      <article className="prose prose-quoteless prose-primary">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
