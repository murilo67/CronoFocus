// timer.js
var botao_iniciar = document.getElementById("botao-iniciar");
var botao_pausar = document.getElementById("botao-pause");
var botao_play = document.getElementById("botao-play");
var botao_skip = document.getElementById('botao-skip')

botao_iniciar.addEventListener("click", Iniciou);
botao_play.addEventListener("click", Pausou);
botao_pausar.addEventListener("click", Play);

// Dar play no timer
function Play() {
  botao_play.style.display = "inline-block";
  botao_pausar.style.display = "none";
}

// Pausar o timer
function Pausou() {
  botao_pausar.style.display = "inline-block";
  botao_play.style.display = "none";
}

// Iniciar Timer
function Iniciou() {
  bloco_timer.style.display = "block";
  botao_iniciar.style.display = "none";
  botao_play.style.display = "inline-block";
  botao_skip.style.display = "inline-block";

  // Botar o timer principal para funcionar
}

// block.js
// Botar o bloco do timer para funcionar
