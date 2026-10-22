const fs = require('fs');

const materiHtml = `      <!-- ============================================================
           SUB-MENU 1: MATERI LENGKAP (SESUAI BUKU SAKU INFORMATIKA SO)
           ============================================================ -->
      <section id="materi" class="tab-content block space-y-12">

        <!-- 0. Header Buku Saku & Peta Konsep -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all">
          <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div class="space-y-3">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold font-mono tracking-wider">
                <i class="fa-solid fa-book-bookmark"></i>
                <span>BUKU SAKU INFORMATIKA KELAS X • SMAN 4 YOGYAKARTA</span>
              </div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Mengenal <span class="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Sistem Operasi</span>
              </h2>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Arsitektur, Fungsi, dan Cara Kerja Komputer. Mengupas bagaimana perangkat keras (hardware), perangkat lunak (software), dan manusia (brainware) berkolaborasi secara harmonis.
              </p>
              <div class="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <span class="inline-flex items-center gap-1.5"><i class="fa-solid fa-user-tie text-emerald-500"></i> Penyusun: <strong>Pak Ilyas Fandhi Anggara, S.Kom</strong></span>
                <span class="inline-flex items-center gap-1.5"><i class="fa-solid fa-layer-group text-cyan-500"></i> Elemen: <strong>Sistem Komputer (Fase E)</strong></span>
              </div>
            </div>

            <!-- Quick Map Pills -->
            <div class="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
              <a href="#bab1" class="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/40 text-xs font-bold text-slate-700 dark:text-slate-200 transition flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono flex items-center justify-center text-[11px]">I</span>
                <span>Bab 1: Komponen &amp; Booting</span>
              </a>
              <a href="#bab2" class="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/40 text-xs font-bold text-slate-700 dark:text-slate-200 transition flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-mono flex items-center justify-center text-[11px]">II</span>
                <span>Bab 2: Lapisan Bawang &amp; Jenis OS</span>
              </a>
              <a href="#bab3" class="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200 dark:border-slate-700 hover:border-purple-500/40 text-xs font-bold text-slate-700 dark:text-slate-200 transition flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-400 font-mono flex items-center justify-center text-[11px]">III</span>
                <span>Bab 3: 5 Peran &amp; Masalah OS</span>
              </a>
            </div>
          </div>
        </div>

        <!-- ============================================================
             BAB I: KOMPONEN DASAR & PENGERTIAN SISTEM OPERASI
             ============================================================ -->
        <div id="bab1" class="space-y-8">
          <!-- Bab Header Card -->
          <div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-emerald-500/10 space-y-3">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-widest">BAB I</span>
              <span class="text-xs text-emerald-100 font-mono">Quest 01 • Alokasi 25 Menit</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-black tracking-tight">Komponen Dasar &amp; Pengertian Sistem Operasi</h3>
            <p class="text-sm sm:text-base text-emerald-50 max-w-3xl leading-relaxed">
              Hardware, Software, dan Jembatan Penghubungnya. Membedakan wujud fisik dan instruksi digital, memahami pengertian SO, serta mengurutkan tahapan proses komputer dibangunkan (Booting).
            </p>
          </div>

          <!-- 1. Hardware dan 4 Kategorinya -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0">
                <i class="fa-solid fa-microchip"></i>
              </div>
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">1. Hardware (Perangkat Keras) dan Contohnya</h4>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Seluruh komponen fisik yang tampak nyata (bisa dilihat & disentuh langsung) dalam alur IPO-S</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Input -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                  <i class="fa-solid fa-keyboard"></i>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">A. Perangkat Input (Masukan)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Memasukkan data atau perintah ke komputer.
                </p>
                <div class="pt-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Contoh: Keyboard, Mouse, Joystick, Microphone, Webcam, Scanner, Sensor.
                </div>
              </div>

              <!-- Proses -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
                  <i class="fa-solid fa-brain"></i>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">B. Perangkat Proses (Pengolah)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Otak utama yang mengolah instruksi & komputasi data.
                </p>
                <div class="pt-1 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  Contoh: CPU (Prosesor), RAM (Memori Sementara), GPU / VGA Card.
                </div>
              </div>

              <!-- Output -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
                  <i class="fa-solid fa-desktop"></i>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">C. Perangkat Output (Keluaran)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Menampilkan hasil pengolahan data ke pengguna.
                </p>
                <div class="pt-1 text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold">
                  Contoh: Monitor (Terminals), Speaker, Proyektor, Printer.
                </div>
              </div>

              <!-- Storage -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm">
                  <i class="fa-solid fa-hard-drive"></i>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">D. Penyimpanan (Storage)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Menyimpan file & program secara permanen (non-volatile).
                </p>
                <div class="pt-1 text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold">
                  Contoh: SSD (Solid State Drive), Harddisk (HDD), Flashdisk, Disks.
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Software (Aplikasi vs Sistem) -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xl shrink-0">
                <i class="fa-solid fa-code"></i>
              </div>
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">2. Software (Perangkat Lunak) dan Contohnya</h4>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Kumpulan instruksi atau program digital tak kasat mata yang mengatur kerja hardware</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <!-- Software Aplikasi -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider font-mono">Kategori 1</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold">Untuk Pengguna</span>
                </div>
                <h5 class="text-base font-bold text-slate-900 dark:text-white">A. Software Aplikasi (Application Software)</h5>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Program yang dirancang khusus untuk menyelesaikan tugas spesifik pengguna sehari-hari, seperti mengetik, menghitung, mendesain, atau hiburan.
                </p>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-xs font-mono space-y-1">
                  <span class="text-slate-500 block">Contoh Populer:</span>
                  <span class="text-slate-900 dark:text-white font-semibold">Microsoft Word, Excel, PowerPoint, Canva, Google Chrome, WhatsApp, Spotify, Game.</span>
                </div>
              </div>

              <!-- Software Sistem -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">Kategori 2</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">Fondasi Sistem</span>
                </div>
                <h5 class="text-base font-bold text-slate-900 dark:text-white">B. Software Sistem (System Software)</h5>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Program utama yang bertugas mengelola seluruh hardware, mengalokasikan sumber daya komputer, dan menjadi wadah tempat berjalannya software aplikasi.
                </p>
                <div class="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-xs font-mono space-y-1">
                  <span class="text-slate-500 block">Contoh Utama:</span>
                  <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Sistem Operasi (Windows 11, Linux Ubuntu, Android 15, macOS Sequoia).</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. Pengertian SO, Analogi Tubuh Manusia, & 5 Tahap Booting -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xl shrink-0">
                <i class="fa-solid fa-power-off"></i>
              </div>
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">3. Pengertian Sistem Operasi &amp; Tahapan Booting</h4>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Bagaimana Sistem Operasi didefinisikan dan bagaimana ia dibangunkan pertama kali saat komputer dinyalakan</p>
              </div>
            </div>

            <!-- Definisi & Analogi Tubuh Manusia -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="p-5 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/40 space-y-3">
                <span class="text-xs font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider font-mono">Definisi Resmi</span>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Sistem Operasi (Operating System / OS)</strong> adalah perangkat lunak sistem yang bertugas mengelola perangkat keras komputer (hardware), mengelola sumber daya perangkat lunak (software), dan menyediakan layanan umum untuk program komputer. Sistem Operasi berfungsi mengendalikan, mengontrol, serta memberikan koneksi antarperangkat keras komputer dengan pengguna.
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-3">
                <div class="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <i class="fa-solid fa-person-running text-base"></i>
                  <span>Analogi Sederhana: Tubuh Manusia</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  Bayangkan komputer seperti tubuh manusia. <strong>Hardware</strong> adalah raga fisik (tangan, mata, otak fisik), sedangkan <strong>Sistem Operasi</strong> adalah <em>nyawa dan sistem saraf pusatnya</em>. Tanpa Sistem Operasi, laptop atau ponsel semahal apa pun hanyalah benda mati yang tidak bisa menerima perintah atau menjalankan aplikasi.
                </p>
              </div>
            </div>

            <!-- Rantai 5 Langkah Booting -->
            <div class="space-y-4 pt-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h5 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-arrows-spin text-emerald-500"></i>
                  <span>Bagaimana Sistem Operasi Dibangunkan? (5 Langkah Proses Booting)</span>
                </h5>
                <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Runut 1 s/d 5</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                Saat komputer baru dinyalakan, prosesor (CPU) belum berisi instruksi apa pun. Proses menyalakan komputer dan membangunkan Sistem Operasi hingga siap bekerja disebut <strong>Booting</strong>:
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
                <!-- Step 1 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="w-7 h-7 rounded-lg bg-emerald-500 text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
                    <span class="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">Listrik</span>
                  </div>
                  <div>
                    <h6 class="font-bold text-slate-900 dark:text-white text-xs">Daya Dihidupkan</h6>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Aliran listrik masuk untuk membangunkan seluruh komponen perangkat keras.</p>
                  </div>
                </div>

                <!-- Step 2 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="w-7 h-7 rounded-lg bg-teal-500 text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
                    <span class="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-bold">Uji HW</span>
                  </div>
                  <div>
                    <h6 class="font-bold text-slate-900 dark:text-white text-xs">POST (Self Test)</h6>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Komputer melakukan uji mandiri mengecek kondisi RAM, keyboard, & storage normal.</p>
                  </div>
                </div>

                <!-- Step 3 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="w-7 h-7 rounded-lg bg-cyan-500 text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
                    <span class="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">Firmware</span>
                  </div>
                  <div>
                    <h6 class="font-bold text-slate-900 dark:text-white text-xs">Memuat BIOS/UEFI</h6>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Program dasar motherboard mencari lokasi partisi boot Sistem Operasi di disk.</p>
                  </div>
                </div>

                <!-- Step 4 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="w-7 h-7 rounded-lg bg-sky-500 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
                    <span class="text-[10px] font-mono text-sky-600 dark:text-sky-400 font-bold">Load OS</span>
                  </div>
                  <div>
                    <h6 class="font-bold text-slate-900 dark:text-white text-xs">Memuat OS ke RAM</h6>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Kernel SO diangkut dari penyimpanan (SSD/HDD) ke memori utama RAM & CPU.</p>
                  </div>
                </div>

                <!-- Step 5 -->
                <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60 flex flex-col justify-between space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs">5</span>
                    <span class="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">Ready</span>
                  </div>
                  <div>
                    <h6 class="font-bold text-slate-900 dark:text-white text-xs">Pengalihan Kontrol</h6>
                    <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">Hardware menyerahkan kendali penuh ke OS hingga layar desktop siap dipakai!</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Uji Nyali 01 Callout -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 text-xs leading-relaxed space-y-1.5">
              <span class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-mono">
                <i class="fa-solid fa-circle-question"></i> Uji Nyali Programmer 01:
              </span>
              <p class="text-slate-600 dark:text-slate-300">
                1. Apa perbedaan mendasar antara Hardware dan Software beserta contohnya? &bull; 2. Mengapa Microsoft Word tidak bisa berjalan tanpa OS? &bull; 3. Apa yang terjadi pada tahap POST saat komputer dinyalakan?
              </p>
            </div>
          </div>
        </div>

        <!-- ============================================================
             BAB II: MODEL LAPISAN BAWANG & JENIS SISTEM OPERASI
             ============================================================ -->
        <div id="bab2" class="space-y-8">
          <!-- Bab Header Card -->
          <div class="bg-gradient-to-r from-cyan-600 to-sky-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-cyan-500/10 space-y-3">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-widest">BAB II</span>
              <span class="text-xs text-cyan-100 font-mono">Quest 02 • Alokasi 25 Menit</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-black tracking-tight">Model Lapisan Bawang &amp; Jenis Sistem Operasi</h3>
            <p class="text-sm sm:text-base text-cyan-50 max-w-3xl leading-relaxed">
              Abstraksi Arsitektur Komputer dan Ragam Platform OS. Memahami mengapa manusia tidak menyentuh sirkuit fisik secara langsung dan bagaimana 4 varian platform OS disesuaikan dengan kebutuhan perangkat.
            </p>
          </div>

          <!-- 4. Penjelasan Model Lapisan Bawang -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xl shrink-0">
                <i class="fa-solid fa-layer-group"></i>
              </div>
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">4. Penjelasan Model Lapisan Bawang (Onion Layer Model)</h4>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Arsitektur komputer berlapis dari inti terdalam (mesin) hingga kulit terluar (pengguna)</p>
              </div>
            </div>

            <!-- 4 Layer Cards Stack -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <!-- Lapisan 1: Hardware -->
              <div class="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="w-7 h-7 rounded-lg bg-emerald-500 text-white font-mono font-bold flex items-center justify-center text-xs">1</span>
                  <span class="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">Inti Terdalam</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Hardware (H)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Perangkat fisik mesin komputer seperti Terminals (layar/konsol), Printers, Disks (penyimpanan), RAM, dan CPU.
                </p>
              </div>

              <!-- Lapisan 2: Kernel -->
              <div class="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-500/30 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="w-7 h-7 rounded-lg bg-teal-500 text-white font-mono font-bold flex items-center justify-center text-xs">2</span>
                  <span class="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-bold">Jantung OS</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Kernel (K)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Inti dari Sistem Operasi yang berhubungan langsung untuk mengatur dan mengontrol kerja seluruh Hardware fisik.
                </p>
              </div>

              <!-- Lapisan 3: Shell -->
              <div class="p-5 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/30 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="w-7 h-7 rounded-lg bg-cyan-500 text-white font-mono font-bold flex items-center justify-center text-xs">3</span>
                  <span class="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">Antarmuka</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Shell (S)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Kulit luar Sistem Operasi yang membungkus Kernel sebagai antarmuka (UI) tempat pengguna memberi perintah.
                </p>
              </div>

              <!-- Lapisan 4: Applications -->
              <div class="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/30 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="w-7 h-7 rounded-lg bg-purple-500 text-white font-mono font-bold flex items-center justify-center text-xs">4</span>
                  <span class="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold">Kulit Terluar</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Applications (A &amp; U)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Program aplikasi dan program bantu (utilities) yang berinteraksi langsung dinikmati oleh manusia (pengguna).
                </p>
              </div>
            </div>

            <!-- Analogi Restoran Callout -->
            <div class="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-2">
              <div class="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
                <i class="fa-solid fa-utensils"></i>
                <span>Analogi Restoran (Model Lapisan Bawang):</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <strong class="text-emerald-600 dark:text-emerald-400 block mb-0.5">1. Hardware:</strong>
                  Kompor &amp; alat masak fisik di dapur.
                </div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <strong class="text-teal-600 dark:text-teal-400 block mb-0.5">2. Kernel:</strong>
                  Kepala Koki yang memasak langsung di kompor.
                </div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <strong class="text-cyan-600 dark:text-cyan-400 block mb-0.5">3. Shell:</strong>
                  Pelayan / Buku Menu pencatat pesanan.
                </div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <strong class="text-purple-600 dark:text-purple-400 block mb-0.5">4. Applications:</strong>
                  Hidangan lezat yang dinikmati tamu/pelanggan.
                </div>
              </div>
            </div>
          </div>

          <!-- 5. 4 Jenis Sistem Operasi -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xl shrink-0">
                <i class="fa-solid fa-server"></i>
              </div>
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">5. Jenis-Jenis Sistem Operasi (4 Kategori Utama)</h4>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Dirancang berbeda-beda menyesuaikan ukuran perangkat, daya listrik, dan tujuan penggunaan</p>
              </div>
            </div>

            <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                    <th class="p-3.5 w-1/4">Jenis OS</th>
                    <th class="p-3.5 w-1/2">Fungsi &amp; Karakteristik Utama</th>
                    <th class="p-3.5 w-1/4">Contoh Nyata</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  <!-- Desktop -->
                  <tr>
                    <td class="p-3.5 font-bold text-sky-600 dark:text-sky-400 flex items-center gap-2">
                      <i class="fa-solid fa-desktop"></i> Desktop OS
                    </td>
                    <td class="p-3.5 text-slate-600 dark:text-slate-300 leading-relaxed">
                      Dirancang untuk komputer pribadi (PC/Laptop) guna menunjang pekerjaan sekolah, desain grafis, pemrograman, dan tugas perkantoran dengan tampilan layar lebar.
                    </td>
                    <td class="p-3.5 font-mono text-slate-800 dark:text-slate-200">
                      Windows 10/11, macOS, Linux (Ubuntu, Fedora), ChromeOS
                    </td>
                  </tr>

                  <!-- Mobile -->
                  <tr>
                    <td class="p-3.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <i class="fa-solid fa-mobile-screen-button"></i> Mobile OS
                    </td>
                    <td class="p-3.5 text-slate-600 dark:text-slate-300 leading-relaxed">
                      Dirancang khusus untuk perangkat bergerak (Smartphone/Tablet) dengan navigasi layar sentuh, manajemen hemat baterai, serta dukungan sensor gerak &amp; GPS.
                    </td>
                    <td class="p-3.5 font-mono text-slate-800 dark:text-slate-200">
                      Android, iOS, iPadOS, HarmonyOS
                    </td>
                  </tr>

                  <!-- Embedded -->
                  <tr>
                    <td class="p-3.5 font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                      <i class="fa-solid fa-microchip"></i> Embedded OS
                    </td>
                    <td class="p-3.5 text-slate-600 dark:text-slate-300 leading-relaxed">
                      Sistem operasi berukuran kecil yang "tertanam" di dalam chip perangkat elektronik khusus. Hanya menjalankan satu fungsi spesifik secara otomatis dan hemat daya.
                    </td>
                    <td class="p-3.5 font-mono text-slate-800 dark:text-slate-200">
                      Smart TV, mesin ATM, mesin cuci digital, smartwatch, rem mobil (ABS), router Wi-Fi
                    </td>
                  </tr>

                  <!-- Server -->
                  <tr>
                    <td class="p-3.5 font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                      <i class="fa-solid fa-network-wired"></i> Server OS
                    </td>
                    <td class="p-3.5 text-slate-600 dark:text-slate-300 leading-relaxed">
                      Dirancang untuk komputer pusat (server) yang melayani ribuan komputer pengguna (client) sekaligus selama 24 jam nonstop dengan stabilitas dan keamanan tinggi.
                    </td>
                    <td class="p-3.5 font-mono text-slate-800 dark:text-slate-200">
                      Ubuntu Server, Red Hat Enterprise Linux, Windows Server, Debian
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Tips Cepat Embedded OS -->
            <div class="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800/40 text-xs text-sky-800 dark:text-sky-300 leading-relaxed flex items-start gap-3">
              <i class="fa-solid fa-wand-magic-sparkles text-sky-500 text-base mt-0.5 shrink-0"></i>
              <div>
                <strong>Cara Cepat Membedakan Embedded OS:</strong>
                Jika sebuah alat elektronik memiliki layar digital atau tombol pintar tetapi bukan HP dan bukan Laptop (misalnya mesin ATM, kasir minimarket, atau mesin cuci otomatis), maka alat tersebut menggunakan <strong>Embedded OS</strong>!
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================================
             BAB III: PERAN, FUNGSI & MASALAH SISTEM OPERASI
             ============================================================ -->
        <div id="bab3" class="space-y-8">
          <!-- Bab Header Card -->
          <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-purple-500/10 space-y-3">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-widest">BAB III</span>
              <span class="text-xs text-purple-100 font-mono">Quest 03 • Alokasi 30 Menit</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-black tracking-tight">Peran, Fungsi &amp; Masalah Sistem Operasi</h3>
            <p class="text-sm sm:text-base text-purple-50 max-w-3xl leading-relaxed">
              5 Peran Utama Pengelolaan Sumber Daya dan 6 Masalah yang Kerap Melanda OS. Memahami alur kerja RAM, penjadwalan Round Robin milidetik, siklus IPO, GUI/CLI, hingga pertolongan pertama Task Manager.
            </p>
          </div>

          <!-- 6. 5 Peran dan Fungsi Utama Sistem Operasi -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl shrink-0">
                <i class="fa-solid fa-gears"></i>
              </div>
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">6. Lima (5) Peran dan Fungsi Utama Sistem Operasi</h4>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Alokasi Memori &bull; Penjadwalan Round Robin &bull; Siklus IPO &bull; UI &bull; Utilitas &amp; Keamanan</p>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Fungsi A: Memori -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">A</span>
                    <h5 class="font-bold text-slate-900 dark:text-white text-base">Pengelolaan Memori (Memory Management)</h5>
                  </div>
                  <span class="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold">RAM Control</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Setiap aplikasi yang dibuka harus dimuat ke dalam RAM. Sistem Operasi bertugas <strong>membaca dan menulis data ke/dari suatu alamat memori</strong>, melacak kapasitas RAM yang tersedia, dan menentukan jatah ruang memori tiap aplikasi.
                </p>
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <i class="fa-solid fa-hotel text-purple-500 text-sm mt-0.5 shrink-0"></i>
                  <div>
                    <strong>Analogi Resepsionis Hotel:</strong> Sistem Operasi mencatat Aplikasi A di kamar 001 dan Aplikasi B di kamar 002 agar datanya tidak saling menimpa, lalu segera mengosongkan kamar tersebut saat aplikasi ditutup pengguna.
                  </div>
                </div>
              </div>

              <!-- Fungsi B: Proses & Round Robin -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">B</span>
                    <h5 class="font-bold text-slate-900 dark:text-white text-base">Pengelolaan Proses (Multitasking &amp; Penjadwalan Round Robin)</h5>
                  </div>
                  <span class="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">CPU Scheduler</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Saat kita membuka banyak aplikasi sekaligus (Multitasking), bagian Sistem Operasi bernama <strong>Scheduler</strong> membagi waktu kerja CPU secara bergiliran menggunakan algoritma <strong>Round Robin (Time Sharing)</strong>. CPU memberikan jatah waktu sangat kecil bernama <em>Time Slice</em> (misal: 2 milidetik) kepada setiap aplikasi.
                </p>

                <!-- Box Simulasi Round Robin -->
                <div class="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5 shadow-inner">
                  <span class="text-emerald-400 font-bold block">// Contoh Kasus: CPU melayani 3 aplikasi mengantre di RAM (Time Slice = 2 ms)</span>
                  <div class="text-slate-300">1. Giliran 1 (0-2 ms) : CPU memproses Spotify &rarr; sisa 2 ms (Pindah mengantre ke belakang)</div>
                  <div class="text-emerald-300 font-bold">2. Giliran 2 (2-4 ms) : CPU memproses WhatsApp &rarr; sisa 0 ms (SELESAI DULUAN!)</div>
                  <div class="text-slate-300">3. Giliran 3 (4-6 ms) : CPU memproses Word &rarr; sisa 2 ms (Pindah mengantre ke belakang)</div>
                  <div class="text-slate-400 text-[11px] pt-1">// Siklus berputar ribuan kali per detik sehingga tampak berjalan serempak bagi mata manusia!</div>
                </div>

                <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                  <strong>Tahukah Kamu?</strong> Multitasking adalah kemampuan menjalankan banyak aplikasi sekaligus; Time Sharing adalah teknik membagi waktu giliran CPU; sedangkan Pipelining adalah teknik pemrosesan tahapan instruksi secara estafet di dalam CPU.
                </div>
              </div>

              <!-- Fungsi C: Siklus IPO -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">C</span>
                    <h5 class="font-bold text-slate-900 dark:text-white text-base">Pengelolaan Antarmuka Kernel Hardware (Siklus IPO)</h5>
                  </div>
                  <span class="text-[10px] font-mono px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold">Device Driver</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Perangkat keras dari berbagai merek (printer Canon, mouse Logitech, kartu grafis NVIDIA) berbicara menggunakan bahasa mesin yang rumit. <strong>Kernel bersama Device Driver</strong> bertugas menjadi penerjemah antara aplikasi dan hardware dalam siklus Input - Proses - Output.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <strong class="text-emerald-600 dark:text-emerald-400 block mb-1"><i class="fa-solid fa-keyboard mr-1"></i> 1. Input:</strong>
                    Kamu mengetik huruf 'A' pada keyboard di Microsoft Word.
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <strong class="text-cyan-600 dark:text-cyan-400 block mb-1"><i class="fa-solid fa-microchip mr-1"></i> 2. Proses:</strong>
                    Sistem Operasi menangkap sinyal interupsi listrik untuk diolah CPU &amp; RAM.
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <strong class="text-teal-600 dark:text-teal-400 block mb-1"><i class="fa-solid fa-desktop mr-1"></i> 3. Output:</strong>
                    OS memerintahkan driver monitor merender tampilan visual huruf 'A' di layar.
                  </div>
                </div>
              </div>

              <!-- Fungsi D & E: Grid 2 Kolom -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <!-- Fungsi D: UI -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center">D</span>
                      <h5 class="font-bold text-slate-900 dark:text-white text-sm">Interaksi Pengguna (User Interface)</h5>
                    </div>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-bold">GUI vs CLI</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Sistem Operasi menyediakan dua jenis antarmuka untuk menerima instruksi manusia:
                  </p>
                  <div class="space-y-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                      <strong class="text-cyan-600 dark:text-cyan-400">1. GUI (Instruksi Simbolik):</strong> Berinteraksi via jendela, ikon, kursor mouse, dan sentuhan. Contoh: Desktop Windows, layar Android.
                    </div>
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                      <strong class="text-emerald-600 dark:text-emerald-400">2. CLI (Instruksi Tekstual):</strong> Berinteraksi langsung mengetikkan baris perintah teks. Contoh: CMD, PowerShell, Terminal Linux.
                    </div>
                  </div>
                </div>

                <!-- Fungsi E: Utilitas -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center">E</span>
                      <h5 class="font-bold text-slate-900 dark:text-white text-sm">Penyediaan Utilitas &amp; Keamanan</h5>
                    </div>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">Utilities</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Program bantu bawaan untuk merawat komputer dan mengarsipkan dokumen:
                  </p>
                  <div class="space-y-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                      <strong class="text-indigo-600 dark:text-indigo-400">&bull; Pengelolaan File:</strong> Menyimpan, menyalin (copy), mengurutkan (sort), dan menghapus file/folder di File Explorer.
                    </div>
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                      <strong class="text-purple-600 dark:text-purple-400">&bull; Pemantauan &amp; Keamanan:</strong> Memantau beban CPU/RAM di Task Manager, kata sandi, Firewall, dan proteksi jaringan Wi-Fi/LAN.
                    </div>
                  </div>
                </div>
              </div>

              <!-- Ringkasan 5 Peran Banner -->
              <div class="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 border border-emerald-500/30 text-xs leading-relaxed">
                <strong class="text-slate-900 dark:text-white block mb-1 flex items-center gap-2">
                  <i class="fa-solid fa-key text-emerald-500"></i> Ringkasan 5 Kata Kunci Peran Sistem Operasi:
                </strong>
                <span class="text-slate-700 dark:text-slate-300 font-mono">
                  (1) Mengatur alamat RAM &bull; (2) Menggilir kerja CPU (Round Robin) &bull; (3) Menerjemahkan Kernel Hardware &bull; (4) Menyediakan tampilan GUI/CLI &bull; (5) Menyediakan Utilitas File &amp; Keamanan.
                </span>
              </div>
            </div>
          </div>

          <!-- 7. 6 Masalah Utama dalam Sistem Operasi & Solusinya -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div class="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xl shrink-0">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div>
                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">7. Masalah-Masalah dalam Sistem Operasi &amp; Solusinya</h4>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Enam (6) gangguan yang sering terjadi akibat beban berlebih, konflik software, atau hardware</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- 1. Hang / Freeze -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">01</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">Membeku</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Hang / Freeze (Not Responding)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Gejala:</strong> Tampilan aplikasi membeku, kursor macet/tidak bisa diklik.<br>
                  <strong>Penyebab:</strong> Aplikasi memproses beban terlalu berat atau mengalami bug kode sehingga gagal membalas sinyal OS.
                </p>
              </div>

              <!-- 2. Deadlock -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">02</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">Saling Kunci</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Deadlock (Saling Mengunci)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Gejala:</strong> Dua atau lebih program berhenti total di saat bersamaan.<br>
                  <strong>Penyebab:</strong> Aplikasi A dan B saling menunggu sumber daya (RAM/file) yang sedang dipakai satu sama lain (seperti 2 mobil berhadapan di jembatan sempit).
                </p>
              </div>

              <!-- 3. Thrashing -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-orange-600 dark:text-orange-400 font-mono">03</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-bold">RAM Penuh</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Thrashing (Kehabisan RAM)</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Gejala:</strong> Komputer menjadi sangat lambat ("lola") dan lag parah saat pindah aplikasi.<br>
                  <strong>Penyebab:</strong> Terlalu banyak aplikasi berat dibuka melampaui RAM; SO kelelahan memindahkan data bolak-balik RAM dan SSD/HDD.
                </p>
              </div>

              <!-- 4. System Crash / BSOD -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">04</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">Crash Fatal</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">System Crash / BSOD / Bootloop</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Gejala:</strong> Layar biru (Blue Screen of Death) di Windows, atau HP berhenti di logo (Bootloop).<br>
                  <strong>Penyebab:</strong> Kerusakan fatal pada Kernel, file sistem rusak saat booting, atau keping RAM cacat fisik.
                </p>
              </div>

              <!-- 5. Masalah Driver -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">05</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">Driver HW</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Masalah Driver Hardware</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Gejala:</strong> Printer baru tidak terdeteksi, suara speaker hilang, atau Wi-Fi tiba-tiba mati.<br>
                  <strong>Penyebab:</strong> Sistem Operasi belum memiliki atau kehilangan program penerjemah (Device Driver) yang cocok.
                </p>
              </div>

              <!-- 6. Malware & Virus -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">06</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">Keamanan</span>
                </div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm">Infeksi Malware &amp; Virus</h5>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Gejala:</strong> Iklan pop-up muncul sendiri, file terkunci ransomware, pemakaian CPU 100% tanpa sebab.<br>
                  <strong>Penyebab:</strong> Masuknya program jahat yang menyusup ke celah keamanan OS untuk membajak sistem.
                </p>
              </div>
            </div>

            <!-- Solusi Pertolongan Pertama: Task Manager -->
            <div class="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60 flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                <i class="fa-solid fa-kit-medical"></i>
              </div>
              <div class="space-y-1">
                <h6 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Solusi Pertolongan Pertama saat Sistem Operasi Bermasalah:</h6>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Jika sebuah aplikasi mengalami <em>Not Responding</em>, <em>Lag Parah</em>, atau <em>Deadlock</em>, pengguna dapat membuka utilitas <strong>Task Manager</strong> dengan menekan kombinasi tombol <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-xs font-bold text-slate-800 dark:text-slate-200">Ctrl + Shift + Esc</kbd> di Windows, memilih aplikasi yang macet, lalu menekan tombol <strong>End Task</strong> agar Sistem Operasi mematikan proses tersebut dan membebaskan kapasitas memori RAM!
                </p>
              </div>
            </div>
          </div>

          <!-- Kamus Istilah Ringkas -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-4">
            <div class="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <i class="fa-solid fa-spell-check text-cyan-500 text-lg"></i>
              <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Kamus Istilah Penting Sistem Operasi</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-emerald-600 dark:text-emerald-400 block font-mono">Booting:</strong> Proses menghidupkan komputer & memuat SO ke RAM.
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-cyan-600 dark:text-cyan-400 block font-mono">Kernel:</strong> Inti terdalam SO pengontrol langsung hardware.
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-teal-600 dark:text-teal-400 block font-mono">Shell:</strong> Lapisan pembungkus Kernel sebagai antarmuka perintah.
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-purple-600 dark:text-purple-400 block font-mono">Round Robin:</strong> Algoritma penjadwalan giliran waktu CPU (time slice).
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-sky-600 dark:text-sky-400 block font-mono">Device Driver:</strong> Program penerjemah bahasa hardware ke Sistem Operasi.
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-amber-600 dark:text-amber-400 block font-mono">Thrashing:</strong> Penurunan performa drastis akibat RAM penuh.
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-rose-600 dark:text-rose-400 block font-mono">Deadlock:</strong> Macet total karena 2 program saling tunggu sumber daya.
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong class="text-indigo-600 dark:text-indigo-400 block font-mono">Embedded OS:</strong> Sistem Operasi tertanam di chip mesin elektronik khusus.
              </div>
            </div>
          </div>
        </div>
      </section>`;

let fullHtml = fs.readFileSync('Materi_SO/materi.html', 'utf8');

const startMarker = '<section id="materi"';
const endMarker = '</section>';

const startIdx = fullHtml.indexOf(startMarker);
const endIdx = fullHtml.indexOf(endMarker, startIdx) + endMarker.length;

console.log('Replacing from index', startIdx, 'to', endIdx);
fullHtml = fullHtml.substring(0, startIdx) + materiHtml.trim() + fullHtml.substring(endIdx);

fs.writeFileSync('Materi_SO/materi.html', fullHtml, 'utf8');
console.log('Successfully updated Materi_SO/materi.html with official Materi_SO.pdf content! New length:', fullHtml.length);

