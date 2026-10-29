const fs = require('fs');

const esaiHtml = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Soal Esai HOTS & Tempat Pengumpulan — RuangInformatika SMAN 4 Yogyakarta</title>
    <link rel="shortcut icon" href="../images/Logo Patbhe.png" type="image/x-icon" />

    <!-- Anti-FOUC Script -->
    <script>
      if (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    </script>

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              brandDark: "#0b1120",
              brandNavy: "#0f172a",
              brandGray: "#1e293b",
            },
            fontFamily: {
              sans: ["'Plus Jakarta Sans'", "sans-serif"],
              mono: ["'JetBrains Mono'", "monospace"],
            },
          },
        },
      };
    </script>

    <style>
      body {
        background-color: #0b1120;
        background-image: radial-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px),
          radial-gradient(rgba(147, 51, 234, 0.06) 1px, transparent 1px);
        background-size: 36px 36px;
        background-position: 0 0, 18px 18px;
      }
      html:not(.dark) body {
        background-color: #f8fafc;
        background-image: radial-gradient(rgba(245, 158, 11, 0.12) 1px, transparent 1px),
          radial-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px);
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar { width: 6px; height: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.3); border-radius: 999px; }

      .essay-card {
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        backdrop-filter: blur(14px);
        transition: all 0.3s ease;
      }
      html:not(.dark) .essay-card {
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(226, 232, 240, 0.9);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
      }

      .upload-dropzone {
        border: 2px dashed rgba(245, 158, 11, 0.4);
        transition: all 0.25s ease;
      }
      .upload-dropzone.dragover {
        border-color: #f59e0b;
        background: rgba(245, 158, 11, 0.08);
        transform: scale(1.01);
      }

      @media print {
        header, footer, #tempat-pengumpulan, .no-print, button, a {
          display: none !important;
        }
        body {
          background: #fff !important;
          color: #000 !important;
        }
        .essay-card {
          box-shadow: none !important;
          border: 1px solid #ccc !important;
          break-inside: avoid;
          margin-bottom: 20px;
        }
      }
    </style>
  </head>

  <body class="text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
    
    <!-- ================= TOP NAVBAR ================= -->
    <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="uji-kompetensi.html" class="flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-400 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
              <img src="../images/Logo Patbhe.png" alt="Logo SMAN 4 Yogyakarta" class="w-7 h-7 object-contain" />
            </div>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-black text-xl text-slate-900 dark:text-white tracking-tight">Ruang<span class="text-amber-500">Informatika</span></span>
            </div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 block">SOAL ESAI &amp; PENGUMPULAN • SMAN 4</span>
          </div>
        </a>

        <!-- Controls -->
        <div class="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#tempat-pengumpulan"
            class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold transition-colors shadow-sm"
          >
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <span class="hidden sm:inline">Kumpulkan Tugas PDF</span>
            <span class="sm:hidden">Kumpul PDF</span>
          </a>

          <a
            href="uji-kompetensi.html"
            class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span class="hidden md:inline">Portal Uji</span>
          </a>

          <button
            id="themeToggleBtn"
            type="button"
            class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-amber-400 flex items-center justify-center transition-all focus:outline-none shadow-sm cursor-pointer border border-slate-200 dark:border-slate-700"
            aria-label="Toggle Theme"
            title="Ganti Tema Gelap / Terang"
          >
            <i class="fa-solid fa-moon dark:hidden text-sm"></i>
            <i class="fa-solid fa-sun hidden dark:inline text-sm"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- ================= MAIN CONTAINER ================= -->
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full space-y-10">
      
      <!-- ================= HERO BANNER ================= -->
      <div class="text-center space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-300 text-xs font-bold font-mono tracking-wider shadow-sm">
          <i class="fa-solid fa-pen-nib"></i>
          <span>ASESMEN SUMATIF KOMPREHENSIF • PENGERJAAN MANUAL &amp; SCAN PDF</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Soal Esai Analisis <span class="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">HOTS</span>
        </h1>

        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Kerjakan kelima butir soal studi kasus di bawah ini <strong>di buku tulis / lembar kertas folio bergaris</strong>. Setelah selesai, pindai (scan) menjadi <strong>1 file PDF</strong> yang rapi lalu kumpulkan pada tempat pengumpulan di bawah.
        </p>

        <!-- Action Pills -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#tempat-pengumpulan"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/25 transition-all"
          >
            <i class="fa-solid fa-arrow-down"></i>
            <span>Langsung ke Tempat Pengumpulan PDF</span>
          </a>

          <button
            onclick="window.print()"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <i class="fa-solid fa-print text-amber-500"></i>
            <span>Cetak / Simpan Soal</span>
          </button>
        </div>
      </div>

      <!-- ================= PETUNJUK PENGERJAAN DI BUKU TULIS ================= -->
      <div class="bg-white dark:bg-slate-900/90 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-lg space-y-4">
        <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center text-lg">
            <i class="fa-solid fa-list-ol"></i>
          </div>
          <div>
            <h2 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Petunjuk Pengerjaan di Buku Tulis &amp; Pemindaian
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">Ikuti 4 tahapan pengerjaan berikut dengan tertib</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-mono font-bold text-xs">1</span>
              <span>Identitas Kertas</span>
            </div>
            <p>Tuliskan <strong>Nama Lengkap, Nomor Presensi, Kelas, dan Mata Pelajaran</strong> di pojok kanan atas lembar jawaban bukumu.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-mono font-bold text-xs">2</span>
              <span>Uraian Logis &amp; Runtut</span>
            </div>
            <p>Tuliskan nomor soal (1 s/d 5) serta jawaban analisis secara jelas, terbaca, dan menggunakan argumentasi konsep yang tepat.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-mono font-bold text-xs">3</span>
              <span>Pindai Jadi 1 PDF</span>
            </div>
            <p>Scan lembar jawaban menggunakan kamera HP (aplikasi CamScanner, Google Drive Scan, Adobe Scan). Gabungkan ke dalam <strong>1 file PDF</strong>.</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-mono font-bold text-xs">4</span>
              <span>Kumpulkan di Bawah</span>
            </div>
            <p>Unggah file PDF hasil scan pada formulir pengumpulan tugas di bagian bawah halaman ini sebelum batas waktu berakhir.</p>
          </div>
        </div>
      </div>

      <!-- ================= DAFTAR 5 SOAL ESAI HOTS ================= -->
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <i class="fa-solid fa-file-lines text-amber-500"></i>
            <span>Naskah Soal Esai HOTS (5 Butir Soal)</span>
          </h2>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/30">
            Total Bobot: 100 Poin
          </span>
        </div>

        <!-- SOAL 1 -->
        <article class="essay-card p-6 sm:p-8 space-y-4 border-l-4 border-l-amber-500">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-mono font-black flex items-center justify-center text-sm">
                E1
              </span>
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-amber-500 block">BERPIKIR KOMPUTASIONAL</span>
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Studi Kasus: Optimalisasi Antrean Layanan Kantin Sekolah</h3>
              </div>
            </div>
            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              Bobot: 20 Poin
            </span>
          </div>

          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-3">
            <p class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 italic">
              "Pada jam istirahat sekolah yang hanya berdurasi 30 menit, antrean siswa di kantin seringkali sangat panjang, berdesakan, dan lambat sehingga banyak siswa kehabisan waktu makan atau terlambat masuk ke kelas berikutnya."
            </p>
            <p class="font-bold text-slate-900 dark:text-white">Pertanyaan Analisis untuk Dijawab di Buku Tulis:</p>
            <ol class="list-decimal list-inside space-y-2 pl-2">
              <li>
                Lakukan <strong>Dekomposisi</strong> dengan mengidentifikasi dan memecah akar permasalahan antrean kantin tersebut menjadi minimal <strong>4 sub-masalah spesifik</strong> (contoh terkait: alur pemesanan, metode pembayaran, tata letak menu, atau pembagian porsi)!
              </li>
              <li>
                Jelaskan bagaimana prinsip <strong>Pengenalan Pola (Pattern Recognition)</strong> dapat digunakan untuk mengamati kebiasaan pembelian siswa (misalnya jam puncak atau menu favorit), dan usulkan solusi berbasis algoritma penjadwalan agar pelayanan menjadi lebih cepat!
              </li>
            </ol>
          </div>
        </article>

        <!-- SOAL 2 -->
        <article class="essay-card p-6 sm:p-8 space-y-4 border-l-4 border-l-cyan-500">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-xl bg-cyan-500 text-slate-950 font-mono font-black flex items-center justify-center text-sm">
                E2
              </span>
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-cyan-500 block">STRUKTUR DATA</span>
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Analisis Karakteristik Mekanisme Stack (LIFO) vs Queue (FIFO)</h3>
              </div>
            </div>
            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              Bobot: 20 Poin
            </span>
          </div>

          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-3">
            <p class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 italic">
              "Dalam komputasi modern, Stack dan Queue adalah dua struktur data linier yang menjadi pondasi penting bagi berbagai aplikasi piranti lunak dan sistem operasi."
            </p>
            <p class="font-bold text-slate-900 dark:text-white">Pertanyaan Analisis untuk Dijawab di Buku Tulis:</p>
            <ol class="list-decimal list-inside space-y-2 pl-2">
              <li>
                Terangkan perbedaan prinsip kerja <strong>Stack (Last In, First Out)</strong> dan <strong>Queue (First In, First Out)</strong>, serta berikan contoh implementasi masing-masing pada fitur komputer (misal: fitur <em>Undo-Redo</em> dan antrean <em>Print Spooler</em>)!
              </li>
              <li>
                Analisislah apa kekacauan logis yang akan terjadi jika mekanisme keduanya <strong>ditukar</strong>: printer mencetak dokumen siswa dengan prinsip Stack (LIFO), dan fitur Undo pada Microsoft Word beroperasi dengan prinsip Queue (FIFO)? Jelaskan alasannya!
              </li>
            </ol>
          </div>
        </article>

        <!-- SOAL 3 -->
        <article class="essay-card p-6 sm:p-8 space-y-4 border-l-4 border-l-purple-500">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-xl bg-purple-500 text-white font-mono font-black flex items-center justify-center text-sm">
                E3
              </span>
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-purple-400 block">ALGORITMA PEMROGRAMAN</span>
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Efisiensi Kompleksitas Waktu: Linear Search vs Binary Search</h3>
              </div>
            </div>
            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              Bobot: 20 Poin
            </span>
          </div>

          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-3">
            <p class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 italic">
              "Sebuah sistem perpustakaan digital nasional menyimpan basis data 1.000.000 (satu juta) judul buku dengan nomor ISBN unik yang tersimpan dalam sistem komputernya."
            </p>
            <p class="font-bold text-slate-900 dark:text-white">Pertanyaan Analisis untuk Dijawab di Buku Tulis:</p>
            <ol class="list-decimal list-inside space-y-2 pl-2">
              <li>
                Mengapa algoritma <strong>Binary Search</strong> memiliki syarat mutlak bahwa kumpulan data ISBN harus <strong>terurut (sorted)</strong> terlebih dahulu sebelum pencarian dimulai? Apa yang terjadi jika data belum terurut?
              </li>
              <li>
                Bandingkan efisiensi waktu (kasus terburuk / <em>worst case</em>) antara <strong>Linear Search</strong> dengan <strong>Binary Search</strong> untuk menemukan 1 data di antara 1.000.000 buku! Hitung berapa estimasi maksimal langkah perbandingan yang dilakukan oleh Binary Search ($\log_2 1.000.000$)?
              </li>
            </ol>
          </div>
        </article>

        <!-- SOAL 4 -->
        <article class="essay-card p-6 sm:p-8 space-y-4 border-l-4 border-l-emerald-500">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 font-mono font-black flex items-center justify-center text-sm">
                E4
              </span>
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-500 block">SISTEM KOMPUTER</span>
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Siklus Mesin Von Neumann (Fetch - Decode - Execute) &amp; Aliran IPO</h3>
              </div>
            </div>
            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              Bobot: 20 Poin
            </span>
          </div>

          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-3">
            <p class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 italic">
              "Ketika siswa mengetikkan teks di keyboard lalu huruf tersebut seketika muncul di layar monitor dan dapat disimpan ke dalam SSD, komputer menjalankan siklus instruksi berkecepatan miliaran kali per detik."
            </p>
            <p class="font-bold text-slate-900 dark:text-white">Pertanyaan Analisis untuk Dijawab di Buku Tulis:</p>
            <ol class="list-decimal list-inside space-y-2 pl-2">
              <li>
                Jelaskan secara runtut tahapan kerja <strong>Fetch (Ambil)</strong>, <strong>Decode (Terjemahkan)</strong>, dan <strong>Execute (Eksekusi)</strong> yang dilakukan oleh prosesor (CPU) saat memproses instruksi tersebut!
              </li>
              <li>
                Terangkan peran masing-masing komponen: <strong>Input Unit</strong> (Keyboard), <strong>Control Unit (CU)</strong>, <strong>Arithmetic Logic Unit (ALU)</strong>, <strong>Memori Utama (RAM)</strong>, dan <strong>Output Unit</strong> (Monitor) dalam siklus Input-Process-Output (IPO)!
              </li>
            </ol>
          </div>
        </article>

        <!-- SOAL 5 -->
        <article class="essay-card p-6 sm:p-8 space-y-4 border-l-4 border-l-rose-500">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-xl bg-rose-500 text-white font-mono font-black flex items-center justify-center text-sm">
                E5
              </span>
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-rose-400 block">SISTEM OPERASI</span>
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Model Lapisan Bawang (Onion Layer) &amp; Penjadwalan Round Robin</h3>
              </div>
            </div>
            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              Bobot: 20 Poin
            </span>
          </div>

          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-3">
            <p class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 italic">
              "Seorang siswa sedang mengikuti kelas daring Zoom Meeting sambil mengetik rangkuman di Google Docs dan mendengarkan musik di Spotify secara multitasking pada laptopnya."
            </p>
            <p class="font-bold text-slate-900 dark:text-white">Pertanyaan Analisis untuk Dijawab di Buku Tulis:</p>
            <ol class="list-decimal list-inside space-y-2 pl-2">
              <li>
                Berdasarkan konsep abstraksi <strong>Model Lapisan Bawang (Hardware - Kernel - Shell - Applications)</strong>, mengapa aplikasi Zoom dan Spotify tidak diizinkan mengakses sound card/speaker/kamera secara langsung tanpa melalui Kernel? Apa bahayanya jika tidak ada proteksi ini?
              </li>
              <li>
                Jelaskan cara kerja algoritma penjadwalan CPU <strong>Round Robin (Time Quantum)</strong> dalam membagi waktu prosesor ke tiap aplikasi sehingga seluruh aplikasi tampak berjalan bersamaan secara mulus tanpa crash!
              </li>
            </ol>
          </div>
        </article>

      </div>

      <!-- ========================================================
           TEMPAT PENGUMPULAN TUGAS (UPLOAD FILE SCAN PDF)
           ======================================================== -->
      <section id="tempat-pengumpulan" class="pt-6">
        <div class="bg-gradient-to-br from-white to-amber-50/50 dark:from-slate-900 dark:to-amber-950/20 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
          
          <div class="space-y-2 text-center max-w-xl mx-auto">
            <div class="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-500 flex items-center justify-center mx-auto text-3xl shadow-md shadow-amber-500/10">
              <i class="fa-solid fa-cloud-arrow-up"></i>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Tempat Pengumpulan Berkas Jawaban Esai
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pastikan seluruh 5 soal di atas sudah kamu tuliskan jawabannya di buku tugas, kemudian unggah berkas hasil pindaian (PDF) di bawah ini.
            </p>
          </div>

          <!-- Form Identitas Pengumpul -->
          <form id="formKumpulEsai" onsubmit="event.preventDefault(); submitTugasPdf();" class="space-y-6 max-w-2xl mx-auto">
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Nama -->
              <div class="sm:col-span-1">
                <label for="upNama" class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <i class="fa-solid fa-user text-amber-500"></i> Nama Lengkap <span class="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="upNama"
                  required
                  placeholder="Ketik nama lengkap..."
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <!-- Presensi -->
              <div>
                <label for="upAbsen" class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <i class="fa-solid fa-id-badge text-amber-500"></i> Nomor Presensi <span class="text-rose-500">*</span>
                </label>
                <input
                  type="number"
                  id="upAbsen"
                  required
                  min="1"
                  max="50"
                  placeholder="Contoh: 18"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <!-- Kelas -->
              <div>
                <label for="upKelas" class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <i class="fa-solid fa-school text-amber-500"></i> Kelas / Rombel <span class="text-rose-500">*</span>
                </label>
                <select
                  id="upKelas"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="X-E6" selected>X-E6 (Sepuluh E6)</option>
                  <option value="X-E1">X-E1 (Sepuluh E1)</option>
                  <option value="X-E2">X-E2 (Sepuluh E2)</option>
                  <option value="X-E3">X-E3 (Sepuluh E3)</option>
                  <option value="X-E4">X-E4 (Sepuluh E4)</option>
                  <option value="X-E5">X-E5 (Sepuluh E5)</option>
                  <option value="X-E7">X-E7 (Sepuluh E7)</option>
                </select>
              </div>
            </div>

            <!-- UPLOAD DROPZONE -->
            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span class="flex items-center gap-1.5"><i class="fa-solid fa-file-pdf text-amber-500"></i> Unggah Berkas Jawaban (PDF) <span class="text-rose-500">*</span></span>
                <span class="font-normal text-slate-400">Format: .PDF (Maks. 25 MB)</span>
              </label>

              <!-- Hidden native file input -->
              <input
                type="file"
                id="filePdfInput"
                accept=".pdf,application/pdf"
                class="hidden"
                onchange="handleFileSelect(event)"
              />

              <!-- Dropzone Card -->
              <div
                id="dropzone"
                onclick="document.getElementById('filePdfInput').click()"
                ondragover="handleDragOver(event)"
                ondragleave="handleDragLeave(event)"
                ondrop="handleFileDrop(event)"
                class="upload-dropzone p-8 rounded-2xl bg-white/60 dark:bg-slate-950/60 text-center cursor-pointer hover:border-amber-500 transition-all space-y-3"
              >
                <!-- Empty State View -->
                <div id="dropzoneEmpty" class="space-y-2">
                  <div class="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto text-2xl">
                    <i class="fa-solid fa-file-arrow-up"></i>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Klik untuk memilih file PDF atau seret berkas ke sini
                    </p>
                    <p class="text-xs text-slate-400 mt-1">
                      File hasil scan lembar jawaban tulisan tangan (CamScanner, Google Drive Scan, dsb)
                    </p>
                  </div>
                </div>

                <!-- Selected File Preview -->
                <div id="dropzonePreview" class="hidden items-center justify-between p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-left">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center text-lg">
                      <i class="fa-solid fa-file-pdf"></i>
                    </div>
                    <div>
                      <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs" id="previewFileName">
                        Jawaban_Esai.pdf
                      </div>
                      <div class="text-[11px] font-mono text-slate-500 dark:text-slate-400" id="previewFileSize">
                        1.4 MB
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onclick="event.stopPropagation(); removeSelectedFile();"
                    class="w-8 h-8 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 flex items-center justify-center text-xs transition-colors cursor-pointer"
                    title="Hapus file"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Alternative: Link Google Drive -->
            <div class="space-y-1.5 pt-1">
              <label for="upDriveLink" class="block text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <i class="fa-brands fa-google-drive text-amber-500"></i>
                <span>Tautan / Link Google Drive Berkas PDF (Opsional / Cadangan):</span>
              </label>
              <input
                type="url"
                id="upDriveLink"
                placeholder="https://drive.google.com/file/d/... (Pastikan akses disetel ke Siapa Saja yang Memiliki Link)"
                class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
              />
              <p class="text-[11px] text-slate-400">
                Gunakan opsi tautan ini jika berkas PDF berukuran sangat besar (&gt; 25 MB).
              </p>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button
                type="submit"
                id="btnKumpulEsai"
                class="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
              >
                <i class="fa-solid fa-paper-plane"></i>
                <span id="btnKumpulText">Kumpulkan Berkas Jawaban Esai Sekarang</span>
              </button>
            </div>

            <!-- Alert Box -->
            <div id="submitAlert" class="hidden p-4 rounded-2xl text-xs sm:text-sm font-semibold text-center items-center justify-center gap-2"></div>

          </form>

        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
      <div class="max-w-6xl mx-auto px-4">
        &copy; 2026 RuangInformatika • SMA Negeri 4 Yogyakarta. Asesmen Sumatif Esai Terpadu.
      </div>
    </footer>

    <!-- LOGIC JAVASCRIPT -->
    <script>
      let selectedFile = null;
      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjU4YyZ8ScP9xsXuqpfVFKChn_rrR_fBm1PfRdp8i8UaQ5LrdCiGSI8BmTOMB1K9o/exec";

      window.addEventListener("DOMContentLoaded", () => {
        setupThemeToggle();
      });

      function setupThemeToggle() {
        const btn = document.getElementById("themeToggleBtn");
        if (btn) {
          btn.addEventListener("click", () => {
            const isDark = document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
          });
        }
      }

      /* ── DROPZONE & FILE SELECTION ── */
      function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) validateAndSetFile(file);
      }

      function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("dropzone").classList.add("dragover");
      }

      function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("dropzone").classList.remove("dragover");
      }

      function handleFileDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("dropzone").classList.remove("dragover");
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          validateAndSetFile(e.dataTransfer.files[0]);
        }
      }

      function validateAndSetFile(file) {
        // Max 25MB
        if (file.size > 25 * 1024 * 1024) {
          alert("Ukuran file terlalu besar (maksimal 25 MB). Gunakan opsi tautan Google Drive jika file melebihi 25 MB.");
          return;
        }

        selectedFile = file;
        document.getElementById("previewFileName").innerText = file.name;
        document.getElementById("previewFileSize").innerText = formatBytes(file.size);

        document.getElementById("dropzoneEmpty").classList.add("hidden");
        document.getElementById("dropzonePreview").classList.remove("hidden");
        document.getElementById("dropzonePreview").classList.add("flex");
      }

      function removeSelectedFile() {
        selectedFile = null;
        document.getElementById("filePdfInput").value = "";
        document.getElementById("dropzonePreview").classList.add("hidden");
        document.getElementById("dropzonePreview").classList.remove("flex");
        document.getElementById("dropzoneEmpty").classList.remove("hidden");
      }

      function formatBytes(bytes) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
      }

      function fileToBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const base64 = reader.result.split(",")[1];
            resolve(base64);
          };
          reader.onerror = (error) => reject(error);
        });
      }

      /* ── SUBMISSION HANDLER ── */
      async function submitTugasPdf() {
        const nama = document.getElementById("upNama").value.trim();
        const absen = document.getElementById("upAbsen").value.trim();
        const kelas = document.getElementById("upKelas").value.trim();
        const driveLink = document.getElementById("upDriveLink").value.trim();
        const alertBox = document.getElementById("submitAlert");
        const btn = document.getElementById("btnKumpulEsai");
        const btnText = document.getElementById("btnKumpulText");

        if (!nama || !absen) {
          showAlert("error", "Harap isi Nama Lengkap dan Nomor Presensi sebelum mengumpulkan tugas!");
          return;
        }

        if (!selectedFile && !driveLink) {
          showAlert("error", "Silakan unggah file PDF hasil scan jawaban atau tempelkan link Google Drive!");
          return;
        }

        if (!confirm(\`Apakah kamu yakin ingin mengumpulkan berkas jawaban esai atas nama \${nama} (\${kelas} - Presensi \${absen})?\`)) {
          return;
        }

        // Processing UI
        btn.disabled = true;
        btnText.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Mengirimkan berkas ke guru...';
        showAlert("loading", "Sedang mengunggah berkas jawaban esaimu ke sistem penyimpanan guru. Mohon jangan tutup halaman ini...");

        try {
          const safeName = (s) => s.replace(/[^\\w\\d]+/g, "_").replace(/^_+|_+$/g, "");
          const finalFileName = \`ESAI_\${safeName(kelas)}_\${safeName(absen)}_\${safeName(nama)}.pdf\`;

          let base64 = "";
          let mime = "application/pdf";
          if (selectedFile) {
            base64 = await fileToBase64(selectedFile);
            mime = selectedFile.type || "application/pdf";
          }

          const fd = new FormData();
          fd.append("fileName", finalFileName);
          fd.append("fileBase64", base64);
          fd.append("mimeType", mime);
          fd.append("kelas", kelas);
          fd.append("nama", nama);
          fd.append("absen", absen);
          fd.append("link_drive", driveLink);
          fd.append("tugas", "UJI-KOMPETENSI-ESAI-HOTS-PDF");

          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            body: fd,
            mode: "no-cors"
          });

          // Fallback delay
          await new Promise(r => setTimeout(r, 1500));

          // Success UI
          btnText.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Berkas Berhasil Dikumpulkan!';
          showAlert(
            "success",
            \`<div class="space-y-1">
                <div class="text-base font-bold flex items-center justify-center gap-2"><i class="fa-solid fa-circle-check text-xl"></i> Berkas Berhasil Terkirim ke Guru!</div>
                <div class="text-xs opacity-90">Terima kasih <strong>\${nama}</strong> (\${kelas} - Presensi \${absen}). Berkas <strong>\${finalFileName}</strong> telah berhasil disimpan untuk penilaian guru.</div>
              </div>\`
          );

          // Save timestamp
          localStorage.setItem("patbhe_esai_submitted_" + absen, new Date().toISOString());

        } catch (err) {
          console.error("Upload error:", err);
          btn.disabled = false;
          btnText.innerHTML = 'Coba Kirim Ulang';
          showAlert("error", "Gagal mengunggah berkas ke server. Pastikan koneksi internetmu stabil, atau gunakan opsi Tautan Google Drive lalu klik kirim ulang.");
        }
      }

      function showAlert(type, htmlContent) {
        const box = document.getElementById("submitAlert");
        box.classList.remove("hidden", "bg-rose-500/10", "border-rose-500/30", "text-rose-500", "bg-amber-500/10", "border-amber-500/30", "text-amber-500", "bg-emerald-500/10", "border-emerald-500/30", "text-emerald-500");
        box.classList.add("flex", "border");

        if (type === "error") {
          box.classList.add("bg-rose-500/10", "border-rose-500/30", "text-rose-600", "dark:text-rose-400");
          box.innerHTML = '<i class="fa-solid fa-circle-exclamation text-base"></i><span>' + htmlContent + '</span>';
        } else if (type === "loading") {
          box.classList.add("bg-amber-500/10", "border-amber-500/30", "text-amber-600", "dark:text-amber-400");
          box.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-base"></i><span>' + htmlContent + '</span>';
        } else if (type === "success") {
          box.classList.add("bg-emerald-500/10", "border-emerald-500/30", "text-emerald-600", "dark:text-emerald-400");
          box.innerHTML = htmlContent;
        }

        box.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    </script>
  </body>
</html>`;

fs.writeFileSync('Uji_Kompetensi/esai.html', esaiHtml, 'utf8');
console.log('Successfully updated Uji_Kompetensi/esai.html for Written Essay & PDF Upload!');

