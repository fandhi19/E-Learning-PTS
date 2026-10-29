const fs = require('fs');

// Data 20 Soal PG dari PDF
const questionsData = [
  // 1-10: PG Reguler (Single Choice, 2 poin)
  {
    id: 1,
    type: "single",
    category: "PG Reguler (L1) • Konsep Dasar Algoritma",
    points: 2,
    text: "Dalam dunia pemrograman, komputer tidak dapat berpikir sendiri melainkan hanya menjalankan perintah yang diberikan. Urutan langkah-langkah logis dan terstruktur yang disusun untuk menyelesaikan suatu masalah disebut ....",
    options: [
      "Compiler",
      "Variabel",
      "Algoritma",
      "Sintaks",
      "Debugging"
    ],
    correct: 2 // C
  },
  {
    id: 2,
    type: "single",
    category: "PG Reguler (L1) • Diagram Alir (Flowchart)",
    points: 2,
    text: "Jika algoritma merupakan urutan langkah berupa teks, maka representasi gambar visual yang memakai bentuk-bentuk simbol geometris untuk menggambarkan alur program agar lebih mudah dibaca dan dipahami disebut ....",
    options: [
      "Pseudocode",
      "Flowchart (Diagram Alir)",
      "Tipe Data",
      "Array",
      "IDE (Integrated Development Environment)"
    ],
    correct: 1 // B
  },
  {
    id: 3,
    type: "single",
    category: "PG Reguler (L1) • Konsep Dasar Algoritma",
    points: 2,
    text: "Menurut Donald E. Knuth, sebuah algoritma yang baik harus memiliki lima ciri utama. Ciri yang mengharuskan setiap instruksi di dalam algoritma ditulis secara jelas dan tidak ambigu (contohnya: \"Tambahkan 5\", bukan \"Tambahkan sedikit\") serta ciri bahwa program tahu kapan harus berhenti secara berturut-turut adalah ....",
    options: [
      "Input dan Output",
      "Definiteness dan Finiteness",
      "Effectiveness dan Input",
      "Looping dan Branching",
      "Sequence dan Output"
    ],
    correct: 1 // B
  },
  {
    id: 4,
    type: "single",
    category: "PG Reguler (L1) • Diagram Alir (Flowchart)",
    points: 2,
    text: "Dalam pembuatan diagram alir (flowchart), terdapat berbagai simbol standar dengan fungsi khusus. Apakah fungsi utama dari simbol berbentuk Belah Ketupat (Diamond)?",
    options: [
      "Menandakan titik awal (Start) atau titik akhir (End) suatu program.",
      "Menunjukkan arah aliran program dari awal hingga akhir.",
      "Melakukan kegiatan komputasi atau operasi aritmatika.",
      "Menandakan titik Keputusan (Decision) atau percabangan di mana salah satu cabang dipilih berdasarkan suatu kondisi (Ya/Tidak).",
      "Menghubungkan titik pada diagram alir ke halaman yang berbeda."
    ],
    correct: 3 // D
  },
  {
    id: 5,
    type: "single",
    category: "PG Reguler (L1) • Diagram Alir (Flowchart)",
    points: 2,
    text: "Perhatikan pernyataan berikut: \"Melambangkan saat program menerima data masukan (input) atau menampilkan hasil keluaran (output).\" Pada diagram alir (flowchart), fungsi tersebut digambarkan menggunakan simbol berbentuk ....",
    options: [
      "Jajar Genjang (Input/Output)",
      "Persegi Panjang (Proses)",
      "Kapsul / Oval (Terminator)",
      "Belah Ketupat (Keputusan)",
      "Lingkaran Kecil (Penghubung dalam Halaman)"
    ],
    correct: 0 // A
  },
  {
    id: 6,
    type: "single",
    category: "PG Reguler (L1) • Pseudocode (Kode Semu)",
    points: 2,
    text: "Agar rapi dan mudah diterjemahkan ke bahasa pemrograman, penulisan pseudocode umumnya dibagi menjadi tiga bagian struktur utama secara berurutan, yaitu ....",
    options: [
      "Start, Process, dan End",
      "Input, Looping, dan Compile",
      "Judul Algoritma, Deklarasi, dan Algoritma / Deskripsi",
      "Header, Body, dan Footer",
      "Fetch, Decode, dan Execute"
    ],
    correct: 2 // C
  },
  {
    id: 7,
    type: "single",
    category: "PG Reguler (L1) • Pseudocode (Kode Semu)",
    points: 2,
    text: "Secara bahasa, kata pseudo berarti semu atau tiruan, sedangkan code berarti kode. Pengertian yang paling tepat mengenai Pseudocode adalah ....",
    options: [
      "Bahasa mesin berbasis angka biner (0 dan 1) yang langsung dieksekusi oleh prosesor.",
      "Aplikasi khusus untuk mencari dan memperbaiki kesalahan penulisan titik koma pada program.",
      "Bahasa jembatan antara gagasan manusia dan bahasa komputer yang menyerupai struktur kode asli untuk merancang logika, namun belum dapat dijalankan langsung oleh komputer.",
      "Diagram grafis yang menggunakan simbol-simbol geometri untuk mempresentasikan alur kerja tim.",
      "Perangkat keras di dalam CPU yang bertugas menyimpan hasil perhitungan sementara."
    ],
    correct: 2 // C
  },
  {
    id: 8,
    type: "single",
    category: "PG Reguler (L1) • Arsitektur Von Neumann",
    points: 2,
    text: "Model arsitektur komputer yang diusulkan oleh John von Neumann pada tahun 1945 membagi sistem komputer menjadi empat komponen utama yang saling terhubung, yaitu ....",
    options: [
      "Monitor, Keyboard, Mouse, dan Printer",
      "Central Processing Unit (CPU), Memori Utama (RAM), Unit Masukan/Keluaran (I/O), dan Sistem Bus",
      "Harddisk, Flashdisk, CD-ROM, dan Power Supply",
      "Internet, Router, Browser, dan Server",
      "Flowchart, Pseudocode, Compiler, dan Sintaks"
    ],
    correct: 1 // B
  },
  {
    id: 9,
    type: "single",
    category: "PG Reguler (L1) • Siklus Mesin (Machine Cycle)",
    points: 2,
    text: "Ketika CPU bekerja menjalankan instruksi program pada siklus mesin (Machine Cycle), apakah fungsi dari tahapan DECODE?",
    options: [
      "Menjemput kode instruksi dari RAM berdasarkan alamat di Program Counter (PC).",
      "Control Unit (CU) membaca kode biner di dalam Instruction Register (IR) dan menerjemahkan arti perintah tersebut (misalnya apakah perintah ADD, LOAD, atau STORE).",
      "ALU menghitung operasi penjumlahan matematika dan menyimpannya ke Accumulator.",
      "Menyimpan kembali hasil perhitungan akhir dari CPU ke petak memori RAM atau layar monitor.",
      "Mematikan aliran listrik komputer ketika program telah selesai dijalankan."
    ],
    correct: 1 // B
  },
  {
    id: 10,
    type: "single",
    category: "PG Reguler (L2) • Siklus Mesin (Machine Cycle)",
    points: 2,
    text: "Setiap kali komputer memproses suatu perintah, CPU mengeksekusi instruksi tersebut melalui empat tahapan siklus mesin (Machine Cycle) yang berulang secara berurutan dari awal hingga akhir, yaitu ....",
    options: [
      "Input – Proses – Output – Delete",
      "Decode – Fetch – Store – Execute",
      "Fetch – Decode – Execute – Store",
      "Store – Execute – Decode – Fetch",
      "Start – Branching – Looping – End"
    ],
    correct: 2 // C
  },

  // 11-15: PG HOTS (Single Choice, 3 poin)
  {
    id: 11,
    type: "single",
    category: "PG HOTS (C5) • Diagram Alir (Flowchart)",
    points: 3,
    text: "<strong>[HOTS - Evaluasi Logika Flowchart]</strong> Seorang siswa ingin membuat flowchart penentuan Grade Nilai dengan aturan sekolah: Nilai >= 90 dapat A, Nilai >= 80 dapat B, Nilai >= 70 dapat C, dan di bawah 70 dapat D. Namun, siswa tersebut menyusun urutan simbol Decision (Keputusan) dari atas ke bawah secara terbalik seperti berikut:<br/><br/>" +
          "• Keputusan 1: Apakah NILAI >= 70? -> Jika YA, Cetak C lalu END. Jika TIDAK, lanjut ke Keputusan 2.<br/>" +
          "• Keputusan 2: Apakah NILAI >= 80? -> Jika YA, Cetak B lalu END. Jika TIDAK, lanjut ke Keputusan 3.<br/>" +
          "• Keputusan 3: Apakah NILAI >= 90? -> Jika YA, Cetak A lalu END. Jika TIDAK, Cetak D lalu END.<br/><br/>" +
          "<strong>Pertanyaan:</strong> Apabila diuji dengan memasukkan NILAI = 95, apakah yang akan terjadi pada program tersebut?",
    options: [
      "Program tetap mencetak A dengan benar karena nilai 95 lebih besar dari 90.",
      "Program akan mengalami error dan berhenti sebelum mencetak hasil.",
      "Program langsung mencetak C dan berhenti di Keputusan 1, karena angka 95 sudah memenuhi syarat NILAI >= 70 sehingga cabang Decision di bawahnya (>= 80 dan >= 90) tidak pernah terjangkau.",
      "Program mencetak C, B, dan A sekaligus secara berurutan.",
      "Program mencetak D karena urutan kondisi terbalik."
    ],
    correct: 2 // C
  },
  {
    id: 12,
    type: "single",
    category: "PG HOTS (C4) • Pseudocode Perulangan",
    points: 3,
    text: "<strong>[HOTS - Analisis Pseudocode Perulangan]</strong> Perhatikan modifikasi pseudocode algoritma menghitung mundur berikut (jika pengguna memasukkan nilai awal N = 3, analisislah apa yang terjadi saat algoritma tersebut ditelusuri):<br/><br/>" +
          "<pre class='p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs'>// Algoritma Menghitung Mundur\n1. input N\n2. while N > 0 do\n3.    print N\n4.    N <- N + 1</pre>",
    options: [
      "Program mencetak angka 3, 2, 1 lalu berhenti dengan normal.",
      "Program mencetak angka 3, 4, 5 lalu berhenti karena hanya diulang tiga kali.",
      "Program tidak mencetak angka apa pun karena kondisi while N > 0 langsung bernilai salah.",
      "Program mengalami Infinite Loop (perulangan tanpa henti) yang mencetak 3, 4, 5, 6, ... terus-menerus karena nilai N justru ditambah 1 (N <- N + 1) sehingga kondisi N > 0 selalu terpenuhi dan melanggar ciri Finiteness.",
      "Program otomatis mengubah perintah N <- N + 1 menjadi N <- N - 1 agar bisa berhenti."
    ],
    correct: 3 // D
  },
  {
    id: 13,
    type: "single",
    category: "PG HOTS (C4) • Pseudocode Logika Bertingkat",
    points: 3,
    text: "<strong>[HOTS - Analisis Tracing Pseudocode Nilai Terbesar]</strong> Perhatikan pseudocode pencarian bilangan terbesar (Mencari Bilangan Terbesar dalam Himpunan) berikut. Jika diberikan masukan himpunan bilangan L = [25, 18, 42, 30, 60, 55], bagaimanakah riwayat perubahan nilai yang tersimpan di dalam variabel largest sejak baris ke-2 dieksekusi hingga program selesai, dan berapa kali baris ke-5 (largest <- item) dijalankan?<br/><br/>" +
          "<pre class='p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs'>1. if size of (L) = 0 then return null\n2. largest <- elemen pertama L\n3. for each item in L, do\n4.    if item > largest, then\n5.       largest <- item\n6. return largest</pre>",
    options: [
      "Riwayat nilai largest: 0 -> 25 -> 42 -> 60; baris ke-5 dijalankan 3 kali.",
      "Riwayat nilai largest: 25 -> 42 -> 60; baris ke-5 dijalankan 2 kali (yaitu hanya saat mengecek angka 42 dan 60).",
      "Riwayat nilai largest: 25 -> 18 -> 42 -> 30 -> 60 -> 55; baris ke-5 dijalankan 5 kali.",
      "Riwayat nilai largest: 25 -> 60; baris ke-5 dijalankan 1 kali.",
      "Riwayat nilai largest: 25 -> 42 -> 60 -> 55; baris ke-5 dijalankan 3 kali."
    ],
    correct: 1 // B
  },
  {
    id: 14,
    type: "single",
    category: "PG HOTS (C4) • Simulasi Register Tracing",
    points: 3,
    text: "<strong>[HOTS - Analisis Register Tracing Von Neumann]</strong> Sebuah komputer Von Neumann hendak menjalankan program untuk menjumlahkan dua data (Data di Alamat 20 = 10 dan Data di Alamat 21 = 4) lalu menyimpan hasilnya ke Alamat 22. Namun, programmer salah menuliskan alamat pada instruksi kedua di dalam RAM menjadi seperti berikut. Berdasarkan cara kerja Register Tracing, apakah dampak dari kesalahan kode di [Alamat 11] tersebut setelah Siklus 3 selesai dijalankan?<br/><br/>" +
          "<pre class='p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs'>[Alamat 10] : LOAD [20]\n[Alamat 11] : ADD [20]    (seharusnya ADD [21])\n[Alamat 12] : STORE [22]\n[Alamat 20] : Data: 10\n[Alamat 21] : Data: 4</pre>",
    options: [
      "CPU menolak menjalankan Siklus 2 karena alamat [20] sudah dipakai pada Siklus 1.",
      "Control Unit (CU) otomatis memperbaiki instruksi menjadi ADD [21] sehingga hasil di [Alamat 22] tetap bernilai 14.",
      "ALU tetap berjalan patuh menjumlahkan nilai di Accumulator (10) dengan data di [Alamat 20] (10), sehingga di akhir Siklus 3 memori [Alamat 22] menyimpan hasil yang salah yaitu 20 (bukan 14).",
      "Nilai pada Program Counter (PC) mundur kembali ke 10 dan mengulang program dari awal.",
      "Memori [Alamat 22] menyimpan nilai 4 karena data di [Alamat 21] belum terpakai."
    ],
    correct: 2 // C
  },
  {
    id: 15,
    type: "single",
    category: "PG HOTS (C5) • Arsitektur Komputer Modern",
    points: 3,
    text: "<strong>[HOTS - Evaluasi Kasus Roleplay & Arsitektur Modern]</strong> Saat melakukan simulasi Roleplay \"Kami Komputer Hidup!\" di kelas, guru mempercepat tepukan tangan (sinyal clock) berkali-kali lipat. Siswa yang berperan sebagai ALU mampu menghitung sangat cepat, namun ia terpaksa sering menganggur menunggu siswa Bus Sistem (Kurir) yang kelelahan berlari bolak-balik mengantar kartu instruksi dan kartu data dari meja RAM lewat satu jalur yang sama. Jika masalah pada simulasi tersebut terjadi pada komputer nyata, inovasi arsitektur modern manakah yang paling tepat untuk memangkas jarak lari kurir Bus serta membuat tahapan eksekusi bekerja secara estafet?",
    options: [
      "Mengganti keyboard dan monitor dengan ukuran yang lebih besar.",
      "Memperbesar kapasitas Harddisk eksternal dan menghapus komponen Control Unit (CU).",
      "Menambahkan Cache Memory (L1/L2/L3) yang menempel langsung di dalam prosesor untuk menyimpan data yang sering dipanggil, serta menerapkan Instruction Pipelining agar proses Fetch, Decode, Execute berjalan serentak seperti ban berjalan.",
      "Mengubah seluruh kode biner di RAM menjadi diagram flowchart agar lebih ringan dibawa oleh Data Bus.",
      "Menyatukan kembali fungsi ALU dan peranti Output tanpa menggunakan memori register."
    ],
    correct: 2 // C
  },

  // 16-20: PG Kompleks / Multi-Select (3 poin)
  {
    id: 16,
    type: "multi",
    category: "PG Kompleks (>1 Jawaban Benar) • Konsep Dasar Algoritma",
    points: 3,
    text: "<strong>[PG Kompleks - Konsep Dasar Algoritma]</strong> Berdasarkan materi Konsep Dasar Algoritma, manakah di antara pernyataan-pernyataan berikut yang <strong>BENAR</strong> mengenai ciri algoritma menurut Donald E. Knuth dan jenis alur algoritma? <span class='text-amber-500 font-bold'>(Pilih SEMUA jawaban yang benar!)</span>",
    options: [
      "Ciri Finiteness berarti program memiliki titik berhenti yang pasti setelah menyelesaikan tugasnya.",
      "Alur Sequence adalah langkah algoritma yang diulang terus-menerus selama kondisi masih terpenuhi.",
      "Mencetak tulisan \"LULUS\" jika nilai ujian >= 75 merupakan contoh dari alur percabangan (Branching).",
      "Ciri Effectiveness menuntut langkah algoritma harus masuk akal, efisien, dan tidak melakukan hal yang sia-sia.",
      "Sebuah algoritma yang baik tidak boleh memiliki Output sama sekali agar memori komputer tetap hemat."
    ],
    correct: [0, 2, 3] // A, C, D
  },
  {
    id: 17,
    type: "multi",
    category: "PG Kompleks (>1 Jawaban Benar) • Diagram Alir (Flowchart)",
    points: 3,
    text: "<strong>[PG Kompleks - Diagram Alir / Flowchart]</strong> Manakah di antara pernyataan berikut yang <strong>BENAR</strong> sesuai dengan Simbol Wajib Flowchart dan Aturan Emas Membuat Flowchart? <span class='text-amber-500 font-bold'>(Pilih SEMUA jawaban yang benar!)</span>",
    options: [
      "Setiap flowchart wajib dimulai dengan simbol Start dan diakhiri dengan simbol End menggunakan bentuk Terminator.",
      "Simbol Subprogram (persegi panjang dengan garis vertikal di sisi kiri-kanan) melambangkan kegiatan atau proses lain yang telah didefinisikan sebelumnya.",
      "Setiap simbol Keputusan (Decision) cukup memiliki satu jalur keluar saja yaitu jalur \"Ya\".",
      "Arah aliran program pada flowchart umumnya disusun dari atas ke bawah menggunakan Garis Alir (Flowline).",
      "Simbol Lingkaran Kecil digunakan untuk menghubungkan diagram alir ke halaman kertas yang berbeda (Antarhalaman)."
    ],
    correct: [0, 1, 3] // A, B, D
  },
  {
    id: 18,
    type: "multi",
    category: "PG Kompleks (>1 Jawaban Benar) • Pseudocode (Kode Semu)",
    points: 3,
    text: "<strong>[PG Kompleks - Karakteristik & Kata Kunci Pseudocode]</strong> Manakah pernyataan di bawah ini yang <strong>BENAR</strong> mengenai karakteristik pseudocode dan fungsi kata kuncinya? <span class='text-amber-500 font-bold'>(Pilih SEMUA jawaban yang benar!)</span>",
    options: [
      "Pseudocode menggunakan indentasi (teks menjorok ke dalam) untuk menunjukkan hierarki blok perintah seperti IF-ELSE atau WHILE/FOR.",
      "Dua orang programmer tidak mungkin menulis pseudocode yang berbeda untuk menyelesaikan satu masalah yang sama.",
      "Prinsip \"Satu Baris, Satu Perintah\" diterapkan agar urutan operasi logika mudah dibaca dan ditelusuri.",
      "Pola dasar pengolahan data dalam pseudocode adalah: INPUT (ambil data) -> SET / <- (olah data) -> PRINT (tampilkan hasil).",
      "Penulisan pseudocode wajib mematuhi aturan sintaks titik koma (;) yang kaku agar tidak terjadi compile error di kertas."
    ],
    correct: [0, 2, 3] // A, C, D
  },
  {
    id: 19,
    type: "multi",
    category: "PG Kompleks (>1 Jawaban Benar) • Struktur CPU & Sistem Bus",
    points: 3,
    text: "<strong>[PG Kompleks - Struktur Internal CPU & Jalur Bus Sistem]</strong> Berdasarkan materi Arsitektur Von Neumann, manakah pasangan komponen internal CPU, Register, dan jalur System Bus berikut yang memiliki penjelasan fungsi yang <strong>TEPAT</strong>? <span class='text-amber-500 font-bold'>(Pilih SEMUA jawaban yang benar!)</span>",
    options: [
      "ALU (Arithmetic Logic Unit): Bertugas melakukan operasi matematika (+, -, x, /) dan pembandingan logika (AND, OR, NOT, lebih besar/kecil).",
      "PC (Program Counter): Register yang menyimpan alamat memori dari instruksi berikutnya yang akan diambil oleh prosesor.",
      "Data Bus: Jalur transmisi dua arah (bidirectional) untuk membawa bit data atau angka antara CPU, RAM, dan perangkat I/O.",
      "ACC (Accumulator): Kabel eksternal yang berfungsi menghubungkan printer dengan layar monitor.",
      "Control Bus: Jalur pembawa sinyal kendali/komando seperti perintah Read, Write, sinyal detak jam (clock), dan interupsi."
    ],
    correct: [0, 1, 2, 4] // A, B, C, E
  },
  {
    id: 20,
    type: "multi",
    category: "PG Kompleks (>1 Jawaban Benar) • Siklus IPO & Arsitektur Modern",
    points: 3,
    text: "<strong>[PG Kompleks - Siklus IPO & Perbandingan Arsitektur]</strong> Tentukan manakah pernyataan yang <strong>BENAR</strong> terkait penerapan Siklus Input-Proses-Output (IPO) pada perangkat nyata dan perbandingan Arsitektur Von Neumann vs Arsitektur Harvard! <span class='text-amber-500 font-bold'>(Pilih SEMUA jawaban yang benar!)</span>",
    options: [
      "Pada Kamera Smartphone, sensor optik yang menangkap cahaya pemandangan berperan sebagai Input, sedangkan prosesor (ISP/GPU) yang memproses warna, fokus, dan kompresi JPEG berperan sebagai Proses.",
      "Peranti Input berfungsi mengubah aksi fisik manusia atau fenomena alam menjadi deretan bit sinyal digital (0 dan 1) agar dapat diproses komputer.",
      "Pada Arsitektur Harvard, memori program dan memori data dipisahkan secara fisik serta memiliki dua set jalur bus yang terpisah sehingga dapat diakses secara serentak.",
      "Arsitektur Von Neumann umumnya digunakan pada PC, laptop, server, dan smartphone, sedangkan Arsitektur Harvard banyak diterapkan pada mikrokontroler dan DSP (Digital Signal Processor).",
      "Pada mesin kasir minimarket, struk belanja yang tercetak dan tampilan layar total harga merupakan bagian dari tahap Input."
    ],
    correct: [0, 1, 2, 3] // A, B, C, D
  }
];

fs.writeFileSync('scratch/questions_soal_pdf.json', JSON.stringify(questionsData, null, 2), 'utf8');
console.log('Saved questions_soal_pdf.json successfully!');

