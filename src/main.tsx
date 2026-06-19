import { render } from 'preact';
import './syntax.css';
import Home from '../stories/w3css/Home.mdx';
import { useState, useEffect } from 'preact/hooks';
import { LocationProvider, Router, Route, lazy, /* useLocation */ } from 'preact-iso';

export const NotFound = () => (
  <div class="w3-container w3-center">
    <h2>404: Halaman Hilang!</h2>
    <p>Sepertinya pendekar salah mengambil jalan.</p>
    <a href="/">Kembali ke jalan yang benar</a>
  </div>
);

export function Navbar() {
    // State untuk mengontrol buka/tutup menu hamburger
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div class="w3-top">
            <div class="w3-bar w3-theme-d4 w3-card">
                <a href="/" class="w3-bar-item w3-button"><i class="fas fa-home"></i> Home</a>
                <a href="#stories" class="w3-bar-item w3-button w3-hide-small">Stories</a>
                <a href="#books" class="w3-bar-item w3-button w3-hide-small">Books</a>
                <a href="#blogs" class="w3-bar-item w3-button w3-hide-small">Blogs</a>
                <button class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={toggleMenu}>&#9776;</button>
            </div>
            <div id="hamburger-menu" class={`w3-bar-block w3-theme-d4 w3-hide-large w3-hide-medium ${isOpen ? "w3-show" : "w3-hide"}`}>
                <a href="#books" class="w3-bar-item w3-button w3-hover-text-blue w3-hover-none">Books</a>
                <ul class="w3-bar-block">
                    <li><a class="w3-button w3-hover-text-blue w3-hover-none" href="/mengawal-sang-naga">Mengawal Sang Naga</a></li>
                    <li><a class="w3-button w3-hover-text-blue w3-hover-none" href="/rahasia-pedang-dan-golok">Rahasia Pedang Dan Golok</a></li>
                    <li><a class="w3-button w3-hover-text-blue w3-hover-none" href="/tanah-perjanjian-di-ufuk-barat">Tanah Perjanjian Di Ufuk Barat</a></li>
                    <li><a class="w3-button w3-hover-text-blue w3-hover-none" href="/sang-jendral">Sang Jendral</a></li>
                    <li><a class="w3-button w3-hover-text-blue w3-hover-none" href="/dinasti-ming">Dinasti Ming</a></li>
                </ul>
                <a href="#docs" class="w3-bar-item w3-button w3-hover-text-blue w3-hover-none">Dokumentasi</a>
                <a href="#books" class="w3-bar-item w3-button w3-hover-text-blue w3-hover-none">Books</a>
                <a href="#blogs" class="w3-bar-item w3-button w3-hover-text-blue w3-hover-none">Blogs</a>
            </div>
        </div>
    );
}


/*
import {renderToString} from 'preact-render-to-string';

export function MengawalSangNaga() {
    const [htmlString, setHtmlString] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        import('../stories/w3css/mengawal-sang-naga/parts/part1.mdx')
            .then((module) => {
                // 1. Ambil komponen default dari MDX
                const MdxComponent = module.default;

                // 2. Ubah komponen Preact menjadi string HTML murni
                const stringResult = renderToString(<MdxComponent />);

                // 3. Simpan hasilnya ke dalam state
                setHtmlString(stringResult);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal memuat berkas MDX:", err);
                setLoading(false);
            });    
    }, []);

    if (loading) return (<p>Sedang loading...</p>);

    const targetTag = document.getElementById('docs-content');
    if (targetTag !== null) {
        targetTag.innerHTML = htmlString;
    }

    return (
        <div class="w3-panel w3-card-4 w3-theme-d5 w3-padding-64">
            <h3>Test</h3>
            <p>
                Coba cek <a href="#docs">Dokumentasi</a>
            </p>
        </div>
    );
}
*/

export function App() {
    const ChapterHandler = lazy(() => import('./linear/w3css/ChapterHandler.tsx'));
    const MengawalSangNaga = lazy(() => import('./linear/w3css/MengawalSangNaga.tsx'));
    return (
        <>
            <Navbar />
            <div class="w3-container w3-padding-32">
                <LocationProvider>
                    <Router>
                        <Route path="/" component={Home} />
                        <Route path="/mengawal-sang-naga" component={MengawalSangNaga} />
                        <Route path="/mengawal-sang-naga/parts/:noBab" component={ChapterHandler} />
                        <Route default component={NotFound} />
                    </Router>
                </LocationProvider>
            </div>
            <section class="w3-container w3-padding-large" id="stories">
                <hr />
                <h1>Stories</h1>
                <p>Bagian ini belum ditulis...</p>
            </section>

            <section class="w3-container w3-padding-large" id="books">
                <hr />
                <h1>Books</h1>
                <p>Saat ini baru ada ini:</p>
                <p><a href="/mengawal-sang-naga" class="w3-btn w3-round w3-blue">Mengawal Sang Naga</a></p>
                <p><a href="/mengawal-sang-naga/parts/part1" class="w3-btn w3-round w3-blue">Test Part 1</a></p>
            </section>

            <section class="w3-container w3-margin-bottom" id="blogs">
                <hr />
                <h1>Blogs</h1>
                <p>Bagian ini belum ditulis...</p>
            </section>

            <section class="w3-container w3-margin-bottom" id="docs">
                <hr />
                <h1>Dokumentasi</h1>
                <div id="docs-content">
                    <p>Bagian ini belum ditulis...</p>
                </div>
            </section>
        </>
    );
} 

render(<App />, document.getElementById('main-content')!);

// Apakah ini ide yang baik???
//import DocsKonten from '../blogs/w3css/Dokumentasi.mdx';
//render(<DocsKonten />, document.getElementById('docs-content')!);

