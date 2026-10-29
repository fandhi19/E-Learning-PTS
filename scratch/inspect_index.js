const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('id="materi"') || l.includes('Modul Pembelajaran') || l.includes('Daftar Modul') || l.includes('grid-cols') || l.includes('Materi_')) {
    console.log(`L${i + 1}: ${l.trim().substring(0, 110)}`);
  }
});

