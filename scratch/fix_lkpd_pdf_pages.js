const fs = require('fs');
const path = 'Materi_MM/lkpd.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Wrap Page 1: from KOP to end of Aktivitas 1
const kopComment = '<!-- ========================================================\n           KOP & HEADER RESMI LKPD\n           ======================================================== -->';
const page1FooterEnd = '<!-- Footer Halaman 1 -->\n        <div class="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-mono">\n          <span>LKPD Informatika Kelas X — Menguasai Mail Merge (SMA Negeri 4 Yogyakarta)</span>\n          <span class="font-bold">Halaman 1 dari 5</span>\n        </div>\n\n      </div>';

content = content.replace(kopComment, '<!-- ========================================================\n           HALAMAN 1: KOP, IDENTITAS & AKTIVITAS 1\n           ======================================================== -->\n      <div id="lkpdPage1" class="lkpd-pdf-page space-y-6">\n        ' + kopComment);
content = content.replace(page1FooterEnd, page1FooterEnd + '\n      </div>');

// 2. Wrap Page 2: Aktivitas 2
const p2Start = '<!-- ========================================================\n           AKTIVITAS 2: AUDIT & PERBAIKAN TABEL EXCEL (KONSEP BAB II)\n           ======================================================== -->';
const p2FooterEnd = '<!-- Footer Halaman 2 -->\n        <div class="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-mono">\n          <span>LKPD Informatika Kelas X — Menguasai Mail Merge (SMA Negeri 4 Yogyakarta)</span>\n          <span class="font-bold">Halaman 2 dari 5</span>\n        </div>\n\n      </div>';

content = content.replace(p2Start, '<!-- ========================================================\n           HALAMAN 2: AKTIVITAS 2 (AUDIT & PERBAIKAN TABEL EXCEL)\n           ======================================================== -->\n      <div id="lkpdPage2" class="lkpd-pdf-page">\n        ' + p2Start);
content = content.replace(p2FooterEnd, p2FooterEnd + '\n      </div>');

// 3. Wrap Page 3: Aktivitas 3
const p3Start = '<!-- ========================================================\n           AKTIVITAS 3: LOGIKA ATURAN RULES & FORMAT SWITCH CODE (KONSEP BAB III)\n           ======================================================== -->';
const p3FooterEnd = '<!-- Footer Halaman 3 -->\n        <div class="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-mono">\n          <span>LKPD Informatika Kelas X — Menguasai Mail Merge (SMA Negeri 4 Yogyakarta)</span>\n          <span class="font-bold">Halaman 3 dari 5</span>\n        </div>\n\n      </div>';

content = content.replace(p3Start, '<!-- ========================================================\n           HALAMAN 3: AKTIVITAS 3 (RULES & SWITCH CODES)\n           ======================================================== -->\n      <div id="lkpdPage3" class="lkpd-pdf-page">\n        ' + p3Start);
content = content.replace(p3FooterEnd, p3FooterEnd + '\n      </div>');

// 4. Wrap Page 4: Aktivitas 4
const p4Start = '<!-- ========================================================\n           AKTIVITAS 4: KLINIK DIAGNOSIS TROUBLESHOOTING (BAB II & III)\n           ======================================================== -->';
const p4FooterEnd = '<!-- Footer Halaman 4 -->\n        <div class="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-mono">\n          <span>LKPD Informatika Kelas X — Menguasai Mail Merge (SMA Negeri 4 Yogyakarta)</span>\n          <span class="font-bold">Halaman 4 dari 5</span>\n        </div>\n\n      </div>';

content = content.replace(p4Start, '<!-- ========================================================\n           HALAMAN 4: AKTIVITAS 4 (TROUBLESHOOTING)\n           ======================================================== -->\n      <div id="lkpdPage4" class="lkpd-pdf-page">\n        ' + p4Start);
content = content.replace(p4FooterEnd, p4FooterEnd + '\n      </div>');

// 5. Wrap Page 5: Refleksi & Penilaian
const p5Start = '<!-- ========================================================\n           REFLEKSI MANDIRI PESERTA DIDIK & LEMBAR PENILAIAN\n           ======================================================== -->';
const p5FooterEnd = '<!-- Footer Halaman 5 -->\n        <div class="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-mono">\n          <span>LKPD Informatika Kelas X — Menguasai Mail Merge (SMA Negeri 4 Yogyakarta)</span>\n          <span class="font-bold">Halaman 5 dari 5 (Selesai)</span>\n        </div>\n\n      </div>';

content = content.replace(p5Start, '<!-- ========================================================\n           HALAMAN 5: REFLEKSI MANDIRI & LEMBAR PENILAIAN\n           ======================================================== -->\n      <div id="lkpdPage5" class="lkpd-pdf-page">\n        ' + p5Start);
content = content.replace(p5FooterEnd, p5FooterEnd + '\n      </div>');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully wrapped all 5 pages!');

