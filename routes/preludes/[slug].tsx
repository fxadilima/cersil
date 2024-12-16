import { HandlerContext, PageProps } from "$fresh/server.ts";
import { compile, run } from 'mdx-js/mdx';
import * as runtime from 'https://esm.sh/preact@10.22.0/jsx-runtime';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import {h, Component, createElement} from 'preact';
import renderToString from 'preact-render-to-string';
import { extract } from "$std/front_matter/yaml.ts";

interface Page {
    markdown: string;
    attrs: object;
}

export const handler: Handlers<Page> = {
    async GET(_req: Request, ctx: HandlerContext) {
        const realPath = Deno.cwd() + "/content/preludes/" + ctx.params.slug;
        try {
            const txt = await Deno.readTextFile(realPath);
            const { attrs, body } = extract(txt);
            const html = await getHTMLString(body, "Preludes - " + ctx.params.slug);
            return new Response(html, {
                status: 200,
                headers: {
                    "content-type": "text/html"
                }
            });
        }
        catch (err) {
            console.log(`Slug handler for preludes: ${err}`);
            return ctx.renderNotFound();
        }
    }
};

async function getHTMLString(content: string, title: string): string {
    const code = await compile(content, {
        outputFormat: "function-body",
        jsxImportSource: 'preact',
        rehypePlugins: [rehypeHighlight],
        remarkPlugins: [remarkGfm]
    });

    const {default: MDXContent} = await run(String(code), runtime);
    return `<!DOCTYPE html><html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=devive-width initial-scale=1.0">
    <title>${title}</title> 
    <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <main class="w3-main w3-container">
        <div class="w3-content">
          ${renderToString(<MDXContent/>)}
        </div>
      </main>
    </body>
    </html>`;
}

