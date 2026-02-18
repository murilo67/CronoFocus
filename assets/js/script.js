const mainTimer = {
    h_main : document.getElementById('main-h'),
    min_main : document.getElementById('main-min'),
    seg_main : document.getElementById('main-seg'),
    sectionBlock : document.getElementById('section-block')
}

const blockTimer = {
    minBlock : document.getElementById('block-min'),
    segBlock : document.getElementById('block-seg'),
    Total : document.getElementById('block-total'),
    Atual : document.getElementById('block-atual')
}

const buttons = {
    start : document.getElementById('btn-start'),
    pausar : document.getElementById('btn-pausar'),
    play : document.getElementById('btn-play'),
    pular : document.getElementById('btn-skip'),
    cancelar : document.getElementById('btn-cancel')
}

let horaFutura_main = 0
let horaFutura_block = 0
let tempo_block = 0

function Iniciar() {
    buttons.start.style.display = 'none'
    buttons.pausar.style.display = 'block'
    buttons.pular.style.display = 'block'
    buttons.cancelar.style.display = 'block'
    mainTimer.sectionBlock.style.display = 'block'


}

function rodarTimer() {
    const restante_main = horaFutura_main - Date.now() + 900

    const hora = Math.floor(restante_main / 3600000)
    const minuto = Math.floor(restante_main % 3600000 / 60000)
    const segundo = Math.floor(restante_main % 3600000 % 60000 / 1000)

    hora < 10 ? mainTimer.h_main.innerText = `0${hora}` : mainTimer.h_main.innerText = `${hora}`
    
    minuto < 10 ? mainTimer.min_main.innerText = `0${minuto}` : mainTimer.min_main.innerText = `${minuto}`
    
    segundo < 10 ? mainTimer.seg_main.innerText = `0${segundo}` : mainTimer.seg_main.innerText = `${segundo}`

    //rodarBlock()

    requestAnimationFrame(rodarTimer)
}

/*function rodarBlock() {
    let restanteBlock = horaFutura_block - Date.now() + 900

    const minutoBlock = Math.floor(restanteBlock / 60000)
    const segundoBlock = Math.floor(restanteBlock % 60000 / 1000)

    minutoBlock < 10 ? blockTimer.minBlock.innerText = `0${minutoBlock}` : blockTimer.minBlock.innerText = `${minutoBlock}`

    segundoBlock < 10 ? blockTimer.segBlock.innerText = `0${segundoBlock}` : blockTimer.segBlock.innerText = `${segundoBlock}`

   if (restanteBlock <= 1000) {
        horaFutura_block = Date.now() + tempo_block
        return
    }
}*/

buttons.start.addEventListener('click', () => {
    const duracao_main = Number(mainTimer.h_main.innerText) * 3600000 + Number(mainTimer.min_main.innerText) * 60000 // em milisegundo
    horaFutura_main = Date.now() + duracao_main

    /*const duracao_block = Number(blockTimer.minBlock.innerText) * 60000
    horaFutura_block = Date.now() + duracao_block

    tempo_block = duracao_block*/

    requestAnimationFrame(rodarTimer)
})
buttons.start.addEventListener('click', Iniciar)