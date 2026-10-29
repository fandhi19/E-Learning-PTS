const fs = require('fs');

// Check uji-kompetensi.html
const ujiHtml = fs.readFileSync('uji-kompetensi.html', 'utf8');
console.log('uji-kompetensi.html length:', ujiHtml.length);

const scripts = ujiHtml.match(/<script[\s\S]*?<\/script>/gi);
console.log('Scripts in uji-kompetensi.html:', scripts.length);

scripts.forEach((s, idx) => {
  const code = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  if (code.includes('tailwind.config') || code.includes('localStorage.getItem("theme")')) {
    console.log(`Script ${idx} inline config`);
    return;
  }
  try {
    new Function(code);
    console.log(`Script ${idx} passed JS syntax validation! (length: ${code.length})`);
  } catch (err) {
    console.error(`Script ${idx} syntax error:`, err.message);
  }
});

// Check index.html Card 10
const indexHtml = fs.readFileSync('index.html', 'utf8');
console.log('Contains "Uji Kompetensi" in index.html?:', indexHtml.includes('Uji Kompetensi'));
console.log('Contains "uji-kompetensi.html" in index.html?:', indexHtml.includes('uji-kompetensi.html'));
console.log('Stats counter updated to 10+?:', indexHtml.includes('10<span class="text-sky-600 dark:text-sky-400">+</span>'));

