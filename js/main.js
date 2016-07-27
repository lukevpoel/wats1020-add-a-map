//Begin by adding your on ready handler here, and then create the
//rest of your functions inside the on ready handler.
$( document ).ready(function(){
  //Inside of your on ready handler, invoke the Leaflet.js library
  // to draw a map in your `#map-container` div.
  // create a map in the "map" div, set the view to a given place and zoom
  //Add 2 layers to your map you have visuals. Use the Open Street Maps
  // tiles served through the MapQuest CDN. Consult this example to set up
  // the map tiles layers:
  //street layer
  var map = L.map('map-container',{
    center: [46.852312, -121.759689],
    minZoom: 10,
    maxZoom: 18,
    zoom: 12
  });

  //OpenStreetMap Layer
  var osmLayer = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: "© <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors",
  });

  //satellite layer
  var satLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/lukevpoel/ciqx4xhq20000bjnaml7jdaqf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ', {
  attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  });

  //terrain layers
  var terrainLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/lukevpoel/ciqx2axo10000bkm1516optzo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ', {
  attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  });

  //Add all layers to the map
  var mapLayers = {
      "Satellite": satLayer,
      "Terrain View": terrainLayer,
      "Open Street Maps": osmLayer
  };

  //open the map
  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);
  /** tried another method for adding markers that wasn't working. Code is here in case I can work on it later
  for ( var i=0; i < markers.length; ++i )
  {
     L.marker( [markers[i].lat, markers[i].lng] )
        .bindPopup( '<a href="' + markers[i].desc + '" target="markers.js">' + markers[i].name + '</a>' )
        .addTo( map );
  }**/

  //Customize that Map to show markers with popups at no fewer than 3
  // interesting locations. (You'll need to figure out the latitude/longitude for
  // these locations using a mapping tool such as Google Maps.)
  //var peakMarker = L.marker([46.852, -121.760]).addTo(map);
  //peakMarker.bindPopup("Welcome to Mt. Rainier!</b><br>This peak is 14,392 feet high.");

  var paradiseCircle = L.circle([46.786020, -121.734973], 250, {
    color: 'red',
    fillColor: 'green',
    fillOpacity: 0.7,
    opacity: 1
  }).addTo(map);
  paradiseCircle.bindPopup("Welcome to Paradise!</b><br>Paradise is the name of an area at approximately 5,400 feet on the south slope of Mount Rainier in Mount Rainier National Park in Washington, United States.");

  var muirMarker = L.marker([46.835446, -121.731636]).addTo(map).bindPopup('Welcome');
  muirMarker.bindPopup("Welcome to Camp Muir!</b><br>Camp Muir represents a dividing line: this is as high as you can go on Mount Rainier without a climbing permit. From here, you get a close-up view that few visitors to the park ever see: hanging glaciers, towering seracs, yawning crevasses, and thundering rockfall as the ridges of ash and breccia high above melt and crumble in the heat of the sun.");

  var peakCircle = L.circle([46.852, -121.760], 500, {
    color: 'green',
    fillColor: 'red',
    fillOpacity: 0.7,
    opacity: 1
  }).addTo(map);
  peakCircle.bindPopup("Welcome to Mt. Rainier!</b><br>This peak is 14,392 feet high.");
});
