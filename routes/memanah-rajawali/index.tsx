import { RouteConfig, Handlers } from "$fresh/server.ts";
import { renderToString } from "preact-render-to-string";

export const config: RouteConfig = {
    skipInheritedLayouts: true, // Skip already inherited layouts
};

/*
export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "About");
        return resp;
    },
};
*/

export default function IndexPage() {
    return (
        <div class="w3-content">
            <p>This is index page of Memanah Rajawali.</p>
            <a href="/memanah-rajawali/bab1.md">Go to Bab 1</a>
        </div>
    );
}
