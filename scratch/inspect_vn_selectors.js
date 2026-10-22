const fs = require('fs');
const html = fs.readFileSync('Materi_VN/lkpd.html', 'utf8');

const style = html.substring(html.indexOf('<style>'), html.indexOf('</style>') + 8);
console.log('Style length:', style.length);

// Extract selectors
const selectors = style.match(/(\.[a-zA-Z0-9_\-]+|#[a-zA-Z0-9_\-]+)\s*\{/g);
console.log('Unique selectors count:', new Set(selectors).size);
console.log('Some selectors:', Array.from(new Set(selectors)).slice(0, 40).join(', '));

