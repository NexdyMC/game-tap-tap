const screens = {
    loading: document.querySelector('[data-screen="loading"]'),
    main: document.querySelector('[data-screen="main"]'),
    play: document.querySelector('[data-screen="play"]'),
    final: document.querySelector('[data-screen="final"]')
};

const fillEl = document.getElementById('loadingFill');
const percentEl = document.getElementById('loadingPercent');

let activeCountdown = null;
let stoppoint = false;

function showScreen(targetName) {
    const target = screens[targetName];
    const current = document.querySelector('.screen.active');
    if (!target || target === current) return;

    target.classList.add('active');
    if (current) {
        requestAnimationFrame(() => current.classList.remove('active'));
    }
}

// durasi loading dibuat fleksibel per transisi
function transitionWithLoading(targetName, loadingDuration = 5000) {
    fillEl.style.transition = 'none';
    fillEl.style.width = '0%';
    percentEl.textContent = '0%';
    void fillEl.offsetWidth;

    showScreen('loading');

    requestAnimationFrame(() => {
        fillEl.style.transition = `width ${loadingDuration}ms linear`;
        fillEl.style.width = '100%';
    });

    let elapsed = 0;
    const stepTime = 50;
    const percentTimer = setInterval(() => {
        elapsed += stepTime;
        const percent = Math.min(100, Math.round((elapsed / loadingDuration) * 100));
        percentEl.textContent = percent + '%';
        if (percent >= 100) clearInterval(percentTimer);
    }, stepTime);

    setTimeout(() => {
        showScreen(targetName);

        // TIMER CUMA NYALA KALAU TUJUANNYA "play"
        if (targetName === 'play') {
            timertaptap(30);
        }
    }, loadingDuration);
}

function timertaptap(durasiDetik, displayId = "timerDisplay") {
    if (activeCountdown) clearInterval(activeCountdown);

    var timer = durasiDetik;
    var display = document.getElementById(displayId);
    stoppoint = false;

    activeCountdown = setInterval(function () {
        timer--;
        var minutes = Math.floor(timer / 60);
        var seconds = timer % 60;
        if (display) display.innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

        if (timer <= 0) {
            clearInterval(activeCountdown);
            activeCountdown = null;
            if (display) display.innerHTML = "00:00";
            stoppoint = true;

            // waktu habis -> loading -> screen final
            transitionWithLoading('final', 3000);
        }
    }, 1000);
}

// point counter
var poin = 0;
const btn_press = document.getElementById("btn-press-poin");
const poinscore = document.getElementById("score-point");
const bestScore = document.getElementById("best-score");
const inputscore = document.getElementById("input-poin");

btn_press.addEventListener("click", function () {
    if (!stoppoint) poin++;
    poinscore.innerHTML = `Point: ${poin}`;
    bestScore.innerHTML = `Point: ${poin}`;
    inputscore.value = poin;
});

const btn = document.getElementById('btn-play');

btn.addEventListener('click', function () {

});

transitionWithLoading('main', 3000);

// tombol "mulai main" -> loading 3 menit -> screen play (timer otomatis nyala di dalam transitionWithLoading)
document.querySelector('[data-target="play"]').addEventListener('click', () => {
    const val1 = document.getElementById('input-username').value.trim();
    const val2 = document.getElementById('input-gugus').value.trim();

    // Validasi: Cek apakah kedua input memiliki nilai
    if (val1 !== "" && val2 !== "" && val1 !== " " && val2 !== " " ) {
        transitionWithLoading('play', 100); // 3 menit = 180000ms
    } else {
        // Jika salah satu atau keduanya kosong
        alert("Peringatan: masukan Nama Siswa dan gugus!");
    }
    
});

// tombol lain (misal balik ke main dari mana pun)
document.querySelectorAll('button[data-target]:not([data-target="play"])').forEach(btn => {
    btn.addEventListener('click', () => {
        transitionWithLoading(btn.dataset.target);
    });
});

