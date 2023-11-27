function confirmarAsistencia(asistira) {
    // Obtener el código del invitado de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const codigoInvitado = urlParams.get('codigo');

    // Aquí puedes enviar el código del invitado y la respuesta al servidor
    // Puedes usar la función fetch o AJAX para enviar la información al servidor
    // y manejar la lógica de almacenamiento en el servidor como se describió anteriormente
    // ...

    // Por ahora, solo mostramos un mensaje de confirmación al usuario
    alert(asistira ? 'Gracias por confirmar tu asistencia.' : 'Lamentamos que no puedas asistir. ¡Esperamos verte pronto!');
}





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



 

  // Coordenadas para centrar el mapa (Nazca y Yerbal, Flores, Buenos Aires, Argentina)
  var coordenadas = [-34.6300627762811, -58.46967220377519];
  

  // Crea un mapa con Leaflet y usa OpenStreetMap como capa de fondo
  var map = L.map('map').setView(coordenadas, 16);

  // Agrega la capa de OpenStreetMap al mapa
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Puedes agregar un marcador si lo deseas
  L.marker(coordenadas).addTo(map)
      .bindPopup('Nazca 35 entre Nazca y Yerbal, Flores')
      .openPopup();




const backgrounds = [
    '1.jfif',
    '2.jfif',
    '3.jfif',
    '4.jfif',
    '5.jfif',
    // Agrega más nombres de archivo según sea necesario
];

let index = 0;
const fondoDiv = document.getElementById('fondoDiv');

function cambiarFondo() {
    const rutaImagen = `imagenes/${backgrounds[index]}`;
    fondoDiv.style.backgroundImage = `url('${rutaImagen}')`;
    index = (index + 1) % backgrounds.length;
}

setInterval(cambiarFondo, 3000);

cambiarFondo(); // Cambia el fondo al cargar la página