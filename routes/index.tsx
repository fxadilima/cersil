// Okay, by reusing our ../utils/MDXRenderer.tsx and /routes/content/[...path].tsx
// my /routes/index.tsx is now shorter
import { MDData, getMarkdownComponent } from "../utils/MarkdownRenderer.tsx";
import { Head } from "$fresh/runtime.ts";

export default async function Home() {
  const page: MDData = await getMarkdownComponent(`${Deno.cwd()}/content/`, '');
  return (
    <>
      <Head>
        <title>{page.frontmatter.title}</title>
      </Head>
      {page.content}
    </>
  );
}
