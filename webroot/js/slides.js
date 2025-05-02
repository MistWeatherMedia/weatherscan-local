var extraCityName = ""
var slideDivs = {
  "dopplerRadar": ".radar-doppler",

  "bulletin": ".bulletin-slide",
  "currentConditions": ".current-conditions",
  "extendedForecast": ".extended-forecast",
  "almanac": ".almanac-slide",
  "nearbyCities": ".nearby-cities",
  "introSlide": ".intro-slide",
  "providerSlide": ".provider-slide",
  "upNext": ".upnext-slide",
  "dayDesc": ".daydesc-forecast",
  "regionalSat": ".regional-sat",
  "regionalRadar": ".regional-radar",

  "airportConditions": ".airport-conditions",
  "nationalAirports": ".national-airports",

  "EScurrentConditions": ".spanish-current-conditions",
  "ESextendedForecast": ".spanish-extended-forecast",
  "ESalmanac": ".spanish-almanac-slide",
  "ESnearbyCities": ".spanish-nearby-cities",

  "courseForecast": ".course-forecast",

  "healthTip": ".health-tip",
  "uvIndex": ".uv-index",

  "extraCurrentConditions":".extra-current-conditions",
  "extraDayDesc":"extra-daydesc-forecast",
  "extraExtendedForecast":"extra-extended-forecast",
};
var slideTitles
var slideLength = 10000;
var currentProgram;
var currentDiv;
var locround = 0;
var reground = 0;
var satround = 0;
var idx = 0;
var gidx = 0;
var htipidx = 0;
var slidePrograms = {
    /*RADAR*/
    dopplerRadar() {
      try {
        if (weatherData.radarUnavailable == true) {
          //console.error(error);
        $(".radar-doppler").fadeIn(0);
        $(".radar-doppler .tempunavailable").fadeIn(0);
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#locradar").attr("style","transform: scale(1.27, 1.35) translate3d(0,0,0);");
        } else {
          $("#locradar").attr("style","transform: scale(1.13, 1.335) translate3d(0,0,0);");
        }
        $("#provider").css("margin-left", "15px");
        $("#provider").css("margin-top", "5px");
        setTimeout(function () {
          slideCallBack();
          $(".radar-doppler").fadeOut(0);
          $(".radar-doppler .tempunavailable").fadeOut(0);
        }, slideLength * 2);
        } else {
          $(".radar-doppler").fadeIn(0);
        startRadar(locradar);
        $("#provider").css("margin-left", "15px");
        $("#provider").css("margin-top", "5px");
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#locradar").attr("style","transform: scale(1.27, 1.35) translate3d(0,0,0);");
        } else {
          $("#locradar").attr("style","transform: scale(1.13, 1.335) translate3d(0,0,0);");
        }
        setTimeout(function () {
          slideCallBack();
          $(".radar-doppler").fadeOut(0);
          //$("#locradar").attr("style", "");
          //}, 500);
        }, slideLength * 2);
        }
      } catch (error) {
        //console.error(error);
        $(".radar-doppler").fadeIn(0);
        $(".radar-doppler .tempunavailable").fadeIn(0);
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#locradar").attr("style","transform: scale(1.27, 1.35) translate3d(0,0,0);");
        } else {
          $("#locradar").attr("style","transform: scale(1.13, 1.335) translate3d(0,0,0);");
        }
        $("#provider").css("margin-left", "15px");
        $("#provider").css("margin-top", "5px");
        setTimeout(function () {
          slideCallBack();
          $(".radar-doppler").fadeOut(0);
          $(".radar-doppler .tempunavailable").fadeOut(0);
        }, slideLength * 2);
      }
    },
    regionalSat() {
      try {
        if (weatherData.radarUnavailable == true) {
          $("#provider").css("margin-left", "15px")
        $("#provider").css("margin-top", "5px")
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#satradar").attr("style","transform: scale(1.28, 1.35) translate3d(0,0,0);");
        } else {
          $("#satradar").attr("style","transform: scale(1.14, 1.335) translate3d(0,0,0);");
        }
        $(".regional-sat").fadeIn(0);
        $(".regional-sat .tempunavailable").fadeIn(0);
        setTimeout(function () {
          slideCallBack();
          $(".regional-sat").fadeOut(0);
          $(".regional-sat .tempunavailable").fadeOut(0);
        }, slideLength * 2);
        } else {
          $(".regional-sat").fadeIn(0);
        startRadar(satradar);
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#satradar").attr("style","transform: scale(1.28, 1.35) translate3d(0,0,0);");
        } else {
          $("#satradar").attr("style","transform: scale(1.14, 1.335) translate3d(0,0,0);");
        }
        $("#provider").css("margin-left", "15px")
        $("#provider").css("margin-top", "5px")
        setTimeout(function () {
          slideCallBack();
          $(".regional-sat").fadeOut(0);
        }, slideLength * 2);
        }
      } catch (error) {
        $("#provider").css("margin-left", "15px")
        $("#provider").css("margin-top", "5px")
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#satradar").attr("style","transform: scale(1.28, 1.35) translate3d(0,0,0);");
        } else {
          $("#satradar").attr("style","transform: scale(1.14, 1.335) translate3d(0,0,0);");
        }
        $(".regional-sat").fadeIn(0);
        $(".regional-sat .tempunavailable").fadeIn(0);
        setTimeout(function () {
          slideCallBack();
          $(".regional-sat").fadeOut(0);
          $(".regional-sat .tempunavailable").fadeOut(0);
        }, slideLength * 2);
      }
    },
    regionalRadar() {
      try {
        if (weatherData.radarUnavailable == true) {
          $(".regional-radar").fadeIn(0);
          $(".regional-radar .tempunavailable").fadeIn(0);
          if (apperanceSettings.aspectRatio == 3/2) {
            $("#regradar").attr("style","transform: scale(1.28, 1.35) translate3d(0,0,0);");
          } else {
            $("#regradar").attr("style","transform: scale(1.14, 1.335) translate3d(0,0,0);");
          }
          $("#provider").css("margin-left", "15px")
          $("#provider").css("margin-top", "5px")
          setTimeout(function () {
            slideCallBack();
            $(".regional-radar").fadeOut(0);
            $(".regional-radar .tempunavailable").fadeOut(0);
            //$("#provider").css("margin-left", "0px")
            //$("#provider").css("margin-top", "0px")
          }, slideLength * 2);
        } else {
        $(".regional-radar").fadeIn(0);
        $("#provider").css("margin-left", "15px")
        $("#provider").css("margin-top", "5px")
        startRadar(regradar);
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#regradar").attr("style","transform: scale(1.28, 1.35) translate3d(0,0,0);");
        } else {
          $("#regradar").attr("style","transform: scale(1.14, 1.335) translate3d(0,0,0);");
        }
        setTimeout(function () {
          slideCallBack();
          $(".regional-radar").fadeOut(0);
        }, slideLength * 2);
        }
      } catch (error) {
        $(".regional-radar").fadeIn(0);
        $(".regional-radar .tempunavailable").fadeIn(0);
        if (apperanceSettings.aspectRatio == 3/2) {
          $("#regradar").attr("style","transform: scale(1.28, 1.35) translate3d(0,0,0);");
        } else {
          $("#regradar").attr("style","transform: scale(1.14, 1.335) translate3d(0,0,0);");
        }
        $("#provider").css("margin-left", "15px")
        $("#provider").css("margin-top", "5px")
        setTimeout(function () {
          slideCallBack();
          $(".regional-radar").fadeOut(0);
          $(".regional-radar .tempunavailable").fadeOut(0);
          //$("#provider").css("margin-left", "0px")
          //$("#provider").css("margin-top", "0px")
        }, slideLength * 2);
      }
    },
    /*EXTRA*/
    extraCurrentConditions() {
      try {
        $(".extra-current-conditions .slide-data .cityname").text(weatherData.extraLocal.currentConditions.cityname);
        $(".extra-current-conditions .slide-data .humidity").text(weatherData.extraLocal.currentConditions.humidity);
        $(".extra-current-conditions .slide-data .pressure").text(weatherData.extraLocal.currentConditions.pressure);
        $(".extra-current-conditions .slide-data .wind").text(weatherData.extraLocal.currentConditions.wind);
        $(".extra-current-conditions .slide-data .gusts").text(weatherData.extraLocal.currentConditions.gusts);
        $(".extra-current-conditions .slide-data .condition").text(weatherData.extraLocal.currentConditions.cond);
        $(".extra-current-conditions .slide-data .temperature").text(weatherData.extraLocal.currentConditions.temp);
        getIcon($(".extra-current-conditions .slide-data .icon"), weatherData.extraLocal.currentConditions.icon, weatherData.extraLocal.currentConditions.windspeed);

        fadeSlideIn(".extra-current-conditions");
        if (audioSettings.narrations) {
          audioPlayer.playCC();
        }
        setTimeout(function () {
          fadeSlideOut(".extra-current-conditions", 500);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".extra-current-conditions .slide-data .cityname").text(locationConfig.extraCity.displayname);
        $(".extra-current-conditions .slide-data .humidity").text("");
        $(".extra-current-conditions .slide-data .pressure").text("");
        $(".extra-current-conditions .slide-data .wind").text("");
        $(".extra-current-conditions .slide-data .gusts").text("");
        $(".extra-current-conditions .slide-data .condition").text("");
        $(".extra-current-conditions .slide-data .temperature").text("");
        getIcon($(".extra-current-conditions .slide-data .icon"), 44, 0);

        fadeSlideIn(".extra-current-conditions");
        if (audioSettings.narrations) {
          audioPlayer.playCC();
        }
        setTimeout(function () {
          fadeSlideOut(".extra-current-conditions", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    extraDayDesc() {
      try {
        $(".extra-daydesc-forecast .cityname").text(weatherData.extraLocal.dayDesc.cityname);
        $(".extra-daydesc-forecast.one .slide-data .daytitle").text(weatherData.extraLocal.dayDesc.times[0].timetitle);
        $(".extra-daydesc-forecast.one .slide-data .daydesc").text(weatherData.extraLocal.dayDesc.times[0].forecast);
        $(".extra-daydesc-forecast.two .slide-data .daytitle").text(weatherData.extraLocal.dayDesc.times[1].timetitle);
        $(".extra-daydesc-forecast.two .slide-data .daydesc").text(weatherData.extraLocal.dayDesc.times[1].forecast);
        $(".extra-daydesc-forecast.three .slide-data .daytitle").text(weatherData.extraLocal.dayDesc.times[2].timetitle);
        $(".extra-daydesc-forecast.three .slide-data .daydesc").text(weatherData.extraLocal.dayDesc.times[2].forecast);

        fadeSlideIn(".extra-daydesc-forecast.one");
          if (audioSettings.narrations) {
            audioPlayer.playLF();
          }
        setTimeout(() => {
          fadeSlideOut(".extra-daydesc-forecast.one", 500);
          fadeSlideIn(".extra-daydesc-forecast.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".extra-daydesc-forecast.two", 500);
          fadeSlideIn(".extra-daydesc-forecast.three");
        }, slideLength * 2);
        setTimeout(function () {
          fadeSlideOut(".extra-daydesc-forecast.three", 500);
          slideCallBack();
        }, slideLength * 3);
      } catch (error) {
        $(".extra-daydesc-forecast .cityname").text(locationConfig.extraCity.displayname);
        $(".extra-daydesc-forecast.one .slide-data .daytitle").text("");
        $(".extra-daydesc-forecast.one .slide-data .daydesc").text("");
        $(".extra-daydesc-forecast.two .slide-data .daytitle").text("");
        $(".extra-daydesc-forecast.two .slide-data .daydesc").text("");
        $(".extra-daydesc-forecast.three .slide-data .daytitle").text("");
        $(".extra-daydesc-forecast.three .slide-data .daydesc").text("");

        $(".extra-daydesc-forecast.one").fadeIn(0);
        $(".extra-daydesc-forecast.one .slide-data").fadeIn(500);

        fadeSlideIn("extra-daydesc-forecast.one");
          if (audioSettings.narrations) {
            audioPlayer.playLF();
          }
        setTimeout(() => {
          fadeSlideOut(".extra-daydesc-forecast.one", 500);
          fadeSlideIn(".extra-daydesc-forecast.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".extra-daydesc-forecast.two", 500);
          fadeSlideIn(".extra-daydesc-forecast.three");
        }, slideLength * 2);
        setTimeout(function () {
          fadeSlideOut(".extra-daydesc-forecast.three", 500);
          slideCallBack();
        }, slideLength * 3);
      }
    },
    extraExtendedForecast() {
      var daysDivs = ["one", "two", "three", "four", "five"];
      try {
        $(".extra-extended-forecast .slide-data .cityname").text(weatherData.extraLocal.extendedForecast.cityname);
        for (var i = 0; i < 5; i++) {
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .dayname").text(weatherData.extraLocal.extendedForecast.days[i].dayname);
          getIcon($(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .icon"), weatherData.extraLocal.extendedForecast.days[i].icon, weatherData.extraLocal.extendedForecast.days[i].windspeed);
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .condition").text(weatherData.extraLocal.extendedForecast.days[i].cond);
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .high").text(weatherData.extraLocal.extendedForecast.days[i].high);
          if (weatherData.extraLocal.extendedForecast.noReport == true) {
            $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("");
          } else {
            $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("/");
          }
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .low").text(weatherData.extraLocal.extendedForecast.days[i].low);
        }
        fadeSlideIn(".extra-extended-forecast");
        setTimeout(() => {
          fadeSlideOut(".extra-extended-forecast", 0);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".extra-extended-forecast .slide-data .cityname").text(
          locationConfig.extraCity.displayname
        );
        for (var i = 0; i < 5; i++) {
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .dayname").text("");
          getIcon($(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .icon"), 44, 0);
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .condition").text("");
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .high").text("");
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("");
          $(".extra-extended-forecast .slide-data .day." + daysDivs[i] + " .low").text("");
        }
        fadeSlideIn(".extra-extended-forecast");
        setTimeout(() => {
          fadeSlideOut(".extra-extended-forecast", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    /*FORECAST*/
    bulletin() {
      try {
        if (weatherData.alerts.alertsAmount > 0) {
          $('.bulletin-slide .slide-data .cityname').text(locationConfig.mainCity.displayname + " Area")
          $('.bulletin-slide .slide-data .alerts').text("")
          for (var i = 0; i < weatherData.alerts.alertsAmount; i++) {
            let prevtext = $('.bulletin-slide .slide-data .alerts').text()
            $('.bulletin-slide .slide-data .alerts').text(prevtext + weatherData.alerts.warnings[i].headline + "\n")
          }

          fadeSlideIn(".bulletin-slide");
          setTimeout(() => {
            fadeSlideOut(".bulletin-slide", 0);
            slideCallBack();
          }, slideLength);
        } else {
          slideCallBack()
        }
      } catch (error) {
        slideCallBack()
      }
    },
    currentConditions() {
      try {
        $(".current-conditions .slide-data .cityname").text(weatherData.currentConditions.cityname);
        $(".current-conditions .slide-data .humidity").text(weatherData.currentConditions.humidity);
        $(".current-conditions .slide-data .pressure").text(weatherData.currentConditions.pressure);
        $(".current-conditions .slide-data .wind").text(weatherData.currentConditions.wind);
        $(".current-conditions .slide-data .gusts").text(weatherData.currentConditions.gusts);
        $(".current-conditions .slide-data .condition").text(weatherData.currentConditions.cond);
        $(".current-conditions .slide-data .temperature").text(weatherData.currentConditions.temp);
        getIcon($(".current-conditions .slide-data .icon"), weatherData.currentConditions.icon, weatherData.currentConditions.windspeed);

        fadeSlideIn(".current-conditions");
          if (audioSettings.narrations) {
            audioPlayer.playCC();
          }
        setTimeout(function () {
          fadeSlideOut(".current-conditions", 500);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".current-conditions .slide-data .cityname").text(locationConfig.mainCity.displayname);
        $(".current-conditions .slide-data .humidity").text("");
        $(".current-conditions .slide-data .pressure").text("");
        $(".current-conditions .slide-data .wind").text("");
        $(".current-conditions .slide-data .gusts").text("");
        $(".current-conditions .slide-data .condition").text("");
        $(".current-conditions .slide-data .temperature").text("");
        getIcon($(".current-conditions .slide-data .icon"), 44, 0);

        fadeSlideIn(".current-conditions");
          if (audioSettings.narrations) {
            audioPlayer.playCC();
          }
        setTimeout(function () {
          fadeSlideOut(".current-conditions", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    extendedForecast() {
      var daysDivs = ["one", "two", "three", "four", "five"];
      try {
        $(".extended-forecast .slide-data .cityname").text(weatherData.extendedForecast.cityname);
        for (var i = 0; i < 5; i++) {
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .dayname").text(weatherData.extendedForecast.days[i].dayname);
          getIcon($(".extended-forecast .slide-data .day." + daysDivs[i] + " .icon"), weatherData.extendedForecast.days[i].icon, weatherData.extendedForecast.days[i].windspeed);
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .condition").text(weatherData.extendedForecast.days[i].cond);
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .high").text(weatherData.extendedForecast.days[i].high);
          if (weatherData.extendedForecast.noReport == true) {
            $(".extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("");
          } else {
            $(".extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("/");
          }
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .low").text(weatherData.extendedForecast.days[i].low);
        }
        fadeSlideIn(".extended-forecast");
        setTimeout(() => {
          fadeSlideOut(".extended-forecast", 500);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".extended-forecast .slide-data .cityname").text(
          locationConfig.mainCity.displayname
        );
        for (var i = 0; i < 5; i++) {
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .dayname").text("");
          getIcon($(".extended-forecast .slide-data .day." + daysDivs[i] + " .icon"), 44, 0);
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .condition").text("");
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .high").text("");
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("");
          $(".extended-forecast .slide-data .day." + daysDivs[i] + " .low").text("");
        }
        fadeSlideIn(".extended-forecast");
        setTimeout(() => {
          fadeSlideOut(".extended-forecast", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    almanac() {
      try {
        $(".almanac-slide .slide-data .dayname-today").text(weatherData.almanac.today);
        $(".almanac-slide .slide-data .dayname-tomorrow").text(weatherData.almanac.tomorrow);
        $(".almanac-slide .slide-data .sunrise-today").text(weatherData.almanac.sunrisetoday);
        $(".almanac-slide .slide-data .sunset-today").text(weatherData.almanac.sunsettoday);
        $(".almanac-slide .slide-data .sunrise-tomorrow").text(weatherData.almanac.sunrisetomorow);
        $(".almanac-slide .slide-data .sunset-tomorrow").text(weatherData.almanac.sunsettomorrow);
        $(".almanac-slide .slide-data .moonphase.one").css("background-image", 'url("images/moonphases/' + weatherData.almanac.moonphases[0].moon + '.png")');
        $(".almanac-slide .slide-data .moonphase.two").css("background-image", 'url("images/moonphases/' +  weatherData.almanac.moonphases[1].moon + '.png")');
        $(".almanac-slide .slide-data .moonphase.three").css("background-image", 'url("images/moonphases/' + weatherData.almanac.moonphases[2].moon + '.png")');
        $(".almanac-slide .slide-data .moonphase.four").css("background-image", 'url("images/moonphases/' + weatherData.almanac.moonphases[3].moon + '.png")');
        $(".almanac-slide .slide-data .phasetext.one").text(weatherData.almanac.moonphases[0].moon);
        $(".almanac-slide .slide-data .phasetext.two").text(weatherData.almanac.moonphases[1].moon);
        $(".almanac-slide .slide-data .phasetext.three").text(weatherData.almanac.moonphases[2].moon);
        $(".almanac-slide .slide-data .phasetext.four").text(weatherData.almanac.moonphases[3].moon);
        $(".almanac-slide .slide-data .phasedate.one").text(weatherData.almanac.moonphases[0].date);
        $(".almanac-slide .slide-data .phasedate.two").text(weatherData.almanac.moonphases[1].date);
        $(".almanac-slide .slide-data .phasedate.three").text(weatherData.almanac.moonphases[2].date);
        $(".almanac-slide .slide-data .phasedate.four").text(weatherData.almanac.moonphases[3].date);

        fadeSlideIn(".almanac-slide");
        setTimeout(() => {
          fadeSlideOut(".almanac-slide", 0);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".almanac-slide .slide-data .dayname-today").text("");
        $(".almanac-slide .slide-data .dayname-tomorrow").text("");
        $(".almanac-slide .slide-data .sunrise-today").text("");
        $(".almanac-slide .slide-data .sunset-today").text("");
        $(".almanac-slide .slide-data .sunrise-tomorrow").text("");
        $(".almanac-slide .slide-data .sunset-tomorrow").text("");
        $(".almanac-slide .slide-data .moonphase.one").css("background-image", 'url("images/moonphases/blank.png")');
        $(".almanac-slide .slide-data .moonphase.two").css("background-image", 'url("images/moonphases/blank.png")');
        $(".almanac-slide .slide-data .moonphase.three").css("background-image", 'url("images/moonphases/blank.png")');
        $(".almanac-slide .slide-data .moonphase.four").css("background-image", 'url("images/moonphases/blank.png")');
        $(".almanac-slide .slide-data .phasetext.one").text("");
        $(".almanac-slide .slide-data .phasetext.two").text("");
        $(".almanac-slide .slide-data .phasetext.three").text("");
        $(".almanac-slide .slide-data .phasetext.four").text("");
        $(".almanac-slide .slide-data .phasedate.one").text("");
        $(".almanac-slide .slide-data .phasedate.two").text("");
        $(".almanac-slide .slide-data .phasedate.three").text("");
        $(".almanac-slide .slide-data .phasedate.four").text("");

        fadeSlideIn(".almanac-slide");
        setTimeout(() => {
          fadeSlideOut(".almanac-slide", 0);
          slideCallBack();
        }, slideLength);
      }
    },
    dayDesc() {
      try {
        $(".daydesc-forecast .cityname").text(weatherData.dayDesc.cityname);
        $(".daydesc-forecast.one .slide-data .daytitle").text(weatherData.dayDesc.times[0].timetitle);
        $(".daydesc-forecast.one .slide-data .daydesc").text(weatherData.dayDesc.times[0].forecast);
        $(".daydesc-forecast.two .slide-data .daytitle").text(weatherData.dayDesc.times[1].timetitle);
        $(".daydesc-forecast.two .slide-data .daydesc").text(weatherData.dayDesc.times[1].forecast);
        $(".daydesc-forecast.three .slide-data .daytitle").text(weatherData.dayDesc.times[2].timetitle);
        $(".daydesc-forecast.three .slide-data .daydesc").text(weatherData.dayDesc.times[2].forecast);

        fadeSlideIn(".daydesc-forecast.one");
          if (audioSettings.narrations) {
            audioPlayer.playLF();
          }
        setTimeout(() => {
          fadeSlideOut(".daydesc-forecast.one", 500);
          fadeSlideIn(".daydesc-forecast.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".daydesc-forecast.two", 500);
          fadeSlideIn(".daydesc-forecast.three");
        }, slideLength * 2);
        setTimeout(function () {
          fadeSlideOut(".daydesc-forecast.three", 500);
          slideCallBack();
        }, slideLength * 3);
      } catch (error) {
        $(".daydesc-forecast .cityname").text(locationConfig.mainCity.displayname);
        $(".daydesc-forecast.one .slide-data .daytitle").text("");
        $(".daydesc-forecast.one .slide-data .daydesc").text("");
        $(".daydesc-forecast.two .slide-data .daytitle").text("");
        $(".daydesc-forecast.two .slide-data .daydesc").text("");
        $(".daydesc-forecast.three .slide-data .daytitle").text("");
        $(".daydesc-forecast.three .slide-data .daydesc").text("");

        $(".daydesc-forecast.one").fadeIn(0);
        $(".daydesc-forecast.one .slide-data").fadeIn(500);

        fadeSlideIn(".daydesc-forecast.one");
          if (audioSettings.narrations) {
            audioPlayer.playLF();
          }
        setTimeout(() => {
          fadeSlideOut(".daydesc-forecast.one", 500);
          fadeSlideIn(".daydesc-forecast.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".daydesc-forecast.two", 500);
          fadeSlideIn(".daydesc-forecast.three");
        }, slideLength * 2);
        setTimeout(function () {
          fadeSlideOut(".daydesc-forecast.three", 500);
          slideCallBack();
        }, slideLength * 3);
      }
    },
    nearbyCities() {
      var citiesDivs = ["one", "two", "three", "four"];
      try {
        for (var i = 0; i < 4; i++) {
          try {
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname").text(weatherData.nearbyCities.cities[i].cityname);
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .temperature").text(weatherData.nearbyCities.cities[i].temp);
            getIcon($(".nearby-cities.one .slide-data .city." + citiesDivs[i] +  " .icon"), weatherData.nearbyCities.cities[i].icon, weatherData.nearbyCities.cities[i].windspeed);
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .wind").text(weatherData.nearbyCities.cities[i].wind);
          } catch (error) {
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .temperature").text("");
            getIcon($(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .wind").text("");
          }
          try {
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text(weatherData.nearbyCities.cities[i + 4].cityname);
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .temperature").text(weatherData.nearbyCities.cities[i + 4].temp);
            getIcon($(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), weatherData.nearbyCities.cities[i + 4].icon, weatherData.nearbyCities.cities[i + 4].windspeed);
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .wind").text(weatherData.nearbyCities.cities[i + 4].wind);
          } catch (error) {
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .temperature").text("");
            getIcon($(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .wind").text("");
          }
        }

        fadeSlideIn(".nearby-cities.one");
        setTimeout(() => {
          fadeSlideOut(".nearby-cities.one", 500);
          fadeSlideIn(".nearby-cities.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".nearby-cities.two", 0);
          slideCallBack();
        }, slideLength * 2);
      } catch (error) {
        for (var i = 0; i < 4; i++) {
          try {
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname").text(locationConfig.eightCities.cities[i].displayname);
            getIcon($(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .icon"), 44, 0);
          } catch (error) {
            $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            getIcon($(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
          }
          $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .temperature").text("");
          $(".nearby-cities.one .slide-data .city." + citiesDivs[i] + " .wind").text("");
          try {
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text(locationConfig.eightCities.cities[i + 4].displayname);
            getIcon($(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), 44, 0);
          } catch (error) {
            $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            getIcon($(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
          }
          $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .temperature").text("");
          $(".nearby-cities.two .slide-data .city." + citiesDivs[i] + " .wind").text("");
        }

        fadeSlideIn(".nearby-cities.one");
        setTimeout(() => {
          fadeSlideOut(".nearby-cities.one", 500);
          fadeSlideIn(".nearby-cities.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".nearby-cities.two", 0);
          slideCallBack();
        }, slideLength * 2);
      }
    },
    introSlide() {
      centerBaseMap(locationConfig.radar.localCoords.lat, locationConfig.radar.localCoords.lon);
      centerBaseMapRegional(locationConfig.radar.regionalCoords.lat, locationConfig.radar.regionalCoords.lon);
      setTimeout(() => {
        crawlCheck();
      }, 1000);
      $("#date-time").fadeOut(0);
      fadeSlideIn(".intro-slide");
      setTimeout(function () {
        fadeSlideOut(".intro-slide", 500);
        $("#date-time").fadeIn(500);
        slideCallBack();
      }, slideLength);
    },
    providerSlide() {
      $(".provider-slide .provider-text").text(apperanceSettings.providerName + "\n" + "Your Source for Weatherscan Local");
      fadeSlideIn(".provider-slide");
      setTimeout(function () {
        fadeSlideOut(".provider-slide", 0);
        slideCallBack();
      }, slideLength);
    },
    upNext() {
      $("#date-time").fadeOut(0);
      fadeSlideIn(".upnext-slide");
      $(".upnext-slide .next").text("");
      let marginval = 85 * gidx;
      for (var i = 0; i < slideSettings.order[0].slideLineup.length; i++) {
        if (slideTitles[slideSettings.order[0].slideLineup[i].group] == "intro" || slideTitles[slideSettings.order[0].slideLineup[i].group] == undefined) {
          marginval-= 85
          continue
        } else {
          if (i == gidx) {
            $(".upnext-slide .next").append(`<span class="upnext-list current">${slideTitles[slideSettings.order[0].slideLineup[i].group]}</span>\n`)
          } else {
            $(".upnext-slide .next").append(`<span class="upnext-list">${slideTitles[slideSettings.order[0].slideLineup[i].group]}</span>\n`)
          }
        }
      }
      //marginval is line hieght multiplied by the gidx value, gidx value is the value of which segment is up.
      // If golf is the second value (1 in array terms) and golf is up next, the gidx value is 1,
      // so 85 * 1 is 85, margin-top 85px
      $(".upnext-slide .upnext-arrow").css("margin-top", marginval + "px");
      $("#provider").css("margin-top", "15px")
      setTimeout(function () {
        fadeSlideOut(".upnext-slide", 0);
        $("#date-time").fadeIn(0);
        slideCallBack();
        //$("#provider").css("margin-top", "0px")
      }, slideLength);
    },
    /*AIRPORT*/
    airportConditions() {
      try {
        try {
          $(".airport-conditions.one .slide-data .airportname").text(weatherData.airportConditions.airports[0].airportName);
          $(".airport-conditions.one .slide-data .delay").text(weatherData.airportConditions.airports[0].delay);
          $(".airport-conditions.one .slide-data .humidity").text(weatherData.airportConditions.airports[0].humidity);
          $(".airport-conditions.one .slide-data .pressure").text(weatherData.airportConditions.airports[0].pressure);
          $(".airport-conditions.one .slide-data .wind").text(weatherData.airportConditions.airports[0].wind);
          $(".airport-conditions.one .slide-data .gusts").text(weatherData.airportConditions.airports[0].gusts);
          getIcon($(".airport-conditions.one .slide-data .icon"), weatherData.airportConditions.airports[0].icon, weatherData.airportConditions.airports[0].windpseed);
          $(".airport-conditions.one .slide-data .condition").text(weatherData.airportConditions.airports[0].condition);
          $(".airport-conditions.one .slide-data .temperature").text(weatherData.airportConditions.airports[0].temp);
        } catch (error) {
          try {
            $(".airport-conditions.one .slide-data .airportname").text(weatherData.airportConditions.airports[0].airportName);
          } catch (error) {
            $(".airport-conditions.one .slide-data .airportname").text("");
          }
          $(".airport-conditions.one .slide-data .delay").text("No Report");
          $(".airport-conditions.one .slide-data .humidity").text("");
          $(".airport-conditions.one .slide-data .pressure").text("");
          $(".airport-conditions.one .slide-data .wind").text("");
          $(".airport-conditions.one .slide-data .gusts").text("");
          getIcon($(".airport-conditions.one .slide-data .icon"), 44, 0);
          $(".airport-conditions.one .slide-data .condition").text("");
          $(".airport-conditions.one .slide-data .temperature").text("");
        }
        try {
          $(".airport-conditions.two .slide-data .airportname").text(weatherData.airportConditions.airports[1].airportName);
          $(".airport-conditions.two .slide-data .delay").text(weatherData.airportConditions.airports[1].delay);
          $(".airport-conditions.two .slide-data .humidity").text(weatherData.airportConditions.airports[1].humidity);
          $(".airport-conditions.two .slide-data .pressure").text(weatherData.airportConditions.airports[1].pressure);
          $(".airport-conditions.two .slide-data .wind").text(weatherData.airportConditions.airports[1].wind);
          $(".airport-conditions.two .slide-data .gusts").text(weatherData.airportConditions.airports[1].gusts);
          getIcon($(".airport-conditions.two .slide-data .icon"), weatherData.airportConditions.airports[1].icon, weatherData.airportConditions.airports[0].windpseed);
          $(".airport-conditions.two .slide-data .condition").text(weatherData.airportConditions.airports[1].condition);
          $(".airport-conditions.two .slide-data .temperature").text(weatherData.airportConditions.airports[1].temp);
        } catch (error) {
          try {
            $(".airport-conditions.two .slide-data .airportname").text(weatherData.airportConditions.airports[1].airportName);
          } catch (error) {
            $(".airport-conditions.two .slide-data .airportname").text("");
          }
          $(".airport-conditions.two .slide-data .delay").text("No Report");
          $(".airport-conditions.two .slide-data .humidity").text("");
          $(".airport-conditions.two .slide-data .pressure").text("");
          $(".airport-conditions.two .slide-data .wind").text("");
          $(".airport-conditions.two .slide-data .gusts").text("");
          getIcon($(".airport-conditions.two .slide-data .icon"), 44, 0);
          $(".airport-conditions.two .slide-data .condition").text("");
          $(".airport-conditions.two .slide-data .temperature").text("");
        }

        if (locationConfig.airport.airportsAmount == 2) {
          fadeSlideIn(".airport-conditions.one");
          setTimeout(function () {
            fadeSlideOut(".airport-conditions.one", 500);
            fadeSlideIn(".airport-conditions.two");
          }, slideLength);
          setTimeout(() => {
            fadeSlideOut(".airport-conditions.two", 500);
            slideCallBack();
          }, slideLength * 2);
        } else if (locationConfig.airport.airportsAmount == 1) {
          fadeSlideIn(".airport-conditions.one");
          setTimeout(function () {
            fadeSlideOut(".airport-conditions.one", 500);
            slideCallBack();
          }, slideLength);
        } else if (locationConfig.airport.airportsAmount < 1) {
          try {
            $(".airport-conditions.one .slide-data .airportname").text(
              weatherData.airportConditions.airports[0].airportName
            );
          } catch (error) {
            $(".airport-conditions.one .slide-data .airportname").text("");
          }
          $(".airport-conditions.one .slide-data .delay").text("No Report");
          $(".airport-conditions.one .slide-data .humidity").text("");
          $(".airport-conditions.one .slide-data .pressure").text("");
          $(".airport-conditions.one .slide-data .wind").text("");
          $(".airport-conditions.one .slide-data .gusts").text("");
          getIcon($(".airport-conditions.one .slide-data .icon"), 44, 0);
          $(".airport-conditions.one .slide-data .condition").text("");
          $(".airport-conditions.one .slide-data .temperature").text("");

          fadeSlideIn(".airport-conditions.one");
          setTimeout(function () {
            fadeSlideOut(".airport-conditions.one", 500);
            slideCallBack();
          }, slideLength);
        }
      } catch (error) {
        try {
          $(".airport-conditions.one .slide-data .airportname").text(
            weatherData.airportConditions.airports[0].airportName
          );
        } catch (error) {
          $(".airport-conditions.one .slide-data .airportname").text("");
        }
        $(".airport-conditions.one .slide-data .delay").text("No Report");
        $(".airport-conditions.one .slide-data .humidity").text("");
        $(".airport-conditions.one .slide-data .pressure").text("");
        $(".airport-conditions.one .slide-data .wind").text("");
        $(".airport-conditions.one .slide-data .gusts").text("");
        getIcon($(".airport-conditions.one .slide-data .icon"), 44, 0);
        $(".airport-conditions.one .slide-data .condition").text("");
        $(".airport-conditions.one .slide-data .temperature").text("");

        fadeSlideIn(".airport-conditions.one");
        setTimeout(function () {
          fadeSlideOut(".airport-conditions.one", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    nationalAirports() {
      var citiesDivs = ["one", "two", "three", "four"];
      try {
        for (var i = 0; i < 4; i++) {
          try {
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .airportname").text(weatherData.nationalAirports.airports[i].airportname);
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .temperature").text(weatherData.nationalAirports.airports[i].temp);
            getIcon($(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .icon"), weatherData.nationalAirports.airports[i].icon, weatherData.nationalAirports.airports[i].windspeed);
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .delay").text(weatherData.nationalAirports.airports[i].delay);
          } catch (error) {
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .airportname").text("");
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .temperature").text("");
            getIcon($(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .icon"), "blank", 0);
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .delay").text("");
          }
          try {
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .airportname").text(weatherData.nationalAirports.airports[i + 4].airportname);
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .temperature").text(weatherData.nationalAirports.airports[i + 4].temp);
            getIcon($(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .icon"), weatherData.nationalAirports.airports[i + 4].icon, weatherData.nationalAirports.airports[i + 4].windspeed);
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .delay").text(weatherData.nationalAirports.airports[i + 4].delay);
          } catch (error) {
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .airportname").text("");
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .temperature").text("");
            getIcon($(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .icon"), "blank", 0);
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .delay").text("");
          }
        }

        fadeSlideIn(".national-airports.one");
        setTimeout(function () {
          fadeSlideOut(".national-airports.one", 500);
          fadeSlideIn(".national-airports.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".national-airports.two", 0);
          slideCallBack();
        }, slideLength * 2);
      } catch (error) {
        for (var i = 0; i < 4; i++) {
          try {
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .airportname").text(weatherData.nationalAirports.airports[i].airportname);
            getIcon($(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .icon"), 44, 0);
          } catch (error) {
            $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .airportname").text("");
            getIcon($(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .icon"), "blank", 0);
          }
          $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .temperature").text("");
          $(".national-airports.one .slide-data .airport." + citiesDivs[i] + " .delay").text("");
          try {
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .airportname").text(weatherData.nationalAirports.airports[i + 4].airportname);
            getIcon($(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .icon"), 44, 0);
          } catch (error) {
            $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .airportname").text("");
            getIcon($(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .icon"), "blank", 0);
          }
          $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .temperature").text("");
          $(".national-airports.two .slide-data .airport." + citiesDivs[i] + " .delay").text("");
        }

        fadeSlideIn(".national-airports.one");
        setTimeout(function () {
          fadeSlideOut(".national-airports.one", 500);
          fadeSlideIn(".national-airports.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".national-airports.two", 0);
          slideCallBack();
        }, slideLength * 2);
      }
    },
    /*SPANISH*/
    EScurrentConditions() {
      try {
        $(".spanish-current-conditions .slide-data .cityname").text(weatherData.spanish.currentConditions.cityname);
        $(".spanish-current-conditions .slide-data .humidity").text(weatherData.spanish.currentConditions.humidity);
        $(".spanish-current-conditions .slide-data .pressure").text(weatherData.spanish.currentConditions.pressure);
        $(".spanish-current-conditions .slide-data .wind").text(weatherData.spanish.currentConditions.wind);
        $(".spanish-current-conditions .slide-data .gusts").text(weatherData.spanish.currentConditions.gusts);
        $(".spanish-current-conditions .slide-data .condition").text(weatherData.spanish.currentConditions.cond);
        $(".spanish-current-conditions .slide-data .temperature").text(weatherData.spanish.currentConditions.temp);
        getIcon($(".spanish-current-conditions .slide-data .icon"), weatherData.spanish.currentConditions.icon, weatherData.spanish.currentConditions.windspeed);

        fadeSlideIn(".spanish-current-conditions");
        setTimeout(function () {
          fadeSlideOut(".spanish-current-conditions", 500);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".spanish-current-conditions .slide-data .cityname").text(locationConfig.mainCity.displayname);
        $(".spanish-current-conditions .slide-data .humidity").text("");
        $(".spanish-current-conditions .slide-data .pressure").text("");
        $(".spanish-current-conditions .slide-data .wind").text("");
        $(".spanish-current-conditions .slide-data .gusts").text("");
        $(".spanish-current-conditions .slide-data .condition").text("");
        $(".spanish-current-conditions .slide-data .temperature").text("");
        getIcon($(".spanish-current-conditions .slide-data .icon"), 44, 0);

        fadeSlideIn(".spanish-current-conditions");
        setTimeout(function () {
          fadeSlideOut(".spanish-current-conditions", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    ESextendedForecast() {
      var daysDivs = ["one", "two", "three", "four", "five"];
      try {
        $(".spanish-extended-forecast .slide-data .cityname").text(weatherData.spanish.extendedForecast.cityname);
        for (var i = 0; i < 5; i++) {
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .dayname"
          ).text(weatherData.spanish.extendedForecast.days[i].dayname);
          getIcon($(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .icon"), weatherData.spanish.extendedForecast.days[i].icon, weatherData.spanish.extendedForecast.days[i].windspeed);
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .condition").text(weatherData.spanish.extendedForecast.days[i].cond);
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .high").text(weatherData.spanish.extendedForecast.days[i].high);
          if (weatherData.spanish.extendedForecast.noReport == true) {
            $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("");
          } else {
            $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("/");
          }
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .low").text(weatherData.spanish.extendedForecast.days[i].low);
        }

        fadeSlideIn(".spanish-extended-forecast");
        setTimeout(() => {
          fadeSlideOut(".spanish-extended-forecast", 500);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".spanish-extended-forecast .slide-data .cityname").text(
          locationConfig.mainCity.displayname
        );
        for (var i = 0; i < 5; i++) {
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .dayname").text("");
          getIcon($(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .icon"), 44, 0);
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .condition").text("");
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .high").text("");
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .divider").text("");
          $(".spanish-extended-forecast .slide-data .day." + daysDivs[i] + " .low").text("");
        }

        fadeSlideIn(".spanish-extended-forecast");
        setTimeout(() => {
          fadeSlideOut(".spanish-extended-forecast", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    ESalmanac() {
      try {
        $(".spanish-almanac-slide .slide-data .dayname-today").text(weatherData.spanish.almanac.today);
        $(".spanish-almanac-slide .slide-data .dayname-tomorrow").text(weatherData.spanish.almanac.tomorrow);
        $(".spanish-almanac-slide .slide-data .sunrise-today").text(weatherData.spanish.almanac.sunrisetoday);
        $(".spanish-almanac-slide .slide-data .sunset-today").text(weatherData.spanish.almanac.sunsettoday);
        $(".spanish-almanac-slide .slide-data .sunrise-tomorrow").text(weatherData.spanish.almanac.sunrisetomorow);
        $(".spanish-almanac-slide .slide-data .sunset-tomorrow").text(weatherData.spanish.almanac.sunsettomorrow);
        $(".spanish-almanac-slide .slide-data .moonphase.one").css("background-image", 'url("images/moonphases/' + weatherData.spanish.almanac.moonphases[0].moon + '.png")');
        $(".spanish-almanac-slide .slide-data .moonphase.two").css("background-image", 'url("images/moonphases/' + weatherData.spanish.almanac.moonphases[1].moon + '.png")');
        $(".spanish-almanac-slide .slide-data .moonphase.three").css("background-image", 'url("images/moonphases/' + weatherData.spanish.almanac.moonphases[2].moon + '.png")');
        $(".spanish-almanac-slide .slide-data .moonphase.four").css("background-image", 'url("images/moonphases/' + weatherData.spanish.almanac.moonphases[3].moon + '.png")');
        $(".spanish-almanac-slide .slide-data .phasetext.one").text(weatherData.spanish.almanac.moonphases[0].moon);
        $(".spanish-almanac-slide .slide-data .phasetext.two").text(weatherData.spanish.almanac.moonphases[1].moon);
        $(".spanish-almanac-slide .slide-data .phasetext.three").text(weatherData.spanish.almanac.moonphases[2].moon);
        $(".spanish-almanac-slide .slide-data .phasetext.four").text(weatherData.spanish.almanac.moonphases[3].moon);
        $(".spanish-almanac-slide .slide-data .phasedate.one").text(weatherData.spanish.almanac.moonphases[0].date);
        $(".spanish-almanac-slide .slide-data .phasedate.two").text(weatherData.spanish.almanac.moonphases[1].date);
        $(".spanish-almanac-slide .slide-data .phasedate.three").text(weatherData.spanish.almanac.moonphases[2].date);
        $(".spanish-almanac-slide .slide-data .phasedate.four").text(weatherData.spanish.almanac.moonphases[3].date);

        fadeSlideIn(".spanish-almanac-slide");
        setTimeout(() => {
          fadeSlideOut(".spanish-almanac-slide", 0);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".spanish-almanac-slide .slide-data .dayname-today").text("");
        $(".spanish-almanac-slide .slide-data .dayname-tomorrow").text("");
        $(".spanish-almanac-slide .slide-data .sunrise-today").text("");
        $(".spanish-almanac-slide .slide-data .sunset-today").text("");
        $(".spanish-almanac-slide .slide-data .sunrise-tomorrow").text("");
        $(".spanish-almanac-slide .slide-data .sunset-tomorrow").text("");
        $(".spanish-almanac-slide .slide-data .moonphase.one").css("background-image", 'url("images/moonphases/blank.png")');
        $(".spanish-almanac-slide .slide-data .moonphase.two").css("background-image", 'url("images/moonphases/blank.png")');
        $(".spanish-almanac-slide .slide-data .moonphase.three").css("background-image", 'url("images/moonphases/blank.png")');
        $(".spanish-almanac-slide .slide-data .moonphase.four").css("background-image", 'url("images/moonphases/blank.png")');
        $(".spanish-almanac-slide .slide-data .phasetext.one").text("");
        $(".spanish-almanac-slide .slide-data .phasetext.two").text("");
        $(".spanish-almanac-slide .slide-data .phasetext.three").text("");
        $(".spanish-almanac-slide .slide-data .phasetext.four").text("");
        $(".spanish-almanac-slide .slide-data .phasedate.one").text("");
        $(".spanish-almanac-slide .slide-data .phasedate.two").text("");
        $(".spanish-almanac-slide .slide-data .phasedate.three").text("");
        $(".spanish-almanac-slide .slide-data .phasedate.four").text("");

        fadeSlideIn(".spanish-almanac-slide");
        setTimeout(() => {
          fadeSlideOut(".spanish-almanac-slide", 500);
          slideCallBack();
        }, slideLength);
      }
    },
    ESnearbyCities() {
      var citiesDivs = ["one", "two", "three", "four"];
      try {
        for (var i = 0; i < 4; i++) {
          try {
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname").text(weatherData.spanish.nearbyCities.cities[i].cityname);
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .temperature").text(weatherData.spanish.nearbyCities.cities[i].temp);
            getIcon($(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .icon"), weatherData.spanish.nearbyCities.cities[i].icon, weatherData.nearbyCities.cities[i].windspeed);
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .wind").text(weatherData.spanish.nearbyCities.cities[i].wind);
          } catch (error) {
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .temperature").text("");
            getIcon($(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .wind").text("");
          }
          try {
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text(weatherData.spanish.nearbyCities.cities[i + 4].cityname);
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .temperature").text(weatherData.spanish.nearbyCities.cities[i + 4].temp);
            getIcon($(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), weatherData.spanish.nearbyCities.cities[i + 4].icon, weatherData.nearbyCities.cities[i + 4].windspeed);
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .wind").text(weatherData.spanish.nearbyCities.cities[i + 4].wind);
          } catch (error) {
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .temperature").text("");
            getIcon($(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .wind").text("");
          }
        }

        fadeSlideIn(".spanish-nearby-cities.one");
        setTimeout(() => {
          fadeSlideOut(".spanish-nearby-cities.one", 500);
          fadeSlideIn(".spanish-nearby-cities.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".spanish-nearby-cities.two", 500);
          slideCallBack();
        }, slideLength * 2);
      } catch (error) {
        for (var i = 0; i < 4; i++) {
          try {
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname"
            ).text(locationConfig.eightCities.cities[i].displayname);
            getIcon($(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .icon"), 44, 0);
          } catch (error) {
            $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            getIcon($(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
          }
          $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .temperature").text("");
          $(".spanish-nearby-cities.one .slide-data .city." + citiesDivs[i] + " .wind").text("");
          try {
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text(locationConfig.eightCities.cities[i + 4].displayname);
            getIcon($(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), 44, 0);
          } catch (error) {
            $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .cityname").text("");
            getIcon($(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .icon"), "blank", 0);
          }
          $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .temperature").text("");
          $(".spanish-nearby-cities.two .slide-data .city." + citiesDivs[i] + " .wind").text("");
        }

        fadeSlideIn(".spanish-nearby-cities.one");
        setTimeout(() => {
          fadeSlideOut(".spanish-nearby-cities.one", 500);
          fadeSlideIn(".spanish-nearby-cities.two");
        }, slideLength);
        setTimeout(() => {
          fadeSlideOut(".spanish-nearby-cities.two", 500);
          slideCallBack();
        }, slideLength * 2);
      }
    },
    courseForecast() {
      var slideNames = ["one", "two", "three"];
      var daysDivs = ["one", "two", "three", "four", "five"];
      try {
        for (var ii = 0; ii < locationConfig.golf.coursesAmount; ii++) {
          $(".course-forecast." + slideNames[ii] + " .slide-data .cityname").text(weatherData.golf.courseForecast[ii].cityname);
          for (var i = 0; i < 5; i++) {
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .dayname").text(weatherData.golf.courseForecast[ii].days[i].dayname);
            getIcon($(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .icon"), weatherData.golf.courseForecast[ii].days[i].icon, weatherData.golf.courseForecast[0].days[i].windspeed);
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .condition").text(weatherData.golf.courseForecast[ii].days[i].cond);
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .high").text(weatherData.golf.courseForecast[ii].days[i].high);
            if (weatherData.golf.courseForecast[ii].noReport == true) {
              $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .divider").text("");
            } else {
              $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .divider").text("/");
            }
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .low").text(weatherData.golf.courseForecast[ii].days[i].low);
          }
        }
        if (locationConfig.golf.coursesAmount == 3) {
          fadeSlideIn(".course-forecast.one");
          setTimeout(() => {
            fadeSlideOut(".course-forecast.one", 500);
            fadeSlideIn(".course-forecast.two");
          }, slideLength);
          setTimeout(() => {
            fadeSlideIn(".course-forecast.three");
            fadeSlideOut(".course-forecast.two", 500);
          }, slideLength * 2);
          setTimeout(() => {
            fadeSlideOut(".course-forecast.three");
            slideCallBack();
          }, slideLength * 3);
        } else if (locationConfig.golf.coursesAmount == 2) {
          fadeSlideIn(".course-forecast.one");
          setTimeout(() => {
            fadeSlideOut(".course-forecast.one", 500);
            fadeSlideIn(".course-forecast.two");
          }, slideLength);
          setTimeout(() => {
            fadeSlideOut(".course-forecast.two");
            slideCallBack();
          }, slideLength * 2);
        } else if (locationConfig.golf.coursesAmount == 1) {
          fadeSlideIn(".course-forecast.one");
          setTimeout(() => {
            fadeSlideOut(".course-forecast.one", 0);
            slideCallBack();
          }, slideLength);
        } else {
          for (var ii = 0; ii < 1; ii++) {
            $(".course-forecast.one .slide-data .cityname").text("");
            for (var i = 0; i < 5; i++) {
              $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .dayname").text("");
              getIcon($(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .icon"), 44, 0);
              $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .condition").text("");
              $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .high").text("");
              $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .divider").text("");
              $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .low").text("");
            }
          }

          fadeSlideIn(".course-forecast.one");
          setTimeout(() => {
            fadeSlideOut(".course-forecast.one", 0);
            slideCallBack();
          }, slideLength);
        }
      } catch (error) {
        for (var ii = 0; ii < 1; ii++) {
          $(".course-forecast.one .slide-data .cityname").text("");
          for (var i = 0; i < 5; i++) {
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .dayname").text("");
            getIcon($(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .icon"), 44, 0);
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .condition").text("");
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .high").text("");
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .divider").text("");
            $(".course-forecast." + slideNames[ii] + " .slide-data .day." + daysDivs[i] + " .low").text("");
          }
        }

        fadeSlideIn(".course-forecast.one");
        setTimeout(() => {
          fadeSlideOut(".course-forecast.one", 0);
          slideCallBack();
        }, slideLength);
      }
    },
    healthTip() {
      try {
        var tipIndices = {
          0 : "Use sunscreen year-round:\n• Choose broad spectrum sunscreens\nthat block UVA/UVB rays.\n\n• Apply 30 minutes before going out in\nthe sun.\n\n• Check expiration date.",
          1 : "At higher altitudes, the amount of UV\nradiation absorbed or scattered by the\natmosphere decreases\n\nUV rays are 40-50% stronger at 10,000 feet\nthan at sea level.",
        }
        $('.health-tip .slide-data .healthtip').text(tipIndices[htipidx])
        fadeSlideIn(".health-tip");
        setTimeout(() => {
          fadeSlideOut(".health-tip", 500);
          slideCallBack();
          htipidx++
          if (htipidx > 1) {
            htipidx = 0
          }
        }, slideLength);
      } catch (error) {
        $('.health-tip .slide-data .healthtip').text("")
        fadeSlideIn(".health-tip");
        setTimeout(() => {
          fadeSlideOut(".health-tip", 500);
          slideCallBack();
          htipidx++
          if (htipidx > 1) {
            htipidx = 0
          }
        }, slideLength);
      }
    },
    uvIndex() {
      $(".uv-index .slide-data .cityname").text(weatherData.uvIndex.cityname);
      var barlabels = [".forecast-one", ".forecast-two", ".forecast-three"];
      var barheights = {"0": 0, "1": 37, "2": 64, "3": 91, "4": 118, "5": 145, "6": 172, "7": 199, "8": 226, "9": 253, "10": 277, "11": 277,};
      var labelmargins = {"0": 0, "1": 0, "2": 20, "3": 47, "4": 64, "5": 101, "6": 128, "7": 155, "8": 182, "9": 209, "10": 236, "11": 236,};
      var bardescs = {"0": "Minimal", "1": "Minimal", "2": "Low", "3": "Low", "4": "Low", "5": "Moderate", "6": "Moderate", "7": "High", "8": "High", "9": "Very High", "10": "Very High", "11": "Extreme",};
      try {
        if (weatherData.uvIndex.current.uv != "noreport") {
          $(".uv-index .slide-data .current.uvbar .bar").css("height", barheights[weatherData.uvIndex.current.uv] + "px");
          $(".uv-index .slide-data .current.uvbar .uvindex").css("margin-bottom", labelmargins[weatherData.uvIndex.current.uv] + "px");
          $(".uv-index .slide-data .current.uvbar .uvdesc").css("margin-bottom", labelmargins[weatherData.uvIndex.current.uv] + "px");
          $(".uv-index .slide-data .current.uvbar .uvindex").text(weatherData.uvIndex.current.uv);
          $(".uv-index .slide-data .current.uvbar .uvdesc").text(bardescs[weatherData.uvIndex.current.uv]);
          $(".uv-index .slide-data .current.uvbar .label").text("Currently");
        } else {
          $(".uv-index .slide-data .current.uvbar .bar").css("height", "0px");
          $(".uv-index .slide-data .current.uvbar .uvindex").css("margin-bottom", "0px");
          $(".uv-index .slide-data .current.uvbar .uvdesc").css("margin-bottom", "0px");
          $(".uv-index .slide-data .current.uvbar .uvindex").text("");
          $(".uv-index .slide-data .current.uvbar .uvdesc").text("");
          $(".uv-index .slide-data .current.uvbar .label").text("");
        }

        for (var i = 0; i < 3; i++) {
          if (weatherData.uvIndex.forecast[i].uv != "noreport") {
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .bar").css("height", barheights[weatherData.uvIndex.forecast[i].uv] + "px");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvindex").css("margin-bottom", labelmargins[weatherData.uvIndex.forecast[i].uv] + "px");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvdesc").css("margin-bottom", labelmargins[weatherData.uvIndex.forecast[i].uv] + "px");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvindex").text(weatherData.uvIndex.forecast[i].uv);
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvdesc").text(bardescs[weatherData.uvIndex.forecast[i].uv]);
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .label").text(weatherData.uvIndex.forecast[i].time + "\n" + weatherData.uvIndex.forecast[i].day);
          } else {
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .bar").css("height", "0px");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvindex").css("margin-bottom", "0px");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvdesc").css("margin-bottom", "0px");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvindex").text("");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvdesc").text("");
            $(".uv-index .slide-data " + barlabels[i] + ".uvbar .label").text("");
          }
        }

        fadeSlideIn(".uv-index");
        setTimeout(() => {
          fadeSlideOut(".uv-index", 0);
          slideCallBack();
        }, slideLength);
      } catch (error) {
        $(".uv-index .slide-data .current.uvbar .bar").css("height", "0px");
        $(".uv-index .slide-data .current.uvbar .uvindex").css("margin-bottom", "0px");
        $(".uv-index .slide-data .current.uvbar .uvdesc").css("margin-bottom", "0px");
        $(".uv-index .slide-data .current.uvbar .uvindex").text("");
        $(".uv-index .slide-data .current.uvbar .uvdesc").text("");
        $(".uv-index .slide-data .current.uvbar .label").text("");
        for (var i = 0; i < 3; i++) {
          $(".uv-index .slide-data " + barlabels[i] + ".uvbar .bar").css("height", "0px");
          $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvindex").css("margin-bottom", "0px");
          $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvdesc").css("margin-bottom", "0px");
          $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvindex").text("");
          $(".uv-index .slide-data " + barlabels[i] + ".uvbar .uvdesc").text("");
          $(".uv-index .slide-data " + barlabels[i] + ".uvbar .label").text("");
        }

        fadeSlideIn(".uv-index");
        setTimeout(() => {
          fadeSlideOut(".uv-index", 0);
          slideCallBack();
        }, slideLength);
      }
    },
  };
function slideKickOff() {
  allData();
  $(".upnext-slide .skeleton").css({"background":`transparent url(images/skeletons/upnext-slide-skeleton-` + slideSettings.order[0].slideLineup[gidx].group + `.png) no-repeat`, "background-size": "100% 100%"});
  showSlides();
  slideTitles = {
    "forecast": "Your Local Forecast",
    "minicore": "Your Local Forecast",
    "intro": "intro",
    "airport": "Airport",
    "golf": "Golf",
    "spanish": "Spanish Forecast",
    "health": "Health",
    "extralocal": "Forecast For " + extraCityName,
  };
} //end of slideKickOff() function
function showSlides() {
  if (idx >= slideSettings.order[0].slideLineup[gidx].slides.length) {
    idx = 0;
    gidx++;
    if (gidx >= slideSettings.order[0].slideLineup.length) {
      gidx = 0;
      allData();
    }
    if (slideSettings.order[0].slideLineup[gidx].group != "intro") {
      $(".upnext-slide .skeleton").css({"background": `transparent url(images/skeletons/upnext-slide-skeleton-` + slideSettings.order[0].slideLineup[gidx].group + `.png) no-repeat`, "background-size": "100% 100%"});
    }
  }
  currentProgram = slidePrograms[slideSettings.order[0].slideLineup[gidx].slides[idx].function];
  currentDiv = slideDivs[slideSettings.order[0].slideLineup[gidx].slides[idx].function];
  currentProgram();

  /*function slideCallBack(){
    idx++;
    showSlides();
  };*/
} //END OF showSlides() FUNCTION