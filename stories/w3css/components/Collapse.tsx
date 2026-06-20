import { useState } from 'preact/hooks';
import { type ComponentChildren, type VNode } from 'preact';

interface TabChildProps {
    id: string;      
    caption: string; 
    image: string;   
    children?: ComponentChildren; 
}

interface CollapseProps {
    children: VNode<TabChildProps>[];
}

export function Collapse({ children }: CollapseProps): ComponentChildren {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div class="w3-container w3-center">
                <div class="w3-bar w3-round">
                    {children.map((child, index) => {
                        const { caption } = child.props;
                        const isActive = activeTab === index;

                        return (
                            <button
                                key={index}
                                /* Tombol aktif bisa disesuaikan, di sini memakai w3-blue atau kelas tema lain */
                                class={`w3-bar-item w3-button w3-round w3-margin-right w3-medium ${
                                    isActive ? 'w3-blue' : 'w3-grey'
                                }`}
                                onClick={() => setActiveTab(index)}
                                type="button"
                            >
                                {caption}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div class="w3-card-4 w3-theme-d4 w3-round w3-margin-top w3-margin-bottom" style="max-width: 800px; margin: auto;">
                
                {/* 2. Konten Cerita Paralel */}
                {children.map((child, index) => {
                    const { id, image, children: storyContent } = child.props;
                    const isActive = activeTab === index;

                    return (
                        <div
                            id={id}
                            key={id || index}
                            class={`w3-container w3-padding-16 w3-animate-opacity ${
                                isActive ? 'w3-show' : 'w3-hide'
                            }`}
                        >
                            {/* Gambar float: left dengan batas tinggi 120px */}
                            <img
                                src={image}
                                class="w3-left w3-round w3-margin-right w3-card-2"
                                alt="Ilustrasi Karakter"
                                style="max-height: 120px; object-fit: cover;"
                            />

                            {/* Teks Narasi Cerita */}
                            <div class="w3-serif w3-justify text-light-grey" style="line-height: 1.8; font-size: 1.1em;">
                                {storyContent}
                            </div>
                            
                            {/* Clearfix agar layout w3-theme-d4 tidak berantakan */}
                            <div style="clear: both;"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}



// Berikan definisi tipe data untuk Props komponen
interface ParallelStoryProps {
    phoneImgSrc?: string;
    desktopImgSrc?: string;
    targetUrl?: string;
}
/**
 * Komponen untuk menampilkan pratinjau cerita paralel secara responsif.
 * Menghasilkan dua kartu visual yang membandingkan tampilan Ponsel dan Desktop,
 * serta menyediakan tautan langsung menuju demo interaktif atau bab terkait.
 * 
 * @example
 * // Penggunaan dasar (menggunakan nilai default):
 * <ParallelStory />
 * 
 * @example
 * // Penggunaan kustom untuk bab baru:
 * <ParallelStory 
 *   phoneImgSrc="/images/pages/parallel-2-portrait.jpg"
 *   desktopImgSrc="/images/pages/parallel-2.jpg"
 *   targetUrl="/buku-2/part1" 
 * />
 * 
 * @param props - Properti untuk mengonfigurasi gambar dan tautan komponen.
 * @param props.phoneImgSrc - Jalur URL untuk gambar pratinjau versi ponsel. (Default: "/images/pages/parallel-1-portrait.jpg")
 * @param props.desktopImgSrc - Jalur URL untuk gambar pratinjau versi desktop/laptop. (Default: "/images/pages/parallel-1.jpg")
 * @param props.targetUrl - Alamat rute virtual tujuan ketika gambar diklik. (Default: "/buku-1/part1")
 */
export function ParallelStory({
    phoneImgSrc = "/images/pages/parallel-1-portrait.jpg", // Nilai default jika tidak diisi
    desktopImgSrc = "/images/pages/parallel-1.jpg",
    targetUrl = "/buku-1/part1"
}: ParallelStoryProps) {
    return (
        <div class="w3-flex" style="gap:10px">
            <div class="w3-card-4 w3-padding w3-flex-item">
                <a href={targetUrl} class="w3-btn w3-hover-none">
                    <img src={phoneImgSrc}
                        alt="Parallel Story Mobile View"
                        style="width:100%"
                        />
                </a>
                <h5 class="w3-center">Ponsel</h5>
            </div>
            <div class="w3-card-4 w3-padding w3-flex-item">
                <a href={targetUrl} class="w3-btn w3-hover-none">
                    <img src={desktopImgSrc}
                        alt="Parallel Story Desktop View"
                        style="width:100%"
                        />
                </a>
                <h5 class="w3-center">Komputer Desktop/Laptop</h5>
            </div>
        </div>
    );
}
