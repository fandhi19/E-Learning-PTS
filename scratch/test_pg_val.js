
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
          text: "Perhatikan cuplikan pseudocode berikut:\n\nx = 15\ny = 4\nz = x MOD y\nIF z > 2 THEN\n   OUTPUT (x + y)\nELSE\n   OUTPUT (x * y)\nENDIF\n\nNilai keluaran (output) dari algoritma di atas adalah ....",
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
          text: "Diberikan algoritma perulangan:\n\ntotal = 0\nFOR i = 1 TO 5 DO\n   IF i MOD 2 == 1 THEN\n      total = total + i\n   ENDIF\nENDFOR\n\nNilai akhir dari variabel 'total' adalah ....",
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
      let isExamStarted = false;
      let isExamSubmitted = false;
      let currentIdx = 0;
      let userAnswers = {}; // { qId: optionIndex }
      let raguStatus = {};   // { qId: true/false }
      let timeLeft = 40 * 60; // 40 menit
      let timerInterval = null;
      let violationCount = 0;
      let studentData = { nama: "", absen: "", kelas: "X-E6" };

      const STORAGE_DRAFT_KEY = "patbhe_cbt_pg_draft_v2";

      // Initialize
      window.addEventListener("DOMContentLoaded", () => {
        setupThemeToggle();
        setupAntiCheatListeners();
        checkExistingSession();
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

      function checkExistingSession() {
        try {
          const raw = localStorage.getItem(STORAGE_DRAFT_KEY);
          if (raw) {
            const data = JSON.parse(raw);
            if (data.isExamStarted && !data.isExamSubmitted) {
              studentData = {
                nama: data.nama || "",
                absen: data.absen || "",
                kelas: data.kelas || "X-E6"
              };
              userAnswers = data.userAnswers || {};
              raguStatus = data.raguStatus || {};
              violationCount = data.violationCount || 0;
              if (data.timeLeft && data.timeLeft > 5) timeLeft = data.timeLeft;

              // Restore fields
              document.getElementById("cbtNama").value = studentData.nama;
              document.getElementById("cbtAbsen").value = studentData.absen;
              document.getElementById("cbtKelas").value = studentData.kelas;

              // Prompt continue
              if (confirm(`Ditemukan sesi ujian aktif atas nama ${studentData.nama}. Lanjutkan pengerjaan ujian sekarang?`)) {
                startExamUI();
              }
            }
          }
        } catch (e) {
          console.error("Error reading session:", e);
        }
      }

      /* ── FLOW MEMULAI UJIAN & FULLSCREEN ── */
      function startExamFlow() {
        const nama = document.getElementById("cbtNama").value.trim();
        const absen = document.getElementById("cbtAbsen").value.trim();
        const kelas = document.getElementById("cbtKelas").value.trim();

        if (!nama || !absen) {
          alert("Harap lengkapi Nama Lengkap dan Nomor Presensi sebelum memulai ujian!");
          return;
        }

        studentData = { nama, absen, kelas };
        triggerFullscreen();
        startExamUI();
      }

      function triggerFullscreen() {
        try {
          const docEl = document.documentElement;
          if (docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(err => console.log("Fullscreen request error:", err));
          } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen();
          } else if (docEl.msRequestFullscreen) {
            docEl.msRequestFullscreen();
          }
        } catch (e) {
          console.warn("Fullscreen permission:", e);
        }
      }

      function startExamUI() {
        isExamStarted = true;

        // Switch sections
        document.getElementById("preExamSection").classList.add("hidden");
        document.getElementById("examSection").classList.remove("hidden");

        // Header controls
        document.getElementById("navTimerBox").classList.remove("hidden");
        document.getElementById("navTimerBox").classList.add("flex");
        document.getElementById("btnForceFullscreen").classList.remove("hidden");
        document.getElementById("btnForceFullscreen").classList.add("flex");
        document.getElementById("navBackBtn").classList.add("hidden");

        // Display student info
        document.getElementById("dispNama").innerText = studentData.nama;
        document.getElementById("dispAbsen").innerText = "Absen " + studentData.absen;
        document.getElementById("dispKelas").innerText = studentData.kelas;
        document.getElementById("dispViolation").innerText = violationCount;

        renderQuestion();
        renderNavigator();
        startTimer();
        saveDraft();
      }

      /* ── ANTI-CHEAT & VIOLATION DETECTOR ── */
      function setupAntiCheatListeners() {
        // 1. Tab blur / window blur
        window.addEventListener("blur", () => {
          if (isExamStarted && !isExamSubmitted) {
            handleViolation("Berpindah jendela / aplikasi peramban lain");
          }
        });

        // 2. Document visibility change
        document.addEventListener("visibilitychange", () => {
          if (document.hidden && isExamStarted && !isExamSubmitted) {
            handleViolation("Membuka tab baru / menyembunyikan halaman ujian");
          }
        });

        // 3. Fullscreen exit detection
        document.addEventListener("fullscreenchange", checkFullscreenState);
        document.addEventListener("webkitfullscreenchange", checkFullscreenState);
        document.addEventListener("mozfullscreenchange", checkFullscreenState);
        document.addEventListener("MSFullscreenChange", checkFullscreenState);
      }

      function checkFullscreenState() {
        const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        const badge = document.getElementById("fsStatusBadge");

        if (isFs) {
          if (badge) {
            badge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]";
            badge.innerHTML = '<i class="fa-solid fa-expand text-[10px]"></i> Layar Penuh Aktif';
          }
        } else {
          if (badge) {
            badge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 font-mono text-[11px]";
            badge.innerHTML = '<i class="fa-solid fa-compress text-[10px]"></i> Layar Penuh Mati';
          }
          if (isExamStarted && !isExamSubmitted) {
            handleViolation("Keluar dari Mode Layar Penuh (Fullscreen)");
          }
        }
      }

      function handleViolation(reason) {
        violationCount++;
        document.getElementById("dispViolation").innerText = violationCount;
        document.getElementById("modalViolCount").innerText = violationCount;
        saveDraft();

        // JIKA LEBIH DARI 3 KALI -> AUTO SUBMIT LANGSUNG
        if (violationCount > 3) {
          const violModal = document.getElementById("violationModal");
          violModal.classList.add("hidden");
          violModal.classList.remove("flex");

          alert("BATAS PELANGGARAN TERLAMPAUI (LEBIH DARI 3 KALI)!\n\nSesuai aturan ujian, jawabanmu otomatis langsung dikumpulkan ke sistem penilaian guru.");
          submitExam(true, "Auto-Submit: Terdeteksi keluar layar > 3 kali (" + reason + ")");
          return;
        }

        // Tampilkan modal peringatan
        const violModal = document.getElementById("violationModal");
        violModal.classList.remove("hidden");
        violModal.classList.add("flex");
      }

      function resumeExamFullscreen() {
        const violModal = document.getElementById("violationModal");
        violModal.classList.add("hidden");
        violModal.classList.remove("flex");
        triggerFullscreen();
      }

      /* ── TIMER CBT ── */
      function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        const timerEl = document.getElementById("cbtTimer");

        timerInterval = setInterval(() => {
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.innerText = "00:00";
            alert("Waktu ujian telah habis! Sistem mengumpulkan jawabanmu secara otomatis.");
            submitExam(true, "Waktu Ujian Habis (40 Menit)");
            return;
          }
          timeLeft--;
          const m = Math.floor(timeLeft / 60);
          const s = timeLeft % 60;
          timerEl.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

          // Save draft periodically
          if (timeLeft % 10 === 0) {
            saveDraft();
          }
        }, 1000);
      }

      /* ── RENDER SOAL & PILIHAN ── */
      function renderQuestion() {
        const q = questions[currentIdx];
        document.getElementById("qCurrentBadge").innerText = q.id;
        document.getElementById("qCurrentText").innerText = q.id;
        document.getElementById("qCategory").innerText = q.category;
        document.getElementById("qText").innerHTML = q.text.replace(/\n/g, '<br/>');

        // Render Options
        const container = document.getElementById("qOptions");
        container.innerHTML = "";
        const labels = ["A", "B", "C", "D", "E"];

        q.options.forEach((opt, idx) => {
          const isSelected = userAnswers[q.id] === idx;
          const optDiv = document.createElement("div");
          optDiv.className = `cbt-option p-3.5 sm:p-4 rounded-2xl border-2 cursor-pointer flex items-start gap-3.5 transition-all ${
            isSelected
              ? 'bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-semibold shadow-sm'
              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
          }`;

          optDiv.onclick = () => selectOption(q.id, idx);
          optDiv.innerHTML = `
            <div class="w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 ${
              isSelected
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-500'
            }">${labels[idx]}</div>
            <div class="text-xs sm:text-sm leading-relaxed pt-0.5">${opt}</div>
          `;
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

          btn.className = `h-10 rounded-xl border flex items-center justify-center font-mono text-xs transition-all cursor-pointer ${colorClass} ${ringClass}`;
          btn.innerText = q.id;
          grid.appendChild(btn);
        });

        document.getElementById("answeredCount").innerText = `${answered} / ${questions.length}`;
      }

      function updateTopProgress() {
        const percent = ((currentIdx + 1) / questions.length) * 100;
        document.getElementById("topProgress").style.width = `${percent}%`;
      }

      function saveDraft() {
        if (!isExamStarted) return;
        const data = {
          isExamStarted,
          isExamSubmitted,
          nama: studentData.nama,
          absen: studentData.absen,
          kelas: studentData.kelas,
          userAnswers,
          raguStatus,
          violationCount,
          timeLeft
        };
        localStorage.setItem(STORAGE_DRAFT_KEY, JSON.stringify(data));
      }

      /* ── SUBMISSION LOGIC ── */
      document.getElementById("btnSubmitAll").onclick = confirmSubmit;

      function confirmSubmit() {
        const answeredTotal = Object.keys(userAnswers).length;
        if (answeredTotal < questions.length) {
          const msg = `Perhatian: Kamu baru menjawab ${answeredTotal} dari ${questions.length} butir soal.\nApakah kamu yakin ingin mengumpulkan nilai ujian sekarang?`;
          if (!confirm(msg)) return;
        } else {
          if (!confirm("Apakah kamu yakin seluruh jawabanmu sudah benar dan ingin mengumpulkan nilai ujian PG?")) return;
        }

        submitExam(false, "Selesai Normal");
      }

      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVYfhcDSqllYtnhG7bPXLe5DY1ahkGtV4Pkn6Bi_wIXV1BxFpNOJgz2S7wAJwbFD2AAg/exec";

      async function submitExam(isForced, catatan) {
        if (isExamSubmitted) return;
        isExamSubmitted = true;
        clearInterval(timerInterval);

        // Hitung Skor
        let correctCount = 0;
        questions.forEach(q => {
          if (userAnswers[q.id] === q.correct) {
            correctCount++;
          }
        });

        const score = Math.round((correctCount / questions.length) * 100);

        // Update modal info
        document.getElementById("resStudentInfo").innerText = `${studentData.nama} (Presensi ${studentData.absen}) • Kelas ${studentData.kelas}`;
        document.getElementById("resScore").innerText = score;
        document.getElementById("resCorrect").innerText = correctCount;

        if (isForced && violationCount > 3) {
          document.getElementById("resTitle").innerText = "Ujian Selesai (Auto-Submit)";
          document.getElementById("resAutoSubmitNotice").classList.remove("hidden");
        }

        const modal = document.getElementById("resultModal");
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        // Kirim ke Google Apps Script Spreadsheet
        try {
          const formData = new URLSearchParams();
          formData.append("jenis", "UJI-KOMPETENSI-PILIHAN-GANDA");
          formData.append("nama", studentData.nama);
          formData.append("absen", studentData.absen);
          formData.append("kelas", studentData.kelas);
          formData.append("skor_pg", score);
          formData.append("benar", correctCount);
          formData.append("total_soal", questions.length);
          formData.append("pelanggaran_tab", violationCount);
          formData.append("catatan", catatan || "Normal");
          formData.append("jawaban_detail", JSON.stringify(userAnswers));

          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
          });

          // Tandai selesai di localStorage
          saveDraft();
        } catch (e) {
          console.error("Submit fetch error:", e);
        }
      }
    