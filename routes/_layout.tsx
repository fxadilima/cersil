import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: LayoutProps) {
    // do something with state here
    console.log(`Layout: state = ${JSON.stringify(state)}`);
    return (
        <>
            <div class="w3-sidebar w3-bar-block w3-white w3-collapse w3-card w3-animate-left" style="width:200px;" id="mySidebar">
                <button class="w3-bar-item w3-button w3-large w3-hide-large" id="btnClose">Close &times;</button>
                <a href="/posts" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-book"></i> Blogs</a>
                <a href="/about" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-exclamation-circle"></i> About</a>
            </div>
            <main class="w3-main" style="margin-left:200px">
                <div class="w3-black">
                    <button class="w3-button w3-xlarge w3-hide-large" id="btnOpen"><i class="fa fa-bars"></i></button>
                </div>
                <Component />
            </main>
            <script src="/scripts/test1.js"></script>
        </>
    );
}
