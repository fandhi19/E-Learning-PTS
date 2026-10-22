const fs = require('fs');
const html = fs.readFileSync('Materi_SO/post.html', 'utf8');

console.log('Post.html file length:', html.length);

// Extract scripts and check JS syntax
const scripts = html.match(/<script[\s\S]*?<\/script>/gi);
console.log('Found scripts:', scripts.length);

scripts.forEach((s, idx) => {
  const code = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  if (code.includes('tailwind.config') || code.includes('localStorage.getItem("theme")')) {
    console.log(`Script ${idx} is inline config`);
    return;
  }
  try {
    new Function(code);
    console.log(`Script ${idx} passed JS syntax validation! (length: ${code.length})`);
  } catch (err) {
    console.error(`Script ${idx} syntax error:`, err.message);
  }
});

// Check if all 10 questions and keys match
const questionsBaseMatch = html.match(/const QUESTIONS_BASE = (\[[\s\S]*?\]);/);
if (questionsBaseMatch) {
  const qb = eval(questionsBaseMatch[1]);
  console.log('Total questions in QUESTIONS_BASE:', qb.length);
  qb.forEach((item, i) => {
    console.log(`Q${i+1} (${item.options.length} opts, key: ${['A','B','C','D','E'][item.answer]}): ${item.q.substring(0, 45)}...`);
  });
}

