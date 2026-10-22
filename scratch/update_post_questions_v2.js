const fs = require('fs');

let html = fs.readFileSync('Materi_SO/post.html', 'utf8');

const newQuestionsBase = `      const QUESTIONS_BASE = [
        {
          q: "Urutan Model Lapisan Bawang dari inti terdalam (mesin) hingga lapisan terluar (pengguna) adalah ....",
          options: [
            "Hardware → Shell → Kernel → Applications",
            "Kernel → Hardware → Shell → Applications",
            "Hardware → Kernel → Shell → Applications",
            "Applications → Shell → Kernel → Hardware",
            "Hardware → Applications → Kernel → Shell"
          ],
          answer: 2
        },
        {
          q: "Pada Model Lapisan Bawang, perbedaan fungsi antara Kernel dan Shell adalah ....",
          options: [
            "Kernel merawat file, sedangkan Shell menyimpan data fisik.",
            "Kernel mengontrol langsung Hardware, sedangkan Shell menjadi antarmuka perintah pengguna.",
            "Kernel tempat mengetik teks, sedangkan Shell mengatur listrik motherboard.",
            "Kernel di lapisan terluar, sedangkan Shell di inti terdalam komputer.",
            "Kernel khusus untuk HP, sedangkan Shell khusus untuk komputer."
          ],
          answer: 1
        },
        {
          q: "Saat komputer baru dinyalakan (booting), sistem akan menjalankan tahap POST (Power On Self Test). Apakah fungsi dari tahap POST tersebut?",
          options: [
            "Menampilkan ikon gambar dan menu di layar desktop.",
            "Membagi jatah waktu kerja CPU secara bergiliran untuk aplikasi.",
            "Melakukan uji mandiri untuk mengecek apakah RAM, keyboard, dan penyimpanan berfungsi normal.",
            "Menghapus virus dan malware yang menginfeksi Sistem Operasi.",
            "Menyalin dokumen dari Flashdisk ke dalam memori utama (RAM)."
          ],
          answer: 2
        },
        {
          q: "Saat pengguna menekan tombol Save di Microsoft Word untuk menyimpan file ke SSD/HDD (Disks), alur perintah melewati lapisan bawang adalah ....",
          options: [
            "Applications → Hardware (Disks)",
            "Applications → Shell → Kernel → Hardware (Disks)",
            "Hardware (Disks) → Shell → Kernel → Applications",
            "Applications → Kernel → Hardware (Disks) → Shell",
            "Shell → Applications → Hardware (Disks) → Kernel"
          ],
          answer: 1
        },
        {
          q: "Mengapa aplikasi seperti game atau Canva tidak bisa dijalankan di komputer yang belum memiliki Sistem Operasi?",
          options: [
            "Karena penyimpanan SSD akan langsung penuh tanpa Sistem Operasi.",
            "Karena aplikasi membutuhkan Sistem Operasi untuk mengelola hardware dan menjembatani perintah ke mesin.",
            "Karena arus listrik tidak bisa masuk ke komputer tanpa Sistem Operasi.",
            "Karena Canva dan game termasuk perangkat keras (hardware).",
            "Karena layar monitor hanya menyala jika ada jaringan internet."
          ],
          answer: 1
        },
        {
          q: "Sistem Operasi diibaratkan seperti \\"Resepsionis Hotel\\" yang membagi kamar untuk tiap aplikasi yang dibuka agar tidak saling bertabrakan. Ini adalah fungsi ....",
          options: [
            "Pengelolaan Memori: membagi alamat dan kapasitas RAM untuk tiap aplikasi.",
            "Pengelolaan Keamanan: mengunci aplikasi dengan kata sandi.",
            "Proses Booting: mengecek kondisi fisik RAM saat komputer menyala.",
            "Pipelining: mengeksekusi instruksi di dalam CPU secara estafet.",
            "Pengelolaan File: menghapus dokumen di dalam Harddisk."
          ],
          answer: 0
        },
        {
          q: "Proses menyalakan komputer dan membangunkan Sistem Operasi hingga siap bekerja disebut Booting. Urutan 5 langkah proses Booting yang tepat adalah ....",
          options: [
            "Daya Dihidupkan → Memuat BIOS → POST → Memuat SO ke RAM → Pengalihan Kontrol",
            "Daya Dihidupkan → POST → Memuat BIOS → Memuat SO ke RAM → Pengalihan Kontrol",
            "POST → Daya Dihidupkan → Memuat SO ke RAM → Memuat BIOS → Pengalihan Kontrol",
            "Memuat BIOS → POST → Daya Dihidupkan → Pengalihan Kontrol → Memuat SO ke RAM",
            "Daya Dihidupkan → Memuat SO ke RAM → POST → Memuat BIOS → Pengalihan Kontrol"
          ],
          answer: 1
        },
        {
          q: "Apakah yang dimaksud dengan Sistem Operasi (Operating System) pada sistem komputer?",
          options: [
            "Komponen fisik komputer yang dapat dilihat dan disentuh secara langsung oleh pengguna.",
            "Program aplikasi yang dirancang khusus untuk mengetik dokumen dan mengedit foto. ",
            "Perangkat lunak sistem yang bertugas mengelola hardware, mengelola sumber daya software, serta menghubungkan perangkat keras dengan pengguna.",
            "Kepingan memori sementara untuk menyimpan data aplikasi yang sedang aktif dibuka.",
            "Alat elektronik khusus yang hanya menjalankan satu fungsi spesifik secara otomatis."
          ],
          answer: 2
        },
        {
          q: "Pasangan yang tepat antara fitur Sistem Operasi dan contoh penggunaannya adalah ....",
          options: [
            "GUI: Mengetik perintah teks di Command Prompt (CMD).",
            "CLI: Mengklik ikon aplikasi dengan kursor mouse atau sentuhan jari.",
            "File Explorer: Memantau persentase suhu dan beban kerja CPU.",
            "Utilitas Keamanan & Pemantauan: Mengatur Firewall, password, dan mengecek RAM di Task Manager.",
            "Device Driver: Menyalin (copy) dan menghapus (delete) folder tugas."
          ],
          answer: 3
        },
        {
          q: "Saat pengguna membuka banyak aplikasi sekaligus (Multitasking), bagaimana cara kerja algoritma Round Robin (Time Sharing) dalam menjadwalkan kerja CPU?",
          options: [
            "Menyelesaikan satu aplikasi sampai tuntas terlebih dahulu baru memproses aplikasi lainnya.",
            "Membagi jatah waktu kecil yang sama (Time Slice) secara adil dan bergiliran ke setiap aplikasi yang mengantre di RAM.",
            "Mematikan paksa aplikasi yang berukuran besar agar CPU tidak kelelahan.",
            "Memindahkan seluruh tugas pengolahan data dari CPU ke dalam Flashdisk.",
            "Mengunci dua aplikasi secara bersamaan agar tidak menggunakan CPU (Deadlock)."
          ],
          answer: 1
        }
      ];`;

const startIdx = html.indexOf('const QUESTIONS_BASE = [');
const endIdx = html.indexOf('];', startIdx) + 2;

html = html.substring(0, startIdx) + newQuestionsBase + html.substring(endIdx);

fs.writeFileSync('Materi_SO/post.html', html, 'utf8');
console.log('Successfully updated post.html with the new concise 10 questions!');

