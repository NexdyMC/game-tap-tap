
var poin = 0;
const btn_press = document.getElementById("btn-press-poin");
const poinscore = document.getElementById("score-point");

btn_press.addEventListener("click", function() {
    poin++;
    poinscore.innerHTML = poin;
})