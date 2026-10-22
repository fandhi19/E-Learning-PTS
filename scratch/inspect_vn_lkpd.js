const fs = require('fs');
const html = fs.readFileSync('Materi_VN/lkpd.html', 'utf8');
const lines = html.split('\n');
console.log('Total lines:', lines.length);

// Look for cards, steps, activities, forms
let matches = [];
lines.forEach((l, i) => {
  if (l.includes('Aktivitas') || l.includes('aktivitas') || l.includes('Misi') || l.includes('Bagian') || l.includes('id="step') || l.includes('class="activity')) {
    matches.push(`L${i+1}: ${l.trim().substring(0, 100)}`);
  }
});
console.log(matches.slice(0, 35).join('\n'));

