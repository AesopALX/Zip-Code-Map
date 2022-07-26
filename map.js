const zips = [
    '22301',
    '00610',
    '34456'.
    '36273'
];

var map = L.map('map', {fullscreenControl: true}).setView([38.90, -77.09], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

zips.forEach(zip => {
    L.marker([latLongs[zip]['long'], latLongs[zip]['lat']]).addTo(map);
})
