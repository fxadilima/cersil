import { RouteConfig, Handlers } from "$fresh/server.ts";
import { renderToString } from "preact-render-to-string";

export const config: RouteConfig = {
    skipInheritedLayouts: true, // Skip already inherited layouts
};

export const handler: Handlers = {
    async GET(_req) {
        const html = "<!doctype html>\n" + renderToString(
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Cerita Silat | Test 1 Page</title>
                    <link rel="stylesheet" href="/styles.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="icon" type="image/svg+xml" href="/logo.svg"/>
                </head>
                <body>
                    <MyPage />
                </body>
            </html>
        );
        return new Response(html, {
            status: 200,
            headers: {
                "content-type": "text/html"
            }
        });
    },
};

function MyPage() {
    return (
        <div class="w3-panel w3-card" style="width:300px">
            <img src="/logo.svg" alt="Logo" width="100%"/>
            <div class="w3-container w3-center">
                <h3>Test Page</h3>
                <p>
                    Testing skipInheritedLayouts Page.
                </p>
                <a class="w3-btn w3-hover-black w3-round w3-border" href="/"><i class="fa fa-home"></i> Home</a>
                <p></p>
            </div>
        </div>
    );
}
