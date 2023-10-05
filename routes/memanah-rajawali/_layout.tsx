import { LayoutProps } from "$fresh/server.ts";
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
    skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function Layout({ Component, data }: LayoutProps) {
    // do something with state here
    // console.log(`Layout SDYXZ: attrs = ${JSON.stringify(data.attrs)}`);
    return (
        <>
            <div class="w3-sidebar w3-bar-block w3-black w3-animate-left w3-collapse" style="width:300px;" id="leftMenu">
                <button class="w3-bar-item w3-button w3-large w3-hover-none w3-hide-large" id="btnLeftClose">Close &times;</button>
                <a href="/api/buku" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-book"></i> Daftar Buku</a>
                <a href="/posts" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-book"></i> Blogs</a>
                <a href="/about" class="w3-bar-item w3-btn w3-hover-black"><i class="fa fa-exclamation-circle"></i> About</a>
            </div>
            <div class="w3-sidebar w3-bar-block w3-black w3-animate-right w3-collapse" style="width:300px;right:0;" id="rightMenu">
                <button class="w3-bar-item w3-button w3-large w3-hide-large" id="btnRightClose">Close &times;</button>
                <ul class="w3-ul">
                    <li>
                        <h5>🦅 Memanah Rajawali</h5>
                        <a href="bab1.md" class="w3-bar-item w3-button">Insiden Di Tengah Badai Salju</a>
                        <a href="bab2.md" class="w3-bar-item w3-button">Tujuh Orang Aneh Dari Jiangnan</a>
                        <a href="bab3.md" class="w3-bar-item w3-button">Kehidupan Di Padang Rumput</a>
                        <a href="bab4.md" class="w3-bar-item w3-button">Sepasang Iblis Cakar Tengkorak Putih</a>
                        <a href="bab5.md" class="w3-bar-item w3-button">Lomba Memanah Burung Elang</a>
                        <a href="bab6.md" class="w3-bar-item w3-button">Misteri Di Puncak Tebing</a>
                        <a href="bab7.md" class="w3-bar-item w3-button">Perlombaan Mencari Jodoh</a>
                        <a href="bab8.md" class="w3-bar-item w3-button">Memamerkan Ilmu Silat</a>
                        <a href="bab9.md" class="w3-bar-item w3-button">Tombak Berkarat dan Bajak Rusak</a>
                        <a href="bab10.md" class="w3-bar-item w3-button">Pertemuan Para Musuh</a>
                        <a href="bab11.md" class="w3-bar-item w3-button">Qiu Chuji Mengaku Kalah</a>
                        <a href="bab12.md" class="w3-bar-item w3-button">Kebanggaan Sang Naga</a>
                        <a href="bab13.md" class="w3-bar-item w3-button">Orang Lumpuh Di Lima Danau</a>
                        <a href="bab14.md" class="w3-bar-item w3-button">Majikan Pulau Bunga Persik</a>
                        <a href="bab15.md" class="w3-bar-item w3-button">Sang Naga Mengibaskan Ekor</a>
                        <a href="bab16.md" class="w3-bar-item w3-button">Kitab Sembilan Bulan</a>
                        <a href="bab17.md" class="w3-bar-item w3-button">Pertarungan Antar Tangan</a>
                        <a href="bab18.md" class="w3-bar-item w3-button">Tiga Ujian</a>
                        <a href="bab19.md" class="w3-bar-item w3-button">Badai dan Serangan Hiu</a>
                        <a href="bab20.md" class="w3-bar-item w3-button">Kitab Yang Diubah</a>
                        <a href="bab21.md" class="w3-bar-item w3-button">Batu Seribu Kati</a>
                        <a href="bab22.md" class="w3-bar-item w3-button">Menunggang Ikan Hiu</a>
                        <a href="bab23.md" class="w3-bar-item w3-button">Masalah Besar Di Istana</a>
                        <a href="bab24.md" class="w3-bar-item w3-button">Perawatan Di Tempat Tersembunyi</a>
                        <a href="bab25.md" class="w3-bar-item w3-button">Penginapan Terpencil Di Desa</a>
                        <a href="bab26.md" class="w3-bar-item w3-button">Tatanan Lama, Aliansi Baru</a>
                        <a href="bab27.md" class="w3-bar-item w3-button">Mimbar Di Xuan Yuan</a>
                        <a href="bab28.md" class="w3-bar-item w3-button">Puncak Gunung Telapak Besi</a>
                        <a href="bab29.md" class="w3-bar-item w3-button">Seorang Wanita Di Tengah Rawa</a>
                        <a href="bab30.md" class="w3-bar-item w3-button">Biksu Yideng</a>
                        <a href="bab31.md" class="w3-bar-item w3-button">Saputangan Kekasih</a>
                        <a href="bab32.md" class="w3-bar-item w3-button">Di Tepi Sungai Deras</a>
                        <a href="bab33.md" class="w3-bar-item w3-button">Malapetaka Yang Akan Datang</a>
                        <a href="bab34.md" class="w3-bar-item w3-button">Perubahan Radikal Di Pulau Persik</a>
                        <a href="bab35.md" class="w3-bar-item w3-button">Di Sebuah Kuil</a>
                        <a href="bab36.md" class="w3-bar-item w3-button">Perjalanan Ke Barat</a>
                        <a href="bab37.md" class="w3-bar-item w3-button">Turun Dari Langit</a>
                        <a href="bab38.md" class="w3-bar-item w3-button">Perintah Rahasia</a>
                    </li>
                </ul>
            </div>
            <main class="w3-main" style="margin-left:300px;margin-right:300px;margin-top:0px;margin-bottom:10px;">
                <div class="w3-hide-large">
                    <button class="w3-button w3-xlarge w3-left w3-hover-none" id="btnLeftOpen"><i class="fa fa-bars"></i></button>
                    <button class="w3-button w3-xlarge w3-right w3-hover-none" id="btnRightOpen"><i class="fa fa-cog"></i></button>
                </div>
                <div class="w3-row-padding">
                    <div class="w3-padding-16 w3-col m3 l2">
                        <img src={data.attrs.image} alt={data.attrs.title} title={data.attrs.title} width="100%"/>
                    </div>
                    <div class="w3-col m9 l10">
                        <h1>Chapter: {data.attrs.chapter}</h1>
                        <h3>{data.attrs.title}</h3>
                        <div class="w3-bar">
                            <a href={data.attrs.prevPage + ".md"} class="w3-bar-item w3-btn w3-hover-black w3-round"><i class="fa fa-arrow-circle-left"></i> Prev</a>
                            <a href={data.attrs.nextPage + ".md"} class="w3-bar-item w3-btn w3-hover-black w3-round">Next <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <Component/>
            </main>
            <script src="/scripts/sdyxz.js"></script>
        </>
    );
}
