var settingsopen = true;
var pause = false;
/*if (document.cookie) {
  if (getCookie("mainCityAutoFind") == "true") {
    locationSettings.mainCity.autoFind = true;
  } else {
    locationSettings.mainCity.autoFind = false;
    locationSettings.mainCity.displayname = getCookie("mainCityDisplayName");
    locationSettings.mainCity.type = getCookie("mainCitySearchType");
    locationSettings.mainCity.val = getCookie("mainCitySearchValue");
  }
  if (getCookie("extraCityAutoFind") == "true") {
    locationSettings.extraCity.autoFind = true;
  } else {
    locationSettings.extraCity.autoFind = false;
    locationSettings.extraCity.displayname = getCookie("extraCityDisplayName");
    locationSettings.extraCity.type = getCookie("extraCitySearchType");
    locationSettings.extraCity.val = getCookie("extraCitySearchValue");
  }
  if (getCookie("eightCitiesAutoFind") == "true") {
    locationSettings.eightCities.autoFind = true;
  } else {
    locationSettings.eightCities.autoFind = false;
    var eightCitiesCookieIndex = { 0: "one", 1: "two", 2: "three", 3: "four", 4: "five", 5: "six", 6: "seven", 7: "eight" }
    for (var i = 0; i < locationSettings.eightCities.cities.length; i++) {
      locationSettings.eightCities.cities[i].displayname = getCookie(`eightCitySlide${eightCitiesCookieIndex[i]}Name`);
      locationSettings.eightCities.cities[i].type = getCookie(`eightCitySlide${eightCitiesCookieIndex[i]}Type`);
      locationSettings.eightCities.cities[i].val = getCookie(`eightCitySlide${eightCitiesCookieIndex[i]}Value`);
    }
  }
  if (getCookie("airportAutoFind") == "true") {
    locationSettings.airport.autoFind = true;
  } else {
    locationSettings.airport.autoFind = false;
    var airportCookieIndex = { 0: "one", 1: "two" }
    for (var i = 0; i < locationSettings.airport.airports.length; i++) {
      locationSettings.airport.airports[i].displayname = getCookie(`airportSlide${airportCookieIndex[i]}Name`);
      locationSettings.airport.airports[i].iataCode = getCookie(`airportSlide${airportCookieIndex[i]}Code`);
    }
  }
  if (getCookie("golfAutoFind") == "true") {
    locationSettings.golf.coursesautoFindutoFind = true;
  } else {
    locationSettings.golf.coursesautoFind = false;
    var golfCookieIndex = { 0: "one", 1: "two", 2: "three" }
    for (var i = 0; i < locationSettings.golf.courses.length; i++) {
      locationSettings.golf.courses[i].displayname = getCookie(`golfSlide${golfCookieIndex[i]}Name`);
      locationSettings.golf.courses[i].type = getCookie(`golfSlide${golfCookieIndex[i]}Type`);
      locationSettings.golf.courses[i].val = getCookie(`golfSlide${golfCookieIndex[i]}Value`);
    }
  }
  if (getCookie("customPackage") == "true") {
    var packbinds = {
      "forecastPackage": forecastPackage,
      "extraLocalPackage": extraLocalPackage,
      "miniCorePackage": miniCorePackage,
      "spanishForecastPackage": spanishForecastPackage,
      "golfPackage": golfPackage,
      "healthPackage": healthPackage,
      "airportPackage": airportPackage,
    }
    var packageCookieIndex = { 0: "One", 1: "Two", 2: "Three", 3: "Four", 4: "Five", 5: "Six" }
    for (var i = 0; i < 6; i++) {
      switch (getCookie(`package${packageCookieIndex[i]}`)) {
        case "forecastPackage":
          slideSettings.order[0].slideLineup.push(forecastPackage);
          break;
        case "extraLocalPackage":
          slideSettings.order[0].slideLineup.push(extraLocalPackage);
          break;
        case "miniCorePackage":
          slideSettings.order[0].slideLineup.push(miniCorePackage);
          break;
        case "spanishForecastPackage":
          slideSettings.order[0].slideLineup.push(spanishForecastPackage);
          break;
        case "golfPackage":
          slideSettings.order[0].slideLineup.push(golfPackage);
          break;
        case "healthPackage":
          slideSettings.order[0].slideLineup.push(healthPackage);
          break;
        case "airportPackage":
          slideSettings.order[0].slideLineup.push(airportPackage);
          break;
      }
    }
    console.log(slideSettings.order[0].slideLineup);
  }
  //if(getCookie("skipSetup") == "true"){
    //apperanceSettings.skipSettings = true;
    //console.log(slideSettings.order[0].slideLineup);
    //this is where setup skips if cookies are true
 // }
}*/
function startButton() {
  console.log(slideSettings.order[0].slideLineup);
  $("#setup-thankyou").fadeOut(0);
  $("#setup-welcome").fadeOut(0);
  //document.cookie = "skipSetup=true"
  pause = true
  locationJS();
  setTimeout(() => {
    dataJS();
    createMaps();
  }, 1000);
  $("#startup").fadeIn(0);
  //reset pages
  $("#settingspanel").fadeOut(0);
  settingsopen = false;
  slideCallBack = function () {
    $("#provider").css("margin-left", "0px")
    $("#provider").css("margin-top", "0px")
    idx++;
    showSlides()
  };
}
function unpauseButton() {
  $("#setup-pause").fadeOut(0);
  locationJS();
  setTimeout(() => {
    dataJS();
    createMaps();
  }, 1000);
  $("#startup").fadeIn(0);
  //reset pages
  $("#settingspanel").fadeOut(0);
  settingsopen = false;
  slideCallBack = function () {
    $("#provider").css("margin-left", "0px")
    $("#provider").css("margin-top", "0px")
    idx++;
    showSlides()
  };
}
if (apperanceSettings.skipSettings == true) {
  settingsopen = false;
  pause = true
  //if (getCookie("customPackage") == "false") {
    slideSettings.order[0].slideLineup.push(forecastPackage)
    slideSettings.order[0].slideLineup.push(extraLocalPackage)
    slideSettings.order[0].slideLineup.push(spanishForecastPackage)
    slideSettings.order[0].slideLineup.push(golfPackage)
    slideSettings.order[0].slideLineup.push(healthPackage)
    slideSettings.order[0].slideLineup.push(airportPackage)
  //}
  console.log(slideSettings.order[0].slideLineup)
  setTimeout(() => {
    locationJS();
    setTimeout(() => {
      dataJS();
    }, 1000);
    $("#startup").fadeIn(0);
    $("#settingspanel").fadeOut(0);
    slideCallBack = function () {
      $("#provider").css("margin-left", "0px")
      $("#provider").css("margin-top", "0px")
      idx++;
      showSlides()
    };
  }, 2500);
} else {
  settingsopen = true;
  setTimeout(() => {
    $("#setup-welcome").fadeIn(0);
  }, 1000);
}
document.addEventListener("keypress", function (event) {
  if (event.charCode == 113 && settingsopen == false) {
    settingsopen = true;
    audioPlayer.stopPlaying()
    $("#settingspanel").fadeIn(0);
    $("#setup-pause").fadeIn(0);
    $("#startup").fadeOut(0);
    $("#main").fadeOut(0);
    $(".radar-doppler").fadeOut(0);
    $(".radar-doppler .tempunavailable").fadeOut(0);
    $(".regional-sat").fadeOut(0);
    $(".regional-sat .tempunavailable").fadeOut(0);
    $(".regional-radar").fadeOut(0);
    $(".regional-radar .tempunavailable").fadeOut(0);
    idx = 0;
    gidx = 0;
    slideCallBack = function () {
      $("#provider").css("margin-left", "0px")
      $("#provider").css("margin-top", "0px")
      idx = 0;
      gidx = 0;
    };
  }
});
function welcomefuncs(type) {
  if (type == "proceed") {
    $('#setup-welcome').fadeOut(0)
    $('#setup-mainloc').fadeIn(0)
  } else if (type == "skipall") {
    startButton()
    //document.cookie = "skipSetup=true"
    //document.cookie = "mainCityAutoFind=true";
    //document.cookie = "extraCityAutoFind=true";
    //document.cookie = "eightCitiesAutoFind=true";
    //document.cookie = "airportAutoFind=true";
    //document.cookie = "golfAutoFind=true";
    locationSettings.mainCity.autoFind = true
    locationSettings.eightCities.autoFind = true
    locationSettings.airport.autoFind = true
    locationSettings.golf.coursesautoFind = true
    slideSettings.order[0].slideLineup.push(forecastPackage)
    slideSettings.order[0].slideLineup.push(extraLocalPackage)
    slideSettings.order[0].slideLineup.push(spanishForecastPackage)
    slideSettings.order[0].slideLineup.push(golfPackage)
    slideSettings.order[0].slideLineup.push(healthPackage)
    slideSettings.order[0].slideLineup.push(airportPackage)
    //console.log(document.cookie);
  }
}
function mainlocfuncs(type) {
  if (type == "skip") {
    $('#setup-mainloc').fadeOut(0)
    locationSettings.mainCity.autoFind = true
    //document.cookie = "mainCityAutoFind=true";
    $('#setup-extraloc').fadeIn(0)
  } else if (type == "manual") {
    $('#setup-mainloc').fadeOut(0)
    locationSettings.mainCity.autoFind = false
    //document.cookie = "mainCityAutoFind=false";
    locationSettings.mainCity.displayname = document.getElementById('mainloc-displayname').value
    //document.cookie = `mainCityDisplayName=${locationSettings.mainCity.displayname.replace(" ", "%20").replace(" ", "%20")}`
    locationSettings.mainCity.type = document.getElementById('mainloc-dropdown').value
    //document.cookie = `mainCitySearchType=${locationSettings.mainCity.type}`
    locationSettings.mainCity.val = document.getElementById('mainloc-data').value
    //document.cookie = `mainCitySearchValue=${locationSettings.mainCity.val}`
    if (locationSettings.mainCity.val == '') {
      locationSettings.mainCity.autoFind = true;
      //document.cookie = "mainCityAutoFind=true";
      console.warn("User did not implement a location value for the main city, so the sim will default to the automatic location");
    }
    $('#setup-extraloc').fadeIn(0)
  }
}
function extralocfuncs(type) {
  if (type == "skip") {
    $('#setup-extraloc').fadeOut(0)
    locationSettings.extraCity.autoFind = true
    //document.cookie = "extraCityAutoFind=true";
    $('#setup-nearbylocs').fadeIn(0)
  } else if (type == "manual") {
    $('#setup-extraloc').fadeOut(0)
    locationSettings.extraCity.autoFind = false
    //document.cookie = "extraCityAutoFind=false";
    locationSettings.extraCity.displayname = document.getElementById('extraloc-displayname').value
    //document.cookie = `extraCityDisplayName=${locationSettings.extraCity.displayname.replace(" ", "%20").replace(" ", "%20")}`
    locationSettings.extraCity.type = document.getElementById('extraloc-dropdown').value
    //document.cookie = `extraCitySearchType=${locationSettings.extraCity.type}`
    locationSettings.extraCity.val = document.getElementById('extraloc-data').value
    //document.cookie = `extraCitySearchValue=${locationSettings.extraCity.val}`
    if (locationSettings.extraCity.val == '') {
      locationSettings.extraCity.autoFind = true;
      //document.cookie = "extraCityAutoFind=true";
      console.warn("User did not implement a location value for the extra city, so the sim will default to the automatic location");
    }
    $('#setup-nearbylocs').fadeIn(0)
  }
}
function nearbylocsfuncs(type, page) {
  var pageinds = { 0: "one", 1: "two", 2: "three", 3: "four", 4: "five", 5: "six", 6: "seven", 7: "eight" }
  if (type == "skip") {
    $('#setup-nearbylocs').fadeOut(0)
    locationSettings.eightCities.autoFind = true
    //document.cookie = "eightCitiesAutoFind=true"
    $('#setup-airports').fadeIn(0)
  } else if (type == "manual") {
    if (page < 7) {
      $('.nearbylocs-page.' + pageinds[page]).fadeOut(0)
      $('.nearbylocs-page.' + pageinds[page + 1]).fadeIn(0)
    } else {
      $('.nearbylocs-page.eight').fadeOut(0)
      $('.nearbylocs-page.one').fadeIn(0)
      $('#setup-nearbylocs').fadeOut(0)
      $('#setup-airports').fadeIn(0)
    }
    locationSettings.eightCities.autoFind = false
    //document.cookie = "eightCitiesAutoFind=false"
    locationSettings.eightCities.cities[page].displayname = document.getElementById('nearbylocs-displayname-' + pageinds[page]).value
    //document.cookie = `eightCitySlide${pageinds[page]}Name=${locationSettings.eightCities.cities[page].displayname.replace(" ", "%20").replace(" ", "%20")}`
    locationSettings.eightCities.cities[page].type = document.getElementById('nearbylocs-dropdown-' + pageinds[page]).value
    //document.cookie = `eightCitySlide${pageinds[page]}Type=${locationSettings.eightCities.cities[page].type}`
    locationSettings.eightCities.cities[page].val = document.getElementById('nearbylocs-data-' + pageinds[page]).value
    //document.cookie = `eightCitySlide${pageinds[page]}Value=${locationSettings.eightCities.cities[page].val}`
    if (locationSettings.eightCities.cities[0].val == '') {
      locationSettings.eightCities.autoFind = true
      //document.cookie = "eightCitiesAutoFind=true"
      console.warn("User did not implement a location value for the first city in the eight city slides, so the sim will default to the automatic location")
    }
  }
}

function airportlocsfuncs(type, page) {
  var pageinds = { 0: "one", 1: "two" }
  if (type == "skip") {
    $('#setup-airports').fadeOut(0)
    locationSettings.airport.autoFind = true
    //document.cookie = "airportAutoFind=true"
    $('#setup-courses').fadeIn(0)
  } else if (type == "manual") {
    if (page < 1) {
      $('.airports-page.' + pageinds[page]).fadeOut(0)
      $('.airports-page.' + pageinds[page + 1]).fadeIn(0)
    } else {
      $('.airports-page.two').fadeOut(0)
      $('.airports-page.one').fadeIn(0)
      $('#setup-airports').fadeOut(0)
      $('#setup-courses').fadeIn(0)
    }
    locationSettings.airport.autoFind = false
    //document.cookie = "airportAutoFind=false"
    locationSettings.airport.airports[page].displayname = document.getElementById('airports-displayname-' + pageinds[page]).value
    //document.cookie = `airportSlide${pageinds[page]}Name=${locationSettings.airport.airports[page].displayname.replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20")}`
    locationSettings.airport.airports[page].iataCode = document.getElementById('airports-data-' + pageinds[page]).value
    //document.cookie = `airportSlide${pageinds[page]}Code=${locationSettings.airport.airports[page].iataCode}`
    if (locationSettings.airport.airports[0].val == '') {
      locationSettings.airport.autoFind = true
      //document.cookie = "airportAutoFind=true"
      console.warn("User did not implement a location value for the first airport, so the sim will default to the automatic location")
    }
  }
}
function courselocsfuncs(type, page) {
  var pageinds = { 0: "one", 1: "two", 2: "three" }
  if (type == "skip") {
    $('#setup-courses').fadeOut(0)
    locationSettings.golf.coursesautoFind = true
    //document.cookie = "golfAutoFind=true"
    if (pause == true) {
      $('#setup-pause').fadeIn(0)
    } else {
      $('#setup-packages').fadeIn(0)
    }
  } else if (type == "manual") {
    if (page < 2) {
      $('.courses-page.' + pageinds[page]).fadeOut(0)
      $('.courses-page.' + pageinds[page + 1]).fadeIn(0)
    } else {
      $('.courses-page.three').fadeOut(0)
      $('.courses-page.one').fadeIn(0)
      $('#setup-courses').fadeOut(0)
      if (pause == true) {
        $('#setup-pause').fadeIn(0)
      } else {
        $('#setup-packages').fadeIn(0)
      }
    }
    locationSettings.golf.coursesautoFind = false
    //document.cookie = "golfAutoFind=false"
    locationSettings.golf.courses[page].displayname = document.getElementById('courses-displayname-' + pageinds[page]).value
    //document.cookie = `golfSlide${pageinds[page]}Name=${locationSettings.golf.courses[page].displayname}`
    locationSettings.golf.courses[page].type = document.getElementById('courses-dropdown-' + pageinds[page]).value
    //document.cookie = `golfSlide${pageinds[page]}Type=${locationSettings.golf.courses[page].type}`
    locationSettings.golf.courses[page].val = document.getElementById('courses-data-' + pageinds[page]).value
   // document.cookie = `golfSlide${pageinds[page]}Value=${locationSettings.golf.courses[page].val}`
    if (locationSettings.golf.courses[0].val == '') {
      locationSettings.golf.coursesautoFind = true
      //document.cookie = "golfAutoFind=true"
      console.warn("User did not implement a location value for the first golf course, so the sim will default to the automatic location")
    }
  }
}

function packagesfunc(type) {
  var inds = ["one", "two", "three", "four", "five", "six"]
  var packbinds = {
    "forecastPackage": forecastPackage,
    "extraLocalPackage": extraLocalPackage,
    "miniCorePackage": miniCorePackage,
    "spanishForecastPackage": spanishForecastPackage,
    "golfPackage": golfPackage,
    "healthPackage": healthPackage,
    "airportPackage": airportPackage,
  }
  console.log(pause)
  if (pause == true) {
    slideSettings.order[0].slideLineup = []
    slideSettings.order[0].slideLineup.push(introPackage)
  }
  if (type == "default") {
    slideSettings.order[0].slideLineup.push(forecastPackage)
    slideSettings.order[0].slideLineup.push(extraLocalPackage)
    slideSettings.order[0].slideLineup.push(spanishForecastPackage)
    slideSettings.order[0].slideLineup.push(golfPackage)
    slideSettings.order[0].slideLineup.push(healthPackage)
    slideSettings.order[0].slideLineup.push(airportPackage)
    //document.cookie = "customPackage=false"
    $('#setup-packages').fadeOut(0)
    if (pause == true) {
      $('#setup-pause').fadeIn(0)
    } else {
      $('#setup-thankyou').fadeIn(0)
    }
  } else if (type == "next") {
    //var packageCookieIndex = { 0: "One", 1: "Two", 2: "Three", 3: "Four", 4: "Five", 5: "Six" }
    for (var i = 0; i < 6; i++) {
      if (document.getElementById("package-check-" + inds[i]).checked) {
        slideSettings.order[0].slideLineup.push(packbinds[document.getElementById('package-list-' + inds[i]).value])
        //document.cookie = `package${packageCookieIndex[i]}=${document.getElementById('package-list-' + inds[i]).value.toString()}`
      }// else {
        //document.cookie = `package${packageCookieIndex[i]}=false`
      //}
    }
    $('#setup-packages').fadeOut(0)
    if (pause == true) {
      $('#setup-pause').fadeIn(0)
    } else {
      $('#setup-thankyou').fadeIn(0)
    }
  }
}
$(document).ready(function () {
  $('#package-check-one').on("change", () => {
    if (document.getElementById("package-check-one").checked) {
      $('#package-list-one').removeAttr('disabled');
    } else {
      $('#package-list-one').attr('disabled', "disabled");
    }
  });
  $('#package-check-two').on("change", () => {
    if (document.getElementById("package-check-two").checked) {
      $('#package-list-two').removeAttr('disabled');
    } else {
      $('#package-list-two').attr('disabled', "disabled");
    }
  });
  $('#package-check-three').on("change", () => {
    if (document.getElementById("package-check-three").checked) {
      $('#package-list-three').removeAttr('disabled');
    } else {
      $('#package-list-three').attr('disabled', "disabled");
    }
  });
  $('#package-check-four').on("change", () => {
    if (document.getElementById("package-check-four").checked) {
      $('#package-list-four').removeAttr('disabled');
    } else {
      $('#package-list-four').attr('disabled', "disabled");
    }
  });
  $('#package-check-five').on("change", () => {
    if (document.getElementById("package-check-five").checked) {
      $('#package-list-five').removeAttr('disabled');
    } else {
      $('#package-list-five').attr('disabled', "disabled");
    }
  });
  $('#package-check-six').on("change", () => {
    if (document.getElementById("package-check-six").checked) {
      $('#package-list-six').removeAttr('disabled');
    } else {
      $('#package-list-six').attr('disabled', "disabled");
    }
  });
})
