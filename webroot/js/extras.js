//  Fisher-Yates shuffle
function shuffle (array) {
	var i = 0,
	    j = 0,
	    temp = null;

	for (i = array.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}
/*
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


function getNextHighestIndex(arr, value) {
    var i = arr.length;
    while (arr[--i] > value);
    return ++i;
}


function getUrlParameter(e) {
	return decodeURI((new RegExp(e + "=(.+?)(&|$)").exec(location.search) || [, null])[1])
}
*/
//convert minutes to hour and minutes
function formatMinutes(m){
  var hours = Math.trunc(m/60);
  var minutes = m % 60;
  return (((hours != 0) ? (hours + ' h ') : '') + minutes +' min');
}
function differenceUTC(utcTime) {
	currentEpoch = Date.now()
	otherEpoch = new Date(utcTime)
	otherEpoch = otherEpoch.getTime()
	otherEpoch = Math.floor(otherEpoch)
	diff = Math.round((otherEpoch - currentEpoch)/1000)
	hours = Math.floor(diff / 3600)
	minutes = Math.floor((diff % 3600) / 60)
	if (hours == 0) {
		hours = ""
	} else {
		hours = hours + " h "
	}
	minutes = minutes + " min"
	return hours + minutes
}
/*
// convert celsius to farenheight
function C2F(c){
	return Math.round( c * 9 / 5 + 32 );
}


// meters per second to mph
function mps2mph(meters) {
	return Math.round(  parseFloat(meters) * 2.23694 );
}


// array swap
Array.prototype.swap = function(a,b){ var tmp=this[a];this[a]=this[b];this[b]=tmp;};


function degToCompass(deg){
    val = Math.round((deg/22.5)+.5);
    arr=["N","NE","E","SE","S","SW","W","NW"];
    return arr[(val % 8)];
}



function distance(lat1, lon1, lat2, lon2) {
	var radlat1 = Math.PI * lat1/180,
		radlat2 = Math.PI * lat2/180,
		theta = lon1-lon2,
		radtheta = Math.PI * theta/180,
		dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
	return dist;
}


function dewPoint(tem, r){
    tem = -1.0*(tem-32)*5/9	;
    es = 6.112*Math.exp(-1.0*17.67*tem/(243.5 - tem));
    ed = r/100.0*es;
    eln = Math.log(ed/6.112);
    td = -243.5*eln/(eln - 17.67 );
    return Math.round( (td*9/5)+32 );
}

function heatIndex(T, R) { // T = temp, R = relative humidity
	var T2 = T*T, R2= R*R,
		c1 = -42.379, c2 = 2.04901523, c3 = 10.14333127,
		c4 = -0.22475541, c5 = -6.83783*Math.pow(10,-3), c6 = -5.481717*Math.pow(10,-2),
		c7 = 1.22874*Math.pow(10,-3), c8 = 8.5282*Math.pow(10,-4), c9 = -1.99*Math.pow(10,-6);

	return Math.round(c1 + c2*T + c3 *R + c4*T*R + c5*T2 + c6*R2 + c7*T2*R + c8*T*R2 + c9*T2*R2);
}

// ----------------------------------------
// Calculate new Lat/Lng from original points
// on a distance and bearing (angle)
// ----------------------------------------
let llFromDistance = function(latitude, longitude, distance, bearing) {
		// taken from: https://stackoverflow.com/a/46410871/13549
    // distance in KM, bearing in degrees

    const R 		= 6378.1;                         // Radius of the Earth
    const brng	= bearing  	* Math.PI / 180;     // Convert bearing to radian
    let lat 		= latitude	* Math.PI / 180;      // Current coords to radians
    let lon 		= longitude	* Math.PI / 180;

    // Do the math magic
    lat = Math.asin(Math.sin(lat) * Math.cos(distance / R) + Math.cos(lat) * Math.sin(distance / R) * Math.cos(brng));
    lon += Math.atan2(Math.sin(brng) * Math.sin(distance / R) * Math.cos(lat), Math.cos(distance/R)-Math.sin(lat)*Math.sin(lat));

    // Coords back to degrees and return
    return [ (lat  * 180 / Math.PI), (lon  * 180 / Math.PI) ];

}

let pointsOnMapCircle = function(latitude, longitude, distance, numPoints) {
	const points = [];
  for (let i=0; i <= numPoints - 1; i++) {
  	const bearing = Math.round((360 / numPoints) * i);
    console.log(bearing, i);
  	const newPoints = llFromDistance(latitude, longitude, distance, bearing);
    points.push(newPoints);
  }
 return points;
}
*/
function fadeSlideIn(div) {
	$(div).css("z-index", "1")
	try {
		$(div + ' .slide-data').css("z-index", "1")
	} catch (error) {}
	$(div + ' .skeleton').css("z-index", "1")
	$(div).fadeIn(0)
}

function fadeSlideOut(div, time) {//this one you fade
	time = time || 0
	$(div).css("z-index", "3")
	try {
		$(div + ' .slide-data').css("z-index", "3")
	} catch (error) {}
		$(div + ' .skeleton').css("z-index", "3")
	$(div).fadeOut(time)
}

function getIcon(div, iconcode, wind, language) {
	language = language || "english"
	try {
		if (iconcode == "blank") {
			div.css('background-image', 'url("/images/icons/blank.png')
		} else {
			if (iconcode == 44 || iconcode == null || iconcode == undefined || iconcode == "") {
				div.css('background-image', 'url("/images/icons/44.png')
			} else {
				if (wind >= 30) {
					if (language == "spanish") {
						div.css('background-image', 'url("/images/icons/24spanish.png')
					} else {
						div.css('background-image', 'url("/images/icons/24.png')
					}
				} else {
					if (language == "spanish" && (iconcode == 8 || iconcode == 10 || iconcode == 19 || iconcode == 20 || iconcode == 21 || iconcode == 22 || iconcode == 23 || iconcode == 24 || iconcode == 25 || iconcode == 36)) {
						div.css('background-image', 'url("/images/icons/'+iconcode+'spanish.png')
					} else {
						div.css('background-image', 'url("/images/icons/'+iconcode+'.png')
					}
				}
			}
		}
		
	} catch (error) {
		div.css('background-image', 'url("/images/icons/44.png')
	}
}
function getMapAdjustedCenters(lat, lon) {
	//REGIONAL
	//LON
	if (lon > -75) {
		locationConfig.radar.regionalCoords.lon = -75
	} else if (lon < -122) {
		locationConfig.radar.regionalCoords.lon = -117
	} else {
		locationConfig.radar.regionalCoords.lon = locationConfig.mainCity.lon
	}
	//LAT
	if (lat < 28) {
		locationConfig.radar.regionalCoords.lat = 28
	} else if (lat > 45) {
		locationConfig.radar.regionalCoords.lat = 45
	} else {
		locationConfig.radar.regionalCoords.lat = locationConfig.mainCity.lat
	}
	//LOCAL
	//LON
	if (lon > -67.9) {
		locationConfig.radar.localCoords.lon = -67.9
	} else if (lon < -124.1) {
		locationConfig.radar.localCoords.lon = -124.1
	} else {
		locationConfig.radar.localCoords.lon = locationConfig.mainCity.lon
	}
	//LAT
	if (lat < 24.559) {
		locationConfig.radar.localCoords.lat = 24.559
	} else if (lat > 49) {
		locationConfig.radar.localCoords.lat = 49
	} else {
		locationConfig.radar.localCoords.lat = locationConfig.mainCity.lat
	}
}
function adjustTimeZone(userTimeZone, locTimeZone) {
	var timezones = {
		"America/New_York":-5,
		"America/Chicago":-6,
		"Europe/London":0
	}
	var zone = timezones[userTimeZone] - timezones[locTimeZone];
	timezoneDifference = zone;
}
function crawlChooser(alert) {
	var alerts = {
		"Tornado Warning": true,
		"Tornado Watch": true,
		"Flash Flood Watch": true,
		"Flash Flood Warning": true,
		"Flash Flood Statement": true,
		"Severe Thunderstorm Watch":true,
		"Severe Thunderstorm Warning": true,
		"Hurricane Warning": true,
		"Hurricane Watch": true,
		"Hurricane Local Statement": true,
		"Storm Surge Warning": true,
		"Winter Storm Warning": true,
		"Winter Storm Watch": true,
		"Blizzard Warning": true,
		"Severe Weather Statement": true
	}[alert]
	if (alerts !== undefined) {
		return alerts
	} else {
		return false
	}
}
function beepWarning(alert) {
	var alerts = {
		"Tornado Warning": true,
		"Flash Flood Warning": true,
		"Flash Flood Statement": true,
		"Severe Thunderstorm Warning": true,
		"Hurricane Warning": true,
		"Hurricane Local Statement": true,
		"Storm Surge Warning": true,
		"Winter Storm Warning": true,
		"Blizzard Warning": true,
	}[alert]
	if (alerts !== undefined) {
		return alerts
	} else {
		return false
	}
}
function beepWatch(alert) {
	var alerts = {
		"Tornado Watch": true,
		"Flash Flood Watch": true,
		"Severe Thunderstorm Watch":true,
		"Hurricane Watch": true,
		"Winter Storm Watch": true,
	}[alert]
	if (alerts !== undefined) {
		return alerts
	} else {
		return false
	}
}

function sevalertNum(warningtitle) {
	var alertstatus = {
		"Tornado Warning": 15,
		"Flash Flood Warning": 14,
		"Severe Thunderstorm Warning": 13,
		"Hurricane Warning": 12,
		"Storm Surge Warning": 11,
		"Blizzard Warning": 10,
		"Winter Storm Warning": 9,
		"Tornado Watch": 8,
		"Flash Flood Watch": 7,
		"Severe Thunderstorm Watch": 6,
		"Hurricane Local Statement": 5,
		"Severe Weather Statement": 4,
		"Flash Flood Statement": 3,
		"Hurricane Watch": 2,
		"Winter Storm Watch": 1,
	}[warningtitle]
	if (alertstatus !== undefined) {
		return alertstatus
	} else {
		return -1
	}
}
function getCookie(name){
    let cookies = decodeURIComponent(document.cookie);
    let cookiesArr = cookies.split("; ");
    for(var i = 0; i < cookiesArr.length; i++){
      if(cookiesArr[i].split("=")[0] == name){
        console.log(cookiesArr[i]);
        return cookiesArr[i].split("=")[1];
      }
    }
    return "";
  }
/*function getWarningPosition(warning) {
var warnpos = { "Tsunami Warning":	1,
"Tornado Warning":	2,
"Extreme Wind Warning":	3,
"Severe Thunderstorm Warning":	4,
"Flash Flood Warning":	5,
"Flash Flood Statement":	6,
"Severe Weather Statement":	7,
"Fire Warning":	14,
"Storm Surge Warning":	17,
"Hurricane Force Wind Warning":	18,
"Hurricane Warning":	19,
"Typhoon Warning":	20,
"Special Marine Warning":	21,
"Blizzard Warning":	22,
"Snow Squall Warning":	23,
"Ice Storm Warning":	24,
"Winter Storm Warning":	25,
"High Wind Warning":	26,
"Tropical Storm Warning":	27,
"Storm Warning":	28,
"Tsunami Advisory":	29,
"Tsunami Watch":	30,
"Avalanche Warning":	31,
"Earthquake Warning":	32,
"Volcano Warning":	33,
"Ashfall Warning":	34,
"Coastal Flood Warning":	35,
"Lakeshore Flood Warning":	36,
"Flood Warning":	37,
"River Flood Warning":	37.5,
"High Surf Warning":	38,
"Dust Storm Warning":	39,
"Blowing Dust Warning":	40,
"Lake Effect Snow Warning":	41,
"Excessive Heat Warning":	42,
"Tornado Watch":	43,
"Severe Thunderstorm Watch":	44,
"Flash Flood Watch":	45,
"Gale Warning":	46,
"Flood Statement":	47,
"Wind Chill Warning":	48,
"Extreme Cold Warning":	49,
"Hard Freeze Warning":	50,
"Freeze Warning":	51,
"Red Flag Warning":	52,
"Storm Surge Watch":	53,
"Hurricane Watch":	54,
"Hurricane Force Wind Watch":	55,
"Typhoon Watch":	56,
"Tropical Storm Watch":	57,
"Storm Watch":	58,
"Hurricane Local Statement":	59,
"Typhoon Local Statement":	60,
"Tropical Storm Local Statement":	61,
"Tropical Depression Local Statement":	62,
"Avalanche Advisory":	63,
"Winter Weather Advisory":	64,
"Wind Chill Advisory":	65,
"Heat Advisory":	66,
"Urban and Small Stream Flood Advisory":	67,
"Small Stream Flood Advisory":	68,
"Arroyo and Small Stream Flood Advisory":	69,
"Flood Advisory":	70,
"Hydrologic Advisory":	71,
"Lakeshore Flood Advisory":	72,
"Coastal Flood Advisory":	73,
"High Surf Advisory":	74,
"Heavy Freezing Spray Warning":	75,
"Dense Fog Advisory":	76,
"Dense Smoke Advisory":	77,
"Small Craft Advisory For Hazardous Seas":	78,
"Small Craft Advisory for Rough Bar":	79,
"Small Craft Advisory for Winds":	80,
"Small Craft Advisory":	81,
"Brisk Wind Advisory":	82,
"Hazardous Seas Warning":	83,
"Dust Advisory":	84,
"Blowing Dust Advisory":	85,
"Lake Wind Advisory":	86,
"Wind Advisory":	87,
"Frost Advisory":	88,
"Ashfall Advisory":	89,
"Freezing Fog Advisory":	90,
"Freezing Spray Advisory":	91,
"Low Water Advisory":	92,
"Avalanche Watch":	94,
"Blizzard Watch":	95,
"Rip Current Statement":	96,
"Beach Hazards Statement":	97,
"Gale Watch":	98,
"Winter Storm Watch":	99,
"Hazardous Seas Watch":	100,
"Heavy Freezing Spray Watch":	101,
"Coastal Flood Watch":	102,
"Lakeshore Flood Watch":	103,
"Flood Watch":	104,
"High Wind Watch":	105,
"Excessive Heat Watch":	106,
"Extreme Cold Watch":	107,
"Wind Chill Watch":	108,
"Lake Effect Snow Watch":	109,
"Hard Freeze Watch":	110,
"Freeze Watch":	111,
"Fire Weather Watch":	112,
"Extreme Fire Danger":	113,
"Coastal Flood Statement":	115,
"Lakeshore Flood Statement":	116,
"Special Weather Statement":	117,
"Marine Weather Statement":	118,
"Air Quality Alert":	119,
"Air Stagnation Advisory":	120,
"Hazardous Weather Outlook":	121,
}[warning]
	if (warnpos !== undefined) {
		return warnpos;
	} else {
		return 140;
	}
}// https://date-fns.org/docs/Getting-Started
*/
