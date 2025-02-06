var map = L.map('map').setView([4.568491812057869, -74.07255365895601], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Definir los sitios de interés (con nombre, coordenadas y descripción)
var sitios = [
    {
        nombre: "Escuelita",
        latlng: [4.56750618320133, -74.06884471058297],
        descripcion: "Institución distrital de educación primaria."
    },
    {
        nombre: "Salon Comunal",
        latlng: [4.567965319693443, -74.06951085932957]
    },
    {
        nombre: "Parque Simón Bolívar",
        latlng: [4.630435, -74.102618],
        descripcion: "Un gran parque urbano ideal para caminatas y actividades al aire libre."
    },
    {
        nombre: "Monserrate",
        latlng: [4.595348, -74.240714],
        descripcion: "Un santuario ubicado en la cima de la montaña Monserrate, con vistas espectaculares de la ciudad."
    },
    {
        nombre: "Biblioteca Luis Ángel Arango",
        latlng: [4.598108, -74.073758],
        descripcion: "Una de las bibliotecas más importantes y visitadas de Colombia."
    }
];

// Agregar los marcadores a cada sitio de interés
sitios.forEach(function(sitio) {
    L.marker(sitio.latlng)
        .addTo(map)
        .bindPopup("<b>" + sitio.nombre + "</b><br>" + sitio.descripcion)
        .openPopup();
});