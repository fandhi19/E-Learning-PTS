const fs = require('fs');
const html = fs.readFileSync('Materi_SO/materi.html', 'utf8');

console.log('materi.html length:', html.length);

// Verify tabs exist
['id="materi"', 'id="simulasi"', 'id="video"', 'id="lembarkerja"'].forEach(tab => {
  console.log(`Contains tab ${tab}?:`, html.includes(tab));
});

// Verify chapters from Materi_SO.pdf
const topics = [
  'Komponen Dasar &amp; Pengertian Sistem Operasi',
  'Hardware (Perangkat Keras) dan Contohnya',
  'Software (Perangkat Lunak) dan Contohnya',
  'Bagaimana Sistem Operasi Dibangunkan? (5 Langkah Proses Booting)',
  'Model Lapisan Bawang (Onion Layer Model)',
  'Analogi Restoran',
  'Jenis-Jenis Sistem Operasi (4 Kategori Utama)',
  'Embedded OS',
  'Lima (5) Peran dan Fungsi Utama Sistem Operasi',
  'Analogi Resepsionis Hotel',
  'Pengelolaan Proses (Multitasking &amp; Penjadwalan Round Robin)',
  'Masalah-Masalah dalam Sistem Operasi &amp; Solusinya',
  'Thrashing (Kehabisan RAM)',
  'Deadlock (Saling Mengunci)',
  'Ctrl + Shift + Esc',
  'Kamus Istilah Penting Sistem Operasi'
];

topics.forEach(t => {
  console.log(`Contains "${t}"?:`, html.includes(t));
});

// Check scripts syntax
const scripts = html.match(/<script[\s\S]*?<\/script>/gi);
console.log('Scripts count:', scripts.length);
scripts.forEach((s, idx) => {
  const code = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  if (code.includes('tailwind.config') || code.includes('localStorage.getItem("theme")')) {
    console.log(`Script ${idx} inline config`);
    return;
  }
  try {
    new Function(code);
    console.log(`Script ${idx} passed JS syntax validation! (length: ${code.length})`);
  } catch (err) {
    console.error(`Script ${idx} syntax error:`, err.message);
  }
});

