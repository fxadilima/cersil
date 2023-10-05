import {HandlerContext, PageProps} from '$fresh/server.ts';
import hljs from "https://esm.sh/highlight.js@11.8.0";
import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';
import {h, Component, createElement} from 'preact';
import { extract } from "$std/front_matter/any.ts";

export interface Page {
    markdown: string;
    attributes: object;
}

export const handler: Handlers<Page> = {
    async GET(_req: Request, ctx: HandlerContext) {
        const str1 = Deno.readTextFileSync(Deno.cwd() + "/content/website/frontpage.md");
        const md = MarkdownIt({
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        hljs.highlight(str, { language: lang }).value;
                    } catch (__) {}
                }
                return ''; // use external default escaping
            },
            html: true
        }).use(MarkdownItFootnote);
        const { attrs, body } = extract(str1);
        const res = md.render(body);
        return ctx.render({markdown: res, data: attrs});
    }
}

export default function Home(props: PageProps<Page>) {
    /*
    const str1 = Deno.readTextFileSync(Deno.cwd() + "/content/website/frontpage.md");
    const md = MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }
            return ''; // use external default escaping
        },
        html: true
    }).use(MarkdownItFootnote);
    const { attrs, body } = extract(str1);
    const res = md.render(body);
    */
   const pageData = props.data;
    return (
        <div class="w3-container">
            <div class="w3-container" dangerouslySetInnerHTML={{__html: pageData.markdown}}/>
            <div class="w3-container">
                <h2>🥬 Halaman Lain</h2>
                <ul class="w3-ul">
                    <li>
                        <a href="/memanah-rajawali" class="w3-btn w3-hover-black">Memanah Rajawali</a>
                    </li>
                    <li>
                        <a href="/api/buku" class="w3-btn w3-hover-black">Daftar Buku</a>
                    </li>
                    <li>
                        <a href="/test1" class="w3-btn w3-hover-black">Test 1 Page</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
