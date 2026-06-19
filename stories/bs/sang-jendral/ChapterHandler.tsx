import { useRoute } from "preact-iso";
import { useEffect, useState } from "preact/hooks";

export default function ChapterHandler() {
  // 1. Ambil nomor bab dari URL (misal: "bab-1", "bab-42")
  const { params } = useRoute();
  const [KontenBab, setKontenBab] = useState<any>(null);

  useEffect(() => {
    // 2. Lakukan dynamic import file MDX berdasarkan nomor bab yang diakses
    import(`./${params.noBab}.mdx`)
      .then((mod) => {
        setKontenBab(() => mod.default);
      })
      .catch((err) => {
        console.error(`Bab: ${params.noBab} tidak ditemukan`, err);
        setKontenBab(() => () => (
          <div className="alert alert-danger">
            Bab belum ditulis atau tidak ditemukan.
          </div>
        ));
      });
  }, [params.noBab]); // Pemicu otomatis berubah setiap kali pembaca ganti bab

  if (!KontenBab) {
    return (
      <div className="text-white text-center py-5">
        Memuat naskah pendekar...
      </div>
    );
  }

  return (
    <div className="container py-4 text-white">
      {/* 3. Tampilkan isi ceritanya di sini secara otomatis */}
      <KontenBab />
    </div>
  );
}
