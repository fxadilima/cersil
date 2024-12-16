import { compile, run } from 'mdx-js/mdx';
import * as runtime from 'https://esm.sh/preact@10.22.0/jsx-runtime';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';


export default async function HomePage() {
    const txt = await Deno.readTextFile("./content/yttlj/1354/index.mdx");
    const code = await compile(txt, {
        outputFormat: "function-body",
        jsxImportSource: 'preact',
        rehypePlugins: [rehypeHighlight],
        remarkPlugins: [remarkGfm]
    });

    const {default: MDXContent} = await run(String(code), runtime);

    return (
        <main class="w3-main w3-container">
            <div class="w3-content">
                <MDXContent/>
            </div>
        </main>
    );
}

