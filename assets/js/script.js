var timer_horas = document.getElementById("horas");
var timer_minutos = document.getElementById("minutos");
var timer_segundos = document.getElementById("segundos");

var bloco_timer = document.getElementById("marcador-tempo");
var bloco_minutos = document.getElementById("bloco-minutos");
var bloco_segundos = document.getElementById("bloco-segundos");
var bloco_atual = document.getElementById("bloco-atual");
var bloco_total = document.getElementById("bloco-total");

var botao_configuracao = document.getElementById("botao-configuracoes");
var botao_iniciar = document.getElementById("botao-iniciar");
var botao_pausar = document.getElementById("botao-pause");
var botao_play = document.getElementById("botao-play");
botao_fechar = document.getElementById('fechar')

var config = document.getElementById('config')

botao_iniciar.addEventListener("click", Iniciou);
botao_play.addEventListener("click", Pausou);
botao_pausar.addEventListener("click", Play);
botao_configuracao.addEventListener('click', AbrirConfig)
botao_fechar.addEventListener('click', FecharConfig)



// Iniciar Timer
function Iniciou() {
  bloco_timer.style.display = "block";
  botao_iniciar.style.display = "none";
  botao_play.style.display = "inline-block";

  // Botar o timer principal para funcionar
  // Botar o bloco do timer para funcionar
}

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

// Abrir configurações
function AbrirConfig() {
    config.showModal() 
}

function FecharConfig() {
    config.close()
}