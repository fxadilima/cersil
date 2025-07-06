// components/MDXRenderer.tsx
import { compile, run } from 'mdx-js/mdx';
import * as runtime from 'https://esm.sh/preact@10.22.0/jsx-runtime';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { ComponentChildren, VNode } from 'preact';

interface MDXOptions {
    components?: Record<string, ComponentChildren>;
}

export async function getCompiledMdxComponent(
    basePath: string, // This will be like './content/'
    paramPath: string, // This is the 'path' from ctx.params, e.g., 'preludes' or 'preludes/dadu-1328'
    options?: MDXOptions,
): Promise<() => VNode> {
    let targetFilePath = '';

    try {
        // Construct potential file path (e.g., ./content/preludes.mdx or ./content/preludes/dadu-1328.mdx)
        const potentialMdxFile = `${basePath}${paramPath}.mdx`;
        // Construct potential directory path (e.g., ./content/preludes)
        const potentialDirectory = `${basePath}${paramPath}`;

        let fileStat;
        try {
            // Try to stat the path with .mdx extension first (most common case)
            fileStat = await Deno.stat(potentialMdxFile);
            if (fileStat.isFile) {
                targetFilePath = potentialMdxFile;
            }
        } catch (e) {
            // If .mdx file not found, it might be a directory or a non-existent path
            if (e instanceof Deno.errors.NotFound) {
                // Try to stat the path as a directory
                try {
                    const dirStat = await Deno.stat(potentialDirectory);
                    if (dirStat.isDirectory) {
                        // If it's a directory, look for an index.mdx inside it
                        targetFilePath = `${potentialDirectory}/index.mdx`;
                        // Verify index.mdx exists
                        const indexMdxStat = await Deno.stat(targetFilePath);
                        if (!indexMdxStat.isFile) {
                            throw new Deno.errors.NotFound(`No index.mdx found in directory: ${potentialDirectory}`);
                        }
                    } else {
                        // If not a file and not a directory, it's truly not found
                        throw new Deno.errors.NotFound(`Content not found: ${paramPath}`);
                    }
                } catch (dirError) {
                    // If directory stat also fails (e.g., directory doesn't exist)
                    throw new Deno.errors.NotFound(`Content not found: ${paramPath}`);
                }
            } else {
                // Other Deno.stat errors
                throw e;
            }
        }

        if (!targetFilePath) {
             throw new Deno.errors.NotFound(`Content resolution failed for: ${paramPath}`);
        }

        const txt = await Deno.readTextFile(targetFilePath);
        const code = await compile(txt, {
            outputFormat: "function-body",
            jsxImportSource: 'preact',
            rehypePlugins: [rehypeHighlight],
            remarkPlugins: [remarkGfm],
        });

        const { default: MDXContent } = await run(String(code), {
            ...runtime,
            components: options?.components || {},
        });

        return MDXContent as () => VNode;
    } catch (error) {
        console.error(`Error loading or compiling MDX for path '${paramPath}':`, error);
        if (error instanceof Deno.errors.NotFound) {
            return () => <p style="color: red;">Error: Content not found for "{paramPath}".</p>;
        }
        return () => <p style="color: red;">Error rendering content: {(error as Error).message}</p>;
    }
}


/*
import { compile, run } from 'mdx-js/mdx';
import * as runtime from 'https://esm.sh/preact@10.22.0/jsx-runtime';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { ComponentChildren } from 'preact'; // Import for better typing

interface MDXRendererProps {
    filePath: string;
    // Add any custom components you want to pass to MDX
    components?: Record<string, ComponentChildren>;
}

interface MDXOptions {
    // Add any custom components you want to pass to MDX
    components?: Record<string, ComponentChildren>;
}

export async function MDXRenderer(props: MDXRendererProps) {
    try {
        const txt = await Deno.readTextFile(props.filePath);
        const code = await compile(txt, {
            outputFormat: "function-body",
            jsxImportSource: 'preact',
            rehypePlugins: [rehypeHighlight],
            remarkPlugins: [remarkGfm]
        });

        // Pass custom components if provided
        const { default: MDXContent } = await run(String(code), {
            ...runtime,
            components: props.components || {},
        });

        return <MDXContent />;
    } catch (error) {
        console.error(`Error rendering MDX from ${props.filePath}:`, error);
        return <p>Error loading content.</p>; // Basic error handling
    }
}

// This function now returns the Preact Component directly
export async function getCompiledMdxComponent(filePath: string, options?: MDXOptions) {
    try {
        const txt = await Deno.readTextFile(filePath);
        const code = await compile(txt, {
            outputFormat: "function-body",
            jsxImportSource: 'preact',
            rehypePlugins: [rehypeHighlight],
            remarkPlugins: [remarkGfm]
        });

        const { default: MDXContent } = await run(String(code), {
            ...runtime,
            components: options?.components || {},
        });

        // MDXContent is now a Preact FunctionComponent
        return MDXContent;
    } catch (error) {
        console.error(`Error loading and compiling MDX from ${filePath}:`, error);
        // Return a fallback component or throw the error to be caught by the route
        return () => <p>Error loading content.</p>;
    }
}

*/
