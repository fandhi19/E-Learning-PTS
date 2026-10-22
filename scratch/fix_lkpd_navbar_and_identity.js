const fs = require('fs');

let html = fs.readFileSync('Materi_SO/lkpd.html', 'utf8');

// 1. Fix header & navbar
const oldHeaderRegex = /<header class="sticky top-0 z-50[\s\S]*?<\/header>/;
const newHeader = `<header class="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="../index.html" class="flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
              <img src="../images/Logo Patbhe.png" alt="Logo SMAN 4 Yogyakarta" class="w-7 h-7 object-contain" />
            </div>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-black text-xl text-slate-900 dark:text-white tracking-tight">Ruang<span class="text-emerald-500">Informatika</span></span>
            </div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 block">SMAN 4 YOGYAKARTA</span>
          </div>
        </a>

        <div class="flex items-center gap-3">
          <a
            href="materi.html#lembarkerja"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span>Kembali ke Modul</span>
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
    </header>`;

html = html.replace(oldHeaderRegex, newHeader);

// 2. Fix duplicated classes in hero and progress
html = html.replace(/text-slate-500 dark:text-slate-500 dark:text-slate-400/g, 'text-slate-500 dark:text-slate-400');
html = html.replace(/text-slate-600 dark:text-slate-600 dark:text-slate-300/g, 'text-slate-600 dark:text-slate-300');
html = html.replace(/border-slate-200 dark:border-slate-200 dark:border-slate-800/g, 'border-slate-200 dark:border-slate-800');

// 3. Replace IDENTITAS PESERTA DIDIK Section with 2-Member Clean Grid & No Skor
const oldIdentitasRegex = /<!-- =+[\s\r\n]*IDENTITAS PESERTA DIDIK[\s\S]*?<\/div>[\s\r\n]*<\/div>[\s\r\n]*(?=<!-- =+[\s\r\n]*MISI 1)/;

const newIdentitas = `<!-- ============================================================
           IDENTITAS PESERTA DIDIK (Halaman 1)
           ============================================================ -->
      <div class="exam-section sec-cyan">
        <div class="exam-head">
          <div class="exam-num"><i class="fa-solid fa-users text-base"></i></div>
          <div>
            <div class="exam-title">Identitas Peserta Didik</div>
            <div class="exam-sub">Halaman 1 · Isi data kelompok (2 Peserta Didik) sebelum mengerjakan misi</div>
          </div>
          <div class="exam-points">2 ANGGOTA</div>
        </div>

        <div class="space-y-4">
          <!-- Grid 2 Kartu Anggota Kelompok -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Anggota 1 -->
            <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 space-y-3.5 shadow-sm">
              <div class="flex items-center justify-between border-b border-emerald-200/70 dark:border-emerald-500/20 pb-2.5">
                <div class="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <i class="fa-solid fa-user-check"></i>
                  <span>Peserta Didik 1 (Ketua)</span>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold">Wajib</span>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-signature text-emerald-500"></i> Nama Lengkap <span class="text-rose-500">*</span>
                  </label>
                  <input type="text" id="inNama1" required placeholder="Nama lengkap sesuai presensi" class="cbt-input" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-hashtag text-emerald-500"></i> Nomor Presensi (Absen) <span class="text-rose-500">*</span>
                  </label>
                  <input type="text" id="inAbsen1" required placeholder="Contoh: 18" class="cbt-input font-mono" />
                </div>
              </div>
            </div>

            <!-- Anggota 2 -->
            <div class="p-4 sm:p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/30 space-y-3.5 shadow-sm">
              <div class="flex items-center justify-between border-b border-cyan-200/70 dark:border-cyan-500/20 pb-2.5">
                <div class="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <i class="fa-solid fa-user-group"></i>
                  <span>Peserta Didik 2 (Rekan)</span>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 font-bold">Anggota 2</span>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-signature text-cyan-500"></i> Nama Lengkap
                  </label>
                  <input type="text" id="inNama2" placeholder="Nama rekan sekelompok" class="cbt-input" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-hashtag text-cyan-500"></i> Nomor Presensi (Absen)
                  </label>
                  <input type="text" id="inAbsen2" placeholder="Contoh: 19" class="cbt-input font-mono" />
                </div>
              </div>
            </div>
          </div>

          <!-- Baris Kelas & Kelompok -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-chalkboard-user text-teal-500"></i> Kelas / Rombel
              </label>
              <input type="text" id="inKelas" value="X-E6" class="cbt-input font-mono" />
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-people-group text-teal-500"></i> Nama / Nomor Kelompok
              </label>
              <input type="text" id="inKelompok" placeholder="Contoh: Kelompok 4 (atau Tim Garuda)" class="cbt-input" />
            </div>
          </div>
        </div>
      </div>

      `;

html = html.replace(oldIdentitasRegex, newIdentitas);

// 4. Update JavaScript fieldIds and handlers
const oldFieldIds = `      const fieldIds = [
        "inNama", "inAbsen", "inKelas", "inSkor",`;

const newFieldIds = `      const fieldIds = [
        "inNama1", "inAbsen1", "inNama2", "inAbsen2", "inKelas", "inKelompok",`;

html = html.replace(oldFieldIds, newFieldIds);

// 5. Update handleResetForm
const oldReset = `        fieldIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = (id === "inKelas" ? "X-E6 • Kelompok " : "");
        });`;

const newReset = `        fieldIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = (id === "inKelas" ? "X-E6" : "");
        });`;

html = html.replace(oldReset, newReset);

// 6. Update handleKirimJawaban
const oldSubmitLogic = `        const nama = document.getElementById("inNama").value.trim();
        const absen = document.getElementById("inAbsen").value.trim();
        const alertBox = document.getElementById("lkpdSubmitAlert");
        const btn = document.getElementById("btnSubmitLkpd");

        if (!nama || !absen) {
          alertBox.className = "p-4 rounded-2xl border border-rose-500/40 bg-rose-950/40 text-rose-300 font-bold block";
          alertBox.innerHTML = '<i class="fa-solid fa-circle-exclamation mr-1.5"></i> Nama lengkap dan nomor presensi wajib diisi sebelum mengumpulkan!';
          alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        }`;

const newSubmitLogic = `        const nama1 = document.getElementById("inNama1") ? document.getElementById("inNama1").value.trim() : "";
        const absen1 = document.getElementById("inAbsen1") ? document.getElementById("inAbsen1").value.trim() : "";
        const nama2 = document.getElementById("inNama2") ? document.getElementById("inNama2").value.trim() : "";
        const absen2 = document.getElementById("inAbsen2") ? document.getElementById("inAbsen2").value.trim() : "";
        const kelas = document.getElementById("inKelas") ? document.getElementById("inKelas").value.trim() : "X-E6";
        const kelompok = document.getElementById("inKelompok") ? document.getElementById("inKelompok").value.trim() : "";
        const alertBox = document.getElementById("lkpdSubmitAlert");
        const btn = document.getElementById("btnSubmitLkpd");

        if (!nama1 || !absen1) {
          alertBox.className = "p-4 rounded-2xl border border-rose-500/40 bg-rose-950/40 text-rose-300 font-bold block";
          alertBox.innerHTML = '<i class="fa-solid fa-circle-exclamation mr-1.5"></i> Nama lengkap dan nomor presensi Peserta Didik 1 wajib diisi sebelum mengumpulkan!';
          alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        }

        const namaGabung = [nama1, nama2].filter(Boolean).join(" & ");
        const absenGabung = [absen1, absen2].filter(Boolean).join(", ");
        const rombel = [kelas, kelompok].filter(Boolean).join(" • ");`;

html = html.replace(oldSubmitLogic, newSubmitLogic);

// 7. Update formData in handleKirimJawaban
html = html.replace(`formData.append("nama", nama);`, `formData.append("nama", namaGabung);`);
html = html.replace(`formData.append("absen", absen);`, `formData.append("absen", absenGabung);`);
html = html.replace(`formData.append("kelas", document.getElementById("inKelas").value.trim());`, `formData.append("kelas", rombel);`);
html = html.replace(`formData.append("skor_game", document.getElementById("inSkor").value.trim());`, `// skor dihapus`);

html = html.replace(/Terima kasih <strong>\$\{nama\}<\/strong> \(Presensi \$\{absen\}\)\./, 'Terima kasih <strong>${namaGabung}</strong> (Presensi ${absenGabung}).');
html = html.replace(/Jawaban LKPD berhasil disimpan secara lokal atas nama <strong>\$\{nama\}<\/strong>!/, 'Jawaban LKPD berhasil disimpan secara lokal atas nama <strong>${namaGabung}</strong>!');

fs.writeFileSync('Materi_SO/lkpd.html', html, 'utf8');
console.log('Successfully updated Materi_SO/lkpd.html! New length:', html.length);

