var timer_horas = document.getElementById("horas");
var timer_minutos = document.getElementById("minutos");
var timer_segundos = document.getElementById("segundos");

var bloco_timer = document.getElementById("marcador-tempo");
var bloco_minutos = document.getElementById("bloco-minutos");
var bloco_segundos = document.getElementById("bloco-segundos");
var bloco_atual = document.getElementById("bloco-atual");
var bloco_total = document.getElementById("bloco-total");

// config.js
var botao_configuracao = document.getElementById("botao-configuracoes");
var config = document.getElementById('config')
var tela_overlay = document.getElementById('overlay')
var botao_fechar = document.getElementById('fechar')
var salvar_config = document.getElementById('salvar-config')

// Abrir e fechar configurações
botao_configuracao.addEventListener('click', AbrirConfig)
botao_fechar.addEventListener('click', FecharConfig)
salvar_config.addEventListener('click', SalvarConfig)

function SalvarConfig() {
    var campo_horas = Number(document.getElementById('horas-id').value)
    var campo_minutos = Number(document.getElementById('minutos-id').value)
    var campo_segundos = Number(document.getElementById('segundos-id').value)

    timer_horas.innerHTML = `${campo_horas}`
    timer_minutos.innerHTML = `${campo_minutos}`
    timer_segundos.innerHTML = `${campo_segundos}`

    if (campo_horas < 10) {
        timer_horas.innerHTML = `0${campo_horas}`
    }
    
    if (campo_minutos < 10) {
        timer_minutos.innerHTML = `0${campo_minutos}`
    }

    if (campo_segundos < 10) {
        timer_segundos.innerHTML = `0${campo_segundos}`
    }

    config.close()
    tela_overlay.style.display = 'none'
}

function AbrirConfig() {
    config.showModal()
    tela_overlay.style.display = 'block'
}

function FecharConfig() {
    config.close()
    tela_overlay.style.display = 'none'
}

// timer.js
var botao_iniciar = document.getElementById("botao-iniciar");
var botao_pausar = document.getElementById("botao-pause");
var botao_play = document.getElementById("botao-play");

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

  // Botar o timer principal para funcionar
}

// block.js
// Botar o bloco do timer para funcionar