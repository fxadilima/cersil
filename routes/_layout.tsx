import { LayoutProps } from "$fresh/server.ts";
import {LeftPanel, MenuButton} from '../islands/LeftPanel.tsx';

export default function Layout({ Component, data: object }: LayoutProps) {
    // do something with state here
    console.log(`Layout: data = ${typeof data}`);
    return (
        <>
            <LeftPanel>
                <a href="/api/buku" class="w3-bar-item w3-btn w3-hover-blue"><i class="fa fa-book"></i> Daftar Buku</a>
                <a href="/posts" class="w3-bar-item w3-btn w3-hover-blue"><i class="fa fa-book"></i> Blogs</a>
                <a href="/about" class="w3-bar-item w3-btn w3-hover-blue"><i class="fa fa-exclamation-circle"></i> About</a>
            </LeftPanel>
            <main class="w3-main" style="margin-left:300px;">
                <MenuButton>
                    <header class="w3-container">
                        <h1>Cerita Silat</h1>
                    </header>
                </MenuButton>
                <Component />
            </main>
        </>
    );
}

/*
            <div class="w3-sidebar w3-bar-block w3-black w3-collapse w3-card w3-animate-left" style="width:300px;" id="mySidebar">
                <button class="w3-bar-item w3-button w3-large w3-hide-large" id="btnClose">Close &times;</button>
                <a href="/api/buku" class="w3-bar-item w3-btn"><i class="fa fa-book"></i> Daftar Buku</a>
                <a href="/posts" class="w3-bar-item w3-btn"><i class="fa fa-book"></i> Blogs</a>
                <a href="/about" class="w3-bar-item w3-btn"><i class="fa fa-exclamation-circle"></i> About</a>
            </div>

 */