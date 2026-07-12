// Inisialisasi waktu awal
var timer = 30;

// Ambil elemen HTML untuk menampilkan angka
var display = document.getElementById("timerDisplay");
var stoppoint = false
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
        display.innerHTML = "00:00";
        stoppoint = true
        alert("Waktu telah berakhir!");
    }

}, 1000);

// point 

var poin = 0;
const btn_press = document.getElementById("btn-press-poin");
const poinscore = document.getElementById("score-point");

btn_press.addEventListener("click", function() {
    if (stoppoint) {
        poin = poin;    
    } else {
        poin++;
    }
    poinscore.innerHTML = poin;
})