import MarkdownIt from 'https://esm.sh/markdown-it@14.1.0';
import MarkdownItFootnote from 'https://esm.sh/markdown-it-footnote';
import {h, Component, createElement} from 'preact';

export default async function Home() {
    const realPath = Deno.cwd() + "/content/dgsd/index.md";
    const txt = await Deno.readTextFile(realPath);
    const md = new MarkdownIt({html: true}).use(MarkdownItFootnote);
    const html = md.render(txt);
    return (
      <div class="w3-content" dangerouslySetInnerHTML={{__html: html}} />
    );
}


