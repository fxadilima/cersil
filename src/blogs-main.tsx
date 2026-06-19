import { render } from 'preact';
import './syntax.css';
import { LocationProvider, Router, Route, useLocation } from 'preact-iso';
import { useEffect } from "preact/hooks";

export const NotFound = () => {
    const url = useLocation();
    const path = url.path;

    useEffect(() => {
        if (path === '/') {
            window.location.replace('/index.html');
        } else if (path === '/linear-pages/sang-jendral') {
            window.location.replace('/linear-pages/sang-jendral.html');
        } else {
            // JALUR PENYELAMAT: Jika tersasar ke tempat lain, 
            // paksa browser redirect ke halaman utama agar tidak blank putih!
            console.log(`[NotFound]: Path tidak dikenal (${path}), melempar ke /index.html`);
            window.location.replace('/index.html');
        }
    }, [path]);

    // Berikan teks loading standar atau spinner, jangan murni null agar user tahu ada proses berjalan
    return (
        <div className="w3-container w3-text-center">
            <p className="mt-2 text-muted">Mengarahkan pendekar ke jalan yang benar...</p>
        </div>
    );
};

export const Blogs = () => (
    <div class="w3-container">
        <h1>Dokumentasi Di Halaman HTML</h1>
        <p><a class="w3-btn w3-round w3-blue" href="/blogs/books">Blog Books</a></p>
    </div>
);

export function App() {
    const Books = () => {
        return (
            <div class="w3-container">
                <h1>Books!</h1>
                <p><a class="w3-btn w3-blue w3-round" href="/blogs">Ke Blogs (Tanpa embel-embel .html)</a></p>
                <p><a class="w3-btn w3-blue w3-round" href="/blogs/docs">Ke Dokumentasi Blogs</a></p>
                <p><a class="w3-btn w3-blue w3-round" href="/">Ke HOME (Tanpa membuka halaman baru)</a></p>
                <p><a class="w3-btn w3-blue w3-round" href="/" target="_self" rel="external">Kembali ke HOME</a></p>
            </div>
        );
    };
    const Docs = () => {
        return (
            <div class="w3-container">
                <h1>Dokumentasi Blog</h1>
                <p><a class="w3-btn w3-blue w3-round" href="/blogs.html">Ke Blogs</a></p>
                <p><a class="w3-btn w3-blue w3-round" href="/" target="_blank">Kembali ke HOME</a></p>
                <div class="w3-container">
                    <h2>Menu Sang Jendral</h2>
                    <p><a class="w3-btn w3-blue w3-round" href="/linear-pages/sang-jendral">Halaman Utama</a></p>
                </div>
            </div>
        );
    };
    return (
        <div>
            <img src="/images/cover.jpg" alt="Cover" style="width:100%" />
            <div class="w3-content w3-padding-large">
                <LocationProvider>
                    <Router>
                        <Route path="/blogs" component={Blogs} />
                        <Route path="/blogs.html" component={Blogs} />
                        <Route path="/blogs/docs" component={Docs} />
                        <Route path="/blogs/books" component={Books} />
                        <Route default component={NotFound} />
                    </Router>
                </LocationProvider>
            </div>
        </div>
    );
} 

render(<App />, document.getElementById('main-content')!)
