// Ambil elemen HTML
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const areaTap = document.getElementById('area-tap');
const teksPoin = document.getElementById('teks-poin');
const teksTimer = document.getElementById('teks-timer');
const petunjuk = document.getElementById('petunjuk');
const skorAkhir = document.getElementById('skor-akhir');
const btnRestart = document.getElementById('btn-restart');
const btnReload = document.getElementById('btn-reload');

// Variabel State Game
let poin = 0;
let waktuSisa = 30;
let timerId = null;
let gameBerjalan = false;

// Fungsi untuk memulai timer (hanya dipicu saat klik pertama)
function mulaiTimer() {
    gameBerjalan = true;
    petunjuk.classList.add('hidden'); // Sembunyikan petunjuk "Klik untuk mulai"

    timerId = setInterval(function() {
        waktuSisa--;
        teksTimer.innerText = waktuSisa;

        // Ketika waktu habis
        if (waktuSisa <= 0) {
            clearInterval(timerId); // Hentikan hitung mundur
            gameBerjalan = false;
            gameOver();
        }
    }, 1000); // Berjalan setiap 1 detik (1000 ms)
}

// Fungsi saat permainan selesai
function gameOver() {
    // Tampilkan skor di halaman hasil
    skorAkhir.innerText = poin;

    // Sembunyikan layar game, munculkan layar hasil
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

// Event saat kotak diklik
areaTap.addEventListener('click', function() {
    // Jika ini klik pertama, jalankan timer
    if (!gameBerjalan && waktuSisa === 30) {
        mulaiTimer();
    }

    // Tambah poin dan ganti teks di layar
    poin++; 
    teksPoin.innerText = 'Poin: ' + poin;

    // --- Efek Animasi Klik ---
    areaTap.classList.remove('animate-tap-pulse');
    teksPoin.classList.remove('animate-score-up');
    void areaTap.offsetWidth; 
    void teksPoin.offsetWidth;
    areaTap.classList.add('animate-tap-pulse');
    teksPoin.classList.add('animate-score-up');
});

// Event saat tombol "Main Lagi" diklik
btnRestart.addEventListener('click', function() {
    // Reset semua variabel ke kondisi awal
    poin = 0;
    waktuSisa = 30;
    gameBerjalan = false;
    timerId = null;

    // Kembalikan tampilan teks awal
    teksPoin.innerText = 'Poin: 0';
    teksTimer.innerText = '30';
    petunjuk.classList.remove('hidden');

    // Tukar posisi layar (sembunyikan hasil, munculkan game)
    resultScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
});


btnReload.addEventListener('click', function() {
    // Fungsi untuk me-reload halaman
    window.location.reload();
});