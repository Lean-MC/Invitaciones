
// Fecha objetivo: 22 de diciembre de 2023 a las 22:00 horas
const fechaObjetivo = new Date('December 22, 2023 22:00:00').getTime();

// Actualiza el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        clearInterval(intervalo);
        document.getElementById('contador').innerHTML = '¡Es hora!';
    } else {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('contador').innerHTML = `Faltan ${dias} días, ${horas} horas y ${minutos} minutos`;
    }
}

// Coordenadas iniciales para centrar el mapa (Nazca y Yerbal, Flores, Buenos Aires, Argentina)
var coordenadas = [-34.6300627762811, -58.46967220377519];

// Crea un mapa con Leaflet y usa OpenStreetMap como capa de fondo
var map = L.map('map').setView(coordenadas, 16);

// Agrega la capa de OpenStreetMap al mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Puedes agregar un marcador si lo deseas
var marker = L.marker(coordenadas).addTo(map);

// Lista de nombres de archivos de fondo
var backgrounds = ['1.jfif', '2.jfif', '3.jfif', '4.jfif', '5.jfif','6.jfif','7.jfif'];

// Índice actual en la lista de fondos
var index = 0;

// Elemento div que contiene el fondo
var fondoDiv = document.getElementById('fondoDiv');

// Función para cambiar el fondo
function cambiarFondo() {
    var rutaImagen = `imagenes/${backgrounds[index]}`;
    fondoDiv.style.backgroundImage = `url('${rutaImagen}')`;
    index = (index + 1) % backgrounds.length;
}

// Cambiar fondo cada 3 segundos
setInterval(cambiarFondo, 3000);






