import { render } from 'preact';
import './syntax.css';
import { LocationProvider, Router, Route, useLocation } from 'preact-iso';
import { useEffect } from "preact/hooks";

export const NotFound = () => {
    return (
        <div class="container p-2">
            <p>
                Kelihatannya ada yang salah, tapi ini akan membawamu kembali
                ke <a href="/docs">jalan yang benar...</a> 
            </p>
        </div>
    );
};

export const BackHome = () => {
    useEffect(() => {
        window.location.replace('/');
    }, []);
    return null;
};

export function App() {
    const Docs = () => (
        <div class="w3-container">
            <h1>Dokumentasi Di Halaman HTML</h1>
            <p><a class="btn btn-primary" href="/"><i class="fas fa-home"></i> HOME</a></p>
            <p><a class="btn btn-secondary" href="/docs/mengawal-sang-naga">Mengawal Sang Naga</a></p>
        </div>
    );
    const Book1 = () => (
        <div class="w3-container">
            <h1>Dokumentasi Mengawal Sang Naga</h1>
            <p><a class="btn btn-primary" href="/"><i class="fas fa-home"></i> HOME</a></p>
            <p><a class="btn btn-secondary" href="/docs">&larr; Kembali ke Dokumentasi</a></p>
        </div>
    );
    return (
        <div>
            <div class="w3-content w3-padding-large">
                <LocationProvider>
                    <Router>
                        <Route path="/" component={BackHome} />
                        <Route path="/docs" component={Docs} />
                        <Route path="/docs/mengawal-sang-naga" component={Book1} />
                        <Route default component={NotFound} />
                    </Router>
                </LocationProvider>
            </div>
        </div>
    );
} 

render(<App />, document.getElementById('main-content')!)
