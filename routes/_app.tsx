// routes/_app.tsx
import { type PageProps } from "$fresh/server.ts";
import Sidebar from '../components/Layout/Sidebar.tsx';

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wuxiapedia</title>
        <link rel="stylesheet" href="/w3.css" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body class="w3-black">
        <Sidebar />
        <main class="w3-padding-large w3-container" id="main">
          <div class="w3-panel" id="content" aria-label="Content">
            <Component />
          </div>
        </main>
      </body>
    </html>
  );
}
