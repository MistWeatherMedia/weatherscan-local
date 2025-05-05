// Fade out settings music functin.

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
    var eightCitiesCookieIndex = {
      0: "one",
      1: "two",
      2: "three",
      3: "four",
      4: "five",
      5: "six",
      6: "seven",
      7: "eight",
    };
    for (var i = 0; i < locationSettings.eightCities.cities.length; i++) {
      locationSettings.eightCities.cities[i].displayname = getCookie(
        `eightCitySlide${eightCitiesCookieIndex[i]}Name`
      );
      locationSettings.eightCities.cities[i].type = getCookie(
        `eightCitySlide${eightCitiesCookieIndex[i]}Type`
      );
      locationSettings.eightCities.cities[i].val = getCookie(
        `eightCitySlide${eightCitiesCookieIndex[i]}Value`
      );
    }
  }
  if (getCookie("airportAutoFind") == "true") {
    locationSettings.airport.autoFind = true;
  } else {
    locationSettings.airport.autoFind = false;
    var airportCookieIndex = { 0: "one", 1: "two" };
    for (var i = 0; i < locationSettings.airport.airports.length; i++) {
      locationSettings.airport.airports[i].displayname = getCookie(
        `airportSlide${airportCookieIndex[i]}Name`
      );
      locationSettings.airport.airports[i].iataCode = getCookie(
        `airportSlide${airportCookieIndex[i]}Code`
      );
    }
  }
  if (getCookie("golfAutoFind") == "true") {
    locationSettings.golf.coursesautoFindutoFind = true;
  } else {
    locationSettings.golf.coursesautoFind = false;
    var golfCookieIndex = { 0: "one", 1: "two", 2: "three" };
    for (var i = 0; i < locationSettings.golf.courses.length; i++) {
      locationSettings.golf.courses[i].displayname = getCookie(
        `golfSlide${golfCookieIndex[i]}Name`
      );
      locationSettings.golf.courses[i].type = getCookie(
        `golfSlide${golfCookieIndex[i]}Type`
      );
      locationSettings.golf.courses[i].val = getCookie(
        `golfSlide${golfCookieIndex[i]}Value`
      );
    }
  }
  if (getCookie("customPackage") == "true") {
    var packbinds = {
      forecastPackage: forecastPackage,
      extraLocalPackage: extraLocalPackage,
      miniCorePackage: miniCorePackage,
      spanishForecastPackage: spanishForecastPackage,
      golfPackage: golfPackage,
      healthPackage: healthPackage,
      airportPackage: airportPackage,
    };
    var packageCookieIndex = {
      0: "One",
      1: "Two",
      2: "Three",
      3: "Four",
      4: "Five",
      5: "Six",
    };
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
  }
  if (getCookie("skipSetup") == "true") {
    apperanceSettings.skipSettings = true;
  }
  console.log("Cookies loaded.");
}*/
function startButton() {
  $("#setup-thankyou").fadeOut(0);
  $("#setup-welcome").fadeOut(0);
  //document.cookie = "skipSetup=true";
  locationJS();
  setTimeout(() => {
    console.log(locationSettings)
    console.log(locationConfig)
    dataJS();
    //createMaps();
  }, 1000);
  $("#startup").fadeIn(0);
  //reset pages
  $("#settingspanel").fadeOut(0);
}
if (apperanceSettings.skipSettings == true) {
  //if (getCookie("customPackage") == "false") {
    slideSettings.order[0].slideLineup.push(forecastPackage);
    slideSettings.order[0].slideLineup.push(extraLocalPackage);
    slideSettings.order[0].slideLineup.push(spanishForecastPackage);
    slideSettings.order[0].slideLineup.push(golfPackage);
    slideSettings.order[0].slideLineup.push(healthPackage);
    slideSettings.order[0].slideLineup.push(airportPackage);
  //}
  setTimeout(() => {
    locationJS();
    setTimeout(() => {
      dataJS();
    }, 1000);
    $("#startup").fadeIn(0);
    $("#settingspanel").fadeOut(0);
  }, 1000);
} else {
  setTimeout(() => {
    $("#version-number").text("Version " + apperanceSettings.version)
    $("#setup-welcome").fadeIn(0);
  }, 1000);
}
function welcomefuncs(type) {
  if (type == "proceed") {
    $("#setup-welcome").fadeOut(0);
    $("#setup-mainloc").fadeIn(0);
  } else if (type == "skipall") {
    startButton();
    //document.cookie = "skipSetup=true";
    //document.cookie = "mainCityAutoFind=true";
    //document.cookie = "extraCityAutoFind=true";
    //document.cookie = "eightCitiesAutoFind=true";
    //document.cookie = "airportAutoFind=true";
    //document.cookie = "golfAutoFind=true";
    //document.cookie = "customPackage=false";
    locationSettings.mainCity.autoFind = true;
    locationSettings.eightCities.autoFind = true;
    locationSettings.airport.autoFind = true;
    locationSettings.golf.coursesautoFind = true;
    slideSettings.order[0].slideLineup.push(forecastPackage);
    slideSettings.order[0].slideLineup.push(extraLocalPackage);
    slideSettings.order[0].slideLineup.push(spanishForecastPackage);
    slideSettings.order[0].slideLineup.push(golfPackage);
    slideSettings.order[0].slideLineup.push(healthPackage);
    slideSettings.order[0].slideLineup.push(airportPackage);
    //console.log(document.cookie);
  }
}
function mainlocfuncs(type) {
  if (type == "skip") {
    $("#setup-mainloc").fadeOut(0);
    locationSettings.mainCity.autoFind = true;
    //document.cookie = "mainCityAutoFind=true";
    $("#setup-extraloc").fadeIn(0);
  } else if (type == "manual") {
    if (document.getElementById("mainloc-data").value == "") {
      $("#setup-mainloc .location-warning").fadeIn(0);
      return;
    }
    $("#setup-mainloc").fadeOut(0);
    locationSettings.mainCity.autoFind = false;
    //document.cookie = "mainCityAutoFind=false";
    locationSettings.mainCity.displayname = document.getElementById(
      "mainloc-displayname"
    ).value;
    //document.cookie = `mainCityDisplayName=${locationSettings.mainCity.displayname.replace(" ", "%20").replace(" ", "%20")}`;
    locationSettings.mainCity.type =
      document.getElementById("mainloc-dropdown").value;
    //document.cookie = `mainCitySearchType=${locationSettings.mainCity.type}`;
    locationSettings.mainCity.val =
      document.getElementById("mainloc-data").value;
    //document.cookie = `mainCitySearchValue=${locationSettings.mainCity.val}`;
    $("#setup-extraloc").fadeIn(0);
  }
}
function extralocfuncs(type) {
  if (type == "skip") {
    $("#setup-extraloc").fadeOut(0);
    locationSettings.extraCity.autoFind = true;
    //document.cookie = "extraCityAutoFind=true";
    $("#setup-nearbylocs").fadeIn(0);
  } else if (type == "manual") {
    if (document.getElementById("extraloc-data").value == "") {
      $("#setup-extraloc .location-warning").fadeIn(0);
      return;
    }
    $("#setup-extraloc").fadeOut(0);
    locationSettings.extraCity.autoFind = false;
    //document.cookie = "extraCityAutoFind=false";
    locationSettings.extraCity.displayname = document.getElementById(
      "extraloc-displayname"
    ).value;
    //document.cookie = `extraCityDisplayName=${locationSettings.extraCity.displayname.replace(" ", "%20").replace(" ", "%20")}`;
    locationSettings.extraCity.type =
      document.getElementById("extraloc-dropdown").value;
    //document.cookie = `extraCitySearchType=${locationSettings.extraCity.type}`;
    locationSettings.extraCity.val =
      document.getElementById("extraloc-data").value;
    //document.cookie = `extraCitySearchValue=${locationSettings.extraCity.val}`;
    $("#setup-nearbylocs").fadeIn(0);
  }
}
function nearbylocsfuncs(type, page) {
  var pageinds = {
    0: "one",
    1: "two",
    2: "three",
    3: "four",
    4: "five",
    5: "six",
    6: "seven",
    7: "eight",
  };
  if (type == "skip") {
    $("#setup-nearbylocs").fadeOut(0);
    locationSettings.eightCities.autoFind = true;
    //document.cookie = "eightCitiesAutoFind=true";
    $("#setup-airports").fadeIn(0);
  } else if (type == "manual") {
    if (
      document.getElementById("nearbylocs-data-" + pageinds[page]).value == ""
    ) {
      $(`.nearbylocs-page.${pageinds[page]} .location-warning`).fadeIn(0);
      return;
    }
    if (page < 7) {
      $(".nearbylocs-page." + pageinds[page]).fadeOut(0);
      $(".nearbylocs-page." + pageinds[page + 1]).fadeIn(0);
    } else {
      $(".nearbylocs-page.eight").fadeOut(0);
      $(".nearbylocs-page.one").fadeIn(0);
      $("#setup-nearbylocs").fadeOut(0);
      $("#setup-airports").fadeIn(0);
    }
    locationSettings.eightCities.autoFind = false;
    //document.cookie = "eightCitiesAutoFind=false";
    locationSettings.eightCities.cities[page].displayname =
      document.getElementById("nearbylocs-displayname-" + pageinds[page]).value;
    //document.cookie = `eightCitySlide${pageinds[page]}Name=${locationSettings.eightCities.cities[page].displayname.replace(" ", "%20").replace(" ", "%20")}`;
    locationSettings.eightCities.cities[page].type = document.getElementById(
      "nearbylocs-dropdown-" + pageinds[page]
    ).value;
    //document.cookie = `eightCitySlide${pageinds[page]}Type=${locationSettings.eightCities.cities[page].type}`;
    locationSettings.eightCities.cities[page].val = document.getElementById(
      "nearbylocs-data-" + pageinds[page]
    ).value;
    //document.cookie = `eightCitySlide${pageinds[page]}Value=${locationSettings.eightCities.cities[page].val}`;
  }
}

function airportlocsfuncs(type, page) {
  var pageinds = { 0: "one", 1: "two" };
  if (type == "skip") {
    $("#setup-airports").fadeOut(0);
    locationSettings.airport.autoFind = true;
    //document.cookie = "airportAutoFind=true";
    $("#setup-courses").fadeIn(0);
  } else if (type == "manual") {
    if (
      document.getElementById("airports-data-" + pageinds[page]).value == ""
    ) {
      $(`.airports-page.${pageinds[page]} .location-warning`).fadeIn(0);
      return;
    }
    if (page < 1) {
      $(".airports-page." + pageinds[page]).fadeOut(0);
      $(".airports-page." + pageinds[page + 1]).fadeIn(0);
    } else {
      $(".airports-page.two").fadeOut(0);
      $(".airports-page.one").fadeIn(0);
      $("#setup-airports").fadeOut(0);
      $("#setup-courses").fadeIn(0);
    }
    locationSettings.airport.autoFind = false;
    //document.cookie = "airportAutoFind=false";
    locationSettings.airport.airports[page].displayname =
      document.getElementById("airports-displayname-" + pageinds[page]).value;
    //document.cookie = `airportSlide${pageinds[page]}Name=${locationSettings.airport.airports[page].displayname.replace(" ", "%20").replace(" ", "%20").replace(" ", "%20").replace(" ", "%20")}`;
    locationSettings.airport.airports[page].iataCode = document.getElementById("airports-data-" + pageinds[page]).value;
    //document.cookie = `airportSlide${pageinds[page]}Code=${locationSettings.airport.airports[page].iataCode}`;
  }
}
function courselocsfuncs(type, page) {
  var pageinds = { 0: "one", 1: "two", 2: "three" };
  if (type == "skip") {
    $("#setup-courses").fadeOut(0);
    locationSettings.golf.coursesautoFind = true;
    //document.cookie = "golfAutoFind=true";
    $("#setup-packages").fadeIn(0);
  } else if (type == "manual") {
    if (document.getElementById("courses-data-" + pageinds[page]).value == "") {
      $(`.courses-page.${pageinds[page]} .location-warning`).fadeIn(0);
      return;
    }
    if (page < 2) {
      $(".courses-page." + pageinds[page]).fadeOut(0);
      $(".courses-page." + pageinds[page + 1]).fadeIn(0);
    } else {
      $(".courses-page.three").fadeOut(0);
      $(".courses-page.one").fadeIn(0);
      $("#setup-courses").fadeOut(0);
      $("#setup-packages").fadeIn(0);
    }
    locationSettings.golf.coursesautoFind = false;
    //document.cookie = "golfAutoFind=false";
    locationSettings.golf.courses[page].displayname = document.getElementById(
      "courses-displayname-" + pageinds[page]
    ).value;
    //document.cookie = `golfSlide${pageinds[page]}Name=${locationSettings.golf.courses[page].displayname}`;
    locationSettings.golf.courses[page].type = document.getElementById(
      "courses-dropdown-" + pageinds[page]
    ).value;
    //document.cookie = `golfSlide${pageinds[page]}Type=${locationSettings.golf.courses[page].type}`;
    locationSettings.golf.courses[page].val = document.getElementById(
      "courses-data-" + pageinds[page]
    ).value;
    //document.cookie = `golfSlide${pageinds[page]}Value=${locationSettings.golf.courses[page].val}`;
    if (locationSettings.golf.courses[0].val == "") {
      locationSettings.golf.coursesautoFind = true;
      //document.cookie = "golfAutoFind=true";
      console.warn(
        "User did not implement a location value for the first golf course, so the sim will default to the automatic location"
      );
    }
  }
}

function packagesfunc(type) {
  var inds = ["one", "two", "three", "four", "five", "six"];
  var packbinds = {
    forecastPackage: forecastPackage,
    extraLocalPackage: extraLocalPackage,
    miniCorePackage: miniCorePackage,
    spanishForecastPackage: spanishForecastPackage,
    golfPackage: golfPackage,
    healthPackage: healthPackage,
    airportPackage: airportPackage,
  };
  if (type == "default") {
    slideSettings.order[0].slideLineup.push(forecastPackage);
    slideSettings.order[0].slideLineup.push(extraLocalPackage);
    slideSettings.order[0].slideLineup.push(spanishForecastPackage);
    slideSettings.order[0].slideLineup.push(golfPackage);
    slideSettings.order[0].slideLineup.push(healthPackage);
    slideSettings.order[0].slideLineup.push(airportPackage);
    //document.cookie = "customPackage=false";
    $("#setup-packages").fadeOut(0);
    $("#setup-thankyou").fadeIn(0);
  } else if (type == "next") {
    var packageCheck = false;
    //document.cookie = "customPackage=true";
    var packageCookieIndex = {
      0: "One",
      1: "Two",
      2: "Three",
      3: "Four",
      4: "Five",
      5: "Six",
    };
    for (var i = 0; i < 6; i++) {
      if (document.getElementById("package-check-" + inds[i]).checked) {
        packageCheck = true;
        slideSettings.order[0].slideLineup.push(
          packbinds[document.getElementById("package-list-" + inds[i]).value]
        );
        //document.cookie = `package${packageCookieIndex[i]}=${document.getElementById("package-list-" + inds[i]).value.toString()}`;
      }// else {
        //document.cookie = `package${packageCookieIndex[i]}=false`;
      //}
    }
    if (!packageCheck) {
      $(".package-warning").fadeIn(0);
      return;
    }
    $("#setup-packages").fadeOut(0);
    $("#setup-thankyou").fadeIn(0);
  }
}
$(document).ready(function () {
  $("#package-check-one").on("change", () => {
    if (document.getElementById("package-check-one").checked) {
      $("#package-list-one").removeAttr("disabled");
    } else {
      $("#package-list-one").attr("disabled", "disabled");
    }
  });
  $("#package-check-two").on("change", () => {
    if (document.getElementById("package-check-two").checked) {
      $("#package-list-two").removeAttr("disabled");
    } else {
      $("#package-list-two").attr("disabled", "disabled");
    }
  });
  $("#package-check-three").on("change", () => {
    if (document.getElementById("package-check-three").checked) {
      $("#package-list-three").removeAttr("disabled");
    } else {
      $("#package-list-three").attr("disabled", "disabled");
    }
  });
  $("#package-check-four").on("change", () => {
    if (document.getElementById("package-check-four").checked) {
      $("#package-list-four").removeAttr("disabled");
    } else {
      $("#package-list-four").attr("disabled", "disabled");
    }
  });
  $("#package-check-five").on("change", () => {
    if (document.getElementById("package-check-five").checked) {
      $("#package-list-five").removeAttr("disabled");
    } else {
      $("#package-list-five").attr("disabled", "disabled");
    }
  });
  $("#package-check-six").on("change", () => {
    if (document.getElementById("package-check-six").checked) {
      $("#package-list-six").removeAttr("disabled");
    } else {
      $("#package-list-six").attr("disabled", "disabled");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var mainlocDropdown = document.getElementById("mainloc-dropdown");
  var extralocDropdown = document.getElementById("extraloc-dropdown");
  var nearbylocsDropdownOne = document.getElementById(
    "nearbylocs-dropdown-one"
  );
  var nearbylocsDropdownTwo = document.getElementById(
    "nearbylocs-dropdown-two"
  );
  var nearbylocsDropdownThree = document.getElementById(
    "nearbylocs-dropdown-three"
  );
  var nearbylocsDropdownFour = document.getElementById(
    "nearbylocs-dropdown-four"
  );
  var nearbylocsDropdownFive = document.getElementById(
    "nearbylocs-dropdown-five"
  );
  var nearbylocsDropdownSix = document.getElementById(
    "nearbylocs-dropdown-six"
  );
  var nearbylocsDropdownSeven = document.getElementById(
    "nearbylocs-dropdown-seven"
  );
  var nearbylocsDropdownEight = document.getElementById(
    "nearbylocs-dropdown-eight"
  );
  var coursesDropdownOne = document.getElementById("courses-dropdown-one");
  var coursesDropdownTwo = document.getElementById("courses-dropdown-two");
  var coursesDropdownThree = document.getElementById("courses-dropdown-three");

  mainlocDropdown.addEventListener("change", () => {
    if (mainlocDropdown.value == "geocode") {
      $("#mainloc-data").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (mainlocDropdown.value == "postalKey") {
      $("#mainloc-data").attr("placeholder", "(Ex: 30339:US)");
    } else if (mainlocDropdown.value == "iataCode") {
      $("#mainloc-data").attr("placeholder", "(Ex: ATL)");
    } else if (mainlocDropdown.value == "icaoCode") {
      $("#mainloc-data").attr("placeholder", "(Ex: KATL)");
    }
  });
  extralocDropdown.addEventListener("change", () => {
    if (extralocDropdown.value == "geocode") {
      $("#extraloc-data").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (extralocDropdown.value == "postalKey") {
      $("#extraloc-data").attr("placeholder", "(Ex: 30339:US)");
    } else if (extralocDropdown.value == "iataCode") {
      $("#extraloc-data").attr("placeholder", "(Ex: ATL)");
    } else if (extralocDropdown.value == "icaoCode") {
      $("#extraloc-data").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownOne.addEventListener("change", () => {
    if (nearbylocsDropdownOne.value == "geocode") {
      $("#nearbylocs-data-one").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (nearbylocsDropdownOne.value == "postalKey") {
      $("#nearbylocs-data-one").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownOne.value == "iataCode") {
      $("#nearbylocs-data-one").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownOne.value == "icaoCode") {
      $("#nearbylocs-data-one").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownTwo.addEventListener("change", () => {
    if (nearbylocsDropdownTwo.value == "geocode") {
      $("#nearbylocs-data-two").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (nearbylocsDropdownTwo.value == "postalKey") {
      $("#nearbylocs-data-two").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownTwo.value == "iataCode") {
      $("#nearbylocs-data-two").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownTwo.value == "icaoCode") {
      $("#nearbylocs-data-two").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownThree.addEventListener("change", () => {
    if (nearbylocsDropdownThree.value == "geocode") {
      $("#nearbylocs-data-three").attr(
        "placeholder",
        "(Ex: 33.7682, -84.4111)"
      );
    } else if (nearbylocsDropdownThree.value == "postalKey") {
      $("#nearbylocs-data-three").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownThree.value == "iataCode") {
      $("#nearbylocs-data-three").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownThree.value == "icaoCode") {
      $("#nearbylocs-data-three").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownFour.addEventListener("change", () => {
    if (nearbylocsDropdownFour.value == "geocode") {
      $("#nearbylocs-data-four").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (nearbylocsDropdownFour.value == "postalKey") {
      $("#nearbylocs-data-four").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownFour.value == "iataCode") {
      $("#nearbylocs-data-four").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownFour.value == "icaoCode") {
      $("#nearbylocs-data-four").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownFive.addEventListener("change", () => {
    if (nearbylocsDropdownFive.value == "geocode") {
      $("#nearbylocs-data-five").attr("placeholder", "(EExG: 33.7682, -84.4111)");
    } else if (nearbylocsDropdownFive.value == "postalKey") {
      $("#nearbylocs-data-five").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownFive.value == "iataCode") {
      $("#nearbylocs-data-five").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownFive.value == "icaoCode") {
      $("#nearbylocs-data-five").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownSix.addEventListener("change", () => {
    if (nearbylocsDropdownSix.value == "geocode") {
      $("#nearbylocs-data-six").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (nearbylocsDropdownSix.value == "postalKey") {
      $("#nearbylocs-data-six").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownSix.value == "iataCode") {
      $("#nearbylocs-data-six").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownSix.value == "icaoCode") {
      $("#nearbylocs-data-six").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownSeven.addEventListener("change", () => {
    if (nearbylocsDropdownSeven.value == "geocode") {
      $("#nearbylocs-data-seven").attr(
        "placeholder",
        "(EGEx: 33.7682, -84.4111)"
      );
    } else if (nearbylocsDropdownSeven.value == "postalKey") {
      $("#nearbylocs-data-seven").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownSeven.value == "iataCode") {
      $("#nearbylocs-data-seven").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownSeven.value == "icaoCode") {
      $("#nearbylocs-data-seven").attr("placeholder", "(Ex: KATL)");
    }
  });
  nearbylocsDropdownEight.addEventListener("change", () => {
    if (nearbylocsDropdownEight.value == "geocode") {
      $("#nearbylocs-data-eight").attr(
        "placeholder",
        "(Ex: 33.7682, -84.4111)"
      );
    } else if (nearbylocsDropdownEight.value == "postalKey") {
      $("#nearbylocs-data-eight").attr("placeholder", "(Ex: 30339:US)");
    } else if (nearbylocsDropdownEight.value == "iataCode") {
      $("#nearbylocs-data-eight").attr("placeholder", "(Ex: ATL)");
    } else if (nearbylocsDropdownEight.value == "icaoCode") {
      $("#nearbylocs-data-eight").attr("placeholder", "(Ex: KATL)");
    }
  });
  coursesDropdownOne.addEventListener("change", () => {
    if (coursesDropdownOne.value == "geocode") {
      $("#courses-data-one").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (coursesDropdownOne.value == "postalKey") {
      $("#courses-data-one").attr("placeholder", "(Ex: 30339:US)");
    } else if (coursesDropdownOne.value == "iataCode") {
      $("#courses-data-one").attr("placeholder", "(Ex: ATL)");
    } else if (coursesDropdownOne.value == "icaoCode") {
      $("#courses-data-one").attr("placeholder", "(Ex: KATL)");
    }
  });
  coursesDropdownTwo.addEventListener("change", () => {
    if (coursesDropdownTwo.value == "geocode") {
      $("#courses-data-two").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (coursesDropdownTwo.value == "postalKey") {
      $("#courses-data-two").attr("placeholder", "(Ex: 30339:US)");
    } else if (coursesDropdownTwo.value == "iataCode") {
      $("#courses-data-two").attr("placeholder", "(Ex: ATL)");
    } else if (coursesDropdownTwo.value == "icaoCode") {
      $("#courses-data-two").attr("placeholder", "(Ex: KATL)");
    }
  });
  coursesDropdownThree.addEventListener("change", () => {
    if (coursesDropdownThree.value == "geocode") {
      $("#courses-data-three").attr("placeholder", "(Ex: 33.7682, -84.4111)");
    } else if (coursesDropdownThree.value == "postalKey") {
      $("#courses-data-three").attr("placeholder", "(Ex: 30339:US)");
    } else if (coursesDropdownThree.value == "iataCode") {
      $("#courses-data-three").attr("placeholder", "(Ex: ATL)");
    } else if (coursesDropdownThree.value == "icaoCode") {
      $("#courses-data-three").attr("placeholder", "(Ex: KATL)");
    }
  });
});