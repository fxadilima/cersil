import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Cerita Silat</title>
            <link rel="stylesheet" href="/styles.css" />
            <link rel="icon" type="image/svg+xml" href="/logo.svg"/>
        </head>
        <body>
            <nav class="w3-top w3-white w3-bar w3-card">
                <a href="/posts" class="w3-bar-item w3-btn w3-hover-black w3-right">Blogs</a>
                <a href="/" class="w3-bar-item w3-btn w3-hover-black w3-right">Home</a>
            </nav>
            <Component />
        </body>
        </html>
    );
}
