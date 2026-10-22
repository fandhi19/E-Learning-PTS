const fs = require('fs');
const text = fs.readFileSync('scratch/extracted_materi_so_pdf.txt', 'utf8');
const pages = text.split(/=== PAGE \d+ ===/);

pages.forEach((p, idx) => {
  if (idx === 0) return;
  const lines = p.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  console.log(`Page ${idx}:`);
  console.log(lines.slice(0, 4).join('\n'));
  console.log('---');
});

