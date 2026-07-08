// Inisialisasi waktu awal
var timer = 30;

// Ambil elemen HTML untuk menampilkan angka
var display = document.getElementById("timerDisplay");

// Jalankan fungsi setiap 1000ms (1 detik)
var countdown = setInterval(function() {
    
    // Kurangi nilai timer
    timer--;

    // Tampilkan ke layar
    display.innerHTML = "Waktu tersisa: " + timer;

    // Jika waktu habis
    if (timer <= 0) {
        clearInterval(countdown); // Hentikan interval agar tidak negatif
        display.innerHTML = "Waktu Habis!";
        // Tambahkan aksi lain di sini, misalnya pindah halaman atau memunculkan alert
        alert("Waktu telah berakhir!");
    }

}, 1000);