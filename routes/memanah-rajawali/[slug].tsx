import { HandlerContext, PageProps } from "$fresh/server.ts";
import hljs from "https://esm.sh/highlight.js@11.8.0";
import MarkdownIt from 'markdown-it';
import MarkdownItFootnote from 'markdown-it-footnote';
import {h, Component, createElement} from 'preact';
import renderToSring from 'preact-render-to-string';
import { extract } from "$std/front_matter/yaml.ts";

interface Page {
    markdown: string;
//    data: Record<string, unknown>;
    attrs: object;
}

export const handler: Handlers<Page> = {
    async GET(_req: Request, ctx: HandlerContext) {
        //console.log(`Slug: context = ${JSON.stringify(ctx)}`);
        //console.log(`ctx.params = ${JSON.stringify(ctx.params)}`);
        //console.log(`Slug: ${ctx.params.slug}`);
        const realPath = Deno.cwd() + "/content/sdyxz/" + ctx.params.slug;
        //console.log(`realPath = ${realPath}`);
        try {
            const txt = await Deno.readTextFile(realPath);
            const { attrs, body } = extract(txt);
            console.log(`Handler: attr => ${attrs}`);
            const retval = getHTMLString(body);
            //ctx.state = attrs;
            return ctx.render({markdown: retval, attrs: attrs});
        }
        catch (err) {
            console.log(`Slug handler for SDYXZ: ${err}`);
            return ctx.renderNotFound();
        }
    }
};

export default function RenderBab(props: PageProps<Page>) {
    //console.log(`Render: ${JSON.stringify(props.data.attrs)}`);
    return (
        <div class="w3-container" dangerouslySetInnerHTML={{__html: props.data.markdown}}/>
    );
}

/*
---
layout: default
chapter: 1
title: 🦅 Insiden Di Tengah Badai Salju
author: FX. Adi Lima
image: https://res.cloudinary.com/drzjshskk/image/upload/e_contrast:85,q_auto:best/v1676662508/sdyxz/originals/ch01_qqa6or.jpg
description: >
  Akhirnya si pendeta tertawa, mendadak telapak kanannya menghantam pegangan tombak dengan kecepatan seperti angin. 
  Yang Tiexin merasa pangkal jempol dan telunjuknya mati rasa, dan dengan segera ia melepaskan tombak ke tanah 
  yang diselimuti salju.
nextPage: bab2
prevPage: intro
---
*/

function getHTMLString(content: string): string {
    const md = new MarkdownIt({
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
    return md.render(content);
}
