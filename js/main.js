/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [42.963624, -85.665946],
  zoom: 8
});

// Try some differnet basemaps:
// basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
basemapURL = "http://a.tile.stamen.com/toner/{z}/{x}/{y}.png"
 // basemapURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


var Stamen_TonerLite = L.tileLayer(basemapURL, {
// if you change the basemap, and publish it on the web, you should attribute accurately
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


/* =====================

Lab 1 - GeoJSON + Review

===================== */


var mapMarkers = function(data) {
  var markers = [];
    _.each(data, function(feature) {
      var m = L.marker([Number(feature.LAT), Number(feature.LNG)]).bindPopup(feature.NAME);
      markers.push(m);
      m.addTo(map);
  });
  return markers;
};

var hospital_markers = mapMarkers(hospitalsJson);



var myStyle = function(feature) {
  if (feature.properties.INDEGO_STATION == true) {
    console.log("trues")
  return {fillColor: 'green'};
} else return {fillColor: 'red'}
};
