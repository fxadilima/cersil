// routes/content/[...path].tsx
// I was able to render the page using the following functions
import { Handlers, PageProps } from "$fresh/server.ts";
import { getCompiledMdxComponent } from '../../components/MDXRenderer.tsx'; // Reusing your MDXRenderer
import { VNode } from 'preact';

interface PageData {
  title: string;
//  content: string;
// Change content to be a VNode (or a function component that returns VNode)
  // MDX component is a function that returns VNode
  MDXContentComponent: () => VNode;
}

interface MDXProps extends PageProps {
  data: PageData;
}

export const handler: Handlers<PageData> = {
    async GET(req, ctx) {
        const { path } = ctx.params; // This 'path' can be 'preludes' or 'preludes/dadu-1328'
        console.log("Requested path param:", path);

        let MDXContentComponent;
        try {
            // Pass './content/' as the base and 'path' as the parameter
            MDXContentComponent = await getCompiledMdxComponent('./content/', path);
        } catch (error) {
            console.error(`Handler caught error for path ${path}:`, error);
            // Render a 404 page or an error message
            return new Response("404 Not Found - Content Error", { status: 404 });
        }

        const pageData: PageData = {
            title: "Dynamic MDX Page",
            MDXContentComponent: MDXContentComponent,
        };
        return ctx.render(pageData);
    },
};

/*
export const handler: Handlers = {
    async GET(req, ctx) {
        const {path} = ctx.params;
        const Content = await getCompiledMdxComponent(`./content/${path}`);
        const page: PageData = {
            title: "Test Page",
            MDXContentComponent: Content
        };
        return ctx.render(page);
    }
}
*/

export default function Hello(props: MDXProps) {
    const MDX = props.data.MDXContentComponent;
    return (
        <main class="w3-container w3-padding-64" id="main">
            <div class="w3-content" id="hello">
                <MDX />
            </div>
        </main>
    );
};
