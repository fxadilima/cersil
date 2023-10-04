---
title: Menampilkan Cerita Memanah Rajawali
published_at: 2023-10-04T12:08:20.000+07:00
snippet: >
    Novel Memanah Burung Rajawali yang saya terjemahkan sebelumnya bisa 
    ditampilkan di sini nyaris seperti apa adanya, tetapi untuk sementara
    kita tidak memakai frontmatter yang ada di setiap halamannya. Baca selengkapnya...
---

Novel Memanah Burung Rajawali yang saya terjemahkan sebelumnya bisa 
ditampilkan di sini nyaris seperti apa adanya, tetapi untuk sementara
kita tidak memakai frontmatter yang ada di setiap halamannya.

Cerita ini tentu saja disadur dari karya Louis Cha, atau yang lebih dikenal 
sebagai Jin Yong &#11834; Chin Yung, dalam dialek Hokkian. Rangkaian cerita ini
terdiri dari 40 jilid, dengan jalinan cerita yang sangat padat dan menegangkan,
kadang-kadang ada bagian yang sulit diterjemahkan ke dalam bahasa Indonesia
tanpa mengurangi keindahan makna aslinya.

[Langsung membaca 🦅 Bab 1](/memanah-rajawali/bab1.md).

## Layout Untuk Novel

Konten yang berupa dokumen-dokumen _markdown_ harus dipisahkan dari semua file yang berisi kode
program. Susunan direktori yang dibuat adalah seperti ini:

```text
⸻ root/
    ├── content/
    |    ├── sdyxz/
    |    |   ├── bab1.md
    |    |   ├── bab2.md
    |    |   └── [babN].md
    └── routes/
        └── memanah-rajawali/
            ├── [slug].tsx
            ├── index.tsx
            └── _layout.tsx
```

Tulisan saya dari situs sebelumnya yang sama sekali _static_, dibuat menggunakan Jekyll, mengandung
_frontmatter_ dengan struktur semacam ini:

```yaml
layout: default
chapter: 1
title: 🦅 Insiden Di Tengah Badai Salju
author: FX. Adi Lima
image: https://res.cloudinary.com/drzjshskk/image/upload/e_contrast:85,q_auto:best/v1676662508/sdyxz/originals/ch01_qqa6or.jpg
description: >
  Akhirnya si pendeta tertawa, mendadak telapak kanannya menghantam pegangan tombak dengan kecepatan seperti angin. 
  Yang Tiexin merasa pangkal jempol dan telunjuknya mati rasa, dan dengan segera ia melepaskan tombak ke tanah 
  yang diselimuti salju.
nextPage: bab2
prevPage: intro
```

