// Make the COLSTER map usable script by PicelBoi

// XL Map definitions
var xlMapWidth = 4952;
var xlMapHeight = 2896;
var xlMapLeft = -128.225218;
var xlMapRight = -64.0593194;

//var xlMapLeft = -126.73410285179935;
//var xlMapRight = -63.618689263853;
//var xlMapBottom = 22.112791914850302;

var xlMapBottom = 21.1857919148503;

// Map's "resolution"
var screenWidth = 540;
var screenHeight = 360;

var regScreenWidth = 1620;
var regScreenHeight = 1080;

// Function to convert lat/lon to map x and y.
// from https://stackoverflow.com/questions/2103924/mercator-longitude-and-latitude-calculations-to-x-and-y-on-a-cropped-map-of-the
function convertGeoToPixel(
  latitude,
  longitude,
  mapWidth, // in pixels
  mapHeight, // in pixels
  mapLonLeft, // in degrees
  mapLonRight,
  mapLatBottom // in degrees
) {
  var mapLonDelta = mapLonRight - mapLonLeft;
  var mapLatBottomDegree = (mapLatBottom * Math.PI) / 180;
  var x = (longitude - mapLonLeft) * (mapWidth / mapLonDelta);

  latitude = (latitude * Math.PI) / 180;
  var worldMapWidth = ((mapWidth / mapLonDelta) * 360) / (2 * Math.PI);
  var mapOffsetY = (worldMapWidth / 2) * Math.log((1 + Math.sin(mapLatBottomDegree)) / (1 - Math.sin(mapLatBottomDegree)));
  var y = (mapHeight - ((worldMapWidth / 2) * Math.log((1 + Math.sin(latitude)) / (1 - Math.sin(latitude))) - mapOffsetY) - ((locationConfig.mainCity.lat - 40.6557)*5));

  return [x, y];
}

function centerBaseMap(lat, lon) {
  var xy = convertGeoToPixel(
    lat,
    lon,
    xlMapWidth,
    xlMapHeight,
    xlMapLeft,
    xlMapRight,
    xlMapBottom
  );

  var dopplerBaseMapElement = document.getElementById("radar-doppler-map");
  var dopplerBaseMapCityElement = document.getElementById(
    "radar-doppler-map-cities"
  );
  var thisShouldntExist = document.getElementById("radar-doppler-map-cities-1");

  var style = "left: " + -(xy[0] - screenWidth / 2) + "px; top: " + -(xy[1] - screenHeight / 2) + "px;";

  dopplerBaseMapElement.setAttribute("style", style);

  dopplerBaseMapCityElement.setAttribute("style", style);

  thisShouldntExist.setAttribute("style", style);
}

function centerBaseMapRegional(lat, lon) {
  var xy = convertGeoToPixel(
    lat,
    lon,
    xlMapWidth,
    xlMapHeight,
    xlMapLeft,
    xlMapRight,
    xlMapBottom
  );

  var regionalBaseMapElement = document.getElementById("radar-regional-map");
  var regionalBordersElement = document.getElementById("radar-regional-map-borders");
  var satBaseMapElement = document.getElementById("radar-sat-map");
  var satBordersElement = document.getElementById("radar-sat-map-borders");

  var style =
    "left: " +
    -(xy[0] - regScreenWidth / 2) +
    "px; top: " +
    -(xy[1] - regScreenHeight / 2) +
    "px;";

  regionalBaseMapElement.setAttribute("style", style);
  regionalBordersElement.setAttribute("style", style);
  satBaseMapElement.setAttribute("style", style);
  satBordersElement.setAttribute("style", style);
}

function mapSetBottom(bottom) {
  xlMapBottom = bottom;
  centerBaseMap(locationConfig.radar.localCoords.lat, locationConfig.radar.localCoords.lon);
  centerBaseMapRegional(
    locationConfig.radar.regionalCoords.lat,
    locationConfig.radar.regionalCoords.lon
  );
}

function mapSetLeft(left) {
  xlMapLeft = left;
  centerBaseMap(locationConfig.radar.localCoords.lat, locationConfig.radar.localCoords.lon);
  centerBaseMapRegional(
    locationConfig.radar.regionalCoords.lat,
    locationConfig.radar.regionalCoords.lon
  );
}

function mapSetRight(right) {
  xlMapRight = right;
  centerBaseMap(locationConfig.radar.localCoords.lat, locationConfig.radar.localCoords.lon);
  centerBaseMapRegional(
    locationConfig.radar.regionalCoords.lat,
    locationConfig.radar.regionalCoords.lon
  );
}

function mapPrintLoc() {
}