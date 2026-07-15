<?php

// $host = 'sql302.infinityfree.com';
// $user = 'if0_42264723';
// $pass = 'OO91F3ohKrW0m';
// $base = 'if0_42264723_db_game';

class MySqlGame {
    private $conn;

    // Konstruktor untuk inisialisasi koneksi saat class dipanggil
    public function __construct($host, $user, $pass, $db) {
        $this->conn = mysqli_connect($host, $user, $pass, $db);

        if (!$this->conn) {
            die("Koneksi gagal: " . mysqli_connect_error());
        }
    }

    // Fungsi untuk mengambil data
    public function select($table) {
        $query = "SELECT * FROM $table ORDER BY poin DESC";
        $result = mysqli_query($this->conn, $query);
        return $result;
    }

    // Fungsi untuk memasukkan data (dengan Prepared Statement)
    public function insert($nama, $gugus, $poin) {
        $stmt = $this->conn->prepare("INSERT INTO tb_taptap (nama, gugus, poin) VALUES (?, ?, ?)");
        $stmt->bind_param("ssi", $nama, $gugus, $poin);
        
        $result = $stmt->execute();
        $stmt->close();
        
        return $result;
    }

    // Pastikan menutup koneksi saat objek dihancurkan
    public function __destruct() {
        if ($this->conn) {
            mysqli_close($this->conn);
        }
    }
}

$db = new MySqlGame('localhost', 'root', '', 'db_game_tap');

// $db->insert('Budi', 'Gugus 1', 100);

$data = $db->select('tb_taptap');
// input-namasiswa
// input-gugus