var locationSettings = {
  mainCity: {
    autoFind: true,
    displayname:"",
    type:"",
    val:"",
  },
  extraCity: {
    autoFind: true,
    displayname:"",
    type:"",
    val:"",
  },
  eightCities: {
    autoFind: true,
    cities:[
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
    ]
  },
  airport: {
    autoFind: true,
    airports:[
      {
        displayname:"",
        iataCode:"",
      },
      {
        displayname:"",
        iataCode:"",
      },
    ]
  },
  golf: {
    coursesautoFind: true,
    courses: [
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
    ],
    resortsautoFind: true,
    resorts: [
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
    ],
  },
  units: ""
}
var locationConfig = {
  radar: {
    localCoords: {
      lat: "0",
      lon: "0",
    },
    regionalCoords: {
      lat: "0",
      lon: "0",
    },
  },
  mainCity: {
    displayname:"",
    lat:"",
    lon:"",
    state:"",
    stateFull:"",
  },
  extraCity: {
    displayname:"",
    lat:"",
    lon:"",
    state:"",
    stateFull:"",
  },
  eightCities: {
    cities: [],
  },
  airport: {
    airports: [],
  },
  golf: {
    courses:[],
    resorts:[],
  },
  units: "e"
}
var extraCityList = {}
var surrCityList = {}
var airportCityList = {}
var courseList = {}
var resortList = {}
var queryname = ""
function locationJS() {
  locationConfig.mainCity.displayname = ""
  locationConfig.mainCity.lat = ""
  locationConfig.mainCity.lon = ""
  locationConfig.mainCity.state = ""
  locationConfig.mainCity.stateFull = ""
  locationConfig.extraCity.displayname = ""
  locationConfig.extraCity.lat = ""
  locationConfig.extraCity.lon = ""
  locationConfig.extraCity.state = ""
  locationConfig.extraCity.stateFull = ""
  locationConfig.eightCities.cities = []
  locationConfig.airport.airports = []
  locationConfig.golf.courses = []
  locationConfig.golf.resorts = []
  locationConfig.units = "e"
if (window.location.search) {
  queryname = window.location.search.split("?")[1]
}
function locationGrab() {
  if (locationSettings.mainCity.autoFind == false) {
    if (locationSettings.mainCity.type == "postalKey") {
      if (!locationSettings.mainCity.val.includes(":US") && locationSettings.mainCity.val.toString().length >= 5) {
        locationSettings.mainCity.val = locationSettings.mainCity.val + ":US"
      }
    }
    $.getJSON("https://api.weather.com/v3/location/point?" + locationSettings.mainCity.type + "=" + locationSettings.mainCity.val + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
      locationConfig.mainCity.displayname = ((locationSettings.mainCity.displayname != "") ? locationSettings.mainCity.displayname : data.location.displayName)
      locationConfig.mainCity.lat = data.location.latitude
      locationConfig.mainCity.lon = data.location.longitude
      locationConfig.mainCity.state = data.location.adminDistrictCode
      locationConfig.mainCity.stateFull = data.location.adminDistrict
      locationConfig.units = locationSettings.units
      /*$.getJSON("https://pro.ip-api.com/json/?key=AmUN9xAaQALVYu6&exposeDate=false", function(ipdata){
        console.log(ipdata.timezone)
        timezone = ipdata.timezone;
        console.log(data.location.ianaTimeZone[0]);
        setTimeout(() =>{adjustTimeZone(timezone, data.location.ianaTimeZone[0])}, 500)
    })*/
      if (locationSettings.extraCity.autoFind == true) {
        autoExtraLoc()
      } else {
        manualExtraLoc()
      }
      if (locationSettings.eightCities.autoFind == true) {
        autoSurroundingLocs()
      } else {
        manualSurroundingLocs()
      }
      if (locationSettings.airport.autoFind == true) {
        autoAirports()
      } else {
        manualAirports()
      }
      if (locationSettings.golf.coursesautoFind == true) {
        autoGolfCourses()
      } else {
        manualGolfCourses()
      }
      if (locationSettings.golf.resortsautoFind == true) {
        autoGolfResorts()
      } else {
        manualGolfResorts()
      }
      getMapAdjustedCenters(locationConfig.mainCity.lat, locationConfig.mainCity.lon)
      //console.log(locationSettings)
      //console.log(locationConfig)
    })
  } else {
    if (window.location.search) {
      $.getJSON("https://api.weather.com/v3/location/search?query=" + queryname +"&language=en-US&format=json&apiKey=" + api_key, function(data) {
        locationConfig.mainCity.displayname = data.location.displayName[0]
        locationConfig.mainCity.lat = data.location.latitude[0]
        locationConfig.mainCity.lon = data.location.longitude[0]
        locationConfig.mainCity.state = data.location.adminDistrictCode[0]
        locationConfig.mainCity.stateFull = data.location.adminDistrict[0]
        locationConfig.units = (["US", "MM", "LR"].includes(data.location.countryCode[0])) ? "e" : "m"
        /*$.getJSON("https://pro.ip-api.com/json/?key=AmUN9xAaQALVYu6&exposeDate=false", function(ipdata){
          console.log(ipdata.timezone)
          timezone = ipdata.timezone;
          console.log(data.location.ianaTimeZone[0]);
          setTimeout(() =>{adjustTimeZone(timezone, data.location.ianaTimeZone[0])}, 500)
        })*/
        if (locationSettings.extraCity.autoFind == true) {
          autoExtraLoc()
        } else {
          manualExtraLoc()
        }
        if (locationSettings.eightCities.autoFind == true) {
          autoSurroundingLocs()
        } else {
          manualSurroundingLocs()
        }
        if (locationSettings.airport.autoFind == true) {
          autoAirports()
        } else {
          manualAirports()
        }
        if (locationSettings.golf.coursesautoFind == true) {
          autoGolfCourses()
        } else {
          manualGolfCourses()
        }
        if (locationSettings.golf.resortsautoFind == true) {
          autoGolfResorts()
        } else {
          manualGolfResorts()
        }
        getMapAdjustedCenters(locationConfig.mainCity.lat, locationConfig.mainCity.lon)
        //console.log(locationSettings)
        //console.log(locationConfig)
      }).fail(function() {
        $.getJSON("https://pro.ip-api.com/json/?key=AmUN9xAaQALVYu6&exposeDate=false", function(data) {
          locationConfig.mainCity.displayname = data.city
          locationConfig.mainCity.lat = data.lat
          locationConfig.mainCity.lon = data.lon
          locationConfig.mainCity.state = data.region
          locationConfig.mainCity.stateFull = data.regionName
          if (locationSettings.extraCity.autoFind == true) {
            autoExtraLoc()
          } else {
            manualExtraLoc()
          }
          if (locationSettings.eightCities.autoFind == true) {
            autoSurroundingLocs()
          } else {
            manualSurroundingLocs()
          }
          if (locationSettings.airport.autoFind == true) {
            autoAirports()
          } else {
            manualAirports()
          }
          if (locationSettings.golf.coursesautoFind == true) {
            autoGolfCourses()
          } else {
            manualGolfCourses()
          }
          if (locationSettings.golf.resortsautoFind == true) {
            autoGolfResorts()
          } else {
            manualGolfResorts()
          }
          getMapAdjustedCenters(locationConfig.mainCity.lat, locationConfig.mainCity.lon)
          //console.log(locationSettings)
          //console.log(locationConfig)
        }).fail(function() {
          locationConfig.mainCity.displayname = undefined
          locationConfig.mainCity.lat = undefined
          locationConfig.mainCity.lon = undefined
          locationConfig.mainCity.state = undefined
          locationConfig.mainCity.stateFull = undefined
          if (locationSettings.extraCity.autoFind == true) {
            autoExtraLoc()
          } else {
            manualExtraLoc()
          }
          if (locationSettings.eightCities.autoFind == true) {
            autoSurroundingLocs()
          } else {
            manualSurroundingLocs()
          }
          if (locationSettings.airport.autoFind == true) {
            autoAirports()
          } else {
            manualAirports()
          }
          if (locationSettings.golf.coursesautoFind == true) {
            autoGolfCourses()
          } else {
            manualGolfCourses()
          }
          if (locationSettings.golf.resortsautoFind == true) {
            autoGolfResorts()
          } else {
            manualGolfResorts()
          }
          getMapAdjustedCenters(locationConfig.mainCity.lat, locationConfig.mainCity.lon)
          //console.log(locationSettings)
          //console.log(locationConfig)
        })
      })
    } else {
      $.getJSON("https://pro.ip-api.com/json/?key=AmUN9xAaQALVYu6&exposeDate=false", function(data) {
        locationConfig.mainCity.displayname = data.city
        locationConfig.mainCity.lat = data.lat
        locationConfig.mainCity.lon = data.lon
        locationConfig.mainCity.state = data.region
        locationConfig.mainCity.stateFull = data.regionName
        if (locationSettings.extraCity.autoFind == true) {
          autoExtraLoc()
        } else {
          manualExtraLoc()
        }
        if (locationSettings.eightCities.autoFind == true) {
          autoSurroundingLocs()
        } else {
          manualSurroundingLocs()
        }
        if (locationSettings.airport.autoFind == true) {
          autoAirports()
        } else {
          manualAirports()
        }
        if (locationSettings.golf.coursesautoFind == true) {
          autoGolfCourses()
        } else {
          manualGolfCourses()
        }
        if (locationSettings.golf.resortsautoFind == true) {
          autoGolfResorts()
        } else {
          manualGolfResorts()
        }
        getMapAdjustedCenters(locationConfig.mainCity.lat, locationConfig.mainCity.lon)
        //console.log(locationSettings)
        //console.log(locationConfig)
      }).fail(function() {
        locationConfig.mainCity.displayname = undefined
        locationConfig.mainCity.lat = undefined
        locationConfig.mainCity.lon = undefined
        locationConfig.mainCity.state = undefined
        locationConfig.mainCity.stateFull = undefined
        if (locationSettings.extraCity.autoFind == true) {
          autoExtraLoc()
        } else {
          manualExtraLoc()
        }
        if (locationSettings.eightCities.autoFind == true) {
          autoSurroundingLocs()
        } else {
          manualSurroundingLocs()
        }
        if (locationSettings.airport.autoFind == true) {
          autoAirports()
        } else {
          manualAirports()
        }
        if (locationSettings.golf.coursesautoFind == true) {
          autoGolfCourses()
        } else {
          manualGolfCourses()
        }
        if (locationSettings.golf.resortsautoFind == true) {
          autoGolfResorts()
        } else {
          manualGolfResorts()
        }
        getMapAdjustedCenters(locationConfig.mainCity.lat, locationConfig.mainCity.lon)
        //console.log(locationSettings)
        //console.log(locationConfig)
      })
    }
  }
}
function manualExtraLoc() {
  if (locationSettings.extraCity.type == "postalKey") {
    if (!locationSettings.extraCity.val.includes(":US") && locationSettings.mainCity.val.toString().length >= 5) {
      locationSettings.extraCity.val = locationSettings.extraCity.val + ":US"
    }
  }
  $.getJSON("https://api.weather.com/v3/location/point?" + locationSettings.extraCity.type + "=" + locationSettings.extraCity.val + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    locationConfig.extraCity.displayname = ((locationSettings.extraCity.displayname != "") ? locationSettings.extraCity.displayname : data.location.displayName)
    locationConfig.extraCity.lat = data.location.latitude
    locationConfig.extraCity.lon = data.location.longitude
    locationConfig.extraCity.state = data.location.adminDistrictCode
    locationConfig.extraCity.stateFull = data.location.adminDistrict
    extraCityName = locationConfig.extraCity.displayname
  })
}
function autoExtraLoc() {
  $.getJSON('https://api.weather.com/v3/location/near?geocode=' + locationConfig.mainCity.lat + ',' + locationConfig.mainCity.lon + '&product=observation&format=json&apiKey=' + api_key, function(data) {
    extraCityList.lon = data.location.longitude[1]
    extraCityList.lat = data.location.latitude[1]
    extraCityList.amount = 1
    indivExtraCity(0)
  })
}
function indivExtraCity(i) {
  $.getJSON("https://api.weather.com/v3/location/point?geocode=" + extraCityList.lat + "," + extraCityList.lon + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    locationConfig.extraCity.displayname = data.location.displayName
    locationConfig.extraCity.lat = data.location.latitude
    locationConfig.extraCity.lon = data.location.longitude
    locationConfig.extraCity.state = data.location.adminDistrictCode
    locationConfig.extraCity.stateFull = data.location.adminDistrict
    extraCityName = data.location.displayName
  }).fail(function() {
    locationConfig.extraCity.displayname = ""
    locationConfig.extraCity.lat = ""
    locationConfig.extraCity.lon = ""
    locationConfig.extraCity.state = ""
    locationConfig.extraCity.stateFull = ""
    extraCityName = ""
  })
}
function autoSurroundingLocs() {
  $.getJSON('https://api.weather.com/v3/location/near?geocode=' + locationConfig.mainCity.lat + ',' + locationConfig.mainCity.lon + '&product=observation&format=json&apiKey=' + api_key, function(data) {
    surrCityList.lons = data.location.longitude
    surrCityList.lats = data.location.latitude
    surrCityList.amount = data.location.stationName.length
    for (var i = 0; i < surrCityList.amount; i++) {
      indivSurrCity(i);
    }
    setTimeout(() => {
      locationConfig.eightCities.citiesAmount = locationConfig.eightCities.cities.length
      if (locationConfig.eightCities.citiesAmount > 8) {
        locationConfig.eightCities.citiesAmount = 8
      }
    }, 1000);
    
  })
}

function indivSurrCity(i) {
  var duploc = false
  var cityData = {displayname:"",lat:"",lon:"",state:"",stateFull:""}
  $.getJSON("https://api.weather.com/v3/location/point?geocode=" + surrCityList.lats[i] + "," + surrCityList.lons[i] + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    cityData.displayname = data.location.displayName
    cityData.lat = data.location.latitude
    cityData.lon = data.location.longitude
    cityData.state = data.location.adminDistrictCode
    cityData.stateFull = data.location.adminDistrict
  }).fail(function() {
    cityData.displayname = ""
    cityData.lat = ""
    cityData.lon = ""
    cityData.state = ""
    cityData.stateFull = ""
  })
  setTimeout(() => {
    if (cityData.displayname != locationConfig.mainCity.displayname) {
      locationConfig.eightCities.cities.push(cityData)
    }
    for (var ii = 0; ii < locationConfig.eightCities.cities.length-1; ii++) {
      if (cityData.displayname == locationConfig.eightCities.cities[ii].displayname) {
        locationConfig.eightCities.cities.pop()
        continue
      }
    }
  }, 500);
}

function autoAirports() {
  $.getJSON('https://api.weather.com/v3/location/near?geocode=' + locationConfig.mainCity.lat + ',' + locationConfig.mainCity.lon + '&product=airport&subproduct=major&format=json&apiKey=' + api_key, function (data) {
    airportCityList.lons = data.location.longitude
    airportCityList.lats = data.location.latitude
    airportCityList.names = data.location.airportName
    airportCityList.codes = data.location.iataCode
    airportCityList.amount = data.location.iataCode.length
  })
  setTimeout(() => {
    for (var i = 0; i < airportCityList.amount; i++) {
      indivAutoAirports(i)
    }
  }, 1000);
  setTimeout(() => {
    locationConfig.airport.airportsAmount = locationConfig.airport.airports.length
    if (locationConfig.airport.airportsAmount > 2) {
      locationConfig.airport.airportsAmount = 2
    }
  }, 1500);
}

function indivAutoAirports(i) {
  var airportData = {displayname:"",lat:"",lon:"",iataCode:""}
  $.getJSON("https://api.weather.com/v3/location/point?iataCode=" + airportCityList.codes[i] + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    airportData.displayname = data.location.airportName
    airportData.lat = data.location.latitude
    airportData.lon = data.location.longitude
    airportData.iataCode = data.location.iataCode
  }).fail(function() {
    airportData.displayname = ""
    airportData.lat = ""
    airportData.lon = ""
    airportData.iataCode = ""
  })
  locationConfig.airport.airports.push(airportData)
}

function manualSurroundingLocs() {
  for (var i = 0; i < locationSettings.eightCities.cities.length; i++) {
    if (locationSettings.eightCities.cities[i].type != undefined) {
      manualIndivCities(i)
    }
  }
  locationConfig.eightCities.citiesAmount = locationConfig.eightCities.cities.length
  if (locationConfig.eightCities.citiesAmount > 8) {
    locationConfig.eightCities.citiesAmount = 8
  }
}

function manualIndivCities(i) {
  var cityData = {displayname:"",lat:"",lon:"",state:"",stateFull:""}
  if (locationSettings.eightCities.cities[i].type == "postalKey") {
    if (!locationSettings.eightCities.cities[i].val.includes(":US") && locationSettings.mainCity.val.toString().length >= 5) {
      locationSettings.eightCities.cities[i].val = locationSettings.eightCities.cities[i].val + ":US"
    }
  }
    $.getJSON("https://api.weather.com/v3/location/point?" + locationSettings.eightCities.cities[i].type + "=" + locationSettings.eightCities.cities[i].val + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
      cityData.displayname = ((locationSettings.eightCities.cities[i].displayname != "") ? locationSettings.eightCities.cities[i].displayname : data.location.displayName)
      cityData.lat = data.location.latitude
      cityData.lon = data.location.longitude
      cityData.state = data.location.adminDistrictCode
      cityData.stateFull = data.location.adminDistrict
    }).fail(function() {
      cityData.displayname = ((locationSettings.eightCities.cities[i].displayname != "") ? locationSettings.eightCities.cities[i].displayname : "")
      cityData.lat = ""
      cityData.lon = ""
      cityData.state = ""
      cityData.stateFull = ""
    })
    locationConfig.eightCities.cities.push(cityData)
}

function manualAirports() {
  for (var i = 0; i < locationSettings.airport.airports.length; i++) {
    if (locationSettings.airport.airports[i].iataCode != undefined) {
      manualIndivAirports(i)
    }
  }
  setTimeout(() => {
    locationConfig.airport.airportsAmount = locationConfig.airport.airports.length
    if (locationConfig.airport.airportsAmount > 2) {
      locationConfig.airport.airportsAmount = 2
    }
  }, 1500);
}

function manualIndivAirports(i) {
  var airportData = {displayname:"",lat:"",lon:"",iataCode:""}
  if (locationSettings.airport.airports[i].type == "postalKey") {
    if (!locationSettings.airport.airports[i].val.includes(":US") && locationSettings.mainCity.val.toString().length >= 5) {
      locationSettings.airport.airports[i].val = locationSettings.airport.airports[i].val + ":US"
    }
  }
  $.getJSON("https://api.weather.com/v3/location/point?iataCode=" + locationSettings.airport.airports[i].iataCode + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    airportData.displayname = ((locationSettings.airport.airports[i].displayname != "") ? locationSettings.airport.airports[i].displayname : data.location.airportName)
    airportData.lat = data.location.latitude
    airportData.lon = data.location.longitude
    airportData.iataCode = data.location.iataCode
  }).fail(function() {
    airportData.displayname = ((locationSettings.airport.airports[i].displayname != "") ? locationSettings.airport.airports[i].displayname : "")
    airportData.lat = ""
    airportData.lon = ""
    airportData.iataCode = ""
  })
  locationConfig.airport.airports.push(airportData)
}

function autoGolfCourses() {
  $.getJSON('https://api.weather.com/v3/location/near?geocode=' + locationConfig.mainCity.lat + ',' + locationConfig.mainCity.lon + '&product=observation&format=json&apiKey=' + api_key, function(data) {
    courseList.lons = data.location.longitude
    courseList.lats = data.location.latitude
    courseList.amount = data.location.stationName.length
    for (var i = 0; i < 3; i++) {
      autoIndivGolfCourse(i);
    }
    setTimeout(() => {
      locationConfig.golf.coursesAmount = locationConfig.golf.courses.length
      if (locationConfig.golf.coursesAmount > 3) {
        locationConfig.golf.coursesAmount = 3
      }
    }, 1000);
  })
}

function autoIndivGolfCourse(i) {
  var courseData = {displayname:"",lat:"",lon:"",state:"",stateFull:""}
  $.getJSON("https://api.weather.com/v3/location/point?geocode=" + courseList.lats[i] + "," + courseList.lons[i] + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    courseData.displayname = data.location.displayName  + " Golf Courses"
    courseData.lat = data.location.latitude
    courseData.lon = data.location.longitude
    courseData.state = data.location.adminDistrictCode
    courseData.stateFull = data.location.adminDistrict
  }).fail(function() {
    courseData.displayname = ""
    courseData.lat = ""
    courseData.lon = ""
    courseData.state = ""
    courseData.stateFull = ""
  })
  setTimeout(() => {
    locationConfig.golf.courses.push(courseData)
    for (var ii = 0; ii < locationConfig.golf.courses.length-1; ii++) {
      if (courseData.displayname == locationConfig.golf.courses[ii].displayname) {
        locationConfig.golf.courses.pop()
        continue
      }
    }
  }, 500);
}

function manualGolfCourses() {
  for (var i = 0; i < 3; i++) {
    if (locationSettings.golf.courses[i].type != undefined) {
      manualIndivCourses(i)
    }
  }
  setTimeout(() => {
    locationConfig.golf.coursesAmount = locationConfig.golf.courses.length
    if (locationConfig.golf.coursesAmount > 3) {
      locationConfig.golf.coursesAmount = 3
    }
  }, 1000);
}

function manualIndivCourses(i) {
  var courseData = {displayname:"",lat:"",lon:"",state:"",stateFull:""}
  if (locationSettings.golf.courses[i].type == "postalKey") {
    if (!locationSettings.golf.courses[i].val.includes(":US") && locationSettings.mainCity.val.toString().length >= 5) {
      locationSettings.golf.courses[i].val = locationSettings.golf.courses[i].val + ":US"
    }
  }
  $.getJSON("https://api.weather.com/v3/location/point?" + locationSettings.golf.courses[i].type + "=" + locationSettings.golf.courses[i].val + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    courseData.displayname = ((locationSettings.golf.courses[i].displayname != "") ? locationSettings.golf.courses[i].displayname : data.location.displayName + " Golf Courses")
    courseData.lat = data.location.latitude
    courseData.lon = data.location.longitude
    courseData.state = data.location.adminDistrictCode
    courseData.stateFull = data.location.adminDistrict
  }).fail(function() {
    courseData.displayname = ((locationSettings.golf.courses[i].displayname != "") ? locationSettings.golf.courses[i].displayname : "")
    courseData.lat = ""
    courseData.lon = ""
    courseData.state = ""
    courseData.stateFull = ""
  })
  locationConfig.golf.courses.push(courseData)
}

function autoGolfResorts() {
  $.getJSON('https://api.weather.com/v3/location/near?geocode=' + locationConfig.mainCity.lat + ',' + locationConfig.mainCity.lon + '&product=observation&format=json&apiKey=' + api_key, function(data) {
    resortList.lons = data.location.longitude
    resortList.lats = data.location.latitude
    resortList.amount = data.location.stationName.length
    for (var i = 0; i < 3; i++) {
      autoIndivGolfResorts(i);
    }
    setTimeout(() => {
      locationConfig.golf.resortsAmount = locationConfig.golf.resorts.length
      if (locationConfig.golf.resortsAmount > 3) {
        locationConfig.golf.resortsAmount = 3
      }
    }, 1000);
  })
}

function autoIndivGolfResorts(i) {
  var resortData = {displayname:"",lat:"",lon:"",state:"",stateFull:""}
  $.getJSON("https://api.weather.com/v3/location/point?geocode=" + resortList.lats[i] + "," + resortList.lons[i] + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    resortData.displayname = data.location.displayName  + " Golf Resorts"
    resortData.lat = data.location.latitude
    resortData.lon = data.location.longitude
    resortData.state = data.location.adminDistrictCode
    resortData.stateFull = data.location.adminDistrict
  }).fail(function() {
    resortData.displayname = ""
    resortData.lat = ""
    resortData.lon = ""
    resortData.state = ""
    resortData.stateFull = ""
  })
  setTimeout(() => {
    locationConfig.golf.resorts.push(resortData)
    for (var ii = 0; ii < locationConfig.golf.resorts.length-1; ii++) {
      if (resortData.displayname == locationConfig.golf.resorts[ii].displayname) {
        locationConfig.golf.resorts.pop()
        continue
      }
    }
  }, 500);
}

function manualGolfResorts() {
  for (var i = 0; i < 3; i++) {
    if (locationSettings.golf.resorts[i].type != undefined) {
      manualIndivResorts(i)
    }
  }
  setTimeout(() => {
    locationConfig.golf.resortsAmount = locationConfig.golf.resorts.length
    if (locationConfig.golf.resortsAmount > 3) {
      locationConfig.golf.resortsAmount = 3
    }
  }, 1000);
}

function manualIndivResorts(i) {
  var resortData = {displayname:"",lat:"",lon:"",state:"",stateFull:""}
  if (locationSettings.golf.courses[i].type == "postalKey") {
    if (!locationSettings.golf.courses[i].val.includes(":US") && locationSettings.mainCity.val.toString().length >= 5) {
      locationSettings.golf.courses[i].val = locationSettings.golf.courses[i].val + ":US"
    }
  }
  $.getJSON("https://api.weather.com/v3/location/point?" + locationSettings.golf.resorts[i].type + "=" + locationSettings.golf.resorts[i].val + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    resortData.displayname = ((locationSettings.golf.resorts[i].displayname != "") ? locationSettings.golf.resorts[i].displayname + " Golf Resorts" : data.location.displayName)
    resortData.lat = data.location.latitude
    resortData.lon = data.location.longitude
    resortData.state = data.location.adminDistrictCode
    resortData.stateFull = data.location.adminDistrict
  }).fail(function() {
    resortData.displayname = ((locationSettings.golf.resorts[i].displayname != "") ? locationSettings.golf.resorts[i].displayname : "")
    resortData.lat = ""
    resortData.lon = ""
    resortData.state = ""
    resortData.stateFull = ""
  })
  locationConfig.golf.resorts.push(resortData)
}

locationGrab()
}
