const fs = require('fs');

const esaiScript = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ujian Soal Esai — Uji Kompetensi Informatika RuangInformatika</title>
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
        background-size: 32px 32px;
        background-position: 0 0, 16px 16px;
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

      .essay-textarea {
        width: 100%;
        min-height: 220px;
        line-height: 1.7;
        font-family: "'Plus Jakarta Sans'", sans-serif;
        font-size: 0.9rem;
        outline: none;
        resize: vertical;
        transition: all 0.2s ease;
      }

      #topProgress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #f59e0b, #ec4899, #8b5cf6);
        z-index: 999;
        width: 0%;
        transition: width 0.3s ease;
      }
    </style>
  </head>

  <body class="text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
    <!-- Top Progress Bar -->
    <div id="topProgress"></div>

    <!-- ================= TOP NAVBAR ================= -->
    <header class="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
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
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 block">CBT SOAL ESAI HOTS • SMAN 4</span>
          </div>
        </a>

        <!-- Timer & Controls -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-sm font-mono text-sm font-bold">
            <i class="fa-solid fa-clock text-amber-500 animate-pulse"></i>
            <span id="cbtTimer">35:00</span>
          </div>

          <a
            href="uji-kompetensi.html"
            onclick="return confirm('Apakah kamu yakin ingin kembali ke menu portal? Teks draf jawaban tetap tersimpan aman di browser ini.')"
            class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span>Menu Uji</span>
          </a>

          <button
            id="themeToggleBtn"
            type="button"
            class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-amber-400 flex items-center justify-center transition-all focus:outline-none shadow-sm cursor-pointer border border-slate-200 dark:border-slate-700"
            aria-label="Toggle Theme"
          >
            <i class="fa-solid fa-moon dark:hidden text-sm"></i>
            <i class="fa-solid fa-sun hidden dark:inline text-sm"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- ================= MAIN CONTAINER ================= -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full space-y-6">
      
      <!-- Anti-Cheat Warning Alert (Hidden by default) -->
      <div id="antiCheatAlert" class="hidden p-4 rounded-2xl bg-rose-500/10 border-2 border-rose-500/40 text-rose-500 dark:text-rose-400 font-bold text-xs sm:text-sm items-center gap-3">
        <i class="fa-solid fa-triangle-exclamation text-lg"></i>
        <span>Peringatan Anti-Curang: Kamu terdeteksi berpindah jendela/aplikasi! Pelanggaran: <strong id="warnCount">0</strong> / 3 kali toleransi.</span>
      </div>

      <!-- Identity Card (Required before submit) -->
      <div class="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-sm">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
              <i class="fa-solid fa-user text-amber-500 mr-1"></i> Nama Lengkap Peserta <span class="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="cbtNama"
              placeholder="Ketik nama lengkap..."
              class="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold focus:outline-none focus:border-amber-500 text-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
              <i class="fa-solid fa-id-badge text-amber-500 mr-1"></i> Nomor Presensi (Absen) <span class="text-rose-500">*</span>
            </label>
            <input
              type="number"
              id="cbtAbsen"
              placeholder="Contoh: 18"
              class="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono font-semibold focus:outline-none focus:border-amber-500 text-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
              <i class="fa-solid fa-school text-amber-500 mr-1"></i> Kelas / Rombel
            </label>
            <input
              type="text"
              id="cbtKelas"
              value="X-E6"
              class="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold focus:outline-none focus:border-amber-500 text-slate-800 dark:text-slate-100"
            />
          </div>
        </div>
      </div>

      <!-- CBT Layout: Question View + Side Navigator -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- ESSAY QUESTION CONTAINER (col 8) -->
        <div class="lg:col-span-8 space-y-4">
          <div class="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative min-h-[480px] flex flex-col justify-between">
            
            <!-- Question Header -->
            <div>
              <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-5">
                <div class="flex items-center gap-3">
                  <span class="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-500 font-mono font-extrabold flex items-center justify-center text-base" id="qCurrentBadge">
                    E1
                  </span>
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block" id="qCategory">STUDI KASUS HOTS</span>
                    <h2 class="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100">
                      Soal Esai No. <span id="qCurrentText">1</span> dari 5
                    </h2>
                  </div>
                </div>

                <div class="px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
                  Bobot: <span id="qBobot">20</span> Poin
                </div>
              </div>

              <!-- Question Case Text -->
              <div id="qText" class="text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base leading-relaxed space-y-3 mb-6 p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-800/50 border border-amber-200/50 dark:border-slate-700/60">
                <!-- Injected via JS -->
              </div>

              <!-- Answer Textarea -->
              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
                  <label for="txtAnswer" class="flex items-center gap-1.5">
                    <i class="fa-solid fa-pen-fancy text-amber-500"></i> Ruang Jawaban &amp; Analisis Siswa:
                  </label>
                  <span class="font-mono text-slate-400" id="wordCount">0 kata • 0 karakter</span>
                </div>

                <textarea
                  id="txtAnswer"
                  class="essay-textarea p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border-2 border-slate-200 dark:border-slate-700/80 focus:border-amber-500 dark:focus:border-amber-400 text-slate-800 dark:text-slate-100"
                  placeholder="Ketik analisis, penjelasan argumen, dan langkah penyelesaian masalahmu secara rinci di sini..."
                ></textarea>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <button
                id="btnPrev"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <i class="fa-solid fa-arrow-left"></i>
                <span>Sebelumnya</span>
              </button>

              <div class="text-xs font-mono font-bold text-slate-400">
                <span id="savedIndicatorText"><i class="fa-solid fa-cloud-arrow-up text-amber-500"></i> Autosave aktif</span>
              </div>

              <button
                id="btnNext"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-md shadow-amber-500/20 transition-colors cursor-pointer"
              >
                <span id="nextBtnText">Berikutnya</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- SIDE NAVIGATOR (col 4) -->
        <div class="lg:col-span-4 space-y-4">
          
          <!-- Summary Status Card -->
          <div class="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 backdrop-blur-md shadow-lg space-y-4">
            <h3 class="font-extrabold text-sm text-slate-800 dark:text-slate-100 flex items-center justify-between">
              <span class="flex items-center gap-2"><i class="fa-solid fa-grip text-amber-500"></i> Navigator Soal Esai</span>
              <span class="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 font-bold" id="answeredCount">0 / 5 Terisi</span>
            </h3>

            <!-- Number Grid -->
            <div id="navigatorGrid" class="grid grid-cols-5 gap-2">
              <!-- Injected via JS -->
            </div>

            <!-- Legend -->
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded bg-amber-500"></span>
                <span>Sudah Diisi</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></span>
                <span>Belum Diisi</span>
              </div>
            </div>

            <!-- Finish Button -->
            <div class="pt-2">
              <button
                id="btnSubmitAll"
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <i class="fa-solid fa-paper-plane"></i>
                <span>Selesai &amp; Kirim Jawaban Esai</span>
              </button>
            </div>
          </div>

          <!-- Scoring Rubric Info -->
          <div class="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-slate-600 dark:text-slate-400 space-y-2">
            <div class="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <i class="fa-solid fa-award"></i> Rubrik Penilaian HOTS:
            </div>
            <ul class="list-disc list-inside space-y-1 leading-relaxed">
              <li>Ketepatan konsep dasar informatika</li>
              <li>Kedalaman analisis &amp; argumentasi logis</li>
              <li>Kesesuaian solusi dengan konteks kasus</li>
            </ul>
          </div>

        </div>

      </div>

    </main>

    <!-- SUCCESS MODAL (POPUP) -->
    <div id="resultModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-center">
        <div class="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-500 flex items-center justify-center mx-auto text-2xl">
          <i class="fa-solid fa-circle-check"></i>
        </div>

        <div class="space-y-1.5">
          <h2 class="text-2xl font-black text-slate-900 dark:text-white">Jawaban Esai Terkirim!</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400" id="resStudentInfo">Nama Siswa • Kelas</p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-2 text-left leading-relaxed">
          <div class="font-bold text-amber-500 flex items-center gap-2">
            <i class="fa-solid fa-envelope-circle-check"></i> Konfirmasi Pengumpulan
          </div>
          <p>
            Seluruh 5 butir jawaban uraianmu telah berhasil dikirimkan ke Spreadsheet penilaian guru. Jawabanmu akan dievaluasi berdasarkan rubrik penilaian HOTS.
          </p>
        </div>

        <!-- Action Links -->
        <div class="space-y-2.5 pt-2">
          <a
            href="uji-kompetensi.html"
            class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            <i class="fa-solid fa-house"></i>
            <span>Kembali ke Portal Uji Kompetensi</span>
          </a>

          <a
            href="../index.html"
            class="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer"
          >
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Kembali ke Beranda Modul Pembelajaran</span>
          </a>
        </div>
      </div>
    </div>

    <!-- CBT ESSAY JAVASCRIPT LOGIC -->
    <script>
      /* ── SOAL ESAI HOTS (5 BUTIR LENGKAP) ── */
      const essayQuestions = [
        {
          id: 1,
          badge: "E1",
          category: "Berpikir Komputasional • Dekomposisi & Pola",
          bobot: 20,
          text: "<strong>Studi Kasus 1: Optimalisasi Antrean Kantin Sekolah</strong><br/>Pada jam istirahat sekolah yang hanya berdurasi 30 menit, antrean siswa di kantin seringkali sangat panjang dan tidak teratur sehingga banyak siswa yang kehabisan waktu makan.<br/><br/><strong>Tugas Analisis:</strong><br/>1. Lakukan <strong>Dekomposisi</strong> dengan memecah permasalahan antrean tersebut menjadi minimal 4 sub-masalah yang lebih spesifik!<br/>2. Jelaskan bagaimana prinsip <strong>Pengenalan Pola (Pattern Recognition)</strong> dapat digunakan untuk mengamati kebiasaan pembelian siswa dan merancang alur pemesanan yang jauh lebih cepat!"
        },
        {
          id: 2,
          badge: "E2",
          category: "Struktur Data • Stack vs Queue",
          bobot: 20,
          text: "<strong>Studi Kasus 2: Penerapan Mekanisme LIFO dan FIFO</strong><br/>Dalam sistem komputer, terdapat dua struktur data linier yang sangat fundamental: <em>Stack</em> (LIFO) dan <em>Queue</em> (FIFO).<br/><br/><strong>Tugas Analisis:</strong><br/>1. Jelaskan prinsip kerja masing-masing struktur data tersebut dalam contoh dunia nyata komputer (contoh: fitur <em>Undo-Redo</em> dan antrean <em>Print Spooler</em>)!<br/>2. Analisislah apa konsekuensi logis yang akan terjadi jika mekanisme tersebut ditukar (misalnya: printer mencetak dokumen siswa dengan prinsip Stack LIFO, dan tombol Undo beroperasi dengan prinsip Queue FIFO)?"
        },
        {
          id: 3,
          badge: "E3",
          category: "Algoritma Pemrograman • Kompleksitas Pencarian",
          bobot: 20,
          text: "<strong>Studi Kasus 3: Efisiensi Pencarian Data Masif Perpustakaan</strong><br/>Perpustakaan digital memiliki basis data 1.000.000 (satu juta) buku yang terdaftar dengan nomor ISBN unik.<br/><br/><strong>Tugas Analisis:</strong><br/>1. Mengapa algoritma <em>Binary Search</em> mensyaratkan kumpulan data ISBN harus dalam keadaan terurut (sorted) sebelum pencarian dilakukan?<br/>2. Bandingkan efisiensi jumlah perbandingan maksimal antara <em>Linear Search</em> (worst case) dengan <em>Binary Search</em> (worst case O(log₂ n)) untuk menemukan satu buku di antara 1 juta data tersebut!"
        },
        {
          id: 4,
          badge: "E4",
          category: "Sistem Komputer • Siklus Von Neumann & IPO",
          bobot: 20,
          text: "<strong>Studi Kasus 4: Siklus Mesin Von Neumann (Fetch - Decode - Execute)</strong><br/>Ketika seorang pengguna mengetikkan teks di keyboard lalu melihat huruf tersebut langsung muncul di layar monitor dan tersimpan di memori.<br/><br/><strong>Tugas Analisis:</strong><br/>1. Jelaskan tahapan siklus kerja <strong>Fetch, Decode, dan Execute</strong> yang terjadi di dalam CPU saat instruksi tersebut diproses!<br/>2. Terangkan peran koordinasi antara unit masukan (Keyboard), Control Unit (CU), Arithmetic Logic Unit (ALU), Memori Utama (RAM), dan Layar Monitor dalam siklus IPO (Input-Process-Output)!"
        },
        {
          id: 5,
          badge: "E5",
          category: "Sistem Operasi • Onion Layer & Penjadwalan Round Robin",
          bobot: 20,
          text: "<strong>Studi Kasus 5: Abstraksi Lapisan Bawang & Multitasking</strong><br/>Seorang siswa menjalankan meeting daring via Zoom, sambil mengetik laporan di Google Docs, dan memutar lagu di Spotify pada satu laptop secara bersamaan.<br/><br/><strong>Tugas Analisis:</strong><br/>1. Berdasarkan <strong>Model Lapisan Bawang (Onion Layer Model)</strong>, mengapa aplikasi Zoom dan Spotify tidak diizinkan mengakses perangkat keras (kartu suara / speaker / kamera) secara langsung tanpa melalui Kernel?<br/>2. Bagaimana algoritma penjadwalan CPU <em>Round Robin</em> (Time Quantum) bekerja membagi waktu kerja prosesor sehingga ketiga aplikasi tersebut tampak berjalan bersamaan tanpa freeze?"
        }
      ];

      /* ── STATE MANAGEMENT ── */
      let currentIdx = 0;
      let essayAnswers = {}; // { qId: text }
      let timeLeft = 35 * 60; // 35 menit
      let timerInterval = null;
      let violationCount = 0;

      const STORAGE_DRAFT_KEY = "patbhe_cbt_esai_draft_v1";

      window.addEventListener("DOMContentLoaded", () => {
        loadDraft();
        renderQuestion();
        renderNavigator();
        startTimer();
        setupAntiCheat();
        setupThemeToggle();

        // Listen to textarea typing for live stats & draft
        const txt = document.getElementById("txtAnswer");
        txt.addEventListener("input", () => {
          const qId = essayQuestions[currentIdx].id;
          essayAnswers[qId] = txt.value;
          updateWordCount(txt.value);
          renderNavigator();
          saveDraft();
        });
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

      function setupAntiCheat() {
        window.addEventListener("blur", () => {
          violationCount++;
          const alertEl = document.getElementById("antiCheatAlert");
          const countEl = document.getElementById("warnCount");
          alertEl.classList.remove("hidden");
          alertEl.classList.add("flex");
          countEl.innerText = violationCount;

          if (violationCount >= 3) {
            alert("PERINGATAN RESMI: Kamu telah berpindah jendela sebanyak 3 kali! Pelanggaran ini terekam pada laporan pengawas.");
          }
        });
      }

      function startTimer() {
        const timerEl = document.getElementById("cbtTimer");
        timerInterval = setInterval(() => {
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.innerText = "00:00";
            alert("Waktu ujian esai telah selesai! Jawabanmu akan dikirimkan secara otomatis.");
            submitExam(true);
            return;
          }
          timeLeft--;
          const m = Math.floor(timeLeft / 60);
          const s = timeLeft % 60;
          timerEl.innerText = \`\${m < 10 ? '0' : ''}\${m}:\${s < 10 ? '0' : ''}\${s}\`;
        }, 1000);
      }

      function renderQuestion() {
        const q = essayQuestions[currentIdx];
        document.getElementById("qCurrentBadge").innerText = q.badge;
        document.getElementById("qCurrentText").innerText = q.id;
        document.getElementById("qCategory").innerText = q.category;
        document.getElementById("qBobot").innerText = q.bobot;
        document.getElementById("qText").innerHTML = q.text;

        const txt = document.getElementById("txtAnswer");
        txt.value = essayAnswers[q.id] || "";
        updateWordCount(txt.value);

        // Prev & Next Buttons
        document.getElementById("btnPrev").disabled = currentIdx === 0;
        const nextText = document.getElementById("nextBtnText");
        if (currentIdx === essayQuestions.length - 1) {
          nextText.innerText = "Selesai";
        } else {
          nextText.innerText = "Berikutnya";
        }

        updateTopProgress();
      }

      function updateWordCount(str) {
        const chars = str.length;
        const words = str.trim() ? str.trim().split(/\\s+/).length : 0;
        document.getElementById("wordCount").innerText = \`\${words} kata • \${chars} karakter\`;
      }

      document.getElementById("btnPrev").onclick = () => {
        if (currentIdx > 0) {
          currentIdx--;
          renderQuestion();
          renderNavigator();
        }
      };

      document.getElementById("btnNext").onclick = () => {
        if (currentIdx < essayQuestions.length - 1) {
          currentIdx++;
          renderQuestion();
          renderNavigator();
        } else {
          confirmSubmit();
        }
      };

      function renderNavigator() {
        const grid = document.getElementById("navigatorGrid");
        grid.innerHTML = "";
        let filledCount = 0;

        essayQuestions.forEach((q, idx) => {
          const val = (essayAnswers[q.id] || "").trim();
          const isFilled = val.length > 5;
          const isCurrent = idx === currentIdx;

          if (isFilled) filledCount++;

          const btn = document.createElement("button");
          btn.type = "button";
          btn.onclick = () => {
            currentIdx = idx;
            renderQuestion();
            renderNavigator();
          };

          let colorClass = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700";
          if (isFilled) {
            colorClass = "bg-amber-500 text-white border-amber-500 font-bold";
          }

          const ringClass = isCurrent ? "ring-2 ring-rose-400 ring-offset-2 dark:ring-offset-slate-900 scale-105" : "";

          btn.className = \`h-10 rounded-xl border flex items-center justify-center font-mono text-xs transition-all cursor-pointer \${colorClass} \${ringClass}\`;
          btn.innerText = q.badge;
          grid.appendChild(btn);
        });

        document.getElementById("answeredCount").innerText = \`\${filledCount} / \${essayQuestions.length} Terisi\`;
      }

      function updateTopProgress() {
        const percent = ((currentIdx + 1) / essayQuestions.length) * 100;
        document.getElementById("topProgress").style.width = \`\${percent}%\`;
      }

      function saveDraft() {
        const data = {
          essayAnswers,
          nama: document.getElementById("cbtNama").value,
          absen: document.getElementById("cbtAbsen").value,
          kelas: document.getElementById("cbtKelas").value,
          timeLeft
        };
        localStorage.setItem(STORAGE_DRAFT_KEY, JSON.stringify(data));
      }

      function loadDraft() {
        try {
          const raw = localStorage.getItem(STORAGE_DRAFT_KEY);
          if (raw) {
            const data = JSON.parse(raw);
            if (data.essayAnswers) essayAnswers = data.essayAnswers;
            if (data.nama) document.getElementById("cbtNama").value = data.nama;
            if (data.absen) document.getElementById("cbtAbsen").value = data.absen;
            if (data.kelas) document.getElementById("cbtKelas").value = data.kelas;
            if (data.timeLeft && data.timeLeft > 10) timeLeft = data.timeLeft;
          }
        } catch (e) {
          console.error("Load draft error:", e);
        }
      }

      // SUBMIT LOGIC
      document.getElementById("btnSubmitAll").onclick = confirmSubmit;

      function confirmSubmit() {
        const nama = document.getElementById("cbtNama").value.trim();
        const absen = document.getElementById("cbtAbsen").value.trim();

        if (!nama || !absen) {
          alert("LENGKAPI IDENTITAS: Harap masukkan Nama Lengkap dan Nomor Presensi sebelum mengumpulkan jawaban esai!");
          document.getElementById("cbtNama").focus();
          return;
        }

        let filled = 0;
        essayQuestions.forEach(q => {
          if ((essayAnswers[q.id] || "").trim().length > 5) filled++;
        });

        if (filled < essayQuestions.length) {
          const msg = \`Perhatian: Kamu baru mengisi \${filled} dari \${essayQuestions.length} soal esai.\\nApakah kamu yakin ingin tetap mengumpulkan sekarang?\`;
          if (!confirm(msg)) return;
        } else {
          if (!confirm("Apakah kamu yakin seluruh jawaban analisis esaimu sudah lengkap dan ingin dikirimkan ke guru?")) return;
        }

        submitExam(false);
      }

      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVYfhcDSqllYtnhG7bPXLe5DY1ahkGtV4Pkn6Bi_wIXV1BxFpNOJgz2S7wAJwbFD2AAg/exec";

      async function submitExam(isAuto) {
        clearInterval(timerInterval);

        const nama = document.getElementById("cbtNama").value.trim() || "Anonim Siswa";
        const absen = document.getElementById("cbtAbsen").value.trim() || "-";
        const kelas = document.getElementById("cbtKelas").value.trim() || "X-E6";

        document.getElementById("resStudentInfo").innerText = \`\${nama} (Presensi \${absen}) • Kelas \${kelas}\`;

        const modal = document.getElementById("resultModal");
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        // Kirim ke Google Apps Script
        try {
          const formData = new URLSearchParams();
          formData.append("jenis", "UJI-KOMPETENSI-SOAL-ESAI");
          formData.append("nama", nama);
          formData.append("absen", absen);
          formData.append("kelas", kelas);
          formData.append("total_soal", essayQuestions.length);
          formData.append("pelanggaran_tab", violationCount);
          formData.append("jawaban_esai", JSON.stringify(essayAnswers));

          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
          });

          // Hapus draft setelah berhasil dikirim
          localStorage.removeItem(STORAGE_DRAFT_KEY);
        } catch (e) {
          console.error("Submit fetch error:", e);
        }
      }
    </script>
  </body>
</html>`;

fs.writeFileSync('Uji_Kompetensi/esai.html', esaiScript, 'utf8');
console.log('Successfully written Uji_Kompetensi/esai.html!');

