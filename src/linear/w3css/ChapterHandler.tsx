import { useRoute } from "preact-iso";
import { useEffect, useState } from "preact/hooks";

export default function ChapterHandler() {
    // 1. Ambil nomor bab dari URL (misal: "bab-1", "bab-42")
    const { params } = useRoute();
    const [KontenBab, setKontenBab] = useState<any>(null);

    useEffect(() => {
        // 2. Lakukan dynamic import file MDX berdasarkan nomor bab yang diakses
        import(`../../../stories/w3css/mengawal-sang-naga/parts/${params.noBab}.mdx`)
            .then((mod) => {
                setKontenBab(() => mod.default);
            })
            .catch((err) => {
                console.error(`Bab: ${params.noBab} tidak ditemukan`, err);
                setKontenBab(() => () => (
                    <div class="w3-content w3-padding-64">
                        <div className="w3-panel w3-round w3-card">
                            <h2>Error</h2>
                            <div class="w3-container w3-theme-l1 w3-leftbar w3-border-red w3-margin w3-round">
                                <p>Bab belum ditulis atau tidak ditemukan.</p>
                                <p><a class="w3-button w3-blue w3-round" href="/mengawal-sang-naga">&larr; Back</a></p>
                            </div>
                        </div>
                    </div>
                ));
            });
    }, [params.noBab]); // Pemicu otomatis berubah setiap kali pembaca ganti bab

    if (!KontenBab) {
        return (
            <div className="w3-container w3-center">
                Memuat naskah pendekar...
            </div>
        );
    }

    return (
        <div className="w3-container">
            <div class="w3-center">
                <h1>Mengawal Sang Naga</h1>
            </div>
            {/* 3. Tampilkan isi ceritanya di sini secara otomatis */}
            <div class="w3-content">
                <KontenBab />
            </div>
        </div>
    );
}
