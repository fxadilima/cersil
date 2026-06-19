import { render } from 'preact';
//import { useEffect } from 'preact/hooks';
import '../../syntax.css';
import { LocationProvider, Router, Route, lazy } from 'preact-iso';
import Docs from "../../../stories/bs/sang-jendral/Dokumentasi.mdx";
import Home from "../../../stories/bs/sang-jendral/Home.mdx";
import './stories.css';

const HomePath = "/linear-pages/sang-jendral";

export const NotFound = () => (
  <div class="container center">
    <h2>404: Halaman Hilang!</h2>
    <p>Sepertinya pendekar salah mengambil jalan.</p>
    <a href={HomePath}>Kembali ke jalan yang benar</a>
  </div>
);

export function App() {
    const Books = () => {
        return (
            <div class="w3-container">
                <h1>Books!</h1>
                <p>Ini baru sekedar contoh</p>
                <a href="/blogs" target="_blank">Blogs</a>
            </div>
        );
    };

    const ChapterHandler = lazy(() => import('../../../stories/bs/sang-jendral/ChapterHandler.tsx'));

    const KutipanProlog = lazy(() => import('../../../stories/originals/book-3/prolog.md'));

    return (
        <div>
            <LocationProvider>
                <Router>
                    <Route path="/linear-pages/sang-jendral" component={Home} />
                    <Route path="/linear-pages/sang-jendral/parts/:noBab" component={ChapterHandler} />
                    <Route path="/linear-pages/sang-jendral.html" component={Home} />
                    <Route path="/linear-pages/sang-jendral/docs" component={Docs} />
                    <Route path="/linear-pages/sang-jendral/wordpress/prolog" component={KutipanProlog} />
                    <Route default component={NotFound} />
                </Router>
            </LocationProvider>
        </div>
    );
} 

render(<App />, document.getElementById('main-content')!)

