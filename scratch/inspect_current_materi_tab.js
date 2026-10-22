const fs = require('fs');
const html = fs.readFileSync('Materi_SO/materi.html', 'utf8');
const lines = html.split('\n');

let materiStart = -1;
let materiEnd = -1;
lines.forEach((l, i) => {
  if (l.includes('id="materi"') && l.includes('<section')) materiStart = i;
  if (materiStart !== -1 && materiEnd === -1 && i > materiStart && l.includes('</section>')) {
    // Make sure it's the section closing tag
    materiEnd = i;
  }
});

console.log('Materi section lines:', materiStart + 1, 'to', materiEnd + 1);
console.log('Total lines in materi section:', materiEnd - materiStart);

// Show headings inside materi section
for (let i = materiStart; i <= materiEnd; i++) {
  if (lines[i].includes('<h1') || lines[i].includes('<h2') || lines[i].includes('<h3') || lines[i].includes('<h4')) {
    console.log(`L${i+1}: ${lines[i].trim()}`);
  }
}

