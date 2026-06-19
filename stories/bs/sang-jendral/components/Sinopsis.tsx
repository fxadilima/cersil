
export function BookCard() {
  return (
    <div class="story-card">
      {/* Sektor Gambar */}
      <div class="story-cover-wrapper">
        <img src="/images/tiny/chaghan-temur.jpg" alt="Chaghan Temur" class="story-cover" />
        <div class="story-title-tags">Chaghan Temur</div>
      </div>
      
      {/* Sektor Konten/Teks */}
      <div class="story-content">
        <h3 class="story-heading">Prolog Book III</h3>
        <p class="story-blurb">
          Cerita singkat tentang prolog Book III. Jangan terlalu panjang, karena ini hanya blurb...
          Kisah perjuangan sang jenderal di tengah pergolakan dinasti yang mulai runtuh.
        </p>
        <a href="/book3/prolog" class="story-btn">Baca Selengkapnya</a>
      </div>
    </div>
  );
}
