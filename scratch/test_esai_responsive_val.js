
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

        if (!confirm(`Apakah kamu yakin ingin mengumpulkan berkas jawaban esai atas nama ${nama} (${kelas} - Presensi ${absen})?`)) {
          return;
        }

        btn.disabled = true;
        btnText.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Mengirimkan berkas ke guru...';
        showAlert("loading", "Sedang mengunggah berkas jawaban esaimu ke sistem penyimpanan guru. Mohon jangan tutup halaman ini...");

        try {
          const safeName = (s) => s.replace(/[^\w\d]+/g, "_").replace(/^_+|_+$/g, "");
          const finalFileName = `ESAI_${safeName(kelas)}_${safeName(absen)}_${safeName(nama)}.pdf`;

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
          fd.append("tugas", "ULANGAN-HARIAN-ESAI-SMAN4-PDF");

          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            body: fd,
            mode: "no-cors"
          });

          await new Promise(r => setTimeout(r, 1500));

          btnText.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Berkas Berhasil Dikumpulkan!';
          showAlert(
            "success",
            `<div class="space-y-1">
                <div class="text-base font-bold flex items-center justify-center gap-2"><i class="fa-solid fa-circle-check text-xl"></i> Berkas Berhasil Terkirim ke Guru!</div>
                <div class="text-xs opacity-90">Terima kasih <strong>${nama}</strong> (${kelas} - Presensi ${absen}). Berkas <strong>${finalFileName}</strong> telah berhasil disimpan untuk penilaian guru (Maks. 50 Poin).</div>
              </div>`
          );

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
    