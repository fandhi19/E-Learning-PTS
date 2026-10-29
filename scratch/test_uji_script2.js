
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
        document.getElementById("userDisplay").textContent = `${nama} (Presensi ${absen} • ${kelas})`;

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
          btn.id = `nav-dot-pg-${idx}`;
          btn.className = `nav-dot w-9 h-9 rounded-xl text-xs font-mono font-bold border flex items-center justify-center cursor-pointer transition bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 ${userAnswersPG[idx] !== null ? "answered-pg" : ""}`;
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
          btn.id = `nav-dot-esai-${idx}`;
          const isFilled = (userAnswersEsai[idx] && userAnswersEsai[idx].trim().length > 10);
          btn.className = `nav-dot w-9 h-9 rounded-xl text-xs font-mono font-bold border flex items-center justify-center cursor-pointer transition bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 ${isFilled ? "answered-esai" : ""}`;
          btn.textContent = `E${idx + 1}`;
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

        document.getElementById("answeredCountPG").textContent = `${answeredPG} / ${BANK_SOAL_PG.length}`;
        document.getElementById("badgePgCount").textContent = `${answeredPG}/${BANK_SOAL_PG.length}`;

        document.getElementById("answeredCountEsai").textContent = `${answeredEsai} / ${BANK_SOAL_ESAI.length}`;
        document.getElementById("badgeEsaiCount").textContent = `${answeredEsai}/${BANK_SOAL_ESAI.length}`;

        const totalAnswered = answeredPG + answeredEsai;
        const totalSoal = BANK_SOAL_PG.length + BANK_SOAL_ESAI.length;
        const pct = Math.round((totalAnswered / totalSoal) * 100);
        document.getElementById("cbtProgress").style.width = `${pct}%`;
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
          optDiv.className = `cbt-option p-4 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-medium ${isSelected ? "selected border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-200 font-bold" : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"}`;

          optDiv.onclick = () => {
            userAnswersPG[idx] = optIdx;
            loadQuestionPG(idx);
            renderNavigators();
          };

          optDiv.innerHTML = `
            <span class="w-7 h-7 rounded-lg border font-mono font-bold flex items-center justify-center shrink-0 ${isSelected ? "bg-amber-500 text-white border-amber-500" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"}">${letters[optIdx]}</span>
            <span class="leading-relaxed">${optText}</span>
          `;

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
          document.getElementById("timerText").textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
              alert(`Peringatan (${tabViolations}/3): Jangan berpindah tab atau meninggalkan halaman ujian!`);
            }
          }
        });
      }

      /* ── 12. Submission & Result ── */
      function confirmSubmit() {
        const unansweredPG = userAnswersPG.filter(a => a === null).length;
        const unansweredEsai = userAnswersEsai.filter(a => !a || a.trim().length <= 10).length;

        let warning = [];
        if (unansweredPG > 0) warning.push(`${unansweredPG} soal Pilihan Ganda belum dijawab`);
        if (unansweredEsai > 0) warning.push(`${unansweredEsai} soal Esai masih kosong`);

        let msg = "Apakah kamu yakin ingin menyelesaikan dan mengumpulkan Uji Kompetensi ini?";
        if (warning.length > 0) {
          msg = `Perhatian! Masih ada ${warning.join(" dan ")}. Yakin ingin mengumpulkan sekarang?`;
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
        document.getElementById("finalDetailPGDisplay").textContent = `Benar ${correctCountPG} dari ${BANK_SOAL_PG.length} Soal (Skor: ${finalScorePG} / 100)`;
        document.getElementById("finalStatusEsaiDisplay").textContent = `${answeredEsaiCount} dari ${BANK_SOAL_ESAI.length} Terkumpul`;

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
    