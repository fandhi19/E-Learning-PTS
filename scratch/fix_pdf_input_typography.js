const fs = require('fs');
const path = 'Materi_MM/lkpd.html';
let content = fs.readFileSync(path, 'utf8');

const targetOld = `              // Pastikan card berlatar putih bersih dengan border halus
              clonedDoc.querySelectorAll('.page-card').forEach(card => {
                card.style.backgroundColor = '#ffffff';
                card.style.color = '#0f172a';
                card.style.borderColor = '#cbd5e1';
                card.style.boxShadow = 'none';
                card.style.padding = '18px 22px';
              });

              // Format warna input agar terbaca jelas
              clonedDoc.querySelectorAll('input, textarea').forEach(inp => {
                inp.style.backgroundColor = '#f8fafc';
                inp.style.color = '#0f172a';
                inp.style.borderColor = '#cbd5e1';
              });`;

const targetNew = `              // 1. Pastikan card berlatar putih bersih dengan border halus
              clonedDoc.querySelectorAll('.page-card').forEach(card => {
                card.style.backgroundColor = '#ffffff';
                card.style.color = '#0f172a';
                card.style.borderColor = '#cbd5e1';
                card.style.boxShadow = 'none';
                card.style.padding = '18px 22px';
              });

              // 2. Ganti semua input & textarea dengan DIV agar teks TIDAK TERPOTONG vertikal
              // dan menggunakan font seragam Plus Jakarta Sans
              clonedTarget.querySelectorAll('input, textarea').forEach(inp => {
                const val = inp.value.trim();
                const placeholder = inp.getAttribute('placeholder') || '-';
                const displayVal = val || placeholder;
                const isAnswered = !!val;

                const div = clonedDoc.createElement('div');
                div.textContent = displayVal;

                // Tipografi Seragam: Plus Jakarta Sans
                div.style.fontFamily = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
                div.style.fontSize = "11px";
                div.style.lineHeight = "1.5";
                div.style.wordBreak = "break-word";
                div.style.whiteSpace = "pre-wrap";

                if (isAnswered) {
                  div.style.color = "#0f172a";
                  div.style.fontWeight = "700";
                  div.style.backgroundColor = "#f1f5f9";
                  div.style.borderColor = "#94a3b8";
                } else {
                  div.style.color = "#94a3b8";
                  div.style.fontWeight = "400";
                  div.style.fontStyle = "italic";
                  div.style.backgroundColor = "#f8fafc";
                  div.style.borderColor = "#cbd5e1";
                }

                div.style.border = "1.5px solid";
                div.style.borderRadius = "8px";
                div.style.padding = inp.tagName === 'TEXTAREA' ? "8px 10px" : "6px 10px";
                div.style.boxSizing = "border-box";
                div.style.width = "100%";

                if (inp.tagName === 'TEXTAREA') {
                  div.style.minHeight = "65px";
                  div.style.display = "block";
                } else {
                  div.style.minHeight = "32px";
                  div.style.display = "flex";
                  div.style.alignItems = "center";
                }

                if (inp.classList.contains('flex-1') || inp.parentElement?.classList.contains('flex')) {
                  div.style.flex = "1";
                }

                inp.parentNode.replaceChild(div, inp);
              });

              // 3. Ganti elemen select dengan DIV yang senada
              clonedTarget.querySelectorAll('select').forEach(sel => {
                const text = sel.options[sel.selectedIndex]?.text || sel.value || '-';
                const div = clonedDoc.createElement('div');
                div.textContent = text;
                div.style.fontFamily = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
                div.style.fontSize = "11px";
                div.style.fontWeight = "700";
                div.style.color = "#0f172a";
                div.style.backgroundColor = "#f1f5f9";
                div.style.border = "1.5px solid #94a3b8";
                div.style.borderRadius = "8px";
                div.style.padding = "6px 10px";
                div.style.minHeight = "32px";
                div.style.boxSizing = "border-box";
                div.style.width = "100%";
                div.style.display = "flex";
                div.style.alignItems = "center";
                sel.parentNode.replaceChild(div, sel);
              });`;

if (!content.includes(targetOld)) {
  console.error('Target old not found!');
  process.exit(1);
}

content = content.replace(targetOld, targetNew);
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully replaced input render logic with uniform typography DIVs!');

