//Begin by adding your on ready handler here, and then create the
//rest of your functions inside the on ready handler.
$( document ).ready(function(){
  // create a map in the "map" div, set the view to a given place and zoom

  //street layer
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 10, maxZoom: 18, attribution: osmAttrib});

  //satellite layer
  var satLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/lukevpoel/ciqx4xhq20000bjnaml7jdaqf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ', {
  attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  minZoom: 10, maxZoom: 18,
  });

  //terrain layers
  var terrainLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/lukevpoel/ciqx2axo10000bkm1516optzo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ', {
  attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  minZoom: 10, maxZoom: 18,
  });

  //Add all layers to the map
  var mapLayers = {
      "Satellite": satLayer,
      "Terrain View": terrainLayer,
      "Open Street Maps": osm
  }

  //open the map
  var map = L.map('map-container').setView([46.852312, -121.759689], 12);

  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);

  var peakMarker = L.marker([46.852, -121.760]).addTo(map);
  peakMarker.bindPopup("Welcome to Mt. Rainier!</b><br>This peak is 14,392 feet high.");

  var paradiseMarker = L.marker([46.786020, -121.734973]).addTo(map);
  paradiseMarker.bindPopup("Welcome to Paradise!</b><br>Paradise is the name of an area at approximately 5,400 feet on the south slope of Mount Rainier in Mount Rainier National Park in Washington, United States.");

})

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
