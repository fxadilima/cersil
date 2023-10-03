import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";

export interface Post {
    slug: string;
    title: string;
    publishedAt: Date;
    content: string;
    snippet: string;
}

export async function getPosts(): Promise<Post[]> {
    const files = Deno.readDir(Deno.cwd() + "/posts");
    const promises = [];
    for await (const file of files) {
        const slug = file.name.replace(".md", "");
        promises.push(getPost(slug));
    }
    const posts = await Promise.all(promises) as Post[];
    posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
    const real_path = Deno.cwd() + "/posts/" + slug;
    const text = await Deno.readTextFile(join(`${Deno.cwd()}/posts`, `${slug}.md`));
    const { attrs, body } = extract(text);
    return {
        slug,
        title: attrs.title,
        publishedAt: new Date(attrs.published_at),
        content: body,
        snippet: attrs.snippet,
    };
}
