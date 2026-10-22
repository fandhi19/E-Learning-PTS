const fs = require('fs');
const html = fs.readFileSync('Materi_VN/lkpd.html', 'utf8');

const scriptTag = html.substring(html.lastIndexOf('<script>'), html.lastIndexOf('</script>') + 9);
console.log('Script length:', scriptTag.length);

const lines = scriptTag.split('\n');
console.log('Script first 50 lines:');
console.log(lines.slice(0, 50).join('\n'));
console.log('Script last 60 lines:');
console.log(lines.slice(-60).join('\n'));

