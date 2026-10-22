const fs = require('fs');

let html = fs.readFileSync('Materi_SO/post.html', 'utf8');

// 1. Update Review Header title & description
html = html.replace('Pembahasan Lengkap &amp; Kunci Jawaban', 'Kunci Jawaban &amp; Rekap Pengerjaan');
html = html.replace('Klik untuk melihat detail setiap nomor beserta penjelasannya.', 'Klik untuk melihat rekap jawaban yang benar pada setiap nomor soal.');

// 2. Update letters array to include 'E'
html = html.replace('const letters = ["A", "B", "C", "D"];', 'const letters = ["A", "B", "C", "D", "E"];');
html = html.replace('const letters = ["A", "B", "C", "D"];', 'const letters = ["A", "B", "C", "D", "E"];');

// 3. Remove explanation in review rendering
const oldExpCode = `          const exp = document.createElement("div");
          exp.className = "ml-11 p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed shadow-sm";
          exp.innerHTML = \`<strong class="text-cyan-700 dark:text-cyan-400 block mb-1 flex items-center gap-1.5"><i class="fa-solid fa-lightbulb"></i> Pembahasan Konsep:</strong> \${item.explanation}\`;
          card.appendChild(exp);`;

if (html.includes(oldExpCode)) {
  html = html.replace(oldExpCode, `          // Penjelasan jawaban dihilangkan sesuai permintaan`);
} else {
  // Let's do regex replacement
  html = html.replace(/const exp = document\.createElement\("div"\);[\s\S]*?card\.appendChild\(exp\);/, '// Penjelasan jawaban dihilangkan sesuai permintaan');
}

// 4. Also remove explanation from initQuiz
html = html.replace('explanation: item.explanation,', '// no explanation');

// 5. Replace QUESTIONS_BASE
const newQuestionsBase = `      const QUESTIONS_BASE = [
        {
          q: "Arsitektur sistem komputer digambarkan seperti irisan bawang yang berlapis-lapis karena pengguna tidak menyentuh mesin secara langsung. Urutan lapisan pada Model Lapisan Bawang mulai dari inti terdalam (paling dekat dengan mesin) hingga kulit terluar (paling dekat dengan manusia) adalah ....",
          options: [
            "Hardware → Shell → Kernel → Applications & Utilities",
            "Kernel → Hardware → Shell → Applications & Utilities",
            "Hardware → Kernel → Shell → Applications & Utilities",
            "Applications & Utilities → Shell → Kernel → Hardware",
            "Hardware → Applications → Kernel → Shell"
          ],
          answer: 2
        },
        {
          q: "Di dalam Model Lapisan Bawang, Sistem Operasi memiliki dua bagian penting yaitu Kernel (lapisan ke-2) dan Shell (lapisan ke-3). Perbedaan peran yang tepat antara Kernel dan Shell adalah ....",
          options: [
            "Kernel adalah program bantu perawatan file, sedangkan Shell adalah komponen fisik penyimpanan data.",
            "Kernel berhubungan langsung untuk mengatur dan mengontrol kerja Hardware, sedangkan Shell membungkus Kernel sebagai antarmuka tempat pengguna memberi perintah.",
            "Kernel menjadi tempat manusia mengetik perintah teks, sedangkan Shell mengatur pembagian arus listrik pada motherboard.",
            "Kernel berada di lapisan paling luar yang berinteraksi dengan manusia, sedangkan Shell berada di inti terdalam komputer.",
            "Kernel hanya bekerja pada sistem operasi mobile, sedangkan Shell hanya bekerja pada sistem operasi desktop."
          ],
          answer: 1
        },
        {
          q: "Untuk memudahkan pemahaman mengenai Model Lapisan Bawang, cara kerja sistem komputer sering diibaratkan dengan operasional sebuah restoran. Dalam analogi tersebut, peran \\"Kepala Koki yang memasak langsung di kompor\\" dan \\"Pelayan/Buku Menu yang mencatat pesanan pelanggan\\" secara berurutan mewakili lapisan ....",
          options: [
            "Hardware dan Kernel",
            "Shell dan Applications",
            "Kernel dan Shell",
            "Applications dan Utilities",
            "Kernel dan Hardware"
          ],
          answer: 2
        },
        {
          q: "Perhatikan konsep abstraksi Model Lapisan Bawang! Ketika seorang siswa mengklik tombol Save di aplikasi Microsoft Word untuk menyimpan tugasnya ke dalam Disks (SSD/HDD), bagaimanakah alur perjalanan perintah tersebut melewati lapisan bawang?",
          options: [
            "Applications → langsung menuju Hardware (Disks) tanpa melewati Sistem Operasi.",
            "Applications → Shell → Kernel → Hardware (Disks).",
            "Hardware (Disks) → Shell → Kernel → Applications.",
            "Applications → Kernel → Hardware (Disks) → Shell.",
            "Shell → Applications → Hardware (Disks) → Kernel."
          ],
          answer: 1
        },
        {
          q: "Dalam analogi tubuh manusia, perangkat keras (hardware) seperti monitor, CPU, dan keyboard diibaratkan sebagai raga fisik (mata, otak, tangan), sedangkan Sistem Operasi diibaratkan sebagai nyawa dan sistem saraf pusatnya. Berdasarkan analogi tersebut, mengapa aplikasi seperti game atau Canva tidak bisa langsung dijalankan di komputer yang belum memiliki Sistem Operasi?",
          options: [
            "Karena ukuran penyimpanan SSD/HDD akan langsung penuh jika tidak ada Sistem Operasi.",
            "Karena aplikasi membutuhkan Sistem Operasi sebagai perangkat lunak sistem yang mengelola hardware, mengatur sumber daya, dan menjembatani instruksi aplikasi ke mesin.",
            "Karena tanpa Sistem Operasi, arus listrik dari tombol daya tidak dapat masuk ke komponen motherboard.",
            "Karena aplikasi seperti Canva dan game merupakan perangkat keras yang harus dirakit terlebih dahulu oleh Sistem Operasi.",
            "Karena monitor hanya bisa menyala apabila terhubung ke jaringan internet milik Sistem Operasi."
          ],
          answer: 1
        },
        {
          q: "Saat kamu membuka aplikasi Spotify dan WhatsApp secara bersamaan, Sistem Operasi berperan layaknya \\"Resepsionis Hotel\\" yang mencatat Spotify di kamar 001 dan WhatsApp di kamar 002, lalu mengosongkan kamar tersebut saat aplikasi ditutup. Ilustrasi ini menjelaskan fungsi Sistem Operasi dalam hal ....",
          options: [
            "Pengelolaan Memori (Memory Management): melacak kapasitas RAM, menentukan jatah memori tiap aplikasi, serta mencegah data antar-aplikasi saling menimpa di RAM.",
            "Pengelolaan Keamanan (Security): mengunci aplikasi dengan kata sandi agar tidak dibajak oleh malware.",
            "Proses Booting: melakukan pengecekan mandiri (POST) terhadap kerusakan kepingan RAM saat komputer dinyalakan.",
            "Pipelining: mengeksekusi tahapan instruksi di dalam komponen internal CPU secara estafet.",
            "Pengelolaan File: mengurutkan dan menghapus dokumen di dalam penyimpanan permanen (SSD/HDD)."
          ],
          answer: 0
        },
        {
          q: "Bagian Sistem Operasi bernama Scheduler mengatur multitasking dengan membagi waktu kerja CPU secara bergiliran menggunakan algoritma Round Robin. Diketahui antrean proses di RAM adalah sebagai berikut dengan jatah waktu (Time Quantum / Time Slice) = 3 milidetik (ms):<br><br><span class=\\"font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block\\">• Aplikasi A membutuhkan waktu proses 6 ms</span><br><span class=\\"font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block\\">• Aplikasi B membutuhkan waktu proses 3 ms</span><br><span class=\\"font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block\\">• Aplikasi C membutuhkan waktu proses 9 ms</span><br><br>Jika CPU memproses berurutan mulai dari A → B → C, manakah pernyataan yang tepat mengenai urutan selesainya aplikasi tersebut?",
          options: [
            "Aplikasi A selesai paling pertama (pada ms ke-3), sedangkan Aplikasi C selesai paling terakhir (pada ms ke-18).",
            "Aplikasi B selesai paling pertama (pada ms ke-6), diikuti Aplikasi A (pada ms ke-12), dan Aplikasi C selesai paling terakhir (pada ms ke-18).",
            "Aplikasi A, B, dan C selesai pada detik yang persis sama karena dijalankan secara multitasking.",
            "Aplikasi C selesai paling pertama karena memiliki beban waktu paling besar, sedangkan Aplikasi B selesai paling terakhir.",
            "Aplikasi B selesai pada ms ke-3, Aplikasi A selesai pada ms ke-9, dan Aplikasi C selesai pada ms ke-18."
          ],
          answer: 1
        },
        {
          q: "Perangkat keras dari berbagai merek—seperti printer Canon, mouse Logitech, dan kartu grafis NVIDIA—berbicara menggunakan bahasa mesin yang rumit. Agar saat pengguna menekan huruf \\"A\\" di keyboard (Input), diolah oleh CPU dan RAM (Proses), hingga tampil huruf \\"A\\" di layar monitor (Output), Sistem Operasi menjalankan fungsi ....",
          options: [
            "Membagi waktu kerja CPU menggunakan teknik Time Sharing.",
            "Menyediakan Command Line Interface (CLI) agar pengguna wajib mengetik kode biner ke layar.",
            "Mengelola antarmuka Kernel Hardware bersama Device Driver sebagai penerjemah antara aplikasi dan perangkat keras.",
            "Memindahkan data dari RAM ke Harddisk secara terus-menerus (Thrashing).",
            "Mengalihkan kontrol dari sistem operasi kembali ke program BIOS di motherboard."
          ],
          answer: 2
        },
        {
          q: "Sistem Operasi memiliki fungsi menyediakan antarmuka pengguna (User Interface / UI) serta program bantu (Utilities) untuk merawat sistem komputer. Pasangan yang tepat antara jenis fitur Sistem Operasi dan contoh aktivitasnya di bawah ini adalah ....",
          options: [
            "GUI (Graphical User Interface): Mengetikkan baris perintah teks langsung di Command Prompt (CMD) atau Terminal Linux.",
            "CLI (Command Line Interface): Mengklik ikon aplikasi di layar beranda Android dengan sentuhan jari.",
            "Utilitas Pengelolaan File: Memantau persentase pemakaian RAM dan CPU melalui Task Manager.",
            "Utilitas Pemantauan & Keamanan: Mengatur perlindungan Firewall, kata sandi akun, serta memantau kinerja CPU/RAM lewat Task Manager.",
            "Device Driver: Menyalin (copy), mengurutkan (sort), dan menghapus (delete) folder lewat File Explorer."
          ],
          answer: 3
        },
        {
          q: "Raka membuka aplikasi edit video, game berat, dan 25 tab browser secara bersamaan di laptop yang hanya memiliki kapasitas RAM 4 GB. Tiba-tiba perpindahan antar-layar menjadi sangat lambat (lag parah) karena Sistem Operasi kelelahan memindahkan data bolak-balik antara RAM yang penuh dan penyimpanan SSD/HDD. Berdasarkan cara kerja dan fungsi pengelolaan Sistem Operasi, kondisi ini disebut .... dan pertolongan pertama yang paling tepat adalah ....",
          options: [
            "Deadlock; menginstal ulang Device Driver kartu grafis laptop.",
            "Thrashing; menutup sebagian aplikasi berat atau menghentikan proses yang membebani memori melalui utilitas Task Manager (Ctrl + Shift + Esc → End Task) agar ruang RAM kembali lega.",
            "Bootloop; menekan tombol Power secara paksa dan mengganti baterai CMOS pada motherboard.",
            "Hang / Freeze; membuka lebih banyak tab browser agar algoritma Round Robin berputar lebih cepat.",
            "Blue Screen of Death (BSOD); menghapus seluruh file di dalam File Explorer."
          ],
          answer: 1
        }
      ];`;

const startIdx = html.indexOf('const QUESTIONS_BASE = [');
const endIdx = html.indexOf('];', startIdx) + 2;

html = html.substring(0, startIdx) + newQuestionsBase + html.substring(endIdx);

fs.writeFileSync('Materi_SO/post.html', html, 'utf8');
console.log('Successfully updated Materi_SO/post.html with new questions!');

