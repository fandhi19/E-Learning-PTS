const fs = require('fs');
const html = fs.readFileSync('Materi_SO/lkpd.html', 'utf8');

// Check script tags
const scripts = html.match(/<script[\s\S]*?<\/script>/gi);
console.log('Scripts found:', scripts.length);
scripts.forEach((s, i) => {
  const code = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  if (code.includes('tailwind.config') || code.includes('localStorage.getItem("theme")')) {
    console.log('Script', i, 'inline config/fouc');
    return;
  }
  try {
    new Function(code);
    console.log('Script', i, 'passed JS syntax validation! (length:', code.length, ')');
  } catch (e) {
    console.error('Script', i, 'syntax error:', e.message);
  }
});

// Check PDF viewer absence
console.log('Contains PDF iframe/toolbar?:', html.includes('iframe') || html.includes('pdfViewerFrame'));

// Check missions 1-5 presence
['Misi 1', 'Misi 2', 'Misi 3', 'Misi 4', 'Misi 5', 'Round Robin', 'Onion Layer Model', 'Power On Self Test', 'Siklus IPO'].forEach(m => {
  console.log('Contains', m, '?:', html.includes(m));
});

