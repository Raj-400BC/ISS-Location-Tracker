// console.log('fetching the current location of ISS');
// async function issLocater(){
//     const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
//     console.log(response);
//     const dataiss = await response.json();
//     const {name , latitude , longitude} = dataiss;
//     console.log(dataiss)
//     document.getElementById('name').textContent = name;
//      document.getElementById('lon').textContent = latitude;
//      document.getElementById('lat').textContent = longitude;
//      var map = L.map('map').setView([latitude, longitude], 13);
//      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//          maxZoom: 19,
//          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//      }).addTo(map);
//      var marker = L.marker([latitude, longitude]).addTo(map);
//      var circle = L.circle([latitude, longitude], {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 500
//     }).addTo(map);
     

//      // Here I am using '.textContent' instead of '.innerHTML' because textContent has better performance because its value is not parsed as HTML and using textContent can prevent XSS attacks.  -- via google


// }


// issLocater().catch(error =>{
//     console.log(error)
// });

var map;

setInterval(async function issLocater(){
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    console.log(response);
    const dataiss = await response.json();
    const {name , latitude , longitude} = dataiss;
    console.log(dataiss)
    document.getElementById('name').textContent = name;
     document.getElementById('lon').textContent = latitude;
     document.getElementById('lat').textContent = longitude;
     map = L.map('map').setView([latitude, longitude], 13);
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map);
     var marker = L.marker([latitude, longitude]).addTo(map);
     var circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
}, 1000);