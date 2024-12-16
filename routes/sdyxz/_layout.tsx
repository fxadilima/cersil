import { LayoutProps, RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
    skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function Layout({ Component, data }: LayoutProps) {
    return (
        <main class="w3-main w3-container">
            <Component/>
        </main>
    );
}

