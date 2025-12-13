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
    var mensagem_erro = document.getElementById('mensagem-erro')

    // Colocar validação do campo do timer

    if (campo_horas > 24 || campo_minutos > 59 || campo_segundos > 59)  {
        mensagem_erro.innerText = 'Inválido. Tente Novamente'
    } else {
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

    
}

function AbrirConfig() {
    config.showModal()
    tela_overlay.style.display = 'block'
}

function FecharConfig() {
    config.close()
    tela_overlay.style.display = 'none'
}