const Config = {
    BtnConfig : document.getElementById('btn-config'),
    DarkMode : true
}

const TimerDisplay = {
    BtnStart : document.getElementById('btn-start'),
    BtnPause : document.getElementById('btn-pause'),
    BtnPlay : document.getElementById('btn-play'),
    BtnCancel : document.getElementById('btn-cancel'),
    BtnSkip : document.getElementById('btn-skip'),
    hr : document.getElementById('main-hr'),
    min : document.getElementById('main-min'),
    seg : document.getElementById('main-seg'),
    Pause : false, // Botão de pausar não foi apertado
    Cancel : false, // Botão de cancelar não foi apertado
    Skip : false // Botão de pular não foi apertado
}

const BlockTimer = {
    secao : document.getElementById('block-timer'),
    BlocoAtual : document.getElementById('block-atual'),
    BlocoTotal : document.getElementById('block-total'),
    hr : document.getElementById('block-min'),
    min : document.getElementById('block-seg')
}

// Abrir / Fechar configurações


// Quando apertar o btn-start aparecer fazer o timer funcionar
function Iniciar() {
    BlockTimer.secao.style.display = 'block'
    TimerDisplay.BtnStart.style.display = 'none'
    TimerDisplay.BtnPause.style.display = 'block'
    TimerDisplay.BtnCancel.style.display = 'block'
    TimerDisplay.BtnSkip.style.display = 'block'
}

// Quando apertar no botão de pausar, o timer pausa e aparece o botão de despausar
function Pausar() {
    TimerDisplay.BtnPause.style.display = 'none'
    TimerDisplay.BtnPlay.style.display = 'block'
    TimerDisplay.Pause = true
}

// Quando apertar no botão de despausar, o timer despausa e aparece o botão de pausar
function Play() {
    TimerDisplay.BtnPause.style.display = 'block'
    TimerDisplay.BtnPlay.style.display = 'none'
    TimerDisplay.Pause = false
}

// Quando apertar no botão de pular, o bloco avançará e reiniciará a contagem e o timer irá descontar
function Skip() {
    if (Number(BlockTimer.BlocoAtual.innerText) < Number(BlockTimer.BlocoTotal.innerText)) {
        let atual = Number(BlockTimer.BlocoAtual.innerText) + 1
        let total = Number(BlockTimer.BlocoTotal.innerText)

        if (atual < 10) {
            BlockTimer.BlocoAtual.innerText = `0${atual}`
        } else {
            BlockTimer.BlocoAtual.innerText = `${atual}`
        }

        // Reiniciar bloco  e descontar no timer caso usuário pular
        
        if (atual == Number(BlockTimer.BlocoTotal.innerText)) {
            TimerDisplay.BtnSkip.style.display = 'none'
        }
    }
}

// Quando apertar o botão de cancelar, o timer se reiniará por completo
function Cancel() {
    BlockTimer.secao.style.display = 'none'
    TimerDisplay.BtnStart.style.display = 'block'
    TimerDisplay.BtnPause.style.display = 'none'
    TimerDisplay.BtnCancel.style.display = 'none'
    TimerDisplay.BtnSkip.style.display = 'none'
    TimerDisplay.BtnPlay.style.display = 'none'

    // Fazer o timer parar de funcionar e reiniciar
    BlockTimer.BlocoAtual.innerText = '01'
}

TimerDisplay.BtnStart.addEventListener('click', Iniciar)
TimerDisplay.BtnPause.addEventListener('click', Pausar)
TimerDisplay.BtnPlay.addEventListener('click', Play)
TimerDisplay.BtnSkip.addEventListener('click', Skip)
TimerDisplay.BtnCancel.addEventListener('click', Cancel)
