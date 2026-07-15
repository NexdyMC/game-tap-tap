const screens = {
    loading: document.querySelector('[data-screen="loading"]'),
    main: document.querySelector('[data-screen="main"]'),
    play: document.querySelector('[data-screen="play"]'),
    final: document.querySelector('[data-screen="final"]')
};

const fillEl = document.getElementById('loadingFill');
const percentEl = document.getElementById('loadingPercent');
const LOADING_DURATION = 5000;

function showScreen(targetName) {
    const target = screens[targetName];
    const current = document.querySelector('.screen.active');
    if (!target || target === current) return;

    target.classList.add('active');
    if (current) {
        requestAnimationFrame(() => current.classList.remove('active'));
    }
}

function transitionWithLoading(targetName) {
    fillEl.style.transition = 'none';
    fillEl.style.width = '0%';
    percentEl.textContent = '0%';
    void fillEl.offsetWidth;

    showScreen('loading');

    requestAnimationFrame(() => {
        fillEl.style.transition = `width ${LOADING_DURATION}ms linear`;
        fillEl.style.width = '100%';
    });

    let elapsed = 0;
    const stepTime = 50;
    const percentTimer = setInterval(() => {
        elapsed += stepTime;
        const percent = Math.min(100, Math.round((elapsed / LOADING_DURATION) * 100));
        percentEl.textContent = percent + '%';
        if (percent >= 100) clearInterval(percentTimer);
    }, stepTime);

    setTimeout(() => {
        showScreen(targetName);
    }, LOADING_DURATION);
}

document.querySelectorAll('button[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
        transitionWithLoading(btn.dataset.target);
    });
});

transitionWithLoading('main');

// Inisialisasi waktu awal
var timer = 30;

// Ambil elemen HTML untuk menampilkan angka
var display = document.getElementById("timerDisplay");
var stoppoint = false
// Jalankan fungsi setiap 1000ms (1 detik)

var countdown = setInterval(function () {

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
        // alert("Waktu telah berakhir!");
        transitionWithLoading('final');
    }

}, 1000);

// point 

var poin = 0;
const btn_press = document.getElementById("btn-press-poin");
const poinscore = document.getElementById("score-point");

btn_press.addEventListener("click", function () {
    if (stoppoint) {
        poin = poin;
    } else {
        poin++;
    }
    poinscore.innerHTML = `Point ${poin}`;
})