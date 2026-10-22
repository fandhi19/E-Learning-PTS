const fs = require('fs');
let html = fs.readFileSync('Materi_SO/lkpd.html', 'utf8');

// Replace body class
html = html.replace('<body class="text-slate-100', '<body class="text-slate-800 dark:text-slate-100');

// Replace inner card backgrounds
html = html.replace(/bg-black\/25 border border-white\/5/g, 'bg-slate-50 dark:bg-black/25 border border-slate-200 dark:border-white/5');
html = html.replace(/bg-black\/30 border border-emerald-500\/20/g, 'bg-emerald-50/50 dark:bg-black/30 border border-emerald-200 dark:border-emerald-500/20');
html = html.replace(/bg-black\/30 border border-cyan-500\/20/g, 'bg-cyan-50/50 dark:bg-black/30 border border-cyan-200 dark:border-cyan-500/20');
html = html.replace(/bg-black\/30 border border-amber-500\/30/g, 'bg-amber-50/50 dark:bg-black/30 border border-amber-200 dark:border-amber-500/30');

// Labels and headers
html = html.replace(/text-white text-sm/g, 'text-slate-900 dark:text-white text-sm');
html = html.replace(/text-white text-xs/g, 'text-slate-900 dark:text-white text-xs');
html = html.replace(/text-slate-300/g, 'text-slate-600 dark:text-slate-300');
html = html.replace(/text-slate-400/g, 'text-slate-500 dark:text-slate-400');
html = html.replace(/text-slate-200/g, 'text-slate-700 dark:text-slate-200');

// Inner input backgrounds
html = html.replace(/bg-slate-900\/60 border border-slate-700\/80/g, 'bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80');

// Progress & header cards
html = html.replace(/bg-slate-900\/90 border border-slate-800/g, 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800');
html = html.replace(/bg-slate-800\/80/g, 'bg-slate-100 dark:bg-slate-800/80');
html = html.replace(/bg-slate-950\/80/g, 'bg-white/80 dark:bg-slate-950/80');
html = html.replace(/border-slate-800/g, 'border-slate-200 dark:border-slate-800');

fs.writeFileSync('Materi_SO/lkpd.html', html, 'utf8');
console.log('Polished light/dark themes in Materi_SO/lkpd.html! New length:', html.length);

