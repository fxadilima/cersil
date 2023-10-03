import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "About");
        return resp;
    },
};

export default function IndexPage() {
    return (
        <div class="w3-content">
            <p>This is index page of Memanah Rajawali.</p>
            <a href="/memanah-rajawali/bab1.md">Go to Bab 1</a>
        </div>
    );
}
