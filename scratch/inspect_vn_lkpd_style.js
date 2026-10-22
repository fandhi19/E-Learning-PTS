const fs = require('fs');
const html = fs.readFileSync('Materi_VN/lkpd.html', 'utf8');

console.log('--- Head Style sample ---');
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  console.log(styleMatch[1].substring(0, 1500));
}

console.log('--- Body Top structure ---');
const bodyIdx = html.indexOf('<body');
console.log(html.substring(bodyIdx, bodyIdx + 1200));

