import { render } from 'preact';
import './syntax.css';
import { LocationProvider, Router, Route, lazy } from 'preact-iso';
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
    const DialogFragments = lazy(() => import('../stories/w3css/sang-jendral/examples/DialogFragments.mdx'));
    const Docs = lazy(() => import('../stories/bs/sang-jendral/Dokumentasi.mdx')); 
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
                        <Route path="/docs/sang-jendral" component={DialogFragments} />
                        <Route default component={NotFound} />
                    </Router>
                </LocationProvider>
            </div>
        </div>
    );
} 

render(<App />, document.getElementById('main-content')!)
