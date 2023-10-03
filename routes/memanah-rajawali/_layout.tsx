import { LayoutProps } from "$fresh/server.ts";
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
    skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function Layout({ Component, state }: LayoutProps) {
    // do something with state here
    //console.log(`Layout SDYXZ: state = ${JSON.stringify(state)}`);
    return (
        <>
            <div class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-collapse" style="width:300px;" id="leftMenu">
                <button class="w3-bar-item w3-button w3-large w3-hover-none w3-hide-large" id="btnLeftClose">Close &times;</button>
                <a href="/api/buku" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-book"></i> Daftar Buku</a>
                <a href="/posts" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-book"></i> Blogs</a>
                <a href="/about" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-exclamation-circle"></i> About</a>
            </div>
            <div class="w3-sidebar w3-bar-block w3-card w3-animate-right w3-collapse" style="width:300px;right:0" id="rightMenu">
                <button class="w3-bar-item w3-button w3-large w3-hide-large" id="btnRightClose">Close &times;</button>
                <a href="/api/buku" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-book"></i> Daftar Buku</a>
                <a href="/posts" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-book"></i> Blogs</a>
                <a href="/about" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-exclamation-circle"></i> About</a>
            </div>
            <main class="w3-main" style="margin-left:300px;margin-right:300px;margin-top:0px;margin-bottom:10px;">
                <div class="w3-hide-large">
                    <button class="w3-button w3-xlarge w3-left w3-hover-none" id="btnLeftOpen"><i class="fa fa-bars"></i></button>
                    <button class="w3-button w3-xlarge w3-right w3-hover-none" id="btnRightOpen"><i class="fa fa-caret-square-o-down"></i></button>
                </div>
                <div class="w3-container">
                    <h1>Memanah Rajawali</h1>
                    <Component/>
                </div>
            </main>
            <script src="/scripts/sdyxz.js"></script>
        </>
    );
}
