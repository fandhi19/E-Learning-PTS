const fs = require('fs');
const path = 'Materi_MM/lkpd.html';
let content = fs.readFileSync(path, 'utf8');

const targetStart = '      // Konfigurasi Standar Tata Letak Dokumen PDF Resmi A4 (5 Halaman Rapi)';
const targetEnd = '      window.addEventListener(\'DOMContentLoaded\', () => {';

const newCode = `      // Generator PDF 5 Halaman Presisi (jsPDF + html2canvas) — Mencegah Pemotongan Tabel
      async function buildCleanPdf() {
        if (!window.jspdf || !window.jspdf.jsPDF) {
          throw new Error('Pustaka jsPDF belum termuat. Periksa koneksi internet Anda.');
        }
        if (!window.html2canvas) {
          throw new Error('Pustaka html2canvas belum termuat. Periksa koneksi internet Anda.');
        }

        const nama = document.getElementById('studentName').value.trim() || 'Siswa';
        const absen = document.getElementById('studentAbsen').value.trim() || '00';
        const kelas = document.getElementById('studentClass').value || 'X';
        const cleanNama = nama.replace(/[^a-zA-Z0-9_\\s]/g, '').replace(/\\s+/g, '_');
        const filename = \`LKPD_MM_\${kelas}_\${absen}_\${cleanNama}.pdf\`;

        // 1. Sinkronisasi nilai input/textarea ke atribut value dan textContent
        document.querySelectorAll('#lkpdContent input').forEach(inp => {
          inp.setAttribute('value', inp.value);
        });
        document.querySelectorAll('#lkpdContent textarea').forEach(ta => {
          ta.textContent = ta.value;
        });

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
          compress: true
        });

        // 5 Halaman Terstruktur Sesuai Spesifikasi LKPD
        const pages = [
          document.getElementById('lkpdPage1'),
          document.getElementById('lkpdPage2'),
          document.getElementById('lkpdPage3'),
          document.getElementById('lkpdPage4'),
          document.getElementById('lkpdPage5')
        ];

        // Dimensi Kertas A4
        const pageWidth = 210;
        const pageHeight = 297;
        const marginX = 12; // 12mm kiri dan kanan (simetris)
        const printWidth = pageWidth - (marginX * 2); // 186 mm
        const maxPrintHeight = pageHeight - 20; // 277 mm

        for (let i = 0; i < pages.length; i++) {
          const pageEl = pages[i];
          if (!pageEl) continue;

          // Update status progress modal
          const progressBar = document.getElementById('uploadProgressBar');
          const statusDesc = document.getElementById('uploadStatusDesc');
          if (progressBar) progressBar.style.width = \`\${15 + (i + 1) * 14}%\`;
          if (statusDesc) statusDesc.innerText = \`Merender halaman \${i + 1} dari 5 ke PDF...\`;

          const canvas = await html2canvas(pageEl, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            onclone: (clonedDoc) => {
              clonedDoc.documentElement.classList.remove('dark');
              clonedDoc.body.classList.remove('dark');
              clonedDoc.body.style.backgroundColor = '#ffffff';

              const clonedTarget = clonedDoc.getElementById(pageEl.id);
              if (clonedTarget) {
                clonedTarget.style.backgroundColor = '#ffffff';
                clonedTarget.style.color = '#0f172a';
                clonedTarget.style.padding = '0';
              }

              // Pastikan card berlatar putih bersih dengan border halus
              clonedDoc.querySelectorAll('.page-card').forEach(card => {
                card.style.backgroundColor = '#ffffff';
                card.style.color = '#0f172a';
                card.style.borderColor = '#cbd5e1';
                card.style.boxShadow = 'none';
                card.style.padding = '18px 22px';
              });

              // Format warna input agar terbaca jelas
              clonedDoc.querySelectorAll('input, textarea').forEach(inp => {
                inp.style.backgroundColor = '#f8fafc';
                inp.style.color = '#0f172a';
                inp.style.borderColor = '#cbd5e1';
              });
            }
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const imgProps = pdf.getImageProperties(imgData);
          const imgHeight = (imgProps.height * printWidth) / imgProps.width;

          if (i > 0) {
            pdf.addPage('a4', 'portrait');
          }

          const renderHeight = Math.min(imgHeight, maxPrintHeight);
          pdf.addImage(imgData, 'JPEG', marginX, 10, printWidth, renderHeight);
        }

        return {
          pdf: pdf,
          filename: filename,
          base64: pdf.output('datauristring').split(',')[1]
        };
      }

      // Fungsi Ekspor PDF Cadangan Mandiri Siswa
      async function downloadSelfPDF() {
        const loadingModal = document.getElementById('uploadLoadingModal');
        const statusTitle = document.getElementById('uploadStatusTitle');
        const statusDesc = document.getElementById('uploadStatusDesc');

        loadingModal.classList.remove('hidden');
        statusTitle.innerText = 'Menyiapkan PDF Mandiri...';
        statusDesc.innerText = 'Sistem sedang menyusun 5 halaman lembar kerja Anda.';

        try {
          const { pdf, filename } = await buildCleanPdf();
          pdf.save(filename);
        } catch (err) {
          console.error('Error download PDF:', err);
          alert('Gagal membuat PDF: ' + err.message);
        } finally {
          loadingModal.classList.add('hidden');
        }
      }

      // Fungsi Utama Pengumpulan LKPD ke Google Drive
      async function submitLKPD() {
        const nama = document.getElementById('studentName').value.trim();
        const absen = document.getElementById('studentAbsen').value.trim();
        const kelas = document.getElementById('studentClass').value;

        if (!nama || !absen) {
          alert('Harap lengkapi Nama Siswa dan Nomor Presensi terlebih dahulu!');
          document.getElementById('studentName').focus();
          return;
        }

        saveDraft(false);

        const loadingModal = document.getElementById('uploadLoadingModal');
        const progressBar = document.getElementById('uploadProgressBar');
        const statusTitle = document.getElementById('uploadStatusTitle');
        const statusDesc = document.getElementById('uploadStatusDesc');
        const btnSubmit = document.getElementById('btnSubmitLKPD');

        loadingModal.classList.remove('hidden');
        progressBar.style.width = '15%';
        statusTitle.innerText = 'Merender Dokumen PDF...';
        statusDesc.innerText = 'Sistem sedang menyusun 5 lembar halaman LKPD Anda.';

        if (btnSubmit) {
          btnSubmit.disabled = true;
          btnSubmit.classList.add('opacity-60', 'cursor-not-allowed');
        }

        try {
          // 1. Buat Dokumen PDF 5 Halaman Utuh (Tanpa Pemotongan)
          const { base64, filename } = await buildCleanPdf();

          progressBar.style.width = '88%';
          statusTitle.innerText = 'Mengunggah ke Google Drive...';
          statusDesc.innerText = 'Mengirimkan dokumen resmi ke Folder Google Drive guru pengampu.';

          // 2. Kirim ke Google Apps Script Web App
          const payload = {
            nama: nama,
            kelas: kelas,
            absen: absen,
            pdfBase64: base64,
            pdf: base64,
            fileName: filename
          };

          const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
            redirect: 'follow'
          });

          progressBar.style.width = '100%';

          let result;
          try {
            result = await response.json();
          } catch (e) {
            result = { status: 'success' };
          }

          loadingModal.classList.add('hidden');

          if (result && result.status === 'error') {
            throw new Error(result.message || 'Terjadi kesalahan pada Google Apps Script');
          }

          // Kunci form dan tampilkan modal sukses
          if (btnSubmit) {
            btnSubmit.innerHTML = '<i class="fa-solid fa-check mr-2"></i> LKPD Terkirim ke Drive';
          }

          document.getElementById('modalStudentDesc').innerText =
            \`Pengerjaan atas nama \${nama} (\${kelas} - Presensi \${absen}) berhasil tersimpan resmi di Google Drive guru dalam 5 halaman PDF utuh.\`;
          document.getElementById('successModal').classList.remove('hidden');

        } catch (err) {
          console.error('Error upload PDF ke Drive:', err);
          loadingModal.classList.add('hidden');
          alert(\`Pemberitahuan: Kendala saat mengirim ke Google Drive (\${err.message}).\\n\\nJangan khawatir, draf pengerjaan Anda aman tersimpan. Silakan coba klik tombol kumpulkan kembali atau gunakan tombol "Cetak / PDF" untuk menyimpan manual.\`);
          if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('opacity-60', 'cursor-not-allowed');
          }
        }
      }

      window.addEventListener('DOMContentLoaded', () => {`;

const idxStart = content.indexOf(targetStart);
const idxEnd = content.indexOf(targetEnd);

if (idxStart === -1 || idxEnd === -1) {
  console.error('Target not found!', idxStart, idxEnd);
  process.exit(1);
}

content = content.slice(0, idxStart) + newCode + content.slice(idxEnd + targetEnd.length);
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated PDF engine with multi-page jsPDF builder!');

