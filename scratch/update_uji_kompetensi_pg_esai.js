const fs = require('fs');

const htmlContent = `<!doctype html>
<html lang="id" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uji Kompetensi Informatika (Pilihan Ganda &amp; Esai) — RuangInformatika</title>
    <meta name="description" content="Uji Kompetensi dan Asesmen Komprehensif Informatika Fase E Kelas X SMAN 4 Yogyakarta. Dilengkapi 2 bagian: Pilihan Ganda dan Soal Esai HOTS." />
    <link rel="shortcut icon" href="images/Logo Patbhe.png" type="image/x-icon" />

    <!-- Anti-FOUC script: set tema seawal mungkin -->
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
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            fontFamily: {
              sans: ["'Plus Jakarta Sans'", "sans-serif"],
              mono: ["'JetBrains Mono'", "monospace"],
            },
            colors: {
              brandDark: "#0b1120",
              brandNavy: "#0f172a",
              brandGray: "#1e293b",
            },
          },
        },
      };
    </script>

    <style>
      /* Background Grid Pattern */
      body {
        background-color: #0b1120;
        background-image: radial-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px),
          radial-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px);
        background-size: 32px 32px;
        background-position: 0 0, 16px 16px;
      }
      html:not(.dark) body {
        background-color: #f8fafc;
        background-image: radial-gradient(rgba(245, 158, 11, 0.12) 1px, transparent 1px),
          radial-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px);
      }

      /* Options */
      .cbt-option {
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        cursor: pointer;
      }
      .cbt-option:hover {
        border-color: rgba(245, 158, 11, 0.6);
        transform: translateX(4px);
      }
      .cbt-option.selected {
        border-color: #f59e0b;
        background-color: rgba(245, 158, 11, 0.12);
      }
      html:not(.dark) .cbt-option.selected {
        background-color: #fef3c7;
        border-color: #d97706;
      }

      /* Number bubble */
      .nav-dot {
        transition: all 0.2s ease;
      }
      .nav-dot.answered-pg {
        background-color: #10b981 !important;
        color: #ffffff !important;
        border-color: #059669 !important;
      }
      .nav-dot.answered-esai {
        background-color: #8b5cf6 !important;
        color: #ffffff !important;
        border-color: #7c3aed !important;
      }
      .nav-dot.current {
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.5);
        border-color: #f59e0b !important;
      }

      /* Hero Glow */
      .page-hero-glow {
        position: absolute;
        top: -120px;
        left: 50%;
        transform: translateX(-50%);
        width: 650px;
        height: 380px;
        background: radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(14, 165, 233, 0.1) 40%, transparent 70%);
        filter: blur(40px);
        pointer-events: none;
        z-index: 0;
      }

      .essay-textarea {
        resize: vertical;
        min-height: 160px;
        line-height: 1.6;
      }
    </style>
  </head>

  <body class="text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
    <!-- Top Progress Bar -->
    <div id="cbtProgress" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-emerald-400 z-50 transition-all duration-300" style="width: 0%"></div>

    <!-- ============================================================
         1. TOP NAVBAR
         ============================================================ -->
    <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
              <img src="images/Logo Patbhe.png" alt="Logo SMAN 4 Yogyakarta" class="w-7 h-7 object-contain" />
            </div>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-black text-xl text-slate-900 dark:text-white tracking-tight">Ruang<span class="text-amber-500">Informatika</span></span>
            </div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 block">SMAN 4 YOGYAKARTA</span>
          </div>
        </a>

        <div class="flex items-center gap-3">
          <a
            href="index.html#materi"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span>Kembali ke Beranda</span>
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

    <!-- ============================================================
         2. HERO SECTION
         ============================================================ -->
    <div class="relative py-12 px-4 overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div class="page-hero-glow"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold font-mono tracking-wider shadow-sm">
          <i class="fa-solid fa-award text-amber-500"></i>
          <span>ASESMEN KOMPREHENSIF • FASE E KELAS X</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Uji <span class="bg-gradient-to-r from-amber-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">Kompetensi</span> Informatika
        </h1>

        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Asesmen resmi mengukur capaian kompetensi siswa yang terbagi dalam <strong>2 Bagian Ujian</strong>: <strong>Bagian A (Pilihan Ganda)</strong> dan <strong>Bagian B (Soal Esai Analisis HOTS)</strong>.
        </p>

        <!-- Meta badges -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
            <i class="fa-solid fa-school text-amber-500"></i> SMAN 4 Yogyakarta
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <i class="fa-solid fa-list-check"></i> Bagian A: 20 Soal PG
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-purple-600 dark:text-purple-400 shadow-sm">
            <i class="fa-solid fa-pen-nib"></i> Bagian B: 5 Soal Esai
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
            <i class="fa-solid fa-clock text-rose-500"></i> Alokasi: 45 Menit
          </span>
        </div>
      </div>
    </div>

    <!-- ============================================================
         3. MAIN CONTENT
         ============================================================ -->
    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 flex-1 w-full">

      <!-- Hub 4 Elemen Pembelajaran -->
      <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-5">
        <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              <i class="fa-solid fa-cubes"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">Cakupan Materi 4 Elemen Informatika</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Seluruh butir soal Pilihan Ganda &amp; Esai disusun berdasarkan Capaian Pembelajaran Kurikulum Merdeka</p>
            </div>
          </div>
          <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Fase E Kelas X</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Elemen 1 -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-brain"></i>
            </div>
            <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">1. Berpikir Komputasional</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">4 Pilar Logika, Stack (LIFO), Queue (FIFO), Searching &amp; Sorting.</p>
          </div>

          <!-- Elemen 2 -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-code"></i>
            </div>
            <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">2. Algoritma &amp; Pemrograman</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Simbol ISO Flowchart, Percabangan IF-ELSE, Looping, Pseudocode, &amp; C++.</p>
          </div>

          <!-- Elemen 3 -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-file-excel"></i>
            </div>
            <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">3. Analisis Data</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Formula Excel (SUM, AVERAGE, MIN, MAX, COUNT), Relatif vs Absolut ($).</p>
          </div>

          <!-- Elemen 4 -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-server"></i>
            </div>
            <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">4. Sistem Komputer</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Arsitektur Von Neumann, Siklus IPO, Lapisan Bawang, &amp; Sistem Operasi.</p>
          </div>
        </div>
      </div>

      <!-- Start Exam Card (Pre-Exam Form) -->
      <div id="startSection" class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
        <div class="text-center max-w-xl mx-auto space-y-2">
          <div class="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-2xl mx-auto mb-3">
            <i class="fa-solid fa-user-pen"></i>
          </div>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white">Lembar Registrasi Peserta Ujian</h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Masukkan identitas lengkapmu untuk memulai sesi Uji Kompetensi Informatika (PG &amp; Esai).</p>
        </div>

        <form id="regForm" onsubmit="startExam(event)" class="max-w-lg mx-auto space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-signature text-amber-500"></i> Nama Lengkap Peserta <span class="text-rose-500">*</span>
            </label>
            <input type="text" id="regNama" required placeholder="Contoh: Muhammad Ilyas" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-hashtag text-amber-500"></i> Nomor Presensi <span class="text-rose-500">*</span>
              </label>
              <input type="text" id="regAbsen" required placeholder="Contoh: 18" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-chalkboard-user text-amber-500"></i> Kelas / Rombel
              </label>
              <input type="text" id="regKelas" value="X-E6" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition" />
            </div>
          </div>

          <!-- Petunjuk Pengerjaan 2 Bagian -->
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 leading-relaxed space-y-1.5">
            <div class="font-bold flex items-center gap-2">
              <i class="fa-solid fa-circle-info text-amber-500"></i> Struktur Uji Kompetensi:
            </div>
            <ul class="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li><strong>Bagian A (Pilihan Ganda):</strong> 20 Butir Soal bernilai objektif (A, B, C, D, E).</li>
              <li><strong>Bagian B (Soal Esai):</strong> 5 Butir Kasus Analisis HOTS dengan isian teks terstruktur.</li>
              <li>Alokasi waktu total adalah <strong>45 Menit</strong>. Jangan berpindah tab lebih dari 3 kali.</li>
            </ul>
          </div>

          <button
            type="submit"
            class="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-black text-sm tracking-wide shadow-lg shadow-amber-500/30 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Mulai Ujian (PG &amp; Esai) Sekarang</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>

      <!-- Active CBT Exam Container (Hidden initially) -->
      <div id="cbtSection" class="hidden space-y-6">
        <!-- CBT Control Bar (Timer, Switcher Tab, & Info) -->
        <div class="sticky top-24 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              <i class="fa-solid fa-user-graduate"></i>
            </div>
            <div>
              <span class="text-xs text-slate-500 dark:text-slate-400">Peserta Ujian:</span>
              <h4 id="userDisplay" class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Siswa (X-E6)</h4>
            </div>
          </div>

          <!-- Section Switcher Tabs -->
          <div class="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <button
              type="button"
              id="tabBtnPG"
              onclick="switchSection('pg')"
              class="px-4 py-2 rounded-lg transition-all flex items-center gap-2 bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm"
            >
              <i class="fa-solid fa-list-check"></i>
              <span>Bagian A: Pilihan Ganda</span>
              <span id="badgePgCount" class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">0/20</span>
            </button>
            <button
              type="button"
              id="tabBtnEsai"
              onclick="switchSection('esai')"
              class="px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <i class="fa-solid fa-pen-nib"></i>
              <span>Bagian B: Soal Esai</span>
              <span id="badgeEsaiCount" class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">0/5</span>
            </button>
          </div>

          <div class="flex items-center gap-3">
            <!-- Warning count -->
            <div id="tabWarnBadge" class="hidden text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center gap-1.5">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <span>Pelanggaran: <span id="warnCount">0</span>/3</span>
            </div>

            <!-- Timer countdown -->
            <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-mono font-bold text-sm shadow-inner">
              <i class="fa-regular fa-clock text-amber-400"></i>
              <span id="timerText">45:00</span>
            </div>
          </div>
        </div>

        <!-- Question & Navigator Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Area Pengerjaan Soal (Left 8 cols) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- PANEL 1: BAGIAN A - PILIHAN GANDA -->
            <div id="panelPG" class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6 min-h-[440px] flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3.5">
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Bagian A • Soal PG No. <span id="soalNumPG">1</span> dari 20
                  </span>
                  <span id="soalCategoryPG" class="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">Elemen: BK</span>
                </div>

                <h3 id="soalQuestionPG" class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  Pertanyaan pilihan ganda...
                </h3>

                <!-- Options List -->
                <div id="optionsContainerPG" class="space-y-2.5 pt-2">
                  <!-- Rendered dynamically -->
                </div>
              </div>

              <!-- Pagination Navigation PG -->
              <div class="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-5 mt-6">
                <button
                  type="button"
                  id="btnPrevPG"
                  onclick="prevQuestionPG()"
                  class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition flex items-center gap-2 cursor-pointer"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                  <span>Sebelumnya</span>
                </button>

                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    onclick="switchSection('esai')"
                    class="px-4 py-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold transition flex items-center gap-1.5 border border-purple-200 dark:border-purple-800"
                  >
                    <span>Ke Bagian Esai</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </button>
                  <button
                    type="button"
                    id="btnNextPG"
                    onclick="nextQuestionPG()"
                    class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
                  >
                    <span>Selanjutnya</span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- PANEL 2: BAGIAN B - SOAL ESAI / URAIAN -->
            <div id="panelEsai" class="hidden bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6 min-h-[440px] flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3.5">
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    Bagian B • Soal Esai No. <span id="soalNumEsai">1</span> dari 5
                  </span>
                  <span id="soalCategoryEsai" class="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400">Bobot: 20 Poin</span>
                </div>

                <div class="space-y-2">
                  <h3 id="soalQuestionEsai" class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    Pertanyaan esai...
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 italic">
                    Tuliskan jawaban analisismu dengan jelas, runtut, dan menggunakan konsep Informatika yang tepat.
                  </p>
                </div>

                <!-- Essay Textarea -->
                <div class="space-y-2 pt-1">
                  <textarea
                    id="essayInput"
                    rows="6"
                    placeholder="Ketikkan lembar jawaban esaimu di sini secara terstruktur..."
                    class="essay-textarea w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition font-sans"
                    oninput="handleEssayInput()"
                  ></textarea>
                  <div class="flex items-center justify-between text-[11px] text-slate-400">
                    <span id="essaySaveStatus" class="text-emerald-500 font-medium"><i class="fa-solid fa-cloud-arrow-up mr-1"></i> Tersimpan otomatis</span>
                    <span>Panjang: <strong id="essayCharCount" class="text-slate-600 dark:text-slate-300 font-mono">0</strong> karakter</span>
                  </div>
                </div>
              </div>

              <!-- Pagination Navigation Esai -->
              <div class="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-5 mt-6">
                <button
                  type="button"
                  id="btnPrevEsai"
                  onclick="prevQuestionEsai()"
                  class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition flex items-center gap-2 cursor-pointer"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                  <span>Sebelumnya</span>
                </button>

                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    onclick="switchSection('pg')"
                    class="px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold transition flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800"
                  >
                    <span>Ke Bagian PG</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </button>
                  <button
                    type="button"
                    id="btnNextEsai"
                    onclick="nextQuestionEsai()"
                    class="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-purple-600/20"
                  >
                    <span>Selanjutnya</span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <!-- Navigator Sidebar (Right 4 cols) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-5">
              
              <!-- Navigator Bagian A: PG -->
              <div class="space-y-3">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-list-check text-emerald-500"></i>
                    <span>Bagian A: Pilihan Ganda</span>
                  </h4>
                  <span class="text-xs font-mono font-bold text-emerald-500" id="answeredCountPG">0 / 20</span>
                </div>
                <div id="numberGridPG" class="grid grid-cols-5 gap-2">
                  <!-- Rendered 1 to 20 -->
                </div>
              </div>

              <!-- Navigator Bagian B: Esai -->
              <div class="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-pen-nib text-purple-500"></i>
                    <span>Bagian B: Soal Esai</span>
                  </h4>
                  <span class="text-xs font-mono font-bold text-purple-500" id="answeredCountEsai">0 / 5</span>
                </div>
                <div id="numberGridEsai" class="grid grid-cols-5 gap-2">
                  <!-- Rendered E1 to E5 -->
                </div>
              </div>

              <!-- Legend -->
              <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-emerald-500 inline-block"></span> PG Terjawab</span>
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-purple-500 inline-block"></span> Esai Terjawab</span>
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700 inline-block"></span> Kosong</span>
              </div>

              <button
                type="button"
                onclick="confirmSubmit()"
                class="w-full mt-3 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white text-xs font-black transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                <i class="fa-solid fa-paper-plane"></i>
                <span>Selesaikan Ujian (PG &amp; Esai)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Result Screen (Initially hidden) -->
      <div id="resultSection" class="hidden bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8 max-w-2xl mx-auto text-center">
        <div class="space-y-3">
          <div class="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-3xl mx-auto">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Uji Kompetensi Selesai!</h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Selamat! Jawaban Pilihan Ganda &amp; Soal Esaimu telah berhasil dikumpulkan ke sistem penilaian guru.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <!-- Skor PG -->
          <div class="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-2">
            <span class="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest block flex items-center gap-1.5">
              <i class="fa-solid fa-list-check"></i> Skor Pilihan Ganda
            </span>
            <div class="text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight" id="finalScorePGDisplay">0</div>
            <div class="text-xs text-slate-600 dark:text-slate-300 font-medium" id="finalDetailPGDisplay">
              Benar: 0 dari 20 Soal (Skor 0/100)
            </div>
          </div>

          <!-- Status Esai -->
          <div class="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40 space-y-2">
            <span class="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 uppercase tracking-widest block flex items-center gap-1.5">
              <i class="fa-solid fa-pen-nib"></i> Status Jawaban Esai
            </span>
            <div class="text-2xl font-black text-purple-600 dark:text-purple-400 tracking-tight" id="finalStatusEsaiDisplay">5 Terkumpul</div>
            <div class="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Seluruh lembar uraian tersimpan aman untuk evaluasi guru.
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            href="index.html"
            class="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-2"
          >
            <i class="fa-solid fa-house"></i>
            <span>Kembali ke Beranda</span>
          </a>
          <button
            type="button"
            onclick="location.reload()"
            class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold transition flex items-center gap-2 shadow-md shadow-amber-500/30"
          >
            <i class="fa-solid fa-rotate-right"></i>
            <span>Ulangi Uji Kompetensi</span>
          </button>
        </div>
      </div>

    </main>

    <!-- Footer -->
    <footer class="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 py-6 text-center text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4 space-y-1">
        <p>&copy; 2026 RuangInformatika &bull; SMA Negeri 4 Yogyakarta. Platform Asesmen Uji Kompetensi Fase E.</p>
      </div>
    </footer>

    <!-- ============================================================
         SCRIPT CBT LOGIC (PILIHAN GANDA & ESAI)
         ============================================================ -->
    <script>
      /* ── 1. Theme Toggle ── */
      const themeToggleBtn = document.getElementById("themeToggleBtn");
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
          const isDark = document.documentElement.classList.toggle("dark");
          localStorage.setItem("theme", isDark ? "dark" : "light");
        });
      }

      /* ── 2. Bank Soal Pilihan Ganda (20 Soal) ── */
      const BANK_SOAL_PG = [
        // ELEMEN 1: BERPIKIR KOMPUTASIONAL (5 Soal)
        {
          cat: "Elemen 1: Berpikir Komputasional",
          q: "Pilar Berpikir Komputasional yang bertujuan memecah masalah yang kompleks menjadi bagian-bagian yang lebih kecil dan mudah dikelola disebut....",
          options: ["Dekomposisi", "Pengenalan Pola", "Abstraksi", "Perancangan Algoritma", "Debugging"],
          answer: 0
        },
        {
          cat: "Elemen 1: Berpikir Komputasional",
          q: "Struktur data yang menerapkan prinsip Last In First Out (LIFO) di mana data yang terakhir masuk akan pertama kali dikeluarkan adalah....",
          options: ["Queue", "Stack", "Binary Tree", "Graph", "Array List"],
          answer: 1
        },
        {
          cat: "Elemen 1: Berpikir Komputasional",
          q: "Penerapan konsep antrean tiket bioskop dan pencetakan dokumen di printer (First In First Out / FIFO) menggunakan struktur data....",
          options: ["Stack", "Queue", "Binary Search", "Hash Map", "Quick Sort"],
          answer: 1
        },
        {
          cat: "Elemen 1: Berpikir Komputasional",
          q: "Algoritma pencarian yang bekerja dengan cara membagi dua ruang pencarian secara berulang-ulang pada kumpulan data yang sudah terurut disebut....",
          options: ["Linear Search", "Binary Search", "Bubble Sort", "Insertion Sort", "Hashing Search"],
          answer: 1
        },
        {
          cat: "Elemen 1: Berpikir Komputasional",
          q: "Prinsip kerja Bubble Sort dalam mengurutkan data angka acak secara menaik (ascending) adalah....",
          options: [
            "Membandingkan elemen bersebelahan dan menukarnya jika urutannya salah secara berulang",
            "Membagi array menjadi dua bagian lalu menggabungkannya kembali",
            "Memilih elemen terbesar lalu meletakkannya di posisi awal",
            "Menghapus data duplikat secara otomatis",
            "Mencari data acak menggunakan fungsi hash"
          ],
          answer: 0
        },

        // ELEMEN 2: ALGORITMA & PEMROGRAMAN (5 Soal)
        {
          cat: "Elemen 2: Algoritma & Pemrograman",
          q: "Dalam standar simbol flowchart, simbol belah ketupat (diamond) digunakan untuk melambangkan....",
          options: ["Awal atau akhir program (Terminator)", "Proses komputasi/penugasan", "Keputusan/Percabangan kondisi (Decision)", "Input atau Output data", "Penghubung alur antar-halaman"],
          answer: 2
        },
        {
          cat: "Elemen 2: Algoritma & Pemrograman",
          q: "Notasi penulisan algoritma yang menyerupai bahasa pemrograman tingkat tinggi namun ditulis dalam bahasa manusia yang mudah dipahami disebut....",
          options: ["Flowchart", "Pseudocode", "Machine Code", "Bytecode", "Assembly"],
          answer: 1
        },
        {
          cat: "Elemen 2: Algoritma & Pemrograman",
          q: "Pada bahasa pemrograman C++, perintah standar yang digunakan untuk menampilkan teks atau data ke layar monitor adalah....",
          options: ["cin >>", "cout <<", "scanf()", "print()", "echo"],
          answer: 1
        },
        {
          cat: "Elemen 2: Algoritma & Pemrograman",
          q: "Tipe data dalam pemrograman yang hanya dapat menyimpan dua kemungkinan nilai logika (true atau false) adalah....",
          options: ["Integer", "Float", "Char", "Boolean", "String"],
          answer: 3
        },
        {
          cat: "Elemen 2: Algoritma & Pemrograman",
          q: "Struktur kontrol perulangan yang akan selalu mengeksekusi blok kode minimal satu kali sebelum memeriksa kondisi terminasi adalah....",
          options: ["for loop", "while loop", "do-while loop", "if-else statement", "switch-case"],
          answer: 2
        },

        // ELEMEN 3: ANALISIS DATA (5 Soal)
        {
          cat: "Elemen 3: Analisis Data",
          q: "Pada Microsoft Excel, rumus fungsi yang digunakan untuk menjumlahkan seluruh nilai angka dalam rentang sel tertentu adalah....",
          options: ["=AVERAGE()", "=SUM()", "=COUNT()", "=MAX()", "=SUMIF()"],
          answer: 1
        },
        {
          cat: "Elemen 3: Analisis Data",
          q: "Fungsi Excel yang digunakan untuk mencari rata-rata dari sekumpulan data numerik pada sel A1 sampai A10 adalah....",
          options: ["=MEAN(A1:A10)", "=AVERAGE(A1:A10)", "=COUNT(A1:A10)", "=MEDIAN(A1:A10)", "=TOTAL(A1:A10)"],
          answer: 1
        },
        {
          cat: "Elemen 3: Analisis Data",
          q: "Fungsi yang digunakan untuk menghitung jumlah sel yang HANYA berisi data angka dalam range data adalah....",
          options: ["=COUNTA()", "=COUNT()", "=COUNTIF()", "=NUM()", "=SUM()"],
          answer: 1
        },
        {
          cat: "Elemen 3: Analisis Data",
          q: "Tanda yang wajib diketikkan pada awal sel sebelum menuliskan formula perhitungan matematika di Microsoft Excel adalah....",
          options: ["Tanda petik (&#34;)", "Tanda tanya (?)", "Tanda sama dengan (=)", "Tanda titik dua (:)", "Tanda pagar (#)"],
          answer: 2
        },
        {
          cat: "Elemen 3: Analisis Data",
          q: "Untuk mengunci referensi sel agar baris dan kolomnya tidak bergeser saat formula disalin ke sel lain, digunakan tanda absolut....",
          options: ["Tanda persen (%)", "Tanda dolar ($)", "Tanda kurung (&)", "Tanda bintang (*)", "Tanda panah (^)"],
          answer: 1
        },

        // ELEMEN 4: SISTEM KOMPUTER (5 Soal)
        {
          cat: "Elemen 4: Sistem Komputer",
          q: "Komponen dalam Arsitektur Von Neumann yang bertugas mengeksekusi operasi aritmetika (penjumlahan/pengurangan) dan operasi logika adalah....",
          options: ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Register", "Harddisk", "RAM"],
          answer: 1
        },
        {
          cat: "Elemen 4: Sistem Komputer",
          q: "Urutan abstraksi Model Lapisan Bawang (Onion Layer Model) mulai dari inti terdalam (mesin) hingga lapisan terluar (manusia) adalah....",
          options: [
            "Hardware → Shell → Kernel → Applications",
            "Hardware → Kernel → Shell → Applications",
            "Kernel → Hardware → Shell → Applications",
            "Applications → Shell → Kernel → Hardware",
            "Hardware → Applications → Kernel → Shell"
          ],
          answer: 1
        },
        {
          cat: "Elemen 4: Sistem Komputer",
          q: "Pada proses booting, tahapan di mana komputer melakukan pengujian mandiri perangkat keras (RAM, keyboard, storage) sebelum OS dimuat adalah....",
          options: ["BIOS Load", "POST (Power On Self Test)", "Kernel Swapping", "Control Switch", "Round Robin"],
          answer: 1
        },
        {
          cat: "Elemen 4: Sistem Komputer",
          q: "Sistem operasi yang ditanamkan khusus pada chip perangkat elektronik seperti Smart TV, mesin ATM, dan rem mobil ABS adalah....",
          options: ["Desktop OS", "Mobile OS", "Embedded OS", "Server OS", "Cloud OS"],
          answer: 2
        },
        {
          cat: "Elemen 4: Sistem Komputer",
          q: "Algoritma penjadwalan CPU yang membagi jatah waktu kerja sangat kecil (Time Slice) secara bergiliran ke setiap aplikasi multitasking disebut....",
          options: ["First Come First Served", "Round Robin", "Shortest Job First", "Deadlock Scheduler", "Priority Inversion"],
          answer: 1
        }
      ];

      /* ── 3. Bank Soal Esai / Uraian (5 Soal HOTS) ── */
      const BANK_SOAL_ESAI = [
        {
          cat: "Esai 1 • Berpikir Komputasional",
          q: "Rani menghadapi kendala mengatur jadwal belajar persiapan PTS yang padat untuk 7 mata pelajaran dalam waktu 5 hari, di mana beberapa materi memiliki tingkat kesulitan dan bobot bab yang berbeda. Jelaskan bagaimana Rani dapat menerapkan 4 Pilar Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma) secara sistematis untuk menyelesaikan masalah tersebut!"
        },
        {
          cat: "Esai 2 • Struktur Data",
          q: "Bandingkan prinsip kerja struktur data Stack (LIFO) dan Queue (FIFO)! Jelaskan masing-masing satu contoh penerapan konkret dari kedua struktur data tersebut dalam sistem perangkat lunak atau komputasi sehari-hari (misalnya fitur Undo pada text editor vs antrean pencetakan dokumen pada printer)!"
        },
        {
          cat: "Esai 3 • Algoritma Pencarian",
          q: "Mengapa algoritma Binary Search dinilai jauh lebih efisien dibandingkan Linear Search saat mencari data dalam jumlah yang sangat besar? Sebutkan syarat mutlak yang harus dipenuhi agar Binary Search dapat bekerja, dan jelaskan langkah-langkah pencariannya secara ringkas!"
        },
        {
          cat: "Esai 4 • Sistem Komputer & Arsitektur",
          q: "Jelaskan bagaimana komponen Arsitektur Von Neumann (Input Device, Control Unit, ALU, Memori RAM, dan Output Device) bekerja sama saat seorang pengguna menekan tombol angka pada keyboard kalkulator hingga hasil perhitungannya tampil di layar monitor (Siklus IPO)!"
        },
        {
          cat: "Esai 5 • Sistem Operasi",
          q: "Pada Model Lapisan Bawang (Onion Layer Model), jelaskan mengapa Kernel diletakkan tepat membungkus Hardware sedangkan pengguna hanya berinteraksi di lapisan Shell/Applications! Selain itu, jelaskan bagaimana algoritma Round Robin (Time Sharing) memungkinkan komputer memproses banyak aplikasi sekaligus (Multitasking) tanpa saling bertabrakan!"
        }
      ];

      /* ── 4. State Variables ── */
      let currentSection = "pg"; // 'pg' or 'esai'
      let currentIdxPG = 0;
      let currentIdxEsai = 0;

      let userAnswersPG = new Array(BANK_SOAL_PG.length).fill(null);
      let userAnswersEsai = new Array(BANK_SOAL_ESAI.length).fill("");

      let userData = { nama: "", absen: "", kelas: "" };
      let timeRemaining = 45 * 60; // 45 Menit
      let timerInterval = null;
      let tabViolations = 0;
      const MAX_VIOLATIONS = 3;

      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVYfhcDSqllYtnhG7bPXLe5DY1ahkGtV4Pkn6Bi_wIXV1BxFpNOJgz2S7wAJwbFD2AAg/exec";

      /* ── 5. Start Exam Flow ── */
      function startExam(e) {
        e.preventDefault();
        const nama = document.getElementById("regNama").value.trim();
        const absen = document.getElementById("regAbsen").value.trim();
        const kelas = document.getElementById("regKelas").value.trim();

        if (!nama || !absen) return;

        userData = { nama, absen, kelas };
        document.getElementById("userDisplay").textContent = \`\${nama} (Presensi \${absen} • \${kelas})\`;

        document.getElementById("startSection").classList.add("hidden");
        document.getElementById("cbtSection").classList.remove("hidden");

        renderNavigators();
        loadQuestionPG(0);
        loadQuestionEsai(0);
        switchSection("pg");

        startTimer();
        initAntiCheat();
      }

      /* ── 6. Section Switching ── */
      function switchSection(sec) {
        currentSection = sec;
        const panelPG = document.getElementById("panelPG");
        const panelEsai = document.getElementById("panelEsai");
        const tabBtnPG = document.getElementById("tabBtnPG");
        const tabBtnEsai = document.getElementById("tabBtnEsai");

        if (sec === "pg") {
          panelPG.classList.remove("hidden");
          panelEsai.classList.add("hidden");

          tabBtnPG.className = "px-4 py-2 rounded-lg transition-all flex items-center gap-2 bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm";
          tabBtnEsai.className = "px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400";

          loadQuestionPG(currentIdxPG);
        } else {
          panelPG.classList.add("hidden");
          panelEsai.classList.remove("hidden");

          tabBtnEsai.className = "px-4 py-2 rounded-lg transition-all flex items-center gap-2 bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm";
          tabBtnPG.className = "px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400";

          loadQuestionEsai(currentIdxEsai);
        }
      }

      /* ── 7. Render Navigators ── */
      function renderNavigators() {
        // PG Navigator
        const gridPG = document.getElementById("numberGridPG");
        gridPG.innerHTML = "";
        BANK_SOAL_PG.forEach((_, idx) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.id = \`nav-dot-pg-\${idx}\`;
          btn.className = \`nav-dot w-9 h-9 rounded-xl text-xs font-mono font-bold border flex items-center justify-center cursor-pointer transition bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 \${userAnswersPG[idx] !== null ? "answered-pg" : ""}\`;
          btn.textContent = idx + 1;
          btn.onclick = () => {
            switchSection("pg");
            loadQuestionPG(idx);
          };
          gridPG.appendChild(btn);
        });

        // Esai Navigator
        const gridEsai = document.getElementById("numberGridEsai");
        gridEsai.innerHTML = "";
        BANK_SOAL_ESAI.forEach((_, idx) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.id = \`nav-dot-esai-\${idx}\`;
          const isFilled = (userAnswersEsai[idx] && userAnswersEsai[idx].trim().length > 10);
          btn.className = \`nav-dot w-9 h-9 rounded-xl text-xs font-mono font-bold border flex items-center justify-center cursor-pointer transition bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 \${isFilled ? "answered-esai" : ""}\`;
          btn.textContent = \`E\${idx + 1}\`;
          btn.onclick = () => {
            switchSection("esai");
            loadQuestionEsai(idx);
          };
          gridEsai.appendChild(btn);
        });

        updateCounts();
      }

      function updateCounts() {
        const answeredPG = userAnswersPG.filter(a => a !== null).length;
        const answeredEsai = userAnswersEsai.filter(a => a && a.trim().length > 10).length;

        document.getElementById("answeredCountPG").textContent = \`\${answeredPG} / \${BANK_SOAL_PG.length}\`;
        document.getElementById("badgePgCount").textContent = \`\${answeredPG}/\${BANK_SOAL_PG.length}\`;

        document.getElementById("answeredCountEsai").textContent = \`\${answeredEsai} / \${BANK_SOAL_ESAI.length}\`;
        document.getElementById("badgeEsaiCount").textContent = \`\${answeredEsai}/\${BANK_SOAL_ESAI.length}\`;

        const totalAnswered = answeredPG + answeredEsai;
        const totalSoal = BANK_SOAL_PG.length + BANK_SOAL_ESAI.length;
        const pct = Math.round((totalAnswered / totalSoal) * 100);
        document.getElementById("cbtProgress").style.width = \`\${pct}%\`;
      }

      /* ── 8. Pilihan Ganda Logic ── */
      function loadQuestionPG(idx) {
        currentIdxPG = idx;
        const qData = BANK_SOAL_PG[idx];

        document.getElementById("soalNumPG").textContent = idx + 1;
        document.getElementById("soalCategoryPG").textContent = qData.cat;
        document.getElementById("soalQuestionPG").textContent = qData.q;

        const optContainer = document.getElementById("optionsContainerPG");
        optContainer.innerHTML = "";

        const letters = ["A", "B", "C", "D", "E"];
        qData.options.forEach((optText, optIdx) => {
          const isSelected = (userAnswersPG[idx] === optIdx);
          const optDiv = document.createElement("div");
          optDiv.className = \`cbt-option p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-medium \${isSelected ? "selected border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-200 font-bold" : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"}\`;

          optDiv.onclick = () => {
            userAnswersPG[idx] = optIdx;
            loadQuestionPG(idx);
            renderNavigators();
          };

          optDiv.innerHTML = \`
            <span class="w-7 h-7 rounded-lg border font-mono font-bold flex items-center justify-center shrink-0 \${isSelected ? "bg-amber-500 text-white border-amber-500" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"}">\${letters[optIdx]}</span>
            <span class="leading-relaxed">\${optText}</span>
          \`;

          optContainer.appendChild(optDiv);
        });

        document.getElementById("btnPrevPG").disabled = (idx === 0);
        document.getElementById("btnPrevPG").classList.toggle("opacity-40", idx === 0);

        const isLastPG = (idx === BANK_SOAL_PG.length - 1);
        const nextBtn = document.getElementById("btnNextPG");
        if (isLastPG) {
          nextBtn.innerHTML = '<span>Lanjut ke Esai</span> <i class="fa-solid fa-arrow-right"></i>';
          nextBtn.onclick = () => switchSection("esai");
        } else {
          nextBtn.innerHTML = '<span>Selanjutnya</span> <i class="fa-solid fa-arrow-right"></i>';
          nextBtn.onclick = nextQuestionPG;
        }

        // Highlight current dot
        document.querySelectorAll("#numberGridPG .nav-dot").forEach((d, i) => {
          d.classList.toggle("current", i === idx);
        });
      }

      function prevQuestionPG() {
        if (currentIdxPG > 0) loadQuestionPG(currentIdxPG - 1);
      }
      function nextQuestionPG() {
        if (currentIdxPG < BANK_SOAL_PG.length - 1) loadQuestionPG(currentIdxPG + 1);
      }

      /* ── 9. Soal Esai Logic ── */
      function loadQuestionEsai(idx) {
        currentIdxEsai = idx;
        const qData = BANK_SOAL_ESAI[idx];

        document.getElementById("soalNumEsai").textContent = idx + 1;
        document.getElementById("soalCategoryEsai").textContent = qData.cat;
        document.getElementById("soalQuestionEsai").textContent = qData.q;

        const ta = document.getElementById("essayInput");
        ta.value = userAnswersEsai[idx] || "";
        document.getElementById("essayCharCount").textContent = ta.value.length;

        document.getElementById("btnPrevEsai").disabled = (idx === 0);
        document.getElementById("btnPrevEsai").classList.toggle("opacity-40", idx === 0);

        const isLastEsai = (idx === BANK_SOAL_ESAI.length - 1);
        const nextBtn = document.getElementById("btnNextEsai");
        if (isLastEsai) {
          nextBtn.innerHTML = '<span>Selesai &amp; Kumpulkan</span> <i class="fa-solid fa-check"></i>';
          nextBtn.onclick = confirmSubmit;
        } else {
          nextBtn.innerHTML = '<span>Soal Esai Berikutnya</span> <i class="fa-solid fa-arrow-right"></i>';
          nextBtn.onclick = nextQuestionEsai;
        }

        // Highlight current dot
        document.querySelectorAll("#numberGridEsai .nav-dot").forEach((d, i) => {
          d.classList.toggle("current", i === idx);
        });
      }

      let saveEssayTimer = null;
      function handleEssayInput() {
        const val = document.getElementById("essayInput").value;
        userAnswersEsai[currentIdxEsai] = val;
        document.getElementById("essayCharCount").textContent = val.length;

        const statusEl = document.getElementById("essaySaveStatus");
        statusEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Menyimpan...';

        clearTimeout(saveEssayTimer);
        saveEssayTimer = setTimeout(() => {
          renderNavigators();
          statusEl.innerHTML = '<i class="fa-solid fa-cloud-arrow-up mr-1"></i> Tersimpan otomatis';
        }, 600);
      }

      function prevQuestionEsai() {
        if (currentIdxEsai > 0) loadQuestionEsai(currentIdxEsai - 1);
      }
      function nextQuestionEsai() {
        if (currentIdxEsai < BANK_SOAL_ESAI.length - 1) loadQuestionEsai(currentIdxEsai + 1);
      }

      /* ── 10. Timer ── */
      function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
          timeRemaining--;
          if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeRemaining = 0;
            alert("Waktu ujian telah habis! Seluruh jawaban PG & Esaimu akan dikumpulkan secara otomatis.");
            finishExam();
          }

          const mins = Math.floor(timeRemaining / 60);
          const secs = timeRemaining % 60;
          document.getElementById("timerText").textContent = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
        }, 1000);
      }

      /* ── 11. Anti-Cheat Monitoring ── */
      function initAntiCheat() {
        document.addEventListener("visibilitychange", () => {
          if (document.hidden && timeRemaining > 0 && !document.getElementById("cbtSection").classList.contains("hidden")) {
            tabViolations++;
            const warnBadge = document.getElementById("tabWarnBadge");
            warnBadge.classList.remove("hidden");
            document.getElementById("warnCount").textContent = tabViolations;

            if (tabViolations >= MAX_VIOLATIONS) {
              alert("PERINGATAN: Kamu telah berpindah tab melebihi batas toleransi (3 kali). Sesi ujian otomatis dikumpulkan!");
              finishExam();
            } else {
              alert(\`Peringatan (\${tabViolations}/3): Jangan berpindah tab atau meninggalkan halaman ujian!\`);
            }
          }
        });
      }

      /* ── 12. Submission & Result ── */
      function confirmSubmit() {
        const unansweredPG = userAnswersPG.filter(a => a === null).length;
        const unansweredEsai = userAnswersEsai.filter(a => !a || a.trim().length <= 10).length;

        let warning = [];
        if (unansweredPG > 0) warning.push(\`\${unansweredPG} soal Pilihan Ganda belum dijawab\`);
        if (unansweredEsai > 0) warning.push(\`\${unansweredEsai} soal Esai masih kosong\`);

        let msg = "Apakah kamu yakin ingin menyelesaikan dan mengumpulkan Uji Kompetensi ini?";
        if (warning.length > 0) {
          msg = \`Perhatian! Masih ada \${warning.join(" dan ")}. Yakin ingin mengumpulkan sekarang?\`;
        }

        if (confirm(msg)) {
          finishExam();
        }
      }

      async function finishExam() {
        clearInterval(timerInterval);

        // Calculate PG score
        let correctCountPG = 0;
        BANK_SOAL_PG.forEach((item, idx) => {
          if (userAnswersPG[idx] === item.answer) correctCountPG++;
        });

        const finalScorePG = Math.round((correctCountPG / BANK_SOAL_PG.length) * 100);
        const answeredEsaiCount = userAnswersEsai.filter(a => a && a.trim().length > 5).length;

        document.getElementById("cbtSection").classList.add("hidden");
        document.getElementById("resultSection").classList.remove("hidden");

        document.getElementById("finalScorePGDisplay").textContent = finalScorePG;
        document.getElementById("finalDetailPGDisplay").textContent = \`Benar \${correctCountPG} dari \${BANK_SOAL_PG.length} Soal (Skor: \${finalScorePG} / 100)\`;
        document.getElementById("finalStatusEsaiDisplay").textContent = \`\${answeredEsaiCount} dari \${BANK_SOAL_ESAI.length} Terkumpul\`;

        // Send both PG and Essay answers to Google Sheets
        try {
          const formData = new URLSearchParams();
          formData.append("jenis", "UJI-KOMPETENSI-PG-DAN-ESAI");
          formData.append("nama", userData.nama);
          formData.append("absen", userData.absen);
          formData.append("kelas", userData.kelas);
          formData.append("skor_pg", finalScorePG);
          formData.append("benar_pg", correctCountPG);
          formData.append("jawaban_esai", JSON.stringify(userAnswersEsai));
          formData.append("pelanggaran_tab", tabViolations);

          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
          });
          console.log("✅ Nilai PG dan Lembar Jawaban Esai berhasil disinkronisasi ke Google Sheets!");
        } catch (err) {
          console.warn("Gagal mengirim ke spreadsheet:", err);
        }
      }
    </script>
  </body>
</html>`;

fs.writeFileSync('uji-kompetensi.html', htmlContent, 'utf8');
console.log('Successfully written uji-kompetensi.html with 2 sections (PG & Esai)! Size:', htmlContent.length);

