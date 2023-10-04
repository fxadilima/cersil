import hljs from "https://esm.sh/highlight.js@11.8.0";
import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';
import {h, Component, createElement} from 'preact';
import { extract } from "$std/front_matter/any.ts";

export default function Home() {
    const str1 = Deno.readTextFileSync(Deno.cwd() + "/content/README.md");
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
    const { attr, body } = extract(str1);
    const res = md.render(body);
    return (
        <div class="w3-container">
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
            <div class="w3-container" dangerouslySetInnerHTML={{__html: res}}/>
        </div>
    );
}
