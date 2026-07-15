<?php

// $host = 'sql302.infinityfree.com';
// $user = 'if0_42264723';
// $pass = 'OO91F3ohKrW0m';
// $base = 'if0_42264723_db_game';

$host = 'sql302.infinityfree.com';
$user = 'if0_42264723';
$pass = 'OO91F3ohKrW0m';
$base = 'if0_42264723_db_game';

$conn = mysqli_connect($host, $user, $pass, $base);

if (!$conn) die("Koneksi gagal: " . mysqli_connect_error());

