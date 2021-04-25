let mymap = L.map('mapid').setView([51.505,-0.09],13);

L.tileLayer('./images/MC2-tourist.jpg',{
  maxZoom:18,
  id: 'mapbox/streets',
  tileSize:L.point(2740,1535),
  zoomOffset:-1
}).addTo(mymap);