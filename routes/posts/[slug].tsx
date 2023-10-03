import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from '$fresh/runtime.ts';
import { Post, getPost } from '../../utils/posts.ts';
import hljs from "https://esm.sh/highlight.js@11.8.0";

import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';
import {h, Component} from 'preact';
import {PreactHTMLConverter} from 'preact-html-converter';

export const handler: Handlers<Post> = {
    async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
}};

export default function PostPage(props: PageProps<Post>) {
    //const converter = PreactHTMLConverter();
    const md = new MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return `<div class="w3-panel w3-padding-16 w3-border w3-round">${hljs.highlight(str, { language: lang }).value}</div>`;
                } catch (__) {}
            }
            return ''; // use external default escaping
        }
    }).use(MarkdownItFootnote);
    const post = props.data;
    //const html = md.render(post.content);
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content="{post.snippet}"/>
                <meta name="author" content="FX. Adi Lima"/>
            </Head>
            <main class="w3-main w3-padding-32">
                <div class="w3-content">
                    <header class="w3-container">
                        <h1>{post.title}</h1>
                        <time>
                        {new Date(post.publishedAt).toLocaleString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            timeZone: "Asia/Jakarta",
                            timeZoneName: "short",
                            hour12: false,
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric'
                        })}
                        </time>
                    </header> 
                    <div class="w3-container" dangerouslySetInnerHTML={{__html: md.render(post.content)}}/>
                </div>
            </main>
        </>
    )
}
