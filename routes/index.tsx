import { getCompiledMdxComponent } from '../components/MDXRenderer.tsx'; // Adjust path

export default async function HomePage() {
    // Await the function that gets the component
    const MDXContent = await getCompiledMdxComponent("./content/index.mdx");

    return (
        <main class="w3-main w3-container">
            <div class="w3-content">
                {/* Now MDXContent is a valid Preact component */}
                <MDXContent/>
            </div>
        </main>
    );
}
