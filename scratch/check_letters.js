const fs = require('fs');
const html = fs.readFileSync('Materi_SO/post.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('letters') || l.includes('optIdx') || l.includes('oi')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});

