<!DOCTYPE html>
<html lang="id">
    <meta http-equiv="refresh" content="5">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leader Board | TapTapKuy</title>
    <!-- CDN : tailwindcss -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="tailwind.config.js"></script>
    <!-- Link : style css -->
    <link rel="stylesheet" href="style/style.css">
</head>

<body>

    <!-- screen : Leader Board -->
    <section class="bg-screen-main h-screen py-6">
        <div class="flex justify-center items-center">

            <img src="image/leaderboard.png" alt="leaderboard" width="300">
        </div>

        <div class="p-6">
            <div class="overflow-x-auto border-collapse border-2 border-cyan-400 rounded-2xl shadow-panel-cyan">
                <table class=" shadow-panel-cyan min-w-full">
                    <thead class="bg-cyan-200/20">
                        <tr>
                            <th class="px-6 py-3 border-b text-left text-sm text-white font-semibold ">
                                Rank</th>
                            <th class="px-6 py-3 border-b text-left text-sm text-white font-semibold ">
                                Nama Siswa</th>
                            <th class="px-6 py-3 border-b text-left text-sm text-white font-semibold ">
                                Gugus</th>
                            <th class="px-6 py-3 border-b text-left text-sm text-white font-semibold ">
                                point</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <!-- Repeat this <tr> block 5 times -->
                        <tr class="hover:bg-cyan-200/20">
                            <td class="px-6 py-4 text-sm text-white">1</td>
                            <td class="px-6 py-4 text-sm text-white">Febri Admin</td>
                            <td class="px-6 py-4 text-sm text-white">Gugus 12</td>
                            <td class="px-6 py-4 text-sm text-white">200</td>
                        </tr>
                        <tr class="hover:bg-cyan-200/20">
                            <td class="px-6 py-4 text-sm text-white">2</td>
                            <td class="px-6 py-4 text-sm text-white">Febri Admin</td>
                            <td class="px-6 py-4 text-sm text-white">Gugus 12</td>
                            <td class="px-6 py-4 text-sm text-white">200</td>
                        </tr>
                        <tr class="hover:bg-cyan-200/20">
                            <td class="px-6 py-4 text-sm text-white">3</td>
                            <td class="px-6 py-4 text-sm text-white">Febri Admin</td>
                            <td class="px-6 py-4 text-sm text-white">Gugus 12</td>
                            <td class="px-6 py-4 text-sm text-white">200</td>
                        </tr>
                        <tr class="hover:bg-cyan-200/20">
                            <td class="px-6 py-4 text-sm text-white">4</td>
                            <td class="px-6 py-4 text-sm text-white">Febri Admin</td>
                            <td class="px-6 py-4 text-sm text-white">Gugus 12</td>
                            <td class="px-6 py-4 text-sm text-white">200</td>
                        </tr>
                        <tr class="hover:bg-cyan-200/20">
                            <td class="px-6 py-4 text-sm text-white">5</td>
                            <td class="px-6 py-4 text-sm text-white">Febri Admin</td>
                            <td class="px-6 py-4 text-sm text-white">Gugus 12</td>
                            <td class="px-6 py-4 text-sm text-white">200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <script src="tailwind.config.js"></script>
</body>

</html>



