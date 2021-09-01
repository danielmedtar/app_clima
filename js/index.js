const pantalla = document.getElementById('reloj')
const contenedorFecha = document.getElementById('fecha')
const audio = new Audio('audio/alarma.wav')
audio.loop = true;
let alarmaOn = null;
let alarmaOff = null;


function actualizarFecha() {
    const date = new Date()

    const fecha = formatearFecha(date.getDate())
    const mes = formatearFecha(date.getMonth() + 1)
    const anio = formatearFecha(date.getFullYear())

    contenedorFecha.innerText = `${fecha}${'/'}${mes}${'/'}${anio}`
}
actualizarFecha()


function actualizarHora() {
    const date = new Date()

    const hora = formatearHora(date.getHours())
    const minutos = formatearHora(date.getMinutes())
    const segundos = formatearHora(date.getSeconds())

    pantalla.innerText = `${hora} : ${minutos} : ${segundos}`
}

function formatearFecha(dia) {
    if(dia < 10) {
        return '0' + dia
    }
    return dia;
}
function formatearHora(horas) {
    if(horas < 10) {
        return '0' + horas
    }
    return horas
}

function establecerAlarma(value) {
    alarmaOn = value;
}

function guardarAlarma() {
    if(alarmaOn) {
        const actual = new Date();
        const sonar = new Date(alarmaOn)

        if(sonar > actual) {
            const timeout = sonar.getTime() - actual.getTime();
            alarmaOff = setTimeout(() => audio.play(), timeout);
            alert('Alarma Generada')
        }
    }
}

function borrarAlarma() {
    audio.pause()
    if(alarmaOff) {
        clearTimeout(alarmaOff)
        alert('Alarma Detenida')
    }
}

setInterval(actualizarHora, 1000);