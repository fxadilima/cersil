import { Handlers, PageProps } from "$fresh/server.ts";
import { getMarkdownComponent, MDData } from '../../utils/MarkdownRenderer.tsx';
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<MDData> = {
  async GET(_req, ctx) {
    const { path } = ctx.params; // This 'path' can be 'preludes' or 'preludes/dadu-1328'

    let MDContent;
    try {
      // Pass './content/' as the base and 'path' as the parameter
      MDContent = await getMarkdownComponent('./content/', path);
    } catch (error) {
      console.error(`Handler caught error for path ${path}:`, error);
      // Render a 404 page or an error message
      return ctx.renderNotFound();
    }
    return ctx.render(MDContent);
  },
};

export default function RenderPage(props: PageProps<MDData>) {
  return (
    <>
      <Head>
        <title>{props.data.frontmatter.title}</title>
      </Head>
      {props.data.content}
    </>
  );
};
