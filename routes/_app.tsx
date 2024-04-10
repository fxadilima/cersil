import { AppProps } from "$fresh/server.ts";

export default function App({ Component, data }: AppProps) {
    //console.log(`App: data = ${JSON.stringify(data)}`);
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{data?.state?.title === undefined ? "Cerita Silat" : data.state.title}</title>
                <link rel="icon" type="image/svg+xml" href="/logo.svg"/>
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </head>
            <body>
                <Component />
            </body>
        </html>
    );
}
