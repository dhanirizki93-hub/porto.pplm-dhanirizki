# 🎓 Website E-Portofolio PPG (Pendidikan Profesi Guru)

Website e-portofolio digital profesional dan modern yang dirancang khusus untuk memenuhi instrumen penilaian **Praktik Pengalaman Lapangan (PPL)** bagi Mahasiswa Pendidikan Profesi Guru (PPG Prajabatan / Calon Guru / Dalam Jabatan).

---

## 🌟 Fitur Utama & Keunggulan

1. **Palet Warna Akademik & Pedagogik Terbaik**
   - Menggunakan kombinasi warna **Deep Emerald Green / Teal (`#0f766e`)**, **Royal Indigo Blue (`#2563eb`)**, dan aksen **Amber Gold (`#d97706`)**.
   - Merefleksikan filosofi pertumbuhan, kebijaksanaan, integritas akademik, dan standar resmi Kemendikbudristek RI.

2. **Fitur Mode Gelap (Dark Mode) Terpadu**
   - Transisi halus antara *Light Mode* dan *Dark Mode* melalui tombol Sun/Moon di header.
   - Pilihan preferensi otomatis tersimpan di peramban (`localStorage`) dan menyinkronkan dengan preferensi sistem operasi.

3. **Struktur Konten Sesuai Instrumen PPL PPG**
   - **Halaman Home (`index.html`)**:
     - Foto Profil Calon Guru & Identitas Lengkap (Nama & Gelar, NIM, LPTK, Dosen Pembimbing Lapangan, Guru Pamong, Sekolah Mitra PPL, Bidang Studi & Gelombang).
     - Latar Belakang Mahasiswa (Disajikan padat dan utuh dalam satu bagian komprehensif: landasan akademik, pengalaman PPL, dan praktisi reflektif).
     - Keunikan Asal Daerah (Disajikan dalam satu paragraf elegan tentang filosofi luhur kearifan lokal).
     - Motivasi & Inspirasi Menjadi Guru (Disajikan dalam satu bagian terpadu menyatukan semboyan Ki Hadjar Dewantara dan visi guru masa depan).
   - **Halaman UTS (`uts.html`)**:
     - Refleksi Produk Pembelajaran Siklus 1:
       - Unggahan Modul Ajar (Problem Based Learning - PBL, diferensiasi konten & produk).
       - Media Pembelajaran Inovatif (Slide Canva, LKPD 3 tingkatan, Gamifikasi Wordwall).
       - Video Praktik Pembelajaran (Video player frame, durasi, linimasa tahapan: Pendahuluan, Inti, Penutup).
       - Refleksi Model 4F (Facts, Feelings, Findings, Future).
     - Penilaian Guru Pamong Siklus 1:
       - Rekapitulasi nilai rancangan pembelajaran (94.0) & praktik mengajar (93.5).
       - Catatan kualitatif dan feedback penguatan Guru Pamong.
       - Unggahan berkas lembar penilaian resmi bertanda tangan.
   - **Halaman UAS (`uas.html`)**:
     - Tab Switcher responsif untuk **Siklus 2**, **Siklus 3**, **Siklus 4**, dan **Rekapitulasi Akhir UAS**.
     - Siklus 2: Project Based Learning (PjBL) & STEM, Gallery Walk.
     - Siklus 3: Inquiry Learning & Pendekatan *Teaching at the Right Level (TaRL)*, Hands-on Outdoor Math.
     - Siklus 4: *Culturally Responsive Teaching (CRT)* & TPACK Etnomatematika Batik Nusantara.
     - Rekapitulasi Progres Akhir: Matriks perkembangan nilai antar-siklus (Siklus 1 - 4), grafik batang kemajuan skor, lembar pengesahan DPL & Guru Pamong, serta predikat akhir kelulusan (A / Sangat Baik).

4. **Interaktivitas & Kemudahan Kustomisasi Data**
   - **Fitur Edit Profil Langsung**: Pengguna dapat mengklik tombol **"Sesuaikan Profil"** di header untuk mengubah nama, NIM, LPTK, DPL, Guru Pamong, Sekolah, dan memilih foto profil sendiri langsung dari laptop tanpa harus menyentuh kode!
   - **Universal Modal Viewer**: Pratinjau dokumen modul ajar, pemutar video rekaman, dan lembar nilai pamong secara langsung di dalam aplikasi.
   - **Format Siap Cetak (Print Ready)**: Tata letak ramah cetak (`Ctrl + P`) dengan CSS `@media print` otomatis menyembunyikan navigasi dan memformat halaman menjadi dokumen laporan bersih.

---

## 🚀 Cara Menjalankan di Localhost

### Cara 1: Menggunakan 1-Click Batch File (Paling Cepat di Windows)
1. Buka folder proyek ini di Windows Explorer.
2. Klik dua kali file **`start-server.bat`**.
3. Server lokal akan aktif dan peramban web default Anda akan otomatis membuka alamat `http://localhost:8000`.

### Cara 2: Menjalankan Lewat Terminal / Command Prompt
Buka terminal (PowerShell / Command Prompt) di folder proyek ini, lalu jalankan:
```bash
python server.py
```
Peramban web akan otomatis terbuka di `http://localhost:8000`.

### Cara 3: Buka Langsung Tanpa Server (Offline Standalone)
Jika tidak memiliki Python, Anda cukup mengklik dua kali file **`index.html`** langsung di Windows Explorer. Semua fitur navigasi, dark mode, dan modal viewer tetap berfungsi 100% secara instan!

---

## 📁 Struktur Berkas Proyek

```
porto-ppg/
├── index.html          # Halaman Beranda (Home / Profil / Filosofi)
├── uts.html            # Halaman Portofolio UTS (Siklus 1)
├── uas.html            # Halaman Portofolio UAS (Siklus 2, 3, 4 & Rekap)
├── assets/
│   ├── css/
│   │   └── style.css   # Stylesheet kustom, efek glassmorphism & dark mode
│   └── js/
│       ├── data.js     # Basis data terstruktur e-portofolio
│       └── main.js     # Logika tema dark mode, modal, editor & navigasi
├── server.py           # Skrip server lokal Python 3 dengan auto-open browser
├── start-server.bat    # Peluncur 1-klik untuk sistem operasi Windows
└── README.md           # Panduan lengkap dokumentasi proyek
```

---

## ✍️ Cara Menyesuaikan Data Permanen

Jika ingin menyesuaikan data paten di dalam kode:
- Buka file `assets/js/data.js` menggunakan text editor (VS Code, Notepad, dll).
- Ganti nilai `nama`, `nim`, `lptk`, `guruPamong`, `dosenPembimbing`, link Google Drive modul, link video YouTube, atau narasi refleksi sesuai data riil PPL Anda.

---
*Dikembangkan untuk kemudahan dokumentasi portofolio Program Pendidikan Profesi Guru (PPG).*
