if (window.Worker) {
  function grabCurrentConditions(lat, lon, unit, name) {
    let currentConditions = {};
    let url =
      "https://api.weather.com/v3/wx/observations/current?geocode=" +
      lat +
      "," +
      lon +
      "&units=" +
      unit +
      "&language=en-US&format=json&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      try {
        currentConditions.cityname = name;
        currentConditions.cond = data.wxPhraseLong;
        currentConditions.gusts =
          data.windGust != null || data.windGust != undefined
            ? data.windGust +
              (unit == "m" ? " km/h" : unit == "s" ? " m/s" : " mph")
            : "None";
        currentConditions.humidity = data.relativeHumidity + "%";
        currentConditions.icon = data.iconCode;
        currentConditions.pressure = data.pressureAltimeter.toFixed(2);
        currentConditions.temp = data.temperature;
        currentConditions.wind =
          data.windDirectionCardinal == "CALM" || data.windSpeed == 0
            ? "Calm"
            : data.windDirectionCardinal + " " + data.windSpeed;
        currentConditions.windspeed = data.windSpeed;
        currentConditions.noReport = false;
      } catch (error) {
        currentConditions.cityname = name;
        currentConditions.cond = "";
        currentConditions.gusts = "";
        currentConditions.humidity = "";
        currentConditions.icon = 44;
        currentConditions.pressure = "";
        currentConditions.temp = "";
        currentConditions.wind = "";
        currentConditions.windspeed = "";
        currentConditions.noReport = true;
      }
    }).fail(function () {
      currentConditions.cityname = name;
      currentConditions.cond = "";
      currentConditions.gusts = "";
      currentConditions.humidity = "";
      currentConditions.icon = 44;
      currentConditions.pressure = "";
      currentConditions.temp = "";
      currentConditions.wind = "";
      currentConditions.windspeed = "";
      currentConditions.noReport = true;
    });

    return currentConditions;
  }

  function grabNearbyConditions(cities, unit, key) {
    let nearbyCities = [];
    let url =
      "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes=";
    for (let li = 0; li < cities.citiesAmount; li++) {
      url += cities.cities[li].lat + "," + cities.cities[li].lon + ";";
    }
    url += "&language=en-US&units=" + unit + "&format=json&apiKey=" + key;
    $.getJSON(url, function (data) {
      data.forEach((ajaxedLoc, i) => {
        let nearbyCitiesObj = {
          noReport: false,
          cityname: "",
          temp: "",
          icon: "",
          wind: "",
          windspeed: "",
        };
        try {
          if (
            ajaxedLoc != undefined ||
            ajaxedLoc != null ||
            ajaxedLoc != "" ||
            ajaxedLoc != " "
          ) {
            nearbyCitiesObj.noReport = false;
            nearbyCitiesObj.cityname = cities.cities[i].displayname;
            nearbyCitiesObj.icon =
              ajaxedLoc["v3-wx-observations-current"].iconCode;
            nearbyCitiesObj.temp =
              ajaxedLoc["v3-wx-observations-current"].temperature;
            nearbyCitiesObj.wind =
              ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal ==
                "CALM" || ajaxedLoc["v3-wx-observations-current"].windSpeed == 0
                ? "Calm"
                : ajaxedLoc["v3-wx-observations-current"]
                    .windDirectionCardinal +
                  " " +
                  ajaxedLoc["v3-wx-observations-current"].windSpeed;
            nearbyCitiesObj.windspeed =
              ajaxedLoc["v3-wx-observations-current"].windSpeed;
            nearbyCities.cities.push(nearbyCitiesObj);
          } else {
            nearbyCitiesObj.noReport = true;
            nearbyCitiesObj.cityname = cities.cities[i].displayname;
            nearbyCitiesObj.icon = 44;
            nearbyCitiesObj.temp = "";
            nearbyCitiesObj.wind = "";
            nearbyCitiesObj.windspeed = "";
            nearbyCities.cities.push(nearbyCitiesObj);
          }
        } catch (error) {
          nearbyCitiesObj.noReport = true;
          nearbyCitiesObj.cityname = cities.cities[i].displayname;
          nearbyCitiesObj.icon = 44;
          nearbyCitiesObj.temp = "";
          nearbyCitiesObj.wind = "";
          nearbyCitiesObj.windspeed = "";
          nearbyCities.cities.push(nearbyCitiesObj);
        }
      });
      //console.log(nearbyCities.cities)
      // console.log("nearby conditions grabbed")
    }).fail(function (error) {
      for (let i; i < cities.citiesAmount; i++) {
        let nearbyCitiesObj = {
          noReport: false,
          cityname: "",
          temp: "",
          icon: "",
          wind: "",
          windspeed: "",
        };
        nearbyCitiesObj.noReport = true;
        nearbyCitiesObj.cityname = cities.cities[i].displayname;
        nearbyCitiesObj.icon = 44;
        nearbyCitiesObj.temp = "";
        nearbyCitiesObj.wind = "";
        nearbyCitiesObj.windspeed = "";
        nearbyCities.cities.push(nearbyCitiesObj);
      }
      //console.log(nearbyCities.cities)
      //console.log("nearby conditions grab failed")
      //console.log(error)
    });
    return nearbyCities;
  }

  function grabDayDesc(lat, lon, unit, key, name) {
    let dayDesc = {};
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      lat +
      "," +
      lon +
      "&format=json&units=" +
      unit +
      "&language=en-US&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      let ii = 0;
      try {
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
        }
        dayDesc.cityname = name;
        dayDesc.noReport = false;
        for (let i = 0; i < dayDesc.times.length; i++, ii++) {
          dayDesc.times[i].timetitle = data.daypart[0].daypartName[ii];
          dayDesc.times[i].forecast = data.daypart[0].narrative[ii];
        }
        //console.log(dayDesc)
        //console.log("day descriptions grabbed")
      } catch (error) {
        dayDesc.cityname = name;
        dayDesc.noReport = true;
        for (let i = 0; i < dayDesc.times.length; i++, ii++) {
          dayDesc.times[i].timetitle = "";
          dayDesc.times[i].forecast = "";
        }
        //console.log(dayDesc)
        //console.log("day descriptions grabs failed")
      }
    }).fail(function () {
      dayDesc.cityname = name;
      dayDesc.noReport = true;
      for (let i = 0; i < dayDesc.times.length; i++) {
        dayDesc.times[i].timetitle = "";
        dayDesc.times[i].forecast = "";
      }
      //console.log(dayDesc)
      //console.log("day description grabs failed")
    });
    return dayDesc;
  }

  function grabExtended(lat, lon, units, key, name) {
    let extendedForecast = {};
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      lat +
      "," +
      lon +
      "&format=json&units=" +
      units +
      "&language=en-US&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      let daysDivs = ["one", "two", "three", "four", "five"];
      try {
        extendedForecast.cityname = name;
        extendedForecast.noReport = false;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < extendedForecast.days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          extendedForecast.days[i].cond = data.daypart[0].wxPhraseLong[dpi]
            .replaceAll("/", "/ ")
            .replaceAll("Thunderstorms", "T'storms")
            .replaceAll("Scattered", "Sct'd")
            .replaceAll("Thundershowers", "T'showers");
          extendedForecast.days[i].dayname = data.dayOfWeek[ii]
            .substring(0, 3)
            .toUpperCase();
          extendedForecast.days[i].high = data.temperatureMax[ii];
          extendedForecast.days[i].icon = data.daypart[0].iconCode[dpi];
          extendedForecast.days[i].low = data.temperatureMin[ii];
          extendedForecast.days[i].windspeed = data.daypart[0].windSpeed[dpi];
        }
        //console.log(extendedForecast)
        //console.log("extended forecast grabbed")
      } catch (error) {
        extendedForecast.cityname = name;
        extendedForecast.noReport = true;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < extendedForecast.days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          extendedForecast.days[i].cond = "";
          extendedForecast.days[i].dayname = "";
          extendedForecast.days[i].high = "";
          extendedForecast.days[i].icon = 44;
          extendedForecast.days[i].low = "";
          extendedForecast.days[i].windspeed = "";
        }
        //console.log(extendedForecast)
        //console.log("extended forecast grab failed")
      }
    }).fail(function () {
      extendedForecast.cityname = name;
      extendedForecast.noReport = true;
      for (let i = 0; i < extendedForecast.days.length; i++) {
        extendedForecast.days[i].cond = "";
        extendedForecast.days[i].dayname = "";
        extendedForecast.days[i].high = "";
        extendedForecast.days[i].icon = "";
        extendedForecast.days[i].low = "";
        extendedForecast.days[i].windspeed = "";
      }
      //console.log(extendedForecast)
      //console.log("extended forecast grab failed")
    });
    return extendedForecast;
  }

  function grabAlmanac(lat, lon, units, key) {
    let almanac = {};
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      lat +
      "," +
      lon +
      "&format=json&units=" +
      units +
      "&language=en-US&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      let ii = 0;
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1;
      }
      almanac.noReport = false;
      almanac.sunrisetoday = new Date(data.sunriseTimeLocal[ii]);
      almanac.sunrisetoday = almanac.sunrisetoday
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.sunrisetomorow = new Date(data.sunriseTimeLocal[ii + 1]);
      almanac.sunrisetomorow = almanac.sunrisetomorow
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.sunsettoday = new Date(data.sunsetTimeLocal[ii]);
      almanac.sunsettoday = almanac.sunsettoday
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.sunsettomorrow = new Date(data.sunsetTimeLocal[ii + 1]);
      almanac.sunsettomorrow = almanac.sunsettomorrow
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.today = data.dayOfWeek[ii].substring(0, 3).toUpperCase();
      almanac.tomorrow = data.dayOfWeek[ii + 1].substring(0, 3).toUpperCase();
      //console.log(almanac)
      //console.log("almanac grabbed")
    }).fail(function () {
      almanac.noReport = true;
      almanac.sunrisetoday = "";
      almanac.sunrisetomorow = "";
      almanac.sunsettoday = "";
      almanac.sunsettomorrow = "";
      almanac.today = "";
      almanac.tomorrow = "";
      //console.log(almanac)
      //console.log("almanac grab fail")
    });
    return almanac;
  }

  function grabMoons() {
    let alamanac = {};
    let ii = 0;
    try {
      $.getJSON(
        `https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format(
          new Date(),
          "M"
        )}&year=${dateFns.format(new Date(), "YYYY")}`,
        function (data) {
          for (phase in data.phase) {
            if (data.phase[phase].isPhaseLimit != false) {
              if (phase < new Date().getDate()) {
                continue;
              }
              almanac.moonphases[ii].moon = {
                "New Moon": "New",
                "First quarter": "First",
                "Full moon": "Full",
                "Last quarter": "Last",
              }[data.phase[phase].phaseName];
              almanac.moonphases[ii].date =
                String(data.monthName).slice(0, 3) + " " + phase;
              almanac.moonphases[ii].date =
                phase.toString().length == 1
                  ? almanac.moonphases[ii].date
                      .replace(" 1", " 01")
                      .replace(" 2", " 02")
                      .replace(" 3", " 03")
                      .replace(" 4", " 04")
                      .replace(" 5", " 05")
                      .replace(" 6", " 06")
                      .replace(" 7", " 07")
                      .replace(" 8", " 08")
                      .replace(" 9", " 09")
                  : almanac.moonphases[ii].date;
              ii += 1;
            }
          }
          //console.log("first moons grabbed")
        }
      ).fail(function () {
        for (let i = 0; i < 4; i++) {
          almanac.moonphases[i].date = "";
          almanac.moonphases[i].moon = "blank";
        }
        //console.log("first moon grab failed")
      });
      setTimeout(() => {
        $.getJSON(
          `https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format(
            dateFns.addMonths(new Date(), 1),
            "M"
          )}&year=${dateFns.format(dateFns.addMonths(new Date(), 1), "YYYY")}`,
          function (data) {
            for (phase in data.phase) {
              if (data.phase[phase].isPhaseLimit != false) {
                almanac.moonphases[ii].moon = {
                  "New Moon": "New",
                  "First quarter": "First",
                  "Full moon": "Full",
                  "Last quarter": "Last",
                }[data.phase[phase].phaseName];
                almanac.moonphases[ii].date =
                  String(data.monthName).slice(0, 3) + " " + phase;
                almanac.moonphases[ii].date =
                  phase.toString().length == 1
                    ? almanac.moonphases[ii].date
                        .replace(" 1", " 01")
                        .replace(" 2", " 02")
                        .replace(" 3", " 03")
                        .replace(" 4", " 04")
                        .replace(" 5", " 05")
                        .replace(" 6", " 06")
                        .replace(" 7", " 07")
                        .replace(" 8", " 08")
                        .replace(" 9", " 09")
                    : almanac.moonphases[ii].date;
                ii += 1;
              }
            }
            //console.log("second moons grabbed")
          }
        ).fail(function () {
          for (let i = 0; i < 4; i++) {
            if (almanac.moonphases[i].date != "")
              almanac.moonphases[i].date = "";
            almanac.moonphases[i].moon = "blank";
          }
          //console.log("second moon grab failed")
        });
        //console.log(almanac.moonphases)
      }, 500);
    } catch (error) {
      for (let i = 0; i < 8; i++) {
        almanac.moonphases[i].date = "";
        almanac.moonphases[i].moon = "blank";
      }
      //console.log(almanac.moonphases)
      //console.log("all moon grabs failed")
    }
    return alamanac;
  }

  function getWarnings(lat, lon, key) {
    let url =
      "https://api.weather.com/v3/alerts/headlines?geocode=" +
      lat +
      "," +
      lon +
      "&format=json&language=en-US&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      alerts = { warnings: [] };
      try {
        if (data != undefined) {
          let warnings = [];
          //alerts.alertsAmount = data.alerts.length
          for (let i = 0; i < data.alerts.length; i++) {
            warnings.push({
              alertNum: i + 1,
              key: data.alerts[i].detailKey,
              warningtitle: "",
              warningdesc: "",
              severity: "",
              alertType: "",
              significance: "",
              headline: "",
            });
            eachAlert(i);
          }

          function eachAlert(i) {
            $.getJSON(
              "https://api.weather.com/v3/alerts/detail?alertId=" +
                warnings[i].key +
                "&format=json&language=en-US&apiKey=" +
                key,
              function (data) {
                warnings[i].warningtitle = data.alertDetail.eventDescription;
                warnings[i].warningdesc = data.alertDetail.texts[0].description;
                warnings[i].severity = sevalertNum(
                  data.alertDetail.eventDescription
                );
                warnings[i].significance = data.alertDetail.significance;
                warnings[i].alertType = data.alertDetail.messageType
                  .replace("Cancel", "Cancellation")
                  .replace("New", "");
                warnings[i].headline = data.alertDetail.headlineText;
              }
            );
            alerts.warnings.push(warnings[i]);
            //use this to test the sort
            for (ii = 0; ii < data.alerts.length - 1; ii++) {
              if (warnings[i].warningtitle == alerts.warnings[ii]) {
                alerts.warnings.pop();
                continue;
              }
            }
            alerts.alertsAmount = alerts.warnings.length;
          }
          setTimeout(() => {
            if (alerts.warnings.length > 1) {
              alerts.warnings.sort((a, b) => b.severity - a.severity);
            }
            //let warning1 = {alertNum: 2, key: data.alerts[0].detailKey, warningtitle:"Tornado Warning", warningdesc:"FAKE - wee woo wee woo", severity:sevalertNum("Tornado Warning"), alertType:"", significance:"W", headline:"FUCKED"}
            //let warning2 = {alertNum: 1, key: data.alerts[0].detailKey, warningtitle:"Severe Thunderstorm Warning", warningdesc:"FAKE - wee woo wee woo", severity:sevalertNum("Severe Thunderstorm Warning"), alertType:"", significance:"W", headline:"FUCKED"}
            //qeatherData.alerts.warnings.push(warning1);
            //alerts.warnings.push(warning2);
          }, 500);
          //console.log(alerts)
          //console.log("weather alerts found")
          //alerts.warnings.sort(function(a, b){return a.severity - b.severity});
        } else {
          alerts = { warnings: [] };
          alerts.alertsAmount = 0;
          //console.log(alerts)
          //console.log("weather alerts grab failed or no alerts detected")
        }
      } catch (error) {
        alerts = { warnings: [] };
        alerts.alertsAmount = 0;
        //console.log(alerts)
        //console.log("weather alerts grab failed or no alerts detected")
      }
    }).fail(function () {
      alerts = { warnings: [] };
      alerts.alertsAmount = 0;
      //console.log(alerts)
      //console.log("weather alerts grab failed or no alerts detected")
    });
    return alerts;
  }

  function grabAirportDelays(airports) {
    let airportDelayList = [];
    $.getJSON("/airports", function (eventdata) {
      for (const airportevent of eventdata) {
        let delay = { delayTime: "", iataCode: "" };
        if (airportevent.airportClosure != null) {
          delay.delayTime = differenceUTC(airportevent.airportClosure.endTime);
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        } else if (airportevent.arrivalDelay != null) {
          delay.delayTime = formatMinutes(
            airportevent.arrivalDelay.averageDelay
          );
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        } else if (airportevent.departureDelay != null) {
          delay.delayTime = formatMinutes(
            airportevent.departureDelay.averageDelay
          );
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        } else if (airportevent.groundDelay != null) {
          delay.delayTime = formatMinutes(airportevent.groundDelay.avgDelay);
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        } else if (airportevent.groundStop != null) {
          delay.delayTime = differenceUTC(airportevent.groundStop.endTime); //NOT DEFINITIVE
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        } else if (airportevent.deicing != null) {
          delay.delayTime = differenceUTC(airportevent.deicing.endTime);
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        } else if (airportevent.freeform != null) {
          delay.delayTime = differenceUTC(airportevent.freeform.endTime);
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        } else {
          delay.delayTime = "No Delay";
          delay.iataCode = airportevent.airportId;
          airportDelayList.push(delay);
        }
      }
      //console.log("airport delays grabbed")
    }).fail(function () {
      for (let i = 0; i < airports.airportsAmount; i++) {
        let delay = { delayTime: "", iataCode: "" };
        delay.delayTime = "No Report";
        delay.iataCode = airports[i].iataCode;
        airportDelayList.push(delay);
      }
      //console.log("airport delays grab failed")
    });
    //console.log(airportDelayList)
    return airportDelayList;
  }

  function grabAPConditions(lat, lon, units, data, airport) {
    let airportConditions = [];
    let url =
      "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes=";
    for (let li = 0; li < airport.airportsAmount; li++) {
      url += airport.airports[li].lat + "," + airport.airports[li].lon + ";";
    }
    url += "&language=en-US&units=e&format=json&apiKey=" + api_key;
    $.getJSON(url, function (data) {
      data.forEach((ajaxedLoc, i) => {
        let airportsObj = {
          noReport: false,
          airportName: "",
          iataCode: "",
          temp: "",
          icon: "",
          condition: "",
          humidity: "",
          pressure: "",
          wind: "",
          gusts: "",
          windspeed: "",
          delay: "",
        };
        try {
          if (
            ajaxedLoc != undefined ||
            ajaxedLoc != null ||
            ajaxedLoc != "" ||
            ajaxedLoc != " "
          ) {
            airportsObj.noReport = false;
            airportsObj.airportName = airport.airports[i].displayname;
            airportsObj.iataCode = airport.airports[i].iataCode;
            airportsObj.condition =
              ajaxedLoc["v3-wx-observations-current"].wxPhraseLong;
            airportsObj.icon = ajaxedLoc["v3-wx-observations-current"].iconCode;
            airportsObj.gusts =
              ajaxedLoc["v3-wx-observations-current"].windGust != null ||
              ajaxedLoc["v3-wx-observations-current"].windGust != undefined
                ? ajaxedLoc["v3-wx-observations-current"].windGust + " mph"
                : "None";
            airportsObj.humidity =
              ajaxedLoc["v3-wx-observations-current"].relativeHumidity + "%";
            airportsObj.pressure =
              ajaxedLoc["v3-wx-observations-current"].pressureAltimeter;
            airportsObj.temp =
              ajaxedLoc["v3-wx-observations-current"].temperature;
            airportsObj.wind =
              ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal ==
                "CALM" || ajaxedLoc["v3-wx-observations-current"].windSpeed == 0
                ? "Calm"
                : ajaxedLoc["v3-wx-observations-current"]
                    .windDirectionCardinal +
                  " " +
                  ajaxedLoc["v3-wx-observations-current"].windSpeed;
            airportsObj.windspeed =
              ajaxedLoc["v3-wx-observations-current"].windSpeed;
            for (const delay of airportDelayList) {
              if (delay.iataCode == airportsObj.iataCode) {
                airportsObj.delay = delay.delayTime;
              }
            }
            if (airportsObj.delay == "") {
              airportsObj.delay = "No Delay";
            }
            //console.log("airport conditions grabbed")
            airportConditions.airports.push(airportsObj);
          } else {
            airportsObj.noReport = true;
            airportsObj.airportName = airport.airports[i].displayname;
            airportsObj.condition = "";
            airportsObj.icon = 44;
            airportsObj.gusts = "";
            airportsObj.humidity = "";
            airportsObj.pressure = "";
            airportsObj.temp = "";
            airportsObj.wind = "";
            airportsObj.windspeed = "";
            airportsObj.delay = "No Report";
            //console.log("airport conditions grab failed")
            airportConditions.airports.push(airportsObj);
          }
        } catch (error) {
          airportsObj.noReport = true;
          airportsObj.airportName = airport.airports[i].displayname;
          airportsObj.condition = "";
          airportsObj.icon = 44;
          airportsObj.gusts = "";
          airportsObj.humidity = "";
          airportsObj.pressure = "";
          airportsObj.temp = "";
          airportsObj.wind = "";
          airportsObj.windspeed = "";
          airportsObj.delay = "No Report";
          //console.log("airport conditions grab failed")
          airportConditions.airports.push(airportsObj);
        }
      });
    }).fail(function () {
      for (let i = 0; i < airport.airportsAmount; i++) {
        let airportsObj = {
          noReport: false,
          airportName: "",
          temp: "",
          icon: "",
          condition: "",
          humidity: "",
          pressure: "",
          wind: "",
          gusts: "",
          windspeed: "",
        };
        airportsObj.noReport = true;
        airportsObj.airportName = airport.airports[i].displayname;
        airportsObj.condition = "";
        airportsObj.icon = 44;
        airportsObj.gusts = "";
        airportsObj.humidity = "";
        airportsObj.pressure = "";
        airportsObj.temp = "";
        airportsObj.wind = "";
        airportsObj.windspeed = "";
        airportsObj.delay = "No Report";
        //console.log("airport conditions grab failed")
        airportConditions.airports.push(airportsObj);
      }
    });
    return airportConditions;
  }
  //console.log(airportConditions)

  function grabNationalAP(nationalAirports) {
    let url =
      "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes=";
    for (let li = 0; li < nationalAirports.airports.length; li++) {
      url +=
        nationalAirports.airports[li].lat +
        "," +
        nationalAirports.airports[li].lon +
        ";";
    }
    url += "&language=en-US&units=e&format=json&apiKey=" + api_key;
    $.getJSON(url, function (data) {
      data.forEach((ajaxedLoc, i) => {
        nationalAirports.airports[i].delay = "";
        try {
          if (
            ajaxedLoc != undefined ||
            ajaxedLoc != null ||
            ajaxedLoc != "" ||
            ajaxedLoc != " "
          ) {
            nationalAirports.airports[i].icon =
              ajaxedLoc["v3-wx-observations-current"].iconCode;
            nationalAirports.airports[i].temp =
              ajaxedLoc["v3-wx-observations-current"].temperature;
            nationalAirports.airports[i].windspeed =
              ajaxedLoc["v3-wx-observations-current"].windSpeed;
            for (const delay of airportDelayList) {
              if (delay.iataCode == nationalAirports.airports[i].iataCode) {
                nationalAirports.airports[i].delay = delay.delayTime;
              }
            }
            if (nationalAirports.airports[i].delay == "") {
              nationalAirports.airports[i].delay = "No Delay";
            }
            //console.log("national airports grabbed")
          } else {
            nationalAirports.airports[i].icon = 44;
            nationalAirports.airports[i].temp = "";
            nationalAirports.airports[i].windspeed = "";
            nationalAirports.airports[i].delay = "No Report";
            //console.log("national airports grab failed")
          }
        } catch (error) {
          nationalAirports.airports[i].icon = 44;
          nationalAirports.airports[i].temp = "";
          nationalAirports.airports[i].windspeed = "";
          nationalAirports.airports[i].delay = "No Report";
          //console.log("national airports grab failed")
        }
      });
    }).fail(function () {
      nationalAirports.airports[i].icon = 44;
      nationalAirports.airports[i].temp = "";
      nationalAirports.airports[i].windspeed = "";
      nationalAirports.airports[i].delay = "No Report";
      //console.log("national airports grab failed")
    });
    //console.log(nationalAirports)
    return nationalAirports;
  }

  //console.log("grabbed data")
  function grabESCurrentConditions(lat, lon, units, key, name) {
    let currentConditions = {};
    let url =
      "https://api.weather.com/v3/wx/observations/current?geocode=" +
      lat +
      "," +
      lon +
      "&units=" +
      units +
      "&language=es-US&format=json&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      try {
        currentConditions.cityname = name;
        currentConditions.cond = data.wxPhraseLong;
        currentConditions.gusts =
          data.windGust != null || data.windGust != undefined
            ? data.windGust +
              (units == "m" ? " km/h" : units == "s" ? " m/s" : " mph")
            : "No";
        currentConditions.humidity = data.relativeHumidity + "%";
        currentConditions.icon = data.iconCode;
        currentConditions.pressure = data.pressureAltimeter.toFixed(2);
        currentConditions.temp = data.temperature;
        currentConditions.wind =
          data.windDirectionCardinal == "CALMA" || data.windSpeed == 0
            ? "Calma"
            : data.windDirectionCardinal + " " + data.windSpeed;
        currentConditions.windspeed = data.windSpeed;
        currentConditions.noReport = false;
        //console.log(spanish.currentConditions)
        //console.log("current conditions grabbed")
      } catch (error) {
        currentConditions.cityname = name;
        currentConditions.cond = "";
        currentConditions.gusts = "";
        currentConditions.humidity = "";
        currentConditions.icon = 44;
        currentConditions.pressure = "";
        currentConditions.temp = "";
        currentConditions.wind = "";
        currentConditions.windspeed = "";
        currentConditions.noReport = true;
        //console.log(spanish.currentConditions)
        //console.log("current conditions grab failed")
      }
    }).fail(function () {
      currentConditions.cityname = name;
      currentConditions.cond = "";
      currentConditions.gusts = "";
      currentConditions.humidity = "";
      currentConditions.icon = 44;
      currentConditions.pressure = "";
      currentConditions.temp = "";
      currentConditions.wind = "";
      currentConditions.windspeed = "";
      currentConditions.noReport = true;
      //console.log(spanish.currentConditions)
      //console.log("current conditions grab failed")
    });
    return currentConditions;
  }

  function grabESNearbyConditions(eightCities, units, key) {
    let cities = [];
    let url =
      "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes=";
    for (let li = 0; li < eightCities.citiesAmount; li++) {
      url +=
        eightCities.cities[li].lat + "," + eightCities.cities[li].lon + ";";
    }
    url += "&language=es-US&units=" + units + "&format=json&apiKey=" + key;
    $.getJSON(url, function (data) {
      data.forEach((ajaxedLoc, i) => {
        let nearbyCitiesObj = {
          noReport: false,
          cityname: "",
          temp: "",
          icon: "",
          wind: "",
          windspeed: "",
        };
        try {
          if (
            ajaxedLoc != undefined ||
            ajaxedLoc != null ||
            ajaxedLoc != "" ||
            ajaxedLoc != " "
          ) {
            nearbyCitiesObj.noReport = false;
            nearbyCitiesObj.cityname = eightCities.cities[i].displayname;
            nearbyCitiesObj.icon =
              ajaxedLoc["v3-wx-observations-current"].iconCode;
            nearbyCitiesObj.temp =
              ajaxedLoc["v3-wx-observations-current"].temperature;
            nearbyCitiesObj.wind =
              ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal ==
                "CALMA" ||
              ajaxedLoc["v3-wx-observations-current"].windSpeed == 0
                ? "Calma"
                : ajaxedLoc["v3-wx-observations-current"]
                    .windDirectionCardinal +
                  " " +
                  ajaxedLoc["v3-wx-observations-current"].windSpeed;
            nearbyCitiesObj.windspeed =
              ajaxedLoc["v3-wx-observations-current"].windSpeed;
            cities.push(nearbyCitiesObj);
          } else {
            nearbyCitiesObj.noReport = true;
            nearbyCitiesObj.cityname = eightCities.cities[i].displayname;
            nearbyCitiesObj.icon = 44;
            nearbyCitiesObj.temp = "";
            nearbyCitiesObj.wind = "";
            nearbyCitiesObj.windspeed = "";
            cities.push(nearbyCitiesObj);
          }
        } catch (error) {
          nearbyCitiesObj.noReport = true;
          nearbyCitiesObj.cityname = eightCities.cities[i].displayname;
          nearbyCitiesObj.icon = 44;
          nearbyCitiesObj.temp = "";
          nearbyCitiesObj.wind = "";
          nearbyCitiesObj.windspeed = "";
          cities.push(nearbyCitiesObj);
        }
      });
      //console.log(spanish.nearbyCities.cities)
      // console.log("nearby conditions grabbed")
    }).fail(function (error) {
      for (let i; i < eightCities.citiesAmount; i++) {
        let nearbyCitiesObj = {
          noReport: false,
          cityname: "",
          temp: "",
          icon: "",
          wind: "",
          windspeed: "",
        };
        nearbyCitiesObj.noReport = true;
        nearbyCitiesObj.cityname =
          locationConfig.eightCities.cities[i].displayname;
        nearbyCitiesObj.icon = 44;
        nearbyCitiesObj.temp = "";
        nearbyCitiesObj.wind = "";
        nearbyCitiesObj.windspeed = "";
        cities.push(nearbyCitiesObj);
      }
      //console.log(spanish.nearbyCities.cities)
      //console.log("nearby conditions grab failed")
      //console.log(error)
    });
    return cities;
  }

  function grabESExtended(lat, lon, units, key, name) {
    let extendedForecast = {};
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      lat +
      "," +
      lon +
      "&format=json&units=" +
      units +
      "&language=es-US&apiKey=" +
      key;
    //console.log(url)
    $.getJSON(url, function (data) {
      let daysDivs = ["one", "two", "three", "four", "five"];
      try {
        extendedForecast.cityname = name;
        extendedForecast.noReport = false;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < extendedForecast.days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          extendedForecast.days[i].cond = data.daypart[0].wxPhraseLong[dpi]
            .replaceAll(" / ", "/")
            .replaceAll("/Viento", ""); //.replaceAll("por la mañana", "AM").replaceAll("por la tarde", "PM")
          extendedForecast.days[i].dayname = data.dayOfWeek[ii]
            .substring(0, 3)
            .toUpperCase()
            .replace("MIÉ", "MIERC")
            .replace("SÁB", "SAB");
          extendedForecast.days[i].high = data.temperatureMax[ii];
          extendedForecast.days[i].icon = data.daypart[0].iconCode[dpi];
          extendedForecast.days[i].low = data.temperatureMin[ii];
          extendedForecast.days[i].windspeed = data.daypart[0].windSpeed[dpi];
        }
        //console.log(spanish.extendedForecast)
        //console.log("extended forecast grabbed")
      } catch (error) {
        extendedForecast.cityname = name;
        extendedForecast.noReport = true;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < extendedForecast.days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          extendedForecast.days[i].cond = "";
          extendedForecast.days[i].dayname = "";
          extendedForecast.days[i].high = "";
          extendedForecast.days[i].icon = 44;
          extendedForecast.days[i].low = "";
          extendedForecast.days[i].windspeed = "";
        }
        //console.log(spanish.extendedForecast)
        //console.log("extended forecast grab failed")
      }
    }).fail(function () {
      extendedForecast.cityname = locationConfig.mainCity.displayname;
      extendedForecast.noReport = true;
      for (let i = 0; i < spanish.extendedForecast.days.length; i++) {
        extendedForecast.days[i].cond = "";
        extendedForecast.days[i].dayname = "";
        extendedForecast.days[i].high = "";
        extendedForecast.days[i].icon = "";
        extendedForecast.days[i].low = "";
        extendedForecast.days[i].windspeed = "";
      }
      //console.log(spanish.extendedForecast)
      //console.log("extended forecast grab failed")
    });
    return extendedForecast;
  }

  function grabESAlmanac(lat, lon, key, units) {
    let almanac = {};
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      lat +
      "," +
      lon +
      "&format=json&units=" +
      units +
      "&language=es-US&apiKey=" +
      api_key;
    $.getJSON(url, function (data) {
      let ii = 0;
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1;
      }
      almanac.noReport = false;
      almanac.sunrisetoday = new Date(data.sunriseTimeLocal[ii]);
      almanac.sunrisetoday = spanish.almanac.sunrisetoday
        .toLocaleTimeString("es-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.sunrisetomorow = new Date(data.sunriseTimeLocal[ii + 1]);
      almanac.sunrisetomorow = spanish.almanac.sunrisetomorow
        .toLocaleTimeString("es-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.sunsettoday = new Date(data.sunsetTimeLocal[ii]);
      almanac.sunsettoday = spanish.almanac.sunsettoday
        .toLocaleTimeString("es-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.sunsettomorrow = new Date(data.sunsetTimeLocal[ii + 1]);
      almanac.sunsettomorrow = spanish.almanac.sunsettomorrow
        .toLocaleTimeString("es-US", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
        .replace(/ /g, " ")
        .toLowerCase()
        .replaceAll(".", "");
      almanac.today = data.dayOfWeek[ii]
        .substring(0, 3)
        .toUpperCase()
        .replace("MIÉ", "MIERC")
        .replace("SÁB", "SAB");
      almanac.tomorrow = data.dayOfWeek[ii + 1]
        .substring(0, 3)
        .toUpperCase()
        .replace("MIÉ", "MIERC")
        .replace("SÁB", "SAB");
      //console.log(spanish.almanac)
      //console.log("almanac grabbed")
    }).fail(function () {
      almanac.noReport = true;
      almanac.sunrisetoday = "";
      almanac.sunrisetomorow = "";
      almanac.sunsettoday = "";
      almanac.sunsettomorrow = "";
      almanac.today = "";
      almanac.tomorrow = "";
      //console.log(spanish.almanac)
      //console.log("almanac grab fail")
    });
  }

  function grabESMoons() {
    let ii = 0;
    try {
      $.getJSON(
        `https://www.icalendar37.net/lunar/api/?lang=es&month=${dateFns.format(
          new Date(),
          "M"
        )}&year=${dateFns.format(new Date(), "YYYY")}`,
        function (data) {
          for (phase in data.phase) {
            if (phase < new Date().getDate()) {
              continue;
            }
            if (data.phase[phase].isPhaseLimit != false) {
              spanish.almanac.moonphases[ii].moon = {
                "Luna nueva": "Nueva",
                "Cuarto creciente": "Creciente",
                "Luna llena": "Llena",
                "Cuarto menguante": "Menguante",
              }[data.phase[phase].phaseName];
              spanish.almanac.moonphases[ii].date =
                String(data.monthName).slice(0, 3) + " " + phase;
              spanish.almanac.moonphases[ii].date =
                phase.toString().length == 1
                  ? spanish.almanac.moonphases[ii].date
                      .replace(" 1", " 01")
                      .replace(" 2", " 02")
                      .replace(" 3", " 03")
                      .replace(" 4", " 04")
                      .replace(" 5", " 05")
                      .replace(" 6", " 06")
                      .replace(" 7", " 07")
                      .replace(" 8", " 08")
                      .replace(" 9", " 09")
                  : spanish.almanac.moonphases[ii].date;
              ii += 1;
            }
          }
          //console.log("first moons grabbed")
        }
      ).fail(function () {
        for (let i = 0; i < 4; i++) {
          spanish.almanac.moonphases[i].date = "";
          spanish.almanac.moonphases[i].moon = "blank";
        }
        //console.log("first moon grab failed")
      });
      setTimeout(() => {
        $.getJSON(
          `https://www.icalendar37.net/lunar/api/?lang=es&month=${dateFns.format(
            dateFns.addMonths(new Date(), 1),
            "M"
          )}&year=${dateFns.format(dateFns.addMonths(new Date(), 1), "YYYY")}`,
          function (data) {
            for (phase in data.phase) {
              if (data.phase[phase].isPhaseLimit != false) {
                spanish.almanac.moonphases[ii].moon = {
                  "Luna nueva": "Nueva",
                  "Cuarto creciente": "Creciente",
                  "Luna llena": "Llena",
                  "Cuarto menguante": "Menguante",
                }[data.phase[phase].phaseName];
                spanish.almanac.moonphases[ii].date =
                  String(data.monthName).slice(0, 3) + " " + phase;
                spanish.almanac.moonphases[ii].date =
                  phase.toString().length == 1
                    ? spanish.almanac.moonphases[ii].date
                        .replace(" 1", " 01")
                        .replace(" 2", " 02")
                        .replace(" 3", " 03")
                        .replace(" 4", " 04")
                        .replace(" 5", " 05")
                        .replace(" 6", " 06")
                        .replace(" 7", " 07")
                        .replace(" 8", " 08")
                        .replace(" 9", " 09")
                    : spanish.almanac.moonphases[ii].date;
                ii += 1;
              }
            }
            //console.log("second moons grabbed")
          }
        ).fail(function () {
          for (let i = 0; i < 4; i++) {
            if (spanish.almanac.moonphases[i].date != "")
              spanish.almanac.moonphases[i].date = "";
            spanish.almanac.moonphases[i].moon = "blank";
          }
          //console.log("second moon grab failed")
        });
        //console.log(spanish.almanac.moonphases)
      }, 500);
    } catch (error) {
      for (let i = 0; i < 8; i++) {
        spanish.almanac.moonphases[i].date = "";
        spanish.almanac.moonphases[i].moon = "blank";
      }
      //console.log(spanish.almanac.moonphases)
      //console.log("all moon grabs failed")
    }
  }

  function grabCoursesData(ci) {
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      locationConfig.golf.courses[ci].lat +
      "," +
      locationConfig.golf.courses[ci].lon +
      "&format=json&units=e&language=en-US&apiKey=" +
      api_key;
    $.getJSON(url, function (data) {
      try {
        golf.courseForecast[ci].cityname =
          locationConfig.golf.courses[ci].displayname;
        golf.courseForecast[ci].noReport = false;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < golf.courseForecast[ci].days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          golf.courseForecast[ci].days[i].cond = data.daypart[0].wxPhraseLong[
            dpi
          ]
            .replaceAll("/", "/ ")
            .replaceAll("Thunderstorms", "T'storms")
            .replaceAll("Scattered", "Sct'd")
            .replaceAll("Thundershowers", "T'showers");
          golf.courseForecast[ci].days[i].dayname = data.dayOfWeek[ii]
            .substring(0, 3)
            .toUpperCase();
          golf.courseForecast[ci].days[i].high = data.temperatureMax[ii];
          golf.courseForecast[ci].days[i].icon = data.daypart[0].iconCode[dpi];
          golf.courseForecast[ci].days[i].low = data.temperatureMin[ii];
          golf.courseForecast[ci].days[i].windspeed =
            data.daypart[0].windSpeed[dpi];
        }
        //console.log(golf.courseForecast[ci])
        //console.log("golf courses forecast " + ci + " grabbed")
      } catch (error) {
        golf.courseForecast[ci].cityname =
          locationConfig.golf.courses[ci].displayname;
        golf.courseForecast[ci].noReport = true;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < golf.courseForecast[ci].days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          golf.courseForecast[ci].days[i].cond = "";
          golf.courseForecast[ci].days[i].dayname = "";
          golf.courseForecast[ci].days[i].high = "";
          golf.courseForecast[ci].days[i].icon = 44;
          golf.courseForecast[ci].days[i].low = "";
          golf.courseForecast[ci].days[i].windspeed = "";
        }
        //console.log(golf.courseForecast[ci])
        //console.log("golf courses forecast " + ci + " grab failed")
      }
    }).fail(function () {
      golf.courseForecast[ci].cityname =
        locationConfig.golf.courses[ci].displayname;
      golf.courseForecast[ci].noReport = true;
      for (let i = 0; i < golf.courseForecast[ci].days.length; i++) {
        golf.courseForecast[ci].days[i].cond = "";
        golf.courseForecast[ci].days[i].dayname = "";
        golf.courseForecast[ci].days[i].high = "";
        golf.courseForecast[ci].days[i].icon = "";
        golf.courseForecast[ci].days[i].low = "";
        golf.courseForecast[ci].days[i].windspeed = "";
      }
      //console.log(golf.courseForecast[ci])
      //console.log("golf courses forecast " + ci + " grab failed")
    });
    //}
  }

  function grabResortsData(ri) {
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      locationConfig.golf.resorts[ri].lat +
      "," +
      locationConfig.golf.resorts[ri].lon +
      "&format=json&units=e&language=en-US&apiKey=" +
      api_key;
    $.getJSON(url, function (data) {
      try {
        golf.resortForecast[ri].cityname =
          locationConfig.golf.resorts[ri].displayname;
        golf.resortForecast[ri].noReport = false;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < golf.resortForecast[ci].days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          golf.resortForecast[ri].days[i].cond = data.daypart[0].wxPhraseLong[
            dpi
          ]
            .replaceAll("/", "/ ")
            .replaceAll("Thunderstorms", "T'storms")
            .replaceAll("Scattered", "Sct'd")
            .replaceAll("Thundershowers", "T'showers");
          golf.resortForecast[ri].days[i].dayname = data.dayOfWeek[ii]
            .substring(0, 3)
            .toUpperCase();
          golf.resortForecast[ri].days[i].high = data.temperatureMax[ii];
          golf.resortForecast[ri].days[i].icon = data.daypart[0].iconCode[dpi];
          golf.resortForecast[ri].days[i].low = data.temperatureMin[ii];
          golf.resortForecast[ri].days[i].windspeed =
            data.daypart[0].windSpeed[dpi];
        }
        //console.log(golf.resortForecast[ri])
        //console.log("golf resorts forecast " + ri + " grabbed")
      } catch (error) {
        golf.resortForecast[ri].cityname =
          locationConfig.golf.resorts[ri].displayname;
        golf.resortForecast[ri].noReport = true;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < golf.resortForecast[ri].days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          golf.resortForecast[ri].days[i].cond = "";
          golf.resortForecast[ri].days[i].dayname = "";
          golf.resortForecast[ri].days[i].high = "";
          golf.resortForecast[ri].days[i].icon = 44;
          golf.resortForecast[ri].days[i].low = "";
          golf.resortForecast[ri].days[i].windspeed = "";
        }
        //console.log(golf.resortForecast[ri])
        //console.log("golf resorts forecast " + ri + " grab failed")
      }
    }).fail(function () {
      golf.resortForecast[ri].cityname =
        locationConfig.golf.resorts[ri].displayname;
      golf.resortForecast[ri].noReport = true;
      for (let i = 0; i < golf.resortForecast[ri].days.length; i++) {
        golf.resortForecast[ri].days[i].cond = "";
        golf.resortForecast[ri].days[i].dayname = "";
        golf.resortForecast[ri].days[i].high = "";
        golf.coursresortForecasteForecast[ri].days[i].icon = "";
        golf.resortForecast[ri].days[i].low = "";
        golf.resortForecast[ri].days[i].windspeed = "";
      }
      //console.log(golf.resortForecast[ri])
      //console.log("golf resorts forecast " + ri + " grab failed")
    });
    //}
  }

  function grabHealthCurrentData() {
    uvIndex.cityname = locationConfig.mainCity.displayname;
    $.getJSON(
      "https://api.weather.com/v2/indices/uv/current?geocode=" +
        locationConfig.mainCity.lat +
        "," +
        locationConfig.mainCity.lon +
        "&language=en-US&format=json&apiKey=" +
        api_key,
      function (data) {
        try {
          uvIndex.current.uv = data.uvIndexCurrent.uvIndex;
          uvIndex.current.word = data.uvIndexCurrent.uvDesc;
        } catch (error) {
          uvIndex.current.uv = "noreport";
          uvIndex.current.word = "";
        }
      }
    ).fail(function () {
      uvIndex.current.uv = "noreport";
      uvIndex.current.word = "";
    });
  }

  function getUvTimes(uvdata) {
    let timestamps = [9, 12, 15, 18],
      currentstamp = dateFns.getHours(new Date()),
      now = new Date(),
      startstamp,
      hour,
      i = 0;
    let timearray = [];
    switch (true) {
      case currentstamp < 9:
        startstamp = 9;
        break;
      case currentstamp < 12:
        startstamp = 12;
        break;
      case currentstamp < 15:
        startstamp = 15;
        break;
      case currentstamp < 18:
        startstamp = 18;
        break;
      default:
        startstamp = 9;
    }
    while (timearray.length < 4) {
      hour = dateFns.getHours(uvdata.fcstValidLocal[i]);
      if (
        dateFns.isAfter(uvdata.fcstValidLocal[i], now) &&
        (hour == startstamp || timearray.length > 0)
      ) {
        if (timestamps.indexOf(hour) >= 0) {
          timearray.push(i);
        }
      }
      i++;
    }
    return timearray;
  }
  function hourlyTime(time) {
    return dateFns.format(time, "h a").replace(" ", "");
  }
  function getHealth24HrData() {
    $.getJSON(
      "https://api.weather.com/v2/indices/uv/hourly/24hour?geocode=" +
        locationConfig.mainCity.lat +
        "," +
        locationConfig.mainCity.lon +
        "&language=en-US&format=json&apiKey=" +
        api_key,
      function (data) {
        try {
          let indexes = getUvTimes(data.uvIndex1hour);
          for (let i = 0; i < 3; i++) {
            uvIndex.forecast[i].uv = data.uvIndex1hour.uvIndex[indexes[i]];
            uvIndex.forecast[i].word = data.uvIndex1hour.uvDesc[indexes[i]];
            uvIndex.forecast[i].time = hourlyTime(
              data.uvIndex1hour.fcstValidLocal[indexes[i]]
            ).toUpperCase();
            uvIndex.forecast[i].day = dateFns
              .format(
                new Date(data.uvIndex1hour.fcstValidLocal[indexes[i]]),
                "ddd"
              )
              .toUpperCase();
          }
        } catch (error) {
          for (let i = 0; i < 3; i++) {
            uvIndex.forecast[i].uv = "noreport";
            uvIndex.forecast[i].word = "";
            uvIndex.forecast[i].time = "";
            uvIndex.forecast[i].day = "";
          }
        }
      }
    ).fail(function () {
      for (let i = 0; i < 3; i++) {
        uvIndex.forecast[i].uv = "noreport";
        uvIndex.forecast[i].word = "";
        uvIndex.forecast[i].time = "";
        uvIndex.forecast[i].day = "";
      }
    });
  }

  function grabEXCurrentConditions() {
    let url =
      "https://api.weather.com/v3/wx/observations/current?geocode=" +
      locationConfig.extraCity.lat +
      "," +
      locationConfig.extraCity.lon +
      "&units=e&language=en-US&format=json&apiKey=" +
      api_key;
    $.getJSON(url, function (data) {
      try {
        extraLocal.currentConditions.cityname =
          locationConfig.extraCity.displayname;
        extraLocal.currentConditions.cond = data.wxPhraseLong;
        extraLocal.currentConditions.gusts =
          data.windGust != null || data.windGust != undefined
            ? data.windGust + " mph"
            : "None";
        extraLocal.currentConditions.humidity = data.relativeHumidity + "%";
        extraLocal.currentConditions.icon = data.iconCode;
        extraLocal.currentConditions.pressure =
          data.pressureAltimeter.toFixed(2);
        extraLocal.currentConditions.temp = data.temperature;
        extraLocal.currentConditions.wind =
          data.windDirectionCardinal == "CALM" || data.windSpeed == 0
            ? "Calm"
            : data.windDirectionCardinal + " " + data.windSpeed;
        extraLocal.currentConditions.windspeed = data.windSpeed;
        extraLocal.currentConditions.noReport = false;
      } catch (error) {
        extraLocal.currentConditions.cityname =
          locationConfig.extraCity.displayname;
        extraLocal.currentConditions.cond = "";
        extraLocal.currentConditions.gusts = "";
        extraLocal.currentConditions.humidity = "";
        extraLocal.currentConditions.icon = 44;
        extraLocal.currentConditions.pressure = "";
        extraLocal.currentConditions.temp = "";
        extraLocal.currentConditions.wind = "";
        extraLocal.currentConditions.windspeed = "";
        extraLocal.currentConditions.noReport = true;
      }
    }).fail(function () {
      extraLocal.currentConditions.cityname =
        locationConfig.extraCity.displayname;
      extraLocal.currentConditions.cond = "";
      extraLocal.currentConditions.gusts = "";
      extraLocal.currentConditions.humidity = "";
      extraLocal.currentConditions.icon = 44;
      extraLocal.currentConditions.pressure = "";
      extraLocal.currentConditions.temp = "";
      extraLocal.currentConditions.wind = "";
      extraLocal.currentConditions.windspeed = "";
      extraLocal.currentConditions.noReport = true;
    });
  }

  function grabEXDayDesc() {
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      locationConfig.extraCity.lat +
      "," +
      locationConfig.extraCity.lon +
      "&format=json&units=e&language=en-US&apiKey=" +
      api_key;
    $.getJSON(url, function (data) {
      let ii = 0;
      try {
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
        }
        extraLocal.dayDesc.cityname = locationConfig.extraCity.displayname;
        extraLocal.dayDesc.noReport = false;
        for (let i = 0; i < extraLocal.dayDesc.times.length; i++, ii++) {
          extraLocal.dayDesc.times[i].timetitle =
            data.daypart[0].daypartName[ii];
          extraLocal.dayDesc.times[i].forecast = data.daypart[0].narrative[ii];
        }
      } catch (error) {
        extraLocal.dayDesc.cityname = locationConfig.extraCity.displayname;
        extraLocal.dayDesc.noReport = true;
        for (let i = 0; i < extraLocal.dayDesc.times.length; i++, ii++) {
          extraLocal.dayDesc.times[i].timetitle = "";
          extraLocal.dayDesc.times[i].forecast = "";
        }
      }
    }).fail(function () {
      extraLocal.dayDesc.cityname = locationConfig.extraCity.displayname;
      extraLocal.dayDesc.noReport = true;
      for (let i = 0; i < extraLocal.dayDesc.times.length; i++) {
        extraLocal.dayDesc.times[i].timetitle = "";
        extraLocal.dayDesc.times[i].forecast = "";
      }
    });
  }

  function grabEXExtended() {
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      locationConfig.extraCity.lat +
      "," +
      locationConfig.extraCity.lon +
      "&format=json&units=e&language=en-US&apiKey=" +
      api_key;
    $.getJSON(url, function (data) {
      let daysDivs = ["one", "two", "three", "four", "five"];
      try {
        extraLocal.extendedForecast.cityname =
          locationConfig.extraCity.displayname;
        extraLocal.extendedForecast.noReport = false;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < extraLocal.extendedForecast.days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          extraLocal.extendedForecast.days[i].cond =
            data.daypart[0].wxPhraseLong[dpi]
              .replaceAll("/", "/ ")
              .replaceAll("Thunderstorms", "T'storms")
              .replaceAll("Scattered", "Sct'd")
              .replaceAll("Thundershowers", "T'showers");
          extraLocal.extendedForecast.days[i].dayname = data.dayOfWeek[ii]
            .substring(0, 3)
            .toUpperCase();
          extraLocal.extendedForecast.days[i].high = data.temperatureMax[ii];
          extraLocal.extendedForecast.days[i].icon =
            data.daypart[0].iconCode[dpi];
          extraLocal.extendedForecast.days[i].low = data.temperatureMin[ii];
          extraLocal.extendedForecast.days[i].windspeed =
            data.daypart[0].windSpeed[dpi];
        }
      } catch (error) {
        extraLocal.extendedForecast.cityname =
          locationConfig.extraCity.displayname;
        extraLocal.extendedForecast.noReport = true;
        let ii = 0;
        let dpi = 0;
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1;
          dpi = 2;
        }
        for (
          let i = 0;
          i < extraLocal.extendedForecast.days.length;
          i++, ii++, dpi = dpi + 2
        ) {
          extraLocal.extendedForecast.days[i].cond = "";
          extraLocal.extendedForecast.days[i].dayname = "";
          extraLocal.extendedForecast.days[i].high = "";
          extraLocal.extendedForecast.days[i].icon = 44;
          extraLocal.extendedForecast.days[i].low = "";
          extraLocal.extendedForecast.days[i].windspeed = "";
        }
      }
    }).fail(function () {
      extraLocal.extendedForecast.cityname =
        locationConfig.extraCity.displayname;
      extraLocal.extendedForecast.noReport = true;
      for (let i = 0; i < extraLocal.extendedForecast.days.length; i++) {
        extraLocal.extendedForecast.days[i].cond = "";
        extraLocal.extendedForecast.days[i].dayname = "";
        extraLocal.extendedForecast.days[i].high = "";
        extraLocal.extendedForecast.days[i].icon = "";
        extraLocal.extendedForecast.days[i].low = "";
        extraLocal.extendedForecast.days[i].windspeed = "";
      }
    });
  }
} else {
  console.log(
    "THIS IS SUPPOSED TO BE USED AS A WEB WORKER, NOT AS A SCRIPT! - PicelBoi"
  );
}
