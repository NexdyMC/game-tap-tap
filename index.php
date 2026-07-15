<?php
include 'sql/conn.php';
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zoom Screen Transition + Loading</title>

  <!-- CDN : tailwindcss -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="tailwind.config.js"></script>
  <!-- Link : style css -->
  <link rel="stylesheet" href="style/style.css">

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

  <!-- screen : start game -->
  <section class="screen screen-main" data-screen="main">
    <div class="absolute w-full h-screen bg-[ rgba(16, 24, 48, 0.85)] h-full flex justify-center items-center shadow-green-300">
      <div class="block">

        <!-- panel : image -->
        <div class="flex justify-around items-start ">
          
          <img src="image/logo-icso.png" alt="contoh logo" width="80" class="image-anim p-2 h-[80px] rounded-full border-white border-2 bg-white duration-300 hover:scale-105">

          <img src="image/logo.png" alt="contoh logo" width="100" height="100" class=" p-2 rounded-full border-white border-2 bg-gray-100 duration-300 hover:scale-105">
          
          <img src="image/logo-focusmedia.png" alt="contoh logo" width="80" class="image-anim p-2 h-[80px] rounded-full border-white border-2 duration-300 hover:scale-105">
        </div>
        
        <!-- panel : title -->
        <div class="title flex justify-center">
          <img src="image/title.png" alt="" class="object-center translate-y-[50px] max-w-[300px]">
        </div>
        
        <!-- panel : form -->
        <div class="bg-[rgba(16, 24, 48, 0.85)] border-2 border-cyan-400 rounded-lg p-10 shadow-panel-cyan text-center">
          <div class="grid mt-2">
            
            <!-- input : username -->
            <label for="input-username"  class="lg-text text-base font-semibold text-white pb-2 pt-4">Nama Siswa</label>
            <input type="text" id="input-username" class="text-cyan-400 py-3 px-4 text-lg border-2 border-teal-400 rounded-md outline-none shadow-teal-400 duration-300 bg-blue-950 focus:border-white focus:text-white focus:shadow-cyan-focus" placeholder="Masukan Nama Kamu">
            
            <!-- input : Nama Gugus -->
            <label for="input-namegugus" class="lg-text text-base font-semibold text-white pb-2 pt-4">Nama Gugus</label>
            <input type="text" id="input-namegugus" class="text-cyan-400 py-3 px-4 text-lg border-2 border-teal-400 rounded-md outline-none shadow-teal-400 duration-300 bg-blue-950 focus:border-white focus:text-white focus:shadow-cyan-focus"  placeholder="Masukan Nama Gugus">
            
            <!-- button : submit -->
            <button data-target="play" class="relative bg-gradient-to-r from-[#0055ff] to-[#00a3ff] text-white border-hidden py-[15px] px-6 text-base font-bold uppercase tracking-widest rounded-lg cursor-pointer w-full mt-4 shadow-3d-blue hover:shadow-3d-blue-hover hover:bg-gradient-to-r hover:from-[#0066ff] hover:to-[#00bfff] active:shadow-3d-blue-active active:translate-y-[4px] ">Start Game</button>
          
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- screen : play game -->
  <section class="screen screen-play" data-screen="play">
    <div class="w-full h-screen z-10 overflow-hidden">
    
      <!-- area timer -->
      <div class="grid justify-items-center align-center">
        <div class="tiang-timer">
            <div class="border-x-8 border-gray-800 h-10 w-32"></div>
        </div>
        <div class="bg-black text-white p-4 text-6xl w-[200px] font-digital text-center border-4 border-gray-700 rounded-xl shadow-timer shadow-gray-600 z-10">
            <div id="timerDisplay">00:30</div>
        </div>
        <div class="bg-black text-white p-1 text-3xl  text-center border-4 border-gray-700 rounded-lg font-digital shadow-timer shadow-gray-600 ">
            <div id="score-point">Point: 0</div>
        </div>
      </div>

      <!-- area : button press -->
      <div class=" block mt-10">
        <div class="flex align-center items-center h-[380px]">
          <!-- kabel : left -->
          <div class="border-y-8 border-gray-800 h-48 w-1/2"></div>
          
          <!-- button : center -->
          <div class="p-4 rounded-2xl bg-striped-pattern inline-block shadow-[0_16px_0_#000]">
            <div class="bg-zinc-800 pt-0 pb-5 px-2 rounded-full">
              <button class="active:shadow-3d-red-active bg-gradient-red w-[300px] h-[300px] border-hidden  rounded-full shadow-3d-red text-white btn-content text-4xl font-bold cursor-pointer duration-100 translate-y-[-10px] active:translate-y-[10px]" id="btn-press-poin">Press Me</button>
            </div>
          </div>
          
          <!-- kabel : right -->
          <div class="border-y-8 border-gray-800 h-48 w-1/2"></div>
        </div>
      </div>
      <!-- label bahawa : hitam merah hijau bitu -->
      <div class="flex justify-center h-1/3">
        <div class="kabel grid mx-8 border-l-8 rounded-full border-black"></div>
        <div class="kabel grid mx-8 border-l-8 rounded-full border-green-600"></div>
        <div class="kabel grid mx-8 border-l-8 rounded-full border-blue-500"></div>
        <div class="kabel grid mx-8 border-l-8 rounded-full border-red-500"></div>
      </div>
    </div>
  </section>

  <section class="screen screen-main" data-screen="final">
    <div class="absolute w-full h-screen bg-[ rgba(16, 24, 48, 0.85)] h-full flex justify-center items-center shadow-green-300">
      <div class="block">
        
        <!-- panel : title -->
        <div class="title flex justify-center">
          <img src="image/congratulation-2.png" alt="" class="absolute object-center translate-y-[-20px] w-full max-w-[400px]">
        </div>

        <!-- panel : form -->
        <div class="bg-[rgba(16, 24, 48, 0.85)] border-2 border-cyan-400 rounded-lg p-10 shadow-panel-cyan text-center">
          <div class="grid mt-2">
            
            <!-- text : score -->
            <p class="text-white text-2xl font-bold" id="best-score">Score: 200</p>

            <button data-target="play" class="relative bg-gradient-to-r from-[#0055ff] to-[#00a3ff] text-white border-hidden py-[15px] px-6 text-base font-bold uppercase tracking-widest rounded-lg cursor-pointer w-full mt-4 shadow-3d-blue hover:shadow-3d-blue-hover hover:bg-gradient-to-r hover:from-[#0066ff] hover:to-[#00bfff] active:shadow-3d-blue-active active:translate-y-[4px] ">Save Game</button>

            <button data-target="play" class="relative bg-gradient-to-r from-[#e3ae10] to-[#facc15] text-white border-hidden py-[15px] px-6 text-base font-bold uppercase tracking-widest rounded-lg cursor-pointer w-full mt-4 shadow-3d-yellow hover:shadow-3d-yellow-hover hover:bg-gradient-to-r hover:from-[#d3a10c] hover:to-[#facc15] active:shadow-3d-yellow-active active:translate-y-[4px]">Score Board</button>
          </div>
        </div>      
      </div>
    </div>
  </section>

  <!-- script : js -->
  <script src="js/script.js"></script>

</body>

</html>