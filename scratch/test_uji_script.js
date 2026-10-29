
      /* ── 1. Theme Toggle ── */
      const themeToggleBtn = document.getElementById("themeToggleBtn");
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
          const isDark = document.documentElement.classList.toggle("dark");
          localStorage.setItem("theme", isDark ? "dark" : "light");
        });
      }

      /* ── 2. Bank Soal Komprehensif (20 Soal 4 Elemen) ── */
      const BANK_SOAL = [
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

      /* ── 3. State Variables ── */
      let currentIdx = 0;
      let userAnswers = new Array(BANK_SOAL.length).fill(null);
      let userData = { nama: "", absen: "", kelas: "" };
      let timeRemaining = 30 * 60; // 30 Menit
      let timerInterval = null;
      let tabViolations = 0;
      const MAX_VIOLATIONS = 3;

      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVYfhcDSqllYtnhG7bPXLe5DY1ahkGtV4Pkn6Bi_wIXV1BxFpNOJgz2S7wAJwbFD2AAg/exec";

      /* ── 4. Start Exam Flow ── */
      function startExam(e) {
        e.preventDefault();
        const nama = document.getElementById("regNama").value.trim();
        const absen = document.getElementById("regAbsen").value.trim();
        const kelas = document.getElementById("regKelas").value.trim();

        if (!nama || !absen) return;

        userData = { nama, absen, kelas };
        document.getElementById("userDisplay").textContent = `${nama} (Presensi ${absen} • ${kelas})`;

        document.getElementById("startSection").classList.add("hidden");
        document.getElementById("cbtSection").classList.remove("hidden");

        renderNumberGrid();
        loadQuestion(0);
        startTimer();
        initAntiCheat();
      }

      /* ── 5. Render Navigator & Question ── */
      function renderNumberGrid() {
        const grid = document.getElementById("numberGrid");
        grid.innerHTML = "";

        BANK_SOAL.forEach((_, idx) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.id = `nav-dot-${idx}`;
          btn.className = `nav-dot w-9 h-9 rounded-xl text-xs font-mono font-bold border flex items-center justify-center cursor-pointer transition bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 ${userAnswers[idx] !== null ? "answered" : ""}`;
          btn.textContent = idx + 1;
          btn.onclick = () => loadQuestion(idx);
          grid.appendChild(btn);
        });

        updateAnsweredCount();
      }

      function updateAnsweredCount() {
        const answered = userAnswers.filter(a => a !== null).length;
        document.getElementById("answeredCount").textContent = `${answered} / ${BANK_SOAL.length}`;
        const pct = Math.round((answered / BANK_SOAL.length) * 100);
        document.getElementById("cbtProgress").style.width = `${pct}%`;
      }

      function loadQuestion(idx) {
        currentIdx = idx;
        const qData = BANK_SOAL[idx];

        document.getElementById("soalNum").textContent = idx + 1;
        document.getElementById("soalCategory").textContent = qData.cat;
        document.getElementById("soalQuestion").textContent = qData.q;

        const optContainer = document.getElementById("optionsContainer");
        optContainer.innerHTML = "";

        const letters = ["A", "B", "C", "D", "E"];
        qData.options.forEach((optText, optIdx) => {
          const isSelected = userAnswers[idx] === optIdx;
          const optDiv = document.createElement("div");
          optDiv.className = `cbt-option p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-medium ${isSelected ? "selected border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-200 font-bold" : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"}`;

          optDiv.onclick = () => {
            userAnswers[idx] = optIdx;
            loadQuestion(idx);
            renderNumberGrid();
          };

          optDiv.innerHTML = `
            <span class="w-7 h-7 rounded-lg border font-mono font-bold flex items-center justify-center shrink-0 ${isSelected ? "bg-amber-500 text-white border-amber-500" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"}">${letters[optIdx]}</span>
            <span class="leading-relaxed">${optText}</span>
          `;

          optContainer.appendChild(optDiv);
        });

        // Prev & Next Buttons
        document.getElementById("btnPrev").disabled = (idx === 0);
        document.getElementById("btnPrev").classList.toggle("opacity-40", idx === 0);

        const isLast = (idx === BANK_SOAL.length - 1);
        const nextBtn = document.getElementById("btnNext");
        if (isLast) {
          nextBtn.innerHTML = '<span>Selesai</span> <i class="fa-solid fa-check"></i>';
          nextBtn.className = "px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md";
          nextBtn.onclick = confirmSubmit;
        } else {
          nextBtn.innerHTML = '<span>Selanjutnya</span> <i class="fa-solid fa-arrow-right"></i>';
          nextBtn.className = "px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20";
          nextBtn.onclick = nextQuestion;
        }

        // Highlight current dot
        document.querySelectorAll(".nav-dot").forEach((d, i) => {
          d.classList.toggle("current", i === idx);
        });
      }

      function prevQuestion() {
        if (currentIdx > 0) loadQuestion(currentIdx - 1);
      }
      function nextQuestion() {
        if (currentIdx < BANK_SOAL.length - 1) loadQuestion(currentIdx + 1);
      }

      /* ── 6. Timer ── */
      function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
          timeRemaining--;
          if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeRemaining = 0;
            alert("Waktu ujian telah habis! Jawabanmu akan dikumpulkan secara otomatis.");
            finishExam();
          }

          const mins = Math.floor(timeRemaining / 60);
          const secs = timeRemaining % 60;
          document.getElementById("timerText").textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
      }

      /* ── 7. Anti-Cheat Monitoring ── */
      function initAntiCheat() {
        document.addEventListener("visibilitychange", () => {
          if (document.hidden && timeRemaining > 0 && !document.getElementById("cbtSection").classList.contains("hidden")) {
            tabViolations++;
            const warnBadge = document.getElementById("tabWarnBadge");
            warnBadge.classList.remove("hidden");
            document.getElementById("warnCount").textContent = tabViolations;

            if (tabViolations >= MAX_VIOLATIONS) {
              alert("PERINGATAN: Kamu telah berpindah tab melebihi batas toleransi (3 kali). Ujian otomatis dikumpulkan!");
              finishExam();
            } else {
              alert(`Peringatan (${tabViolations}/3): Jangan tinggalkan halaman ujian atau membuka tab lain!`);
            }
          }
        });
      }

      /* ── 8. Submission & Result ── */
      function confirmSubmit() {
        const unanswered = userAnswers.filter(a => a === null).length;
        let msg = "Apakah kamu yakin ingin menyelesaikan dan mengumpulkan Uji Kompetensi ini?";
        if (unanswered > 0) {
          msg = `Perhatian! Masih ada ${unanswered} nomor yang belum kamu jawab. Tetap ingin mengumpulkan sekarang?`;
        }
        if (confirm(msg)) {
          finishExam();
        }
      }

      async function finishExam() {
        clearInterval(timerInterval);

        // Calculate score
        let correctCount = 0;
        BANK_SOAL.forEach((item, idx) => {
          if (userAnswers[idx] === item.answer) correctCount++;
        });

        const finalScore = Math.round((correctCount / BANK_SOAL.length) * 100);

        document.getElementById("cbtSection").classList.add("hidden");
        document.getElementById("resultSection").classList.remove("hidden");
        document.getElementById("finalScoreDisplay").textContent = finalScore;
        document.getElementById("finalDetailDisplay").textContent = `Benar ${correctCount} dari ${BANK_SOAL.length} Soal (Skor: ${finalScore} / 100)`;

        // Send to Google Sheets
        try {
          const formData = new URLSearchParams();
          formData.append("jenis", "UJI-KOMPETENSI-INFORMATIKA");
          formData.append("nama", userData.nama);
          formData.append("absen", userData.absen);
          formData.append("kelas", userData.kelas);
          formData.append("skor", finalScore);
          formData.append("benar", correctCount);
          formData.append("total_soal", BANK_SOAL.length);
          formData.append("pelanggaran_tab", tabViolations);

          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
          });
          console.log("✅ Nilai Uji Kompetensi berhasil disinkronisasi ke Google Sheets!");
        } catch (err) {
          console.warn("Gagal mengirim ke spreadsheet:", err);
        }
      }
    