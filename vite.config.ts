import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: 'preact',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
      mdxExtensions: [".mdx"],
      mdExtensions: [".md"]
    }),
    preact(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // 💡 Tetap pakai rolldownOptions kebanggaan kita
    rolldownOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        docs: new URL('./docs/index.html', import.meta.url).pathname,
        blogs: new URL("./blogs.html", import.meta.url).pathname
      }
    }
  }
});

