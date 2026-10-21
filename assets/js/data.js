/**
 * Data Model E-Portofolio PPG
 * Anda dapat mengedit langsung data ini atau melalui tombol "Edit Profil" pada tampilan website.
 */

const defaultPortfolioData = {
  profile: {
    nama: "Dhani Rizki, S.Pd.",
    nim: "2531049",
    lptk: "Universitas Pendidikan Indonesia (UPI)",
    dosenPembimbing: "Jajang Kusnendar, M.T.",
    guruPamong: "Jajang Wahyudin, S.T.",
    sekolahPPL: "SMA Negeri 24 Bandung",
    bidangStudi: "Program Studi - Informatika",
    tahunAjaran: "Semester 2",
    gelombang: "PPG Calon Guru Gelombang 1 2026",
    email: "dhanirizki93@gmail.com",
    kontak: "+62 822-8300-7538",
    foto: "assets/img/profile.jpg",
    
    // Latar Belakang Mahasiswa
    latarBelakang: {
      ringkasan: "Perkenalkan, nama saya Dhani Rizki, berasal dari Kabupaten Lampung Tengah, Provinsi Lampung. Saya merupakan lulusan Program Studi Pendidikan Teknologi Informasi, Universitas Lampung, dan saat ini sedang menempuh PPG Prajabatan Program Studi Informatika di Universitas Pendidikan Indonesia (UPI). Saya memiliki minat yang besar pada bidang pendidikan dan teknologi, khususnya dalam pemanfaatan teknologi untuk mendukung pembelajaran yang inovatif dan bermakna. Melalui pendidikan dan pengalaman praktik mengajar, saya terus mengembangkan kompetensi sebagai calon guru Informatika yang profesional, adaptif, dan siap berkontribusi dalam meningkatkan kualitas pendidikan di era digital."
    },

    // Keunikan Asal Daerah
    keunikanDaerah: {
      asal: "Kabupaten Lampung Tengah",
      filosofi: "Hamemayu Hayuning Bawana & Budaya Guyub Rukun",
      deskripsi: "Saya berasal dari salah satu kabupaten yang terdapat di provinsi Lampung yaitu Lampung Tengah. Lampung Tengah terkenal dengan julukan Bumi Beguwai Jejamo Wawai (bekerja bersama secara gotong-royong). Daerah ini sangat unik karena menjadi pusat bertemunya budaya Lampung Pepadun (terutama 9 marga Abung Siwomego) dengan masyarakat multikultural akibat program transmigrasi."
    },

    // Motivasi & Inspirasi Menjadi Guru
    motivasi: {
      semboyan: "Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani",
      narasi: "Motivasi saya menjadi guru adalah keinginan untuk menciptakan generasi yang melek teknologi dan mampu berpikir kritis. Saya terinspirasi oleh guru-guru yang mampu membuat pembelajaran menjadi bermakna dan menyenangkan. Motivasi tersebut sejalan dengan filosofi pendidikan Ki Hadjar Dewantara, khususnya gagasan bahwa pendidikan merupakan proses menuntun peserta didik agar dapat mengembangkan potensi dirinya sesuai dengan kodrat alam dan kodrat zaman. Sebagai calon guru Informatika, saya ingin menghadirkan pembelajaran yang tidak hanya berfokus pada penguasaan teknologi, tetapi juga mendorong peserta didik untuk berpikir kritis, kreatif, mandiri, dan mampu menggunakan teknologi secara bijak dalam kehidupan sehari-hari."
    }
  },

  // DATA UTS (SIKLUS 1)
  uts: {
    siklus: "Siklus 1",
    tema: "Model Problem Based Learning (PBL) Berdiferensiasi",
    materi: "Sistem Persamaan Linier Dua Variabel (SPLDV) Kontekstual",
    kelas: "Fase E - Kelas X-A",
    durasi: "2 JP (2 x 45 Menit)",
    tanggalPelaksanaan: "14 Oktober 2025",
    
    modulAjar: {
      judul: "Modul Ajar Informatika - Berpikir Komputasional",
      deskripsi: "Rancangan pembelajaran dirancang dengan pendekatan Understanding by Design (UbD). Memuat pemetaan kesiapan belajar siswa, tujuan pembelajaran yang terukur, langkah pembelajaran berpusat pada siswa, dan rubrik asesmen komprehensif.",
      fokusDiferensiasi: "Diferensiasi Konten (tingkat kesulitan bahan bacaan/studi kasus) dan Diferensiasi Produk (pilihan bentuk presentasi solusi masalah: infografis, narasi, atau diagram).",
      linkDrive: "https://drive.google.com/file/d/1r1L7lT7HFLpRONvWZqImS9nBVMX7CDoB/view?usp=drive_link",
      fileSize: "2.4 MB (PDF Lengkap)",
      komponen: [
        "Identitas & Profil Pelajar Pancasila",
        "Tujuan Pembelajaran & Kriteria Ketercapaian (KKTP)",
        "Pertanyaan Pemantik Kontekstual",
        "Sintaks PBL (5 Tahap)",
        "Asesmen Diagnostik, Formatif, dan Sumatif"
      ]
    },

    mediaPembelajaran: [
      {
        nama: "Slide Presentasi",
        jenis: "Dokumen Presentasi (PDF)",
        deskripsi: "Slide presentasi memuat stimulus visual fenomena kehidupan sehari-hari (anggaran belanja pasar dan tiket wisata) sebagai pengantar pemecahan masalah SPLDV.",
        linkUnduh: "https://drive.google.com/file/d/175BOZyVYNdxSodCnHWmYaYzORTLbiXsg/view?usp=drive_link",
        badge: "Dokumen PDF"
      },
      {
        nama: "LKPD Berdiferensiasi Siswa",
        jenis: "Lembar Kerja Siswa",
        deskripsi: "LKPD dirancang dalam 3 tingkatan scaffolding (fondasi, mahir, pengayaan) yang memandu kelompok merumuskan model matematika secara kolaboratif.",
        linkUnduh: "https://drive.google.com/file/d/18RNsHOHMk4SSXugeA8w4EOnLGjw0Fm2A/view?usp=drive_link",
        badge: "Cetak & Digital"
      },
      {
        nama: "Kuis Diagnostik & Reflektif Wordwall",
        jenis: "Gamifikasi Interaktif",
        deskripsi: "Permainan kuis cepat untuk menguji konsep prasyarat aljabar dasar dengan visual interaktif yang meningkatkan keterlibatan siswa.",
        linkPreview: "https://wordwall.net/resource/sample-quiz-1",
        badge: "Gamified Quiz"
      }
    ],

    videoPembelajaran: {
      judul: "Siklus 1 Pembelajaran - Dhani Rizki (2531049)",
      durasi: "Praktik Pembelajaran Mandiri",
      youtubeId: "RUhihLaD2YA",
      embedUrl: "https://www.youtube.com/embed/RUhihLaD2YA",
      linkFull: "https://youtu.be/RUhihLaD2YA?si=lKsuJfWfi6neVMnj",
      tahapan: [
        { waktu: "00:00 - 02:45", bagian: "Pendahuluan", detail: "Salam, doa bersama, cek kehadiran, asesmen diagnostik, dan penyampaian tujuan pembelajaran." },
        { waktu: "02:46 - 05:30", bagian: "Orientasi Masalah", detail: "Menampilkan stimulus fenomena kontekstual untuk memantik rasa ingin tahu peserta didik." },
        { waktu: "05:31 - 10:15", bagian: "Penyelidikan Kelompok", detail: "Fasilitasi kolaborasi kelompok berdiferensiasi dengan pendampingan terarah dari guru." },
        { waktu: "10:16 - 13:00", bagian: "Presentasi & Verifikasi", detail: "Perwakilan kelompok mempresentasikan solusi LKPD dan ditanggapi oleh kelompok lain secara apresiatif." },
        { waktu: "13:01 - 15:00", bagian: "Penutup & Refleksi", detail: "Menyimpulkan pembelajaran bersama, kuis formatif/refleksi diri, dan apresiasi kelompok." }
      ]
    },

    refleksi: {
      model: "Refleksi Model 4F (Facts, Feelings, Findings, Future)",
      facts: "Pembelajaran Siklus 1 dilaksanakan pada hari Selasa di Kelas X-A. Kehadiran siswa 100%. Pembagian kelompok berjalan lancar dan seluruh kelompok berhasil mempresentasikan hasil LKPD.",
      feelings: "Awalnya merasa sedikit tegang terkait manajemen waktu, namun merasa sangat bersyukur dan bahagia melihat antusiasme murid saat berdiskusi memecahkan masalah kontekstual yang dekat dengan keseharian mereka.",
      findings: "Ditemukan bahwa sebagian kecil siswa pada kelompok fondasi membutuhkan waktu lebih lama dalam translasi kalimat cerita ke bentuk aljabar. Hal ini menggarisbawahi perlunya visual scaffolding yang lebih konkret di siklus berikutnya.",
      future: "Pada Siklus 2, saya akan menyediakan media kartu bantu persamaan (visual card) dan mengoptimalkan peran tutor sebaya agar alokasi waktu kegiatan inti lebih efektif dan tidak molor."
    },

    penilaianPamong: {
      skorRancangan: 94.0,
      skorPraktik: 93.5,
      nilaiAkhir: 93.75,
      predikat: "Sangat Baik (A)",
      namaPamong: "Jajang Wahyudin, S.T.",
      nipPamong: "-",
      catatanKualitatif: "Mahasiswa menunjukkan kesiapan rancangan modul ajar yang sangat matang. Pendekatan berdiferensiasinya sudah terlihat jelas di LKPD. Penampilan mengajar percaya diri, intonasi suara jelas, dan mampu membangun hubungan positif dengan siswa. Perhatikan efisiensi waktu pada tahap presentasi kelompok agar sesi refleksi di akhir tidak terburu-buru.",
      aspekRancangan: [
        { kriteria: "Kesesuaian Tujuan Pembelajaran dengan Capaian (CP)", skor: 95 },
        { kriteria: "Rancangan Langkah Pembelajaran Berdiferensiasi", skor: 94 },
        { kriteria: "Pemilihan dan Integrasi Media Pembelajaran", skor: 95 },
        { kriteria: "Kelengkapan Instrumen dan Rubrik Asesmen", skor: 92 }
      ],
      aspekPraktik: [
        { kriteria: "Kemampuan Membuka Pelajaran & Apersepsi", skor: 95 },
        { kriteria: "Keterampilan Pengelolaan Kelas & Scaffolding", skor: 93 },
        { kriteria: "Penggunaan Bahasa yang Komunikatif & Positif", skor: 96 },
        { kriteria: "Ketepatan Manajemen Waktu Setiap Fase", skor: 89 },
        { kriteria: "Pemberian Umpan Balik & Refleksi Bersama", skor: 94 }
      ],
      dokumenNilai: {
        namaFile: "Refleksi_Praktik_Pembelajaran_Siklus_1_Terverifikasi.pdf",
        ukuran: "1.8 MB",
        status: "Telah Ditandatangani & Diverifikasi LPTK",
        linkUnduh: "https://drive.google.com/file/d/13EX5DYbM1d3sFIelXS-zJ6F6OTpMhEFB/view?usp=drive_link"
      }
    }
  },

  // DATA UAS (SIKLUS 2, 3, 4 & REKAPITULASI)
  uas: {
    siklusList: [
      {
        id: "siklus-2",
        nomor: "Siklus 2",
        namaSingkat: "Siklus II: Project Based Learning (PjBL)",
        tema: "Model Project Based Learning (PjBL) Terintegrasi STEM",
        materi: "Aplikasi Barisan & Deret Aritmatika dalam Perencanaan Finansial Sederhana",
        kelas: "Fase E - Kelas X-B",
        durasi: "3 JP (3 x 45 Menit)",
        tanggalPelaksanaan: "12 November 2025",
        
        modulAjar: {
          judul: "Modul Ajar Informatika - Algoritma Searching",
          deskripsi: "Modul ajar ini dirancang untuk pembelajaran Informatika materi Algoritma Searching (Linear Search dan Binary Search) dengan model Problem Based Learning, pendekatan Deep Learning (Mindful, Meaningful, Joyful), dan strategi Pembelajaran Berdiferensiasi.",
          fokus: "Diferensiasi proses dan produk melalui pemecahan masalah pencarian data kontekstual.",
          fileSize: "2.8 MB (PDF Lengkap)",
          linkDrive: "https://drive.google.com/file/d/1_1O4g5R9akq5kiSiV33aCPvdJQvpKioO/view?usp=drive_link"
        },
        
        mediaPembelajaran: [
          {
            nama: "Slide Presentasi",
            jenis: "Dokumen Presentasi (PDF)",
            deskripsi: "Media presentasi pembelajaran Informatika yang digunakan untuk membantu peserta didik memahami Algoritma Searching secara sistematis dan kontekstual.",
            linkUnduh: "https://drive.google.com/file/d/1Y9fN86rJswakdJ6zchigECdAcgEZOrLe/view?usp=drive_link",
            badge: "Berkas PDF"
          },
          {
            nama: "LKPD (Lembar Kerja Peserta Didik)",
            jenis: "Student Worksheet",
            deskripsi: "Lembar kerja kelompok pembelajaran Informatika yang dirancang untuk membantu peserta didik memahami Algoritma Searching, melalui kegiatan penyelesaian studi kasus.",
            linkUnduh: "https://drive.google.com/file/d/17BYJ0RlqYI1hUH3MnJcPmks06Ox2eiIZ/view?usp=drive_link",
            badge: "Berkas PDF"
          }
        ],

        videoPembelajaran: {
          judul: "Rekaman Praktik Pembelajaran Siklus 2 - Model PjBL",
          durasi: "15 Menit (Peer Review) & 90 Menit (Full Session)",
          linkFull: "https://youtube.com/watch?v=sample-video-siklus2",
          tahapan: [
            { waktu: "00:00 - 02:30", bagian: "Pendahuluan & Pertanyaan Mendasar", detail: "Menayangkan fenomena literasi finansial remaja dan tantangan menabung." },
            { waktu: "02:31 - 07:00", bagian: "Mendesain Perencanaan Proyek", detail: "Pembagian peran, penyusunan jadwal proyek kelompok, dan penentuan target tabungan." },
            { waktu: "07:01 - 11:30", bagian: "Monitoring & Pembuatan Produk", detail: "Guru berkeliling memfasilitasi pembuatan spreadsheet kalkulasi barisan deret." },
            { waktu: "11:31 - 15:00", bagian: "Gelar Karya (Gallery Walk) & Evaluasi", detail: "Siswa saling mengamati proyek kelompok lain dan memberikan sticky notes apresiasi." }
          ]
        },

        refleksi: {
          perbaikanDariSiklus1: "Manajemen waktu jauh lebih presisi berkat penggunaan 'Timer Visual di Layar' dan instruksi pengerjaan yang lebih ringkas.",
          tantangan: "Beberapa siswa belum terbiasa menggunakan formula dasar spreadsheet, sehingga membutuhkan panduan kilat kartu shortcut.",
          tindakLanjut: "Memasukkan panduan singkat penggunaan tools digital ke dalam modul ajar untuk siklus selanjutnya."
        },

        penilaianPamong: {
          skorRancangan: 95.5,
          skorPraktik: 95.0,
          nilaiAkhir: 95.25,
          predikat: "Sangat Baik (A)",
          catatanKualitatif: "Peningkatan yang sangat nyata dibanding Siklus 1! Guru muda mampu memantik antusiasme murid dengan topik yang sangat relevan. Pengelolaan gallery walk sangat hidup dan tertib.",
          dokumenNilai: "Refleksi_Praktik_Pembelajaran_Siklus_2.pdf",
          linkUnduh: "https://drive.google.com/file/d/1bc8jxW72pPOAdqN-vScVvFnnmsXCtLRu/view?usp=drive_link"
        }
      },

      {
        id: "siklus-3",
        nomor: "Siklus 3",
        namaSingkat: "Siklus III: Inquiry Learning & Pendekatan TaRL",
        tema: "Pendekatan Teaching at the Right Level (TaRL) & Inquiry",
        materi: "Trigonometri Dasar - Perbandingan Sudut Siku-Siku",
        kelas: "Fase E - Kelas X-C",
        durasi: "2 JP (2 x 45 Menit)",
        tanggalPelaksanaan: "28 November 2025",
        
        modulAjar: {
          judul: "Modul Ajar Siklus 3: Penemuan Konsep Trigonometri Berbasis Pendekatan TaRL",
          deskripsi: "Siswa dikelompokkan berdasarkan hasil asesmen awal (belum siap, siap, sangat siap). Guru memberikan intervensi terarah sesuai fase pemahaman ruang dan proporsi segitiga.",
          fokus: "Klinik belajar terbimbing untuk kelompok fondasi dan eksplorasi mandiri menggunakan klinometer sederhana bagi kelompok mahir.",
          fileSize: "3.1 MB (PDF Lengkap)",
          linkDrive: "https://drive.google.com/file/d/1AxjWvi9jF-gtgzrYH7D9qZt9CucHQ1Ej/view?usp=drive_link"
        },
        
        mediaPembelajaran: [
          {
            nama: "Slide Presentasi",
            jenis: "Dokumen Presentasi (PDF)",
            deskripsi: "Slide presentasi konsep perbandingan sudut trigonometri dengan visualisasi interaktif rasio sisi segitiga siku-siku dan ilustrasi kontekstual.",
            linkUnduh: "https://drive.google.com/file/d/11RNt7gcknCS7Ux-rLvjvRuWMuGMLgVlY/view?usp=drive_link",
            badge: "Berkas PDF"
          },
          {
            nama: "LKPD Berdiferensiasi",
            jenis: "Student Worksheet",
            deskripsi: "Lembar kerja peserta didik berbasis observasi kontekstual dengan diferensiasi tingkat pemahaman ruang dan proporsi segitiga siku-siku.",
            linkUnduh: "https://drive.google.com/file/d/1t24X-7M1E3dRmXa1-A9T_ZyNvIH5q8uG/view?usp=drive_link",
            badge: "Berkas PDF"
          }
        ],

        videoPembelajaran: {
          judul: "Rekaman Praktik Pembelajaran Siklus 3 - Outdoor Learning & TaRL",
          durasi: "15 Menit (Peer Review) & 80 Menit (Full Session)",
          linkFull: "https://youtube.com/watch?v=sample-video-siklus3",
          tahapan: [
            { waktu: "00:00 - 02:40", bagian: "Apersepsi & Briefing Lapangan", detail: "Pengelompokan TaRL dan pembagian alat klinometer sederhana dengan instruksi keselamatan." },
            { waktu: "02:41 - 08:30", bagian: "Pengukuran Luar Kelas (Outdoor Inquiry)", detail: "Siswa melakukan pengukuran sudut elevasi tinggi tiang bendera dan pohon di halaman sekolah." },
            { waktu: "08:31 - 12:20", bagian: "Olah Data & Konfirmasi GeoGebra", detail: "Kembali ke kelas, menghitung hasil perhitungan dengan trigonometri dan memverifikasi di GeoGebra." },
            { waktu: "12:21 - 15:00", bagian: "Penarikan Kesimpulan & Exit Ticket", detail: "Refleksi bermakna mengapa perbandingan trigonometri konstan dan pengerjaan exit ticket." }
          ]
        },

        refleksi: {
          perbaikanDariSiklus1: "Pendekatan TaRL sangat berhasil menjembatani kesenjangan pemahaman. Siswa yang awalnya pasif menjadi sangat percaya diri karena perlakuan yang pas dengan kesiapannya.",
          tantangan: "Pengelolaan kondisi luar kelas membutuhkan instruksi yang sangat tegas agar siswa tetap fokus pada lembar pengamatan.",
          tindakLanjut: "Memperjelas pembagian peran masing-masing anggota kelompok di lapangan (pengamat, pencatat, pembidik klinometer)."
        },

        penilaianPamong: {
          skorRancangan: 96.8,
          skorPraktik: 96.2,
          nilaiAkhir: 96.50,
          predikat: "Sangat Baik (A)",
          catatanKualitatif: "Pembelajaran sangat berkesan dan kontekstual. Inovasi outdoor math learning dengan klinometer dan TaRL patut diacungi jempol. Komunikasi guru sangat hangat dan memotivasi.",
          dokumenNilai: "Refleksi_Praktik_Pembelajaran_Siklus_3.pdf",
          linkUnduh: "https://drive.google.com/file/d/1sAH2j246DkBN-LkuslnY3QFI8JA44qHH/view?usp=drive_link"
        }
      },

      {
        id: "siklus-4",
        nomor: "Siklus 4",
        namaSingkat: "Siklus IV: Culturally Responsive Teaching & TPACK",
        tema: "Pendekatan Culturally Responsive Teaching (CRT) & TPACK",
        materi: "Transformasi Geometri (Refleksi & Rotasi) Berbasis Motif Batik Daerah",
        kelas: "Fase E - Kelas X-D",
        durasi: "2 JP (2 x 45 Menit)",
        tanggalPelaksanaan: "15 Desember 2025",
        
        modulAjar: {
          judul: "Modul Ajar Informatika - Microsoft Word",
          deskripsi: "Modul ajar ini dirancang untuk pembelajaran Informatika materi Pengolahan Dokumen Menggunakan Microsoft Word bagi murid kelas X Fase E dengan model Direct Learning (Pembelajaran Langsung).",
          fokus: "Pengolahan dokumen biodata diri, format teks, daftar isi, tabel, dan gambar.",
          fileSize: "3.5 MB (PDF Lengkap)",
          linkDrive: "https://drive.google.com/file/d/1AQWFyIv5c2IIQWKS0gIUZBjx_ahJGFe7/view?usp=drive_link"
        },
        
        mediaPembelajaran: [
          {
            nama: "Slide Presentasi",
            jenis: "Dokumen Presentasi (PDF)",
            deskripsi: "Slide presentasi etnomatematika batik nusantara yang menampilkan pola geometri pada corak motif batik tradisional nusantara dengan analisis matriks koordinat.",
            linkUnduh: "https://drive.google.com/file/d/1XK4F_drm5-DfagOXEVlftrCSFqZHm4Zy/view?usp=drive_link",
            badge: "Berkas PDF"
          },
          {
            nama: "LKPD (Lembar Kerja Peserta Didik)",
            jenis: "Student Worksheet",
            deskripsi: "LKPD pembelajaran Informatika yang dirancang untuk membantu peserta didik memahami dan mempraktikkan penggunaan Microsoft Word dalam mengolah dokumen secara sistematis.",
            linkUnduh: "https://drive.google.com/file/d/1yg3oyE_o9OlTJWofoAqPXyGHxOLtefR8/view?usp=drive_link",
            badge: "Berkas PDF"
          }
        ],

        videoPembelajaran: {
          judul: "Rekaman Praktik Pembelajaran Siklus 4 - CRT & TPACK",
          durasi: "15 Menit (Peer Review) & 85 Menit (Full Session)",
          linkFull: "https://youtube.com/watch?v=sample-video-siklus4",
          tahapan: [
            { waktu: "00:00 - 02:50", bagian: "Apersepsi Budaya Nusantara", detail: "Menunjukkan kain batik nyata dan mengulik filosofi simetri di balik motif tradisional." },
            { waktu: "02:51 - 07:15", bagian: "Eksplorasi Konsep Refleksi & Rotasi", detail: "Menghubungkan pola batik dengan rumus matriks koordinat transformasi." },
            { waktu: "07:16 - 11:45", bagian: "Studio Kreatif Pembuatan Motif Siswa", detail: "Siswa mendesain motif batik digital kelompok dengan aturan matematis yang ketat." },
            { waktu: "11:46 - 15:00", bagian: "Refleksi Cinta Budaya & Asesmen Sumatif", detail: "Meresapi nilai luhur budaya, evaluasi game Kahoot, dan apresiasi karya orisinal siswa." }
          ]
        },

        refleksi: {
          perbaikanDariSiklus1: "Kemampuan integrasi teknologi dan konten pedagogik (TPACK) sudah sangat mulus dan natural. Siswa belajar dengan rasa bangga terhadap budaya bangsanya.",
          tantangan: "Siswa begitu asyik mendesain hingga perlu diingatkan mengenai alokasi waktu analisis koordinat rumusnya.",
          tindakLanjut: "Format integrasi budaya ini akan diadopsi sebagai praktik baik (Best Practice) pada uji kinerja komprehensif PPG."
        },

        penilaianPamong: {
          skorRancangan: 98.0,
          skorPraktik: 97.6,
          nilaiAkhir: 97.80,
          predikat: "Sangat Baik (A+)",
          catatanKualitatif: "Luar biasa! Inovasi pembelajaran yang memadukan budaya lokal dan kecanggihan teknologi secara harmonis. Guru menunjukkan kematangan emosional dan penguasaan pedagogik yang istimewa. Sangat layak menjadi guru profesional teladan.",
          dokumenNilai: "Refleksi_Praktik_Pembelajaran_Siklus_4.pdf",
          linkUnduh: "https://drive.google.com/file/d/1NbZizcQ5D0ifwj3PARiLkRPQ-Q2r2qIl/view?usp=drive_link"
        }
      }
    ],

    // Rekapitulasi Komparatif Akhir UAS
    rekapitulasi: {
      rataRataKeseluruhan: 95.82,
      predikatAkhir: "A (Sangat Baik / Istimewa)",
      statusKelulusanPPL: "LULUS UJI PRAKTIK PEMBELAJARAN PPL DENGAN PRESTASI MEMUASKAN",
      perkembangan: [
        { siklus: "Siklus 1 (PBL)", rancangan: 94.0, praktik: 93.5, rataRata: 93.75, predikat: "Sangat Baik (A)" },
        { siklus: "Siklus 2 (PjBL)", rancangan: 95.5, praktik: 95.0, rataRata: 95.25, predikat: "Sangat Baik (A)" },
        { siklus: "Siklus 3 (TaRL)", rancangan: 96.8, praktik: 96.2, rataRata: 96.50, predikat: "Sangat Baik (A)" },
        { siklus: "Siklus 4 (CRT)", rancangan: 98.0, praktik: 97.6, rataRata: 97.80, predikat: "Sangat Baik (A+)" }
      ],
      pengesahan: {
        dpl: {
          nama: "Dr. Eko Prasetyo, M.Pd.",
          nip: "19750315 200212 1 002",
          instansi: "LPTK Universitas Negeri Jakarta"
        },
        guruPamong: {
          nama: "Jajang Wahyudin, S.T.",
          nip: "-",
          instansi: "SMA Negeri 24 Bandung"
        }
      },
      dokumenLengkapUAS: {
        nama: "Berkas_Komprehensif_Rekap_Nilai_PPL_UAS_Semester_2.pdf",
        ukuran: "4.2 MB",
        linkUnduh: "https://drive.google.com/file/d/sample-berkas-uas-lengkap/view"
      }
    }
  }
};

// LocalStorage Persistence Helper
function getPortfolioData() {
  const saved = localStorage.getItem('ppg_portfolio_data');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Gagal membaca data dari localStorage, menggunakan data default.", e);
    }
  }
  return defaultPortfolioData;
}

function savePortfolioData(data) {
  localStorage.setItem('ppg_portfolio_data', JSON.stringify(data));
}
