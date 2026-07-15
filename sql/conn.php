<?php


$host = 'localhost';
$user = 'root';
$pass = '';
$base = 'db_game';

$conn = mysqli_connect($host, $user, $pass, $base);

if (!$conn) die("Koneksi gagal: " . mysqli_connect_error());

