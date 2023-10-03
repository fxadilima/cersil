import { HandlerContext } from "$fresh/server.ts";
import hljs from "https://esm.sh/highlight.js@11.8.0";
import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';
import {h, Component, createElement} from 'preact';
import { extract } from "$std/front_matter/any.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
    console.log(`buku: request = ${_req.url}`);
    let html = `<!DOCTYPE html>\n
<html lang="en">
<head>
<meta charset="UTF-8">\n
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cerita Silat | Buku</title>
<link rel="icon" type="image/svg+xml" href="/logo.svg"/>
<link rel="stylesheet" href="/styles.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
</head>
<body>
<main class="w3-main w3-container">
<h1>Memanah Rajawali</h1>
<a href="/" class="w3-btn w3-round w3-border"><i class="fa fa-home"></i> Home</a>
<div class="w3-content w3-container">
`;
    const txt = Deno.readTextFileSync(Deno.cwd() + "/content/README.md");
    const md = MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }
            return ''; // use external default escaping
        }
    }).use(MarkdownItFootnote);
    const { attr, body } = extract(txt);
    html += md.render(body) + "</div></main></body></html>";
    return new Response(html, {
        status: 200,
        headers: {
            "content-type": "text/html"
        }
    });
};
