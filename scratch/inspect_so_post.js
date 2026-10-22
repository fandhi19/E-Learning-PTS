const fs = require('fs');
const html = fs.readFileSync('Materi_SO/post.html', 'utf8');
const lines = html.split('\n');
console.log('Total lines in post.html:', lines.length);

lines.forEach((l, i) => {
  if (l.includes('options') || l.includes('SOAL') || l.includes('quiz') || l.includes('DATA') || l.includes('soal')) {
    console.log(`L${i+1}: ${l.trim().substring(0, 100)}`);
  }
});

