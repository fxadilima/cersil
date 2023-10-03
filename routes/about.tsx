import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "About");
        return resp;
    },
};

export default function AboutPage() {
    return (
        <header className="w3-content w3-container">
            <h1>About</h1>
            <p>This is the about page.</p>
            <a className="w3-btn w3-round" href="/"><i class="fa fa-home"></i> HOME</a>
        </header>
    );
}
