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
        nombre: "Jardín Casa Vecinal",
        latlng: [4.568104119551267, -74.06975453613973],
        descripcion: "Institución educativa para primera infancia."
    },
    {
        nombre: "Donde Don Pedro",
        latlng: [4.567655015808869, -74.07042757306428],
        descripcion: "Tienda de Viveres atendida por Don Pedro."
    },
    {
        nombre: "Donde La Gata",
        latlng: [4.567548919929917, -74.07036068377327],
        descripcion: "Cigarrería"
    }
];

// Agregar los marcadores a cada sitio de interés
sitios.forEach(function(sitio) {
    L.marker(sitio.latlng)
        .addTo(map)
        .bindPopup("<b>" + sitio.nombre + "</b><br>" + sitio.descripcion)
        .openPopup();
});