// routes/index.tsx (Main layout with navigation)
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>My MDX Site</title>
      </Head>
      <div class="w3-row">
        {/* Navigation links */}
        <nav class="w3-col l2 m3">
          <ul>
            <li><a href="/content/preludes/dadu-1328.mdx" f-partial="/content/preludes/dadu-1328.mdx">Home MDX</a></li>
            <li><a href="/content/preludes/" f-partial="/content/preludes/index">About MDX</a></li>
            {/* Add more links */}
          </ul>
        </nav>

        {/* Content area that will be updated */}
        <main class="w3-col l10 m9" f-partial-boundary>
            {/* Initial content */}
            <div class="w3-main w3-container">
                <div class="w3-content">
                    {/* Initial MDX content for the home page */}
                    {/* This part might need to be rendered using MDXRenderer initially too */}
                </div>
            </div>
        </main>
      </div>
    </>
  );
}
