const fs = require('fs');
const text = fs.readFileSync('scratch/extracted_materi_so_pdf.txt', 'utf8');
const pages = text.split(/=== PAGE \d+ ===/);

[9, 10, 12, 13, 14].forEach(i => {
  console.log(`\n=================== PAGE ${i} ===================`);
  console.log(pages[i].trim());
});

