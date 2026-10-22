const fs = require('fs');
const html = fs.readFileSync('Materi_VN/lkpd.html', 'utf8');

// Let's inspect the css rules for inputs, cards, tables, modals
const style = html.substring(html.indexOf('<style>'), html.indexOf('</style>') + 8);

function findRule(name) {
  const idx = style.indexOf(name);
  if (idx !== -1) {
    console.log('--- ' + name + ' ---');
    console.log(style.substring(idx, idx + 500));
  }
}

findRule('.exam-section');
findRule('.cbt-input');
findRule('.cbt-textarea');
findRule('.aktivitas-table');
findRule('#resultModal');

