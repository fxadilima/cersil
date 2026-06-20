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

const ToDocs = () => {
    useEffect(() => {
        window.location.replace('/docs');
    }, []);
    return null;
}

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
                <a href="/docs" class="w3-bar-item w3-button w3-hover-text-blue w3-hover-none">Dokumentasi</a>
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
    const Book1 = lazy(() => import('../stories/w3css/mengawal-sang-naga/Home.mdx'));
    const Part1 = lazy(() => import('../stories/w3css/sang-jendral/documents/Part1.mdx'));
    return (
        <>
            <Navbar />
            <div class="w3-container w3-padding-32">
                <header class="w3-container w3-center">
                    <h1>Cerita Silat</h1>
                </header>
                <div class="w3-content">
                    <LocationProvider>
                        <Router>
                            <Route path="/" component={Home} />
                            <Route path="/mengawal-sang-naga" component={Book1} />
                            <Route path="/buku-1/part1" component={Part1} />
                            <Route default component={NotFound} />
                        </Router>
                    </LocationProvider>
                </div>
            </div>
            <section class="w3-container w3-padding-large" id="stories">
                <div class="w3-content">
                    <h2 class="w3-center">Stories Highlight</h2>
                    <div class="w3-flex" style="gap:10px">
                        <div class="w3-flex-item w3-card w3-round">
                            <img src="/images/medium/xiao-zhao-alamut-1355.jpg"
                                alt="Alamut, 1355" 
                                style="width:100%"
                                class="w3-round" />
                            <div class="w3-container w3-padding w3-center">
                                <a class="w3-button w3-round w3-theme-d4" 
                                    href="/buku-1/part1">Alamut - Henan, 1355</a>
                            </div>
                        </div>
                        <div class="w3-flex-item w3-card w3-round">
                            <img src="/images/small/guangming-ding.jpg"
                                alt="Guangming Ding" 
                                style="width:100%" />
                            <div class="w3-container w3-padding w3-center">
                                <h5>Puncak Terang</h5>
                                <a href="/mengawal-sang-naga" class="w3-button w3-round">Dokumentasi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 

render(<App />, document.getElementById('main-content')!);

// Apakah ini ide yang baik???
//import DocsKonten from '../blogs/w3css/Dokumentasi.mdx';
//render(<DocsKonten />, document.getElementById('docs-content')!);

