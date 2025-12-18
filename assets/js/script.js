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
    DuracaoTimerMain : 0,
    Pause : false, // Botão de pausar não foi apertado
    Cancel : false, // Botão de cancelar não foi apertado
    Skip : false, // Botão de pular não foi apertado
    CronoMain : null
}
TimerDisplay.DuracaoTimerMain = (Number(TimerDisplay.hr.innerText) * 3600) + (Number(TimerDisplay.min.innerText) * 60) + Number(TimerDisplay.seg.innerText)


const BlockTimer = {
    secao : document.getElementById('block-timer'),
    BlocoAtual : document.getElementById('block-atual'),
    BlocoTotal : document.getElementById('block-total'),
    min : document.getElementById('block-min'),
    seg : document.getElementById('block-seg'),
    DuracaoBlockTimer : 0,
    CronoBlock : null
}
BlockTimer.DuracaoBlockTimer = Number(BlockTimer.min.innerText) * 60

// Colocar dentro do SalvarConfig
let Total = TimerDisplay.DuracaoTimerMain / BlockTimer.DuracaoBlockTimer

if (Total < 10) {
    BlockTimer.BlocoTotal.innerText = `0${Math.ceil(Total)}`
} else {
    BlockTimer.BlocoTotal.innerText = `${Math.ceil(Total)}`
}


// Abrir / Fechar configurações


// Rodar o Timer
function RodarTimerMain() {
    TimerDisplay.DuracaoTimerMain -= 1

    let HorasMain = Math.floor(TimerDisplay.DuracaoTimerMain / 3600)
    let MinutosMain = Math.floor((TimerDisplay.DuracaoTimerMain % 3600) / 60)
    let SegundosMain = Math.floor((TimerDisplay.DuracaoTimerMain % 3600) % 60)

    if (HorasMain < 10) {
        TimerDisplay.hr.innerText = `0${HorasMain}`
    } else {
        TimerDisplay.hr.innerText = `${HorasMain}`
    }

    if (MinutosMain < 10) {
        TimerDisplay.min.innerText = `0${MinutosMain}`
    } else {
        TimerDisplay.min.innerText = `${MinutosMain}`
    }
    
    if (SegundosMain < 10) {
        TimerDisplay.seg.innerText = `0${SegundosMain}`
    } else {
        TimerDisplay.seg.innerText = `${SegundosMain}`
    }
    
    if (TimerDisplay.DuracaoTimerMain == 0) {
        clearInterval(TimerDisplay.CronoMain)
    }
}

function RodarBlockTimer() {
    BlockTimer.DuracaoBlockTimer -= 1

    let MinutosBlock = Math.floor(BlockTimer.DuracaoBlockTimer / 60)
    let SegundoBlock = BlockTimer.DuracaoBlockTimer % 60

    if (MinutosBlock < 10) {
        BlockTimer.min.innerText = `0${MinutosBlock}`
    } else {
        BlockTimer.min.innerText = `${MinutosBlock}`
    }

    if (SegundoBlock < 10) {
        BlockTimer.seg.innerText = `0${SegundoBlock}`
    } else {
        BlockTimer.seg.innerText = `${SegundoBlock}`
    }

    if (BlockTimer.DuracaoBlockTimer == 0) {
        clearInterval(BlockTimer.CronoBlock)
    }
}

function RodarSobra() {

}

// Quando apertar o btn-start aparecer fazer o timer funcionar
function Iniciar() {
    BlockTimer.secao.style.display = 'block'
    TimerDisplay.BtnStart.style.display = 'none'
    TimerDisplay.BtnPause.style.display = 'block'
    TimerDisplay.BtnCancel.style.display = 'block'
    TimerDisplay.BtnSkip.style.display = 'block'

    TimerDisplay.CronoMain = setInterval(RodarTimerMain, 1000)
    BlockTimer.CronoBlock = setInterval(RodarBlockTimer, 1000)
}

// Quando apertar no botão de pausar, o timer pausa e aparece o botão de despausar
function Pausar() {
    TimerDisplay.BtnPause.style.display = 'none'
    TimerDisplay.BtnPlay.style.display = 'block'
    TimerDisplay.Pause = true

    clearInterval(TimerDisplay.CronoMain)
    clearInterval(BlockTimer.CronoBlock)
}

// Quando apertar no botão de despausar, o timer despausa e aparece o botão de pausar
function Play() {
    TimerDisplay.BtnPause.style.display = 'block'
    TimerDisplay.BtnPlay.style.display = 'none'
    TimerDisplay.Pause = false

    TimerDisplay.CronoMain = setInterval(RodarTimerMain, 1000)
    BlockTimer.CronoBlock = setInterval(RodarBlockTimer, 1000)
}

// Quando apertar no botão de pular, o bloco avançará e reiniciará a contagem e o timer irá descontar
function Skip() {
    if (Number(BlockTimer.BlocoAtual.innerText) < Number(BlockTimer.BlocoTotal.innerText)) {
        let atual = Number(BlockTimer.BlocoAtual.innerText) + 1
        let total = Number(BlockTimer.BlocoTotal.innerText)
        // Reiniciar bloco  e descontar no timer caso usuário pular

        if (atual < 10) {
            BlockTimer.BlocoAtual.innerText = `0${atual}`
        } else {
            BlockTimer.BlocoAtual.innerText = `${atual}`
        }
        
        if (atual == Number(BlockTimer.BlocoTotal.innerText)) {
            TimerDisplay.BtnSkip.style.display = 'none'
        }
    }
}

// Quando apertar o botão de cancelar, o timer se reiniará por completo
function Cancel() {
    clearInterval(TimerDisplay.CronoMain)
    clearInterval(BlockTimer.CronoBlock)

    BlockTimer.secao.style.display = 'none'
    TimerDisplay.BtnStart.style.display = 'block'
    TimerDisplay.BtnPause.style.display = 'none'
    TimerDisplay.BtnCancel.style.display = 'none'
    TimerDisplay.BtnSkip.style.display = 'none'
    TimerDisplay.BtnPlay.style.display = 'none'

    // Fazer o timer parar de funcionar e reiniciar
    BlockTimer.BlocoAtual.innerText = '01'

    clearInterval(TimerDisplay.CronoMain)
}

TimerDisplay.BtnStart.addEventListener('click', Iniciar)
TimerDisplay.BtnPause.addEventListener('click', Pausar)
TimerDisplay.BtnPlay.addEventListener('click', Play)
TimerDisplay.BtnSkip.addEventListener('click', Skip)
TimerDisplay.BtnCancel.addEventListener('click', Cancel)


/*
Lista do que falta:
- A lógica de reiniciar o bloco quando terminar o bloco anterior
- Terminar  a lógica de pular um bloco
- Fazer as configurações
- terminar a lógica de fechar o timer
- Adicionar as mensagens de erro
*/