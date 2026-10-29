const fs = require('fs');

// GENERATE Uji_Kompetensi/pg.html
const pgScript = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ujian Pilihan Ganda — Uji Kompetensi Informatika RuangInformatika</title>
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
        background-image: radial-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px),
          radial-gradient(rgba(14, 165, 233, 0.06) 1px, transparent 1px);
        background-size: 32px 32px;
        background-position: 0 0, 16px 16px;
      }
      html:not(.dark) body {
        background-color: #f8fafc;
        background-image: radial-gradient(rgba(16, 185, 129, 0.12) 1px, transparent 1px),
          radial-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px);
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar { width: 6px; height: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.3); border-radius: 999px; }

      .cbt-option {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .cbt-option:hover {
        transform: translateX(4px);
      }

      #topProgress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #10b981, #06b6d4, #3b82f6);
        z-index: 999;
        width: 0%;
        transition: width 0.3s ease;
      }
    </style>
  </head>

  <body class="text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
    <!-- Top Progress Bar -->
    <div id="topProgress"></div>

    <!-- ================= TOP NAVBAR ================= -->
    <header class="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="uji-kompetensi.html" class="flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
              <img src="../images/Logo Patbhe.png" alt="Logo SMAN 4 Yogyakarta" class="w-7 h-7 object-contain" />
            </div>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-black text-xl text-slate-900 dark:text-white tracking-tight">Ruang<span class="text-emerald-500">Informatika</span></span>
            </div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 block">CBT PILIHAN GANDA • SMAN 4</span>
          </div>
        </a>

        <!-- Timer & Controls -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-sm font-mono text-sm font-bold">
            <i class="fa-solid fa-clock text-emerald-500 animate-pulse"></i>
            <span id="cbtTimer">40:00</span>
          </div>

          <a
            href="uji-kompetensi.html"
            onclick="return confirm('Apakah kamu yakin ingin kembali ke menu utama? Progres jawaban tetap tersimpan di browser ini.')"
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
        <span>Peringatan Anti-Curang: Kamu terdeteksi meninggalkan halaman ujian! Pelanggaran: <strong id="warnCount">0</strong> / 3 kali toleransi.</span>
      </div>

      <!-- Identity Card (Required before submit) -->
      <div class="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-sm">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
              <i class="fa-solid fa-user text-emerald-500 mr-1"></i> Nama Lengkap Peserta <span class="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="cbtNama"
              placeholder="Ketik nama lengkap..."
              class="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
              <i class="fa-solid fa-id-badge text-emerald-500 mr-1"></i> Nomor Presensi (Absen) <span class="text-rose-500">*</span>
            </label>
            <input
              type="number"
              id="cbtAbsen"
              placeholder="Contoh: 18"
              class="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono font-semibold focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
              <i class="fa-solid fa-school text-emerald-500 mr-1"></i> Kelas / Rombel
            </label>
            <input
              type="text"
              id="cbtKelas"
              value="X-E6"
              class="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-semibold focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-slate-100"
            />
          </div>
        </div>
      </div>

      <!-- CBT Layout: Question View + Side Navigator -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- QUESTION CONTAINER (col 8) -->
        <div class="lg:col-span-8 space-y-4">
          <div class="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative min-h-[440px] flex flex-col justify-between">
            
            <!-- Question Header -->
            <div>
              <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-5">
                <div class="flex items-center gap-3">
                  <span class="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 font-mono font-extrabold flex items-center justify-center text-base" id="qCurrentBadge">
                    1
                  </span>
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block" id="qCategory">BERPIKIR KOMPUTASIONAL</span>
                    <h2 class="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100">
                      Soal No. <span id="qCurrentText">1</span> dari 20
                    </h2>
                  </div>
                </div>

                <button
                  id="btnRagu"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/40 text-amber-500 hover:bg-amber-500/10 text-xs font-bold transition-colors cursor-pointer"
                >
                  <i class="fa-regular fa-flag"></i>
                  <span id="raguText">Ragu-ragu</span>
                </button>
              </div>

              <!-- Question Text -->
              <div id="qText" class="text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base leading-relaxed space-y-3 mb-6">
                <!-- Injected via JS -->
              </div>

              <!-- Options List -->
              <div id="qOptions" class="space-y-3">
                <!-- Injected via JS -->
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="pt-8 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <button
                id="btnPrev"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <i class="fa-solid fa-arrow-left"></i>
                <span>Sebelumnya</span>
              </button>

              <div class="text-xs font-mono font-bold text-slate-400">
                <span id="savedIndicatorText"><i class="fa-solid fa-check text-emerald-500"></i> Jawaban tersimpan</span>
              </div>

              <button
                id="btnNext"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-colors cursor-pointer"
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
              <span class="flex items-center gap-2"><i class="fa-solid fa-grip text-emerald-500"></i> Navigator Soal PG</span>
              <span class="text-xs font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 font-bold" id="answeredCount">0 / 20</span>
            </h3>

            <!-- Number Grid -->
            <div id="navigatorGrid" class="grid grid-cols-5 gap-2">
              <!-- Injected via JS -->
            </div>

            <!-- Legend -->
            <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded bg-emerald-500"></span>
                <span>Terjawab</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded bg-amber-500"></span>
                <span>Ragu</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></span>
                <span>Kosong</span>
              </div>
            </div>

            <!-- Finish Button -->
            <div class="pt-2">
              <button
                id="btnSubmitAll"
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <i class="fa-solid fa-paper-plane"></i>
                <span>Selesai &amp; Kumpulkan Nilai</span>
              </button>
            </div>
          </div>

          <!-- Quick Tip -->
          <div class="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
            <div class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <i class="fa-solid fa-lightbulb"></i> Petunjuk:
            </div>
            <p class="leading-relaxed">Nilai akan langsung dihitung setelah pengumpulan. Pastikan seluruh 20 butir soal sudah terjawab hijau!</p>
          </div>

        </div>

      </div>

    </main>

    <!-- RESULT MODAL (POPUP) -->
    <div id="resultModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <div class="text-center space-y-2">
          <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 flex items-center justify-center mx-auto text-2xl">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white">Ujian PG Selesai!</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400" id="resStudentInfo">Nama Siswa • Kelas</p>
        </div>

        <!-- Score Big Box -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-1">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Skor Akhir Pilihan Ganda</span>
          <div class="text-5xl font-black text-emerald-500 font-mono" id="resScore">100</div>
          <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1" id="resDetail">
            Benar: <span class="text-emerald-500 font-bold" id="resCorrect">20</span> / 20 Soal
          </div>
        </div>

        <div id="resSubmitAlert" class="text-xs p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-semibold text-center">
          <i class="fa-solid fa-circle-check mr-1.5"></i> Nilai berhasil dikirim ke basis data nilai guru!
        </div>

        <!-- Action Links -->
        <div class="space-y-2.5 pt-2">
          <a
            href="esai.html"
            class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            <span>Lanjut Mengerjakan Ujian Soal Esai</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>

          <a
            href="uji-kompetensi.html"
            class="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer"
          >
            <i class="fa-solid fa-house"></i>
            <span>Kembali ke Portal Uji Kompetensi</span>
          </a>
        </div>
      </div>
    </div>

    <!-- CBT LOGIC JAVASCRIPT -->
    <script>
      /* ── SOAL PILIHAN GANDA (20 BUTIR LENGKAP) ── */
      const questions = [
        {
          id: 1,
          category: "Berpikir Komputasional",
          text: "Seorang analis data memecah masalah antrean kasir supermarket yang lambat menjadi 4 elemen: kecepatan scanner barcode, waktu pembayaran tunai vs digital, tata letak barang di meja kasir, dan alur antrean pengunjung. Prinsip berpikir komputasional yang diterapkan analis tersebut adalah ....",
          options: [
            "Abstraksi, karena mengabaikan merk scanner yang digunakan kasir",
            "Dekomposisi, karena memecah masalah besar menjadi komponen-komponen yang lebih kecil dan mudah dianalisis",
            "Pengenalan Pola, karena mengamati rata-rata belanjaan tiap hari Minggu",
            "Perancangan Algoritma, karena langsung membuat instruksi pembayaran cepat",
            "Generalisasi, karena menyamakan seluruh supermarket di kota"
          ],
          correct: 1
        },
        {
          id: 2,
          category: "Berpikir Komputasional",
          text: "Dalam fitur 'Undo' pada pengolah kata (Microsoft Word) atau riwayat navigasi 'Back' pada web browser, aksi terakhir yang dilakukan pengguna adalah aksi pertama yang akan dibatalkan/kembali. Struktur data yang mendasari mekanisme kerja ini adalah ....",
          options: [
            "Queue dengan prinsip FIFO (First In, First Out)",
            "Stack dengan prinsip LIFO (Last In, First Out)",
            "Tree dengan hierarki Root dan Child node",
            "Graph dengan sekumpulan Vertex dan Edge",
            "Array linear satu dimensi tanpa indeks"
          ],
          correct: 1
        },
        {
          id: 3,
          category: "Berpikir Komputasional",
          text: "Diberikan tumpukan piring bernomor [10, 25, 40] dengan posisi 40 di paling atas. Jika dilakukan operasi PUSH(55), lalu POP(), lalu PUSH(70), maka urutan elemen tumpukan dari paling bawah ke paling atas adalah ....",
          options: [
            "[10, 25, 40, 70]",
            "[55, 10, 25, 40]",
            "[70, 40, 25, 10]",
            "[10, 25, 70]",
            "[10, 25, 40, 55, 70]"
          ],
          correct: 0
        },
        {
          id: 4,
          category: "Berpikir Komputasional",
          text: "Antrean cetak dokumen pada printer (Print Spooler) melayani dokumen siswa yang dikirim pertama kali untuk dicetak lebih awal daripada dokumen yang dikirim kemudian. Struktur data dan prinsip yang digunakan printer tersebut adalah ....",
          options: [
            "Stack dengan prinsip LIFO",
            "Queue dengan prinsip FIFO",
            "Binary Search Tree",
            "Priority Stack tanpa antrean",
            "Circular Linked List LIFO"
          ],
          correct: 1
        },
        {
          id: 5,
          category: "Berpikir Komputasional",
          text: "Algoritma Binary Search memiliki efisiensi waktu O(log n), jauh lebih cepat dibandingkan Linear Search O(n) untuk data dalam jumlah masif. Namun, syarat mutlak agar Binary Search dapat dieksekusi dengan benar adalah ....",
          options: [
            "Data harus bertipe teks/string saja",
            "Jumlah elemen data harus berjumlah genap",
            "Kumpulan elemen data harus sudah terurut (sorted) secara ascending atau descending",
            "Data tidak boleh memiliki angka nol atau negatif",
            "Pencarian harus menggunakan perulangan while tak hingga"
          ],
          correct: 2
        },
        {
          id: 6,
          category: "Algoritma & Pemrograman",
          text: "Perhatikan cuplikan pseudocode berikut:\\n\\nx = 15\\ny = 4\\nz = x MOD y\\nIF z > 2 THEN\\n   OUTPUT (x + y)\\nELSE\\n   OUTPUT (x * y)\\nENDIF\\n\\nNilai keluaran (output) dari algoritma di atas adalah ....",
          options: [
            "19",
            "60",
            "3",
            "11",
            "Error pembagian nol"
          ],
          correct: 0
        },
        {
          id: 7,
          category: "Algoritma & Pemrograman",
          text: "Dalam diagram alir (flowchart), simbol berbentuk belah ketupat (Decision / Keputusan) berfungsi untuk ....",
          options: [
            "Menunjukkan awal (Start) atau akhir (End) dari sebuah prosedur program",
            "Melambangkan operasi aritmatika dan penugasan nilai variabel di memori",
            "Menguji suatu kondisi logika yang menghasilkan dua cabang keputusan (Ya/Tidak atau True/False)",
            "Menerima masukan dari keyboard atau menampilkan keluaran ke layar monitor",
            "Menghubungkan alur program yang terputus ke halaman dokumen yang lain"
          ],
          correct: 2
        },
        {
          id: 8,
          category: "Algoritma & Pemrograman",
          text: "Diberikan algoritma perulangan:\\n\\ntotal = 0\\nFOR i = 1 TO 5 DO\\n   IF i MOD 2 == 1 THEN\\n      total = total + i\\n   ENDIF\\nENDFOR\\n\\nNilai akhir dari variabel 'total' adalah ....",
          options: [
            "15",
            "9",
            "6",
            "10",
            "5"
          ],
          correct: 1
        },
        {
          id: 9,
          category: "Algoritma & Pemrograman",
          text: "Dalam struktur kontrol percabangan, kapan blok kode 'ELSE IF' dieksekusi oleh mesin interpreter/kompiler?",
          options: [
            "Ketika kondisi 'IF' sebelumnya bernilai True",
            "Ketika seluruh kondisi sebelumnya bernilai False dan kondisi pada 'ELSE IF' tersebut bernilai True",
            "Selalu dieksekusi tanpa memeriksa kondisi sebelumnya",
            "Hanya dieksekusi jika terjadi kesalahan runtime error",
            "Dieksekusi bersamaan dengan blok ELSE terakhir"
          ],
          correct: 1
        },
        {
          id: 10,
          category: "Algoritma & Pemrograman",
          text: "Struktur data yang mampu menampung sekumpulan nilai dengan tipe data seragam dan dapat diakses secara acak melalui nomor indeks terurut mulai dari 0 disebut ....",
          options: [
            "Variabel Boolean",
            "Konstanta Teks",
            "Array (Larik)",
            "Operator Logika",
            "Fungsi Rekursif"
          ],
          correct: 2
        },
        {
          id: 11,
          category: "Analisis Data",
          text: "Pada aplikasi pengolah angka (Google Sheets / Microsoft Excel), fungsi yang paling tepat digunakan untuk menghitung banyaknya siswa yang berpredikat 'LULUS' pada rentang sel D2:D40 adalah ....",
          options: [
            "=SUMIF(D2:D40, &#34;LULUS&#34;)",
            "=COUNTIF(D2:D40, &#34;LULUS&#34;)",
            "=COUNT(D2:D40)",
            "=AVERAGEIF(D2:D40, &#34;LULUS&#34;)",
            "=IF(D2:D40=&#34;LULUS&#34;, 1, 0)"
          ],
          correct: 1
        },
        {
          id: 12,
          category: "Analisis Data",
          text: "Simbol tanda dolar ($) pada penulisan rumus sel =$B$3 di Excel berfungsi untuk membuat alamat sel menjadi referensi absolut. Manfaat utama dari penguncian alamat sel absolut tersebut adalah ....",
          options: [
            "Mengubah format angka menjadi format mata uang dolar secara otomatis",
            "Menjaga agar koordinat baris dan kolom sel tidak bergeser saat rumus disalin (copy-paste) ke sel lain",
            "Menyembunyikan formula agar tidak dapat dilihat oleh pengguna lain",
            "Mempercepat proses perhitungan aritmatika pada CPU",
            "Membatasi input agar sel hanya menerima angka desimal"
          ],
          correct: 1
        },
        {
          id: 13,
          category: "Analisis Data",
          text: "Seorang analis ingin menampilkan visualisasi kontribusi persentase pangsa pasar dari 4 merk smartphone terhadap total penjualan 100% pada tahun berjalan. Jenis diagram (chart) yang paling tepat dan efektif digunakan adalah ....",
          options: [
            "Line Chart (Diagram Garis)",
            "Pie Chart atau Donut Chart (Diagram Lingkaran)",
            "Scatter Plot (Diagram Sebar)",
            "Histogram Frekuensi",
            "Area Chart Kontinu"
          ],
          correct: 1
        },
        {
          id: 14,
          category: "Analisis Data",
          text: "Sebelum data penjualan dianalisis lebih lanjut, seorang peneliti menemukan adanya data kosong (missing values), penulisan tanggal yang tidak seragam (01/02/26 dan 2026-Feb-01), serta data ganda (duplicate). Tahapan pengolahan data yang bertugas menangani anomali tersebut disebut ....",
          options: [
            "Data Visualization",
            "Data Cleaning (Pembersihan Data)",
            "Data Modeling",
            "Data Mining",
            "Data Encryption"
          ],
          correct: 1
        },
        {
          id: 15,
          category: "Analisis Data",
          text: "Rumus Excel yang tepat untuk menentukan status kelulusan pada sel E2: 'Jika nilai pada sel C2 lebih besar atau sama dengan 75 maka siswa dinyatakan TUNTAS, jika kurang maka REMEDIAL' adalah ....",
          options: [
            "=IF(C2 >= 75, &#34;TUNTAS&#34;, &#34;REMEDIAL&#34;)",
            "=IF(C2 = 75; &#34;REMEDIAL&#34;; &#34;TUNTAS&#34;)",
            "=CHECK(C2 >= 75: &#34;TUNTAS&#34;)",
            "=SUM(C2 >= 75, &#34;TUNTAS&#34;, &#34;REMEDIAL&#34;)",
            "=VLOOKUP(C2, 75, &#34;TUNTAS&#34;, TRUE)"
          ],
          correct: 0
        },
        {
          id: 16,
          category: "Sistem Komputer & OS",
          text: "Berdasarkan Model Lapisan Bawang (Onion Layer Model), sistem komputer disusun bertingkat dari inti perangkat keras hingga interaksi manusia. Urutan lapisan yang benar dari inti terdalam ke kulit terluar adalah ....",
          options: [
            "Hardware -> Shell -> Kernel -> Applications",
            "Kernel -> Hardware -> Shell -> Applications",
            "Hardware -> Kernel -> Shell -> Applications & Utilities",
            "Applications -> Shell -> Kernel -> Hardware",
            "Hardware -> Applications -> Kernel -> Shell"
          ],
          correct: 2
        },
        {
          id: 17,
          category: "Sistem Komputer & OS",
          text: "Dalam arsitektur Sistem Operasi, apa perbedaan peran mendasar antara Kernel dan Shell?",
          options: [
            "Kernel merawat file sampah, sedangkan Shell menyimpan data ke dalam SSD fisik",
            "Kernel mengendalikan perangkat keras (hardware) secara langsung, sedangkan Shell bertindak sebagai antarmuka perantara perintah pengguna",
            "Kernel tempat mengetik perintah CLI, sedangkan Shell mengatur aliran tegangan listrik adaptor",
            "Kernel berada di lapisan terluar komputer, sedangkan Shell berada di inti terdalam CPU",
            "Kernel khusus untuk sistem operasi mobile Android, sedangkan Shell khusus untuk Windows desktop"
          ],
          correct: 1
        },
        {
          id: 18,
          category: "Sistem Komputer & OS",
          text: "Saat komputer baru saja dinyalakan, motherboard akan secara otomatis menjalankan tahapan POST (Power-On Self-Test). Tujuan utama dari tahapan POST ini adalah ....",
          options: [
            "Menampilkan wallpaper desktop dan memutar musik pembuka",
            "Memeriksa kesiapan dan fungsi komponen fisik esensial (RAM, keyboard, storage) sebelum BIOS memuat OS",
            "Membagi alokasi kuota internet sekolah ke kartu jaringan",
            "Menghapus seluruh file temporary dan riwayat pencarian peramban",
            "Memperbarui versi Windows Update secara otomatis dari cloud"
          ],
          correct: 1
        },
        {
          id: 19,
          category: "Sistem Komputer & OS",
          text: "Sistem Operasi diibaratkan seperti 'Resepsionis Hotel' yang membagi ruang kamar bagi tiap aplikasi yang dibuka secara bersamaan agar tidak saling bertabrakan atau menyebabkan sistem crash. Peran ini merupakan fungsi Sistem Operasi dalam ....",
          options: [
            "Pengelolaan Memori (Memory Management) untuk alokasi alamat dan kapasitas RAM",
            "Pengelolaan Periferal Printer",
            "Pengaturan Jam Sistem Real-Time Clock",
            "Kompresi file arsip ZIP",
            "Pengalihan daya baterai hemat energi"
          ],
          correct: 0
        },
        {
          id: 20,
          category: "Sistem Komputer & OS",
          text: "Ketika seorang pengguna mengklik tombol 'Save' di aplikasi Microsoft Word untuk menyimpan dokumen ke dalam SSD (Disks), alur perjalanan instruksi perintah melintasi Model Lapisan Bawang secara berurutan adalah ....",
          options: [
            "Applications -> langsung menuju Hardware (Disks) tanpa melewati Sistem Operasi",
            "Applications -> Shell -> Kernel -> Hardware (Disks)",
            "Hardware (Disks) -> Shell -> Kernel -> Applications",
            "Applications -> Kernel -> Hardware (Disks) -> Shell",
            "Shell -> Applications -> Hardware (Disks) -> Kernel"
          ],
          correct: 1
        }
      ];

      /* ── STATE MANAGEMENT ── */
      let currentIdx = 0;
      let userAnswers = {}; // { qId: optionIndex }
      let raguStatus = {};   // { qId: true/false }
      let timeLeft = 40 * 60; // 40 menit
      let timerInterval = null;
      let violationCount = 0;

      const STORAGE_DRAFT_KEY = "patbhe_cbt_pg_draft_v1";

      // Initialize
      window.addEventListener("DOMContentLoaded", () => {
        loadDraft();
        renderQuestion();
        renderNavigator();
        startTimer();
        setupAntiCheat();
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

      function setupAntiCheat() {
        window.addEventListener("blur", () => {
          violationCount++;
          const alertEl = document.getElementById("antiCheatAlert");
          const countEl = document.getElementById("warnCount");
          alertEl.classList.remove("hidden");
          alertEl.classList.add("flex");
          countEl.innerText = violationCount;

          if (violationCount >= 3) {
            alert("PERINGATAN RESMI: Kamu telah berpindah jendela/layar sebanyak 3 kali! Aktivitas ini tercatat di rekam jejak penilaian pengawas ujian.");
          }
        });
      }

      function startTimer() {
        const timerEl = document.getElementById("cbtTimer");
        timerInterval = setInterval(() => {
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.innerText = "00:00";
            alert("Waktu ujian telah habis! Sistem akan mengumpulkan jawabanmu secara otomatis.");
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
        const q = questions[currentIdx];
        document.getElementById("qCurrentBadge").innerText = q.id;
        document.getElementById("qCurrentText").innerText = q.id;
        document.getElementById("qCategory").innerText = q.category;
        document.getElementById("qText").innerHTML = q.text.replace(/\\n/g, '<br/>');

        // Render Options
        const container = document.getElementById("qOptions");
        container.innerHTML = "";
        const labels = ["A", "B", "C", "D", "E"];

        q.options.forEach((opt, idx) => {
          const isSelected = userAnswers[q.id] === idx;
          const optDiv = document.createElement("div");
          optDiv.className = \`cbt-option p-3.5 sm:p-4 rounded-2xl border-2 cursor-pointer flex items-start gap-3.5 transition-all \${
            isSelected
              ? 'bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-semibold shadow-sm'
              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
          }\`;

          optDiv.onclick = () => selectOption(q.id, idx);
          optDiv.innerHTML = \`
            <div class="w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 \${
              isSelected
                ? 'bg-emerald-500 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-500'
            }">\${labels[idx]}</div>
            <div class="text-xs sm:text-sm leading-relaxed pt-0.5">\${opt}</div>
          \`;
          container.appendChild(optDiv);
        });

        // Ragu status
        const isRagu = !!raguStatus[q.id];
        const btnRagu = document.getElementById("btnRagu");
        const raguText = document.getElementById("raguText");
        if (isRagu) {
          btnRagu.className = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500 bg-amber-500 text-white text-xs font-bold transition-colors cursor-pointer";
          raguText.innerText = "Ragu-ragu (Aktif)";
        } else {
          btnRagu.className = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/40 text-amber-500 hover:bg-amber-500/10 text-xs font-bold transition-colors cursor-pointer";
          raguText.innerText = "Ragu-ragu";
        }

        // Prev & Next Buttons
        document.getElementById("btnPrev").disabled = currentIdx === 0;
        const nextText = document.getElementById("nextBtnText");
        if (currentIdx === questions.length - 1) {
          nextText.innerText = "Selesai";
        } else {
          nextText.innerText = "Berikutnya";
        }

        updateTopProgress();
      }

      function selectOption(qId, optIdx) {
        userAnswers[qId] = optIdx;
        saveDraft();
        renderQuestion();
        renderNavigator();
      }

      function toggleRagu() {
        const qId = questions[currentIdx].id;
        raguStatus[qId] = !raguStatus[qId];
        saveDraft();
        renderQuestion();
        renderNavigator();
      }

      document.getElementById("btnRagu").onclick = toggleRagu;

      document.getElementById("btnPrev").onclick = () => {
        if (currentIdx > 0) {
          currentIdx--;
          renderQuestion();
          renderNavigator();
        }
      };

      document.getElementById("btnNext").onclick = () => {
        if (currentIdx < questions.length - 1) {
          currentIdx++;
          renderQuestion();
          renderNavigator();
        } else {
          // Confirm submit
          confirmSubmit();
        }
      };

      function renderNavigator() {
        const grid = document.getElementById("navigatorGrid");
        grid.innerHTML = "";
        let answered = 0;

        questions.forEach((q, idx) => {
          const isAnswered = userAnswers[q.id] !== undefined;
          const isRagu = !!raguStatus[q.id];
          const isCurrent = idx === currentIdx;

          if (isAnswered) answered++;

          const btn = document.createElement("button");
          btn.type = "button";
          btn.onclick = () => {
            currentIdx = idx;
            renderQuestion();
            renderNavigator();
          };

          let colorClass = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700";
          if (isRagu) {
            colorClass = "bg-amber-500 text-white border-amber-500 font-bold";
          } else if (isAnswered) {
            colorClass = "bg-emerald-500 text-white border-emerald-500 font-bold";
          }

          const ringClass = isCurrent ? "ring-2 ring-cyan-400 ring-offset-2 dark:ring-offset-slate-900 scale-105" : "";

          btn.className = \`h-10 rounded-xl border flex items-center justify-center font-mono text-xs transition-all cursor-pointer \${colorClass} \${ringClass}\`;
          btn.innerText = q.id;
          grid.appendChild(btn);
        });

        document.getElementById("answeredCount").innerText = \`\${answered} / \${questions.length}\`;
      }

      function updateTopProgress() {
        const percent = ((currentIdx + 1) / questions.length) * 100;
        document.getElementById("topProgress").style.width = \`\${percent}%\`;
      }

      function saveDraft() {
        const data = {
          userAnswers,
          raguStatus,
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
            if (data.userAnswers) userAnswers = data.userAnswers;
            if (data.raguStatus) raguStatus = data.raguStatus;
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
          alert("LENGKAPI IDENTITAS: Harap masukkan Nama Lengkap dan Nomor Presensi sebelum mengumpulkan ujian!");
          document.getElementById("cbtNama").focus();
          return;
        }

        const answeredTotal = Object.keys(userAnswers).length;
        if (answeredTotal < questions.length) {
          const msg = \`Perhatian: Kamu baru menjawab \${answeredTotal} dari \${questions.length} butir soal.\\nApakah kamu yakin ingin tetap mengumpulkan ujian sekarang?\`;
          if (!confirm(msg)) return;
        } else {
          if (!confirm("Apakah kamu yakin seluruh jawabanmu sudah benar dan ingin mengumpulkan nilai ujian PG?")) return;
        }

        submitExam(false);
      }

      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVYfhcDSqllYtnhG7bPXLe5DY1ahkGtV4Pkn6Bi_wIXV1BxFpNOJgz2S7wAJwbFD2AAg/exec";

      async function submitExam(isAuto) {
        clearInterval(timerInterval);

        const nama = document.getElementById("cbtNama").value.trim() || "Anonim Siswa";
        const absen = document.getElementById("cbtAbsen").value.trim() || "-";
        const kelas = document.getElementById("cbtKelas").value.trim() || "X-E6";

        // Hitung Skor
        let correctCount = 0;
        questions.forEach(q => {
          if (userAnswers[q.id] === q.correct) {
            correctCount++;
          }
        });

        const score = Math.round((correctCount / questions.length) * 100);

        // Update modal info
        document.getElementById("resStudentInfo").innerText = \`\${nama} (Presensi \${absen}) • Kelas \${kelas}\`;
        document.getElementById("resScore").innerText = score;
        document.getElementById("resCorrect").innerText = correctCount;

        const modal = document.getElementById("resultModal");
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        // Kirim ke Google Apps Script
        try {
          const formData = new URLSearchParams();
          formData.append("jenis", "UJI-KOMPETENSI-PILIHAN-GANDA");
          formData.append("nama", nama);
          formData.append("absen", absen);
          formData.append("kelas", kelas);
          formData.append("skor_pg", score);
          formData.append("benar", correctCount);
          formData.append("total_soal", questions.length);
          formData.append("pelanggaran_tab", violationCount);
          formData.append("jawaban_detail", JSON.stringify(userAnswers));

          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
          });

          // Hapus draft setelah berhasil
          localStorage.removeItem(STORAGE_DRAFT_KEY);
        } catch (e) {
          console.error("Submit fetch error:", e);
        }
      }
    </script>
  </body>
</html>`;

fs.writeFileSync('Uji_Kompetensi/pg.html', pgScript, 'utf8');
console.log('Successfully written Uji_Kompetensi/pg.html!');

