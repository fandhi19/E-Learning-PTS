
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
          timerEl.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
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
        const words = str.trim() ? str.trim().split(/\s+/).length : 0;
        document.getElementById("wordCount").innerText = `${words} kata • ${chars} karakter`;
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

          btn.className = `h-10 rounded-xl border flex items-center justify-center font-mono text-xs transition-all cursor-pointer ${colorClass} ${ringClass}`;
          btn.innerText = q.badge;
          grid.appendChild(btn);
        });

        document.getElementById("answeredCount").innerText = `${filledCount} / ${essayQuestions.length} Terisi`;
      }

      function updateTopProgress() {
        const percent = ((currentIdx + 1) / essayQuestions.length) * 100;
        document.getElementById("topProgress").style.width = `${percent}%`;
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
          const msg = `Perhatian: Kamu baru mengisi ${filled} dari ${essayQuestions.length} soal esai.\nApakah kamu yakin ingin tetap mengumpulkan sekarang?`;
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

        document.getElementById("resStudentInfo").innerText = `${nama} (Presensi ${absen}) • Kelas ${kelas}`;

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
    