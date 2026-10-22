const fs = require('fs');
const text = fs.readFileSync('scratch/extracted_materi_so_pdf.txt', 'utf8');
const pages = text.split(/=== PAGE \d+ ===/);

for (let i = 5; i <= 16; i++) {
  console.log(`\n=================== FULL TEXT OF PAGE ${i} ===================`);
  console.log(pages[i].trim());
}

