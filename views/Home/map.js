let latitud = 40.4142;
let longitud = -3.7035;

// Crear el mapa centrado en las nuevas coordenadas
let map = L.map('map').setView([latitud, longitud], 15);

// Añadir la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir marcador en la Carrera de San Francisco
L.marker([latitud, longitud]).addTo(map)
  .bindPopup('Carrera de San Francisco<br>Madrid, España')
  .openPopup();