var lampada = document.getElementById('lamp')
lampada.addEventListener('click', acendeLampada)

function acendeLampada(e) {

    if (e.target.src.match("lampada_on.gif")) {
        e.target.src = "lampada_off.gif"
    }
    else {
        e.target.src = "lampada_on.gif"
    }
}
