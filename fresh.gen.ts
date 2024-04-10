// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $about from "./routes/about.tsx";
import * as $api_buku from "./routes/api/buku.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $index from "./routes/index.tsx";
import * as $memanah_rajawali_slug_ from "./routes/memanah-rajawali/[slug].tsx";
import * as $memanah_rajawali_layout from "./routes/memanah-rajawali/_layout.tsx";
import * as $memanah_rajawali_index from "./routes/memanah-rajawali/index.tsx";
import * as $posts_slug_ from "./routes/posts/[slug].tsx";
import * as $posts_index from "./routes/posts/index.tsx";
import * as $test1 from "./routes/test1.tsx";
import * as $LeftPanel from "./islands/LeftPanel.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/about.tsx": $about,
    "./routes/api/buku.ts": $api_buku,
    "./routes/api/joke.ts": $api_joke,
    "./routes/index.tsx": $index,
    "./routes/memanah-rajawali/[slug].tsx": $memanah_rajawali_slug_,
    "./routes/memanah-rajawali/_layout.tsx": $memanah_rajawali_layout,
    "./routes/memanah-rajawali/index.tsx": $memanah_rajawali_index,
    "./routes/posts/[slug].tsx": $posts_slug_,
    "./routes/posts/index.tsx": $posts_index,
    "./routes/test1.tsx": $test1,
  },
  islands: {
    "./islands/LeftPanel.tsx": $LeftPanel,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
