navigator.geolocation.getCurrentPosition(function(position){
    const {latitude, longitude} = position.coords
    coord = [latitude, longitude]
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`)
    console.log('Accuracy of location:', position.coords.accuracy);
    var map = L.map('map').setView(coord, 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coord).addTo(map)
        .bindPopup('Your Location')
        .openPopup();
},function(){
    alert('location not found')
})
