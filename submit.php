<?php
include 'sql/conn.php';

// deteksi apakah request ini datang dari fetch() (AJAX) atau dari submit form biasa
$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH'])
          && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

if (isset($_POST['btn-submit']) || isset($_POST['btn-leaderboard'])) {
  $siswa = trim($_POST['input-namasiswa']);
  $gugus = trim($_POST['input-gugus']);
  $poin  = (int) $_POST['input-poin'];

  $data = $db->insert($siswa, $gugus, $poin);

  if ($isAjax) {
    // request dari fetch() -> jangan render HTML, cukup balas teks pendek
    echo $data ? "OK" : "FAIL";
    exit; // stop di sini, gak lanjut render halaman "Done" di bawah
  }

  if ($data) {
    echo "<script>document.location = 'index.php' </script>";
  }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Done | TapTapKuy</title>
  <!-- CDN : tailwindcss -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="tailwind.config.js"></script>
  <style>
    .image-anim {
      animation: floating 5s infinite ease-in-out;
    }

    @keyframes drift {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
      }

      50% {
        transform: translate(12px, -16px) scale(1.08);
      }
    }

    @keyframes floating {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(20px);
      }

      100% {
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>

  <!-- screen : loading -->
  <div class="screen screen-loading active" data-screen="loading">
    <h1>Loading...</h1>
    <div class="loading-bar-track">
      <div class="loading-bar-fill" id="loadingFill"></div>
    </div>
    <span class="loading-percent" id="loadingPercent">0%</span>
  </div>


  <script src="js/script.js"></script>
</body>
</html>