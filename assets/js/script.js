const Config = {
    BtnConfig : document.getElementById('btn-config'),
    BtnFechar : document.getElementById('config-fechar'),
    WindowConfig : document.getElementById('config'),
    Overlay : document.getElementById('overlay'),
    BtnSalvar : document.getElementById('config-salvar'),
    MsgErro : document.getElementById('erro')
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
    TempoAtivo : false,
    Skip : false, // Botão de pular não foi apertado
    CronoMain : null
}


const BlockTimer = {
    secao : document.getElementById('block-timer'),
    BlocoAtual : document.getElementById('block-atual'),
    BlocoTotal : document.getElementById('block-total'),
    min : document.getElementById('block-min'),
    seg : document.getElementById('block-seg'),
    reiniciar : false,
    DuracaoBlockTimer : 0,
    CronoBlock : null
}

// Abrir / Fechar configurações
function AbrirConfig() {
    Config.WindowConfig.showModal()
    Config.Overlay.style.display = 'block'
}

function FecharConfig() {
    Config.WindowConfig.close()
    Config.Overlay.style.display = 'none'
}

function SalvarConfig() {
    if (TimerDisplay.TempoAtivo == true) {
        Config.MsgErro.style.top = '10px'
        Config.MsgErro.innerText = 'Erro: Pause ou cancele o timer para alterar as configurações.'
    } else {
        let campoHr = document.getElementById('horas-id').value
        let campoMin = document.getElementById('minutos-id').value
        let campoBlock = document.getElementById('quebra-id').value

        campoHr < 10 ? TimerDisplay.hr.innerText = `0${campoHr}` : TimerDisplay.hr.innerText = `${campoHr}`

        campoMin < 10 ? TimerDisplay.min.innerText = `0${campoMin}` : TimerDisplay.min.innerText = `${campoMin}`

        campoBlock < 10 ? BlockTimer.min.innerText = `0${campoBlock}` : BlockTimer.min.innerText = `${campoBlock}`
        FecharConfig()
    }
}

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

// Quando apertar o btn-start aparecer fazer o timer funcionar
function Iniciar() {
    BlockTimer.secao.style.display = 'block'
    TimerDisplay.BtnStart.style.display = 'none'
    TimerDisplay.BtnPause.style.display = 'block'
    TimerDisplay.BtnCancel.style.display = 'block'
    TimerDisplay.BtnSkip.style.display = 'block'

    TimerDisplay.TempoAtivo = true

    TimerDisplay.hr = document.getElementById('main-hr')
    TimerDisplay.min = document.getElementById('main-min')
    TimerDisplay.seg = document.getElementById('main-seg')

    TimerDisplay.DuracaoTimerMain = (Number(TimerDisplay.hr.innerText) * 3600) + (Number(TimerDisplay.min.innerText) * 60) + Number(TimerDisplay.seg.innerText)
    TimerDisplay.CronoMain = setInterval(RodarTimerMain, 1000)
}

// Quando apertar no botão de pausar, o timer pausa e aparece o botão de despausar
function Pausar() {
    TimerDisplay.BtnPause.style.display = 'none'
    TimerDisplay.BtnPlay.style.display = 'block'
    TimerDisplay.Pause = true

    clearInterval(TimerDisplay.CronoMain)
}

// Quando apertar no botão de despausar, o timer despausa e aparece o botão de pausar
function Play() {
    TimerDisplay.BtnPause.style.display = 'block'
    TimerDisplay.BtnPlay.style.display = 'none'
    TimerDisplay.Pause = false

    TimerDisplay.CronoMain = setInterval(RodarTimerMain, 1000)
}

// Quando apertar o botão de cancelar, o timer se reiniará por completo
function Cancel() {
    clearInterval(TimerDisplay.CronoMain)

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

Config.BtnConfig.addEventListener('click', AbrirConfig)
Config.BtnFechar.addEventListener('click', FecharConfig)
Config.BtnSalvar.addEventListener('click', SalvarConfig)
TimerDisplay.BtnStart.addEventListener('click', Iniciar)
TimerDisplay.BtnPause.addEventListener('click', Pausar)
TimerDisplay.BtnPlay.addEventListener('click', Play)
TimerDisplay.BtnCancel.addEventListener('click', Cancel)

/*
Lista do que falta:
- A lógica de reiniciar o bloco quando terminar o bloco anterior
- Terminar  a lógica de pular um bloco
- Fazer as configurações
- terminar a lógica de fechar o timer
- Adicionar as mensagens de erro
*/