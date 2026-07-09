// Inisialisasi waktu awal
var timer = 120;

// Ambil elemen HTML untuk menampilkan angka
var display = document.getElementById("timerDisplay");

// Jalankan fungsi setiap 1000ms (1 detik)
var countdown = setInterval(function() {
    
    // Kurangi nilai timer
    timer--;

    // Tampilkan ke layar
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
    display.innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

    // Jika waktu habis
    if (timer <= 0) {
        clearInterval(countdown); // Hentikan interval agar tidak negatif
        display.innerHTML = "Waktu Habis!";
        // Tambahkan aksi lain di sini, misalnya pindah halaman atau memunculkan alert
        alert("Waktu telah berakhir!");
    }

}, 1000);