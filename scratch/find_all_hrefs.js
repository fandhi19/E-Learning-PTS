const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find all hrefs
const hrefs = html.match(/href="([^"]+)"/g);
console.log('All hrefs in index.html:');
console.log(Array.from(new Set(hrefs)));

