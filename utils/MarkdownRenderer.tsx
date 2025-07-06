// deno-lint-ignore-file
import { ComponentChildren, type VNode, createElement } from 'preact';
import MarkdownIt from 'https://esm.sh/markdown-it@14.1.0';
import MarkdownItFootnote from 'https://esm.sh/markdown-it-footnote';
import { extract } from "$std/front_matter/yaml.ts";
import MarkdownItAnchor from "https://esm.sh/markdown-it-anchor";

export function createPreactComponentFromHtml(htmlString: string): () => VNode {
  return () => createElement('div', { dangerouslySetInnerHTML: { __html: htmlString } }) as VNode;
}

export interface Frontmatter {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  [key: string]: unknown; // Allow for arbitrary extra fields
}

// Define the return type of our new function
export interface MDData {
  frontmatter: Frontmatter;
  content: VNode; // The Preact component for the main content
}


export async function getMarkdownComponent(
    basePath: string, // This will be like './content/'
    paramPath: string // This is the 'path' from ctx.params, e.g., 'preludes' or 'preludes/dadu-1328
): Promise<MDData> {
    let targetFilePath = '';

    try {
        // Construct potential file path (e.g., ./content/preludes.mdx or ./content/preludes/dadu-1328.mdx)
        const potentialMdxFile = `${basePath}${paramPath}.md`;
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
                        targetFilePath = `${potentialDirectory}/index.md`;
                        // Verify index.md exists
                        const indexMdxStat = await Deno.stat(targetFilePath);
                        if (!indexMdxStat.isFile) {
                            throw new Deno.errors.NotFound(`No index.md found in directory: ${potentialDirectory}`);
                        }
                    } else {
                        // If not a file and not a directory, it's truly not found
                        throw new Deno.errors.NotFound(`Content not found: ${paramPath}`);
                    }
                } catch {
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
        const { attrs, body } = extract(txt);
        const md = new MarkdownIt({
            html: true,
            linkify: true
        }).use(MarkdownItFootnote)
        .use(MarkdownItAnchor);

        const html = md.render(body);
        const content = <div class="w3-container" id="markdown-content" dangerouslySetInnerHTML={{__html: html}} />;
        const anAttr = attrs as Frontmatter;
        return {
            frontmatter: anAttr,
            content: content as VNode
        };
    } catch (error) {
        console.error(`Error loading or compiling MDX for path '${paramPath}', in baseurl: '${basePath}':`, error);
        throw error;
    }
}
