/** jsxImportSource https://esm.sh/preact@10.22.0/jsx-runtime */
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pedang Langit dan Golok Pembunuh Naga</title>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="/styles.css"/>
            </head>
            <body>
                <Component />
            </body>
        </html>
    );
}

