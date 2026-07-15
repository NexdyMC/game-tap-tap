<?php
include 'sql/conn.php';
$data = $db->select("tb_taptap");
?>
<!DOCTYPE html>
<html lang="id">
<meta http-equiv="refresh" content="5">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leader Board | Tap tap kuy</title>
    <!-- CDN : tailwindcss -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="tailwind.config.js"></script>
</head>
<body>
    <!-- screen : Leader Board -->
    <section class="bg-screen-main overflow-auto h-screen py-6 text-white">
        <div class="flex justify-center items-center">
            <img src="image/leaderboard.png" alt="leaderboard" class="max-w-96 w-full min-w-80" >
        </div>

        <div class="p-6 flex justify-center">
            <div class="overflow-auto border-collapse border-2 border-cyan-400 rounded-xl shadow-panel-cyan max-w-[600px] w-full min-w-96">
                <table class=" shadow-panel-cyan max-w-[600px] w-full min-w-96">
                    <thead class="bg-cyan-300">
                        <tr>
                            <th class="px-6 py-3 border-b text-left text-sm text-black font-semibold ">
                                Rank</th>
                            <th class="px-6 py-3 border-b text-left text-sm text-black font-semibold ">
                                Nama Siswa</th>
                            <th class="px-6 py-3 border-b text-left text-sm text-black font-semibold ">
                                Gugus</th>
                            <th class="px-6 py-3 border-b text-left text-sm text-black font-semibold ">
                                point</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <?php 
                        $no = 1;
                        while ($row = mysqli_fetch_assoc($data)) {
                        ?>
                        <tr class="bg-cyan-950 hover:bg-cyan-200/20">
                            <td class="px-6 py-4 text-sm text-white"><?= $no++?></td>
                            <td class="px-6 py-4 text-sm text-white"><?= htmlspecialchars($row['nama']);?></td>
                            <td class="px-6 py-4 text-sm text-white"><?= htmlspecialchars($row['gugus']);?></td>
                            <td class="px-6 py-4 text-sm text-white"><?= htmlspecialchars($row['poin']);?></td>
                        </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <script src="tailwind.config.js"></script>
</body>
</html>