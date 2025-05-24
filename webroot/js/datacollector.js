if (window.Worker) {
  // Define functions

  function grabCurrentConditions(lat, lon, unit, name, key, currentConditions) {
    let fail = false;
    let errmsg = "";
    try {
      let url =
        "https://api.weather.com/v3/wx/observations/current?geocode=" +
        lat +
        "," +
        lon +
        "&units=" +
        unit +
        "&language=en-US&format=json&apiKey=" +
        key;
      try {
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
            try {
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
              fail = true;
              errmsg = `Error processing the main current conditions: ${error}`;
            } catch (error) {
              fail = true;
              errmsg = `Error processing the main current conditions - possibly a typo on our end or invalid data being sent?: ${error}`;
            }
          }
        }).fail(function (xhr, status, error) {
          try {
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
            fail = true;
            errmsg = `Error grabbing the main curernt conditions: ${error}`;
          } catch (error) {
            fail = true;
            errmsg = `Error grabbing the main current conditions - possibly a typo on our end or invalid data being sent?: ${error}`;
          }
        });
      } catch (error) {
        fail = true;
        errmsg = `Error in sending a request to grab the main current conditions - possibly a typo on our end or invalid data being sent?: ${error}`;
      }
    } catch (error) {
      fail = true;
      errmsg = `Error preparing to grab the main current conditions - possibly a typo on our end or invalid data being sent?: ${error}`;
    }

    return { fail: fail, msg: errmsg, data: currentConditions };
  }

  function grabNearbyConditions(cities, unit, key) {
    let fail = false;
    let errmsg = "";
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
            fail = true;
            errmsg = `Error processing the conditions for ${cities.cities[i].displayname}: ajaxedLoc is null/undefined/none?`;
          }
        } catch (error) {
          try {
            nearbyCitiesObj.noReport = true;
            nearbyCitiesObj.cityname = cities.cities[i].displayname;
            nearbyCitiesObj.icon = 44;
            nearbyCitiesObj.temp = "";
            nearbyCitiesObj.wind = "";
            nearbyCitiesObj.windspeed = "";
            nearbyCities.cities.push(nearbyCitiesObj);
            fail = true;
            errmsg = `Error processing the conditions for ${cities.cities[i].displayname}`;
          } catch (error) {
            fail = true;
            errmsg =
              "Error proccessing the conditions for the nearby conditions - possibly invalid data?";
          }
        }
      });
      //console.log(nearbyCities.cities)
      // console.log("nearby conditions grabbed")
    }).fail(function (xhr, status, error) {
      try {
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
        fail = true;
        errmsg = `Nearby conditions grab failed: ${error}`;
      } catch (error) {
        fail = true;
        errmsg = "Nearby conditions grab failed - possibly invalid data?";
      }
    });
    return { fail: fail, msg: errmsg, data: nearbyCities };
  }

  function grabDayDesc(lat, lon, unit, key, name, dayDesc) {
    let fail = false;
    let errmsg = "";
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
        fail = true;
        errmsg = `Day description processing failed: ${error}`;
        //console.log(dayDesc)
        //console.log("day descriptions grabs failed")
      }
    }).fail(function (xhr, status, error) {
      dayDesc.cityname = name;
      dayDesc.noReport = true;
      for (let i = 0; i < dayDesc.times.length; i++) {
        dayDesc.times[i].timetitle = "";
        dayDesc.times[i].forecast = "";
      }
      fail = true;
      errmsg = `Day description grabbing failed: ${error}`;
      //console.log(dayDesc)
      //console.log("day description grabs failed")
    });
    return { fail: fail, msg: errmsg, data: dayDesc };
  }

  function grabExtended(lat, lon, units, key, name, extendedForecast) {
    let fail = false;
    let errmsg = "";

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
        fail = true;
        errmsg = `Extended forecast processing failed: ${error}`;
      }
    }).fail(function (xhr, status, error) {
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
      fail = true;
      errmsg = `Extended forecast grabbing failed: ${error}`;
      //console.log(extendedForecast)
      //console.log("extended forecast grab failed")
    });
    return { fail: fail, msg: errmsg, data: extendedForecast };
  }

  function grabAlmanac(lat, lon, units, key, almanac) {
    let fail = false;
    let errmsg = "";

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
      try {
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
      } catch (error) {
        fail = true;
        errmsg = `Almanac processing failed: ${error}`;
      }
    }).fail(function (xhr, status, error) {
      almanac.noReport = true;
      almanac.sunrisetoday = "";
      almanac.sunrisetomorow = "";
      almanac.sunsettoday = "";
      almanac.sunsettomorrow = "";
      almanac.today = "";
      almanac.tomorrow = "";
      //console.log(almanac)
      //console.log("almanac grab fail")
      fail = true;
      errmsg = `Almanac grabbing failed: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: almanac };
  }

  function grabMoons(almanac) {
    let fail = false;
    let errmsg = "";

    let ii = 0;
    try {
      $.getJSON(
        `https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format(
          new Date(),
          "M"
        )}&year=${dateFns.format(new Date(), "YYYY")}`,
        function (data) {
          try {
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
          } catch (error) {
            fail = true;
            errmsg = `Almanac (Moon) failed proccessing: ${error}`;
          }
        }
      ).fail(function (xhr, status, error) {
        for (let i = 0; i < 4; i++) {
          almanac.moonphases[i].date = "";
          almanac.moonphases[i].moon = "blank";
        }
        //console.log("first moon grab failed")
        fail = true;
        errmsg = `Alamanac (Moon) failed grabbing: ${error}`;
      });
      setTimeout(function () {
        try {
          $.getJSON(
            `https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format(
              dateFns.addMonths(new Date(), 1),
              "M"
            )}&year=${dateFns.format(
              dateFns.addMonths(new Date(), 1),
              "YYYY"
            )}`,
            function (data) {
              try {
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
              } catch (error) {
                fail = true;
                errmsg = `Almanac (Second Moon) failed processing: ${error}`;
              }
            }
          ).fail(function () {
            for (let i = 0; i < 4; i++) {
              if (almanac.moonphases[i].date != "")
                almanac.moonphases[i].date = "";
              almanac.moonphases[i].moon = "blank";
            }
            //console.log("second moon grab failed")
          });
        } catch (error) {
          fail = true;
          errmsg = `Almanac (Second Moon) failed grabbing: ${error}`;
        }
      }, 500);
      //console.log(almanac.moonphases)
    } catch (error) {
      for (let i = 0; i < 8; i++) {
        almanac.moonphases[i].date = "";
        almanac.moonphases[i].moon = "blank";
      }
      fail = true;
      errmsg = `Almanac (All Moons) failed grabbing: ${error}`;
      //console.log(almanac.moonphases)
      //console.log("all moon grabs failed")
    }
    let newformat = {
      noReport: false,
      moons: almanac.moonphases,
    };
    if (fail) {
      newformat.noReport = true;
    }
    return { fail: fail, msg: errmsg, data: newformat };
  }

  function getWarnings(lat, lon, key, alerts) {
    let fail = false;
    let errmsg = "";

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

          if (alerts.warnings.length > 1) {
            alerts.warnings.sort((a, b) => b.severity - a.severity);
          }
          //let warning1 = {alertNum: 2, key: data.alerts[0].detailKey, warningtitle:"Tornado Warning", warningdesc:"FAKE - wee woo wee woo", severity:sevalertNum("Tornado Warning"), alertType:"", significance:"W", headline:"FUCKED"}
          //let warning2 = {alertNum: 1, key: data.alerts[0].detailKey, warningtitle:"Severe Thunderstorm Warning", warningdesc:"FAKE - wee woo wee woo", severity:sevalertNum("Severe Thunderstorm Warning"), alertType:"", significance:"W", headline:"FUCKED"}
          //qeatherData.alerts.warnings.push(warning1);
          //alerts.warnings.push(warning2);

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
    }).fail(function (xhr, status, error) {
      alerts = { warnings: [] };
      alerts.alertsAmount = 0;
      fail = true;
      errmsg = `Alerts grabbing failed: ${error}`;
      //console.log(alerts)
      //console.log("weather alerts grab failed or no alerts detected")
    });
    return { fail: fail, msg: errmsg, data: alerts };
  }

  function grabAirportDelays(airports) {
    let fail = false;
    let errmsg = "";
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
    }).fail(function (xhr, status, error) {
      for (let i = 0; i < airports.airportsAmount; i++) {
        let delay = { delayTime: "", iataCode: "" };
        delay.delayTime = "No Report";
        delay.iataCode = airports[i].iataCode;
        airportDelayList.push(delay);
        fail = true;
        errmsg = `Airport delay grab failed: ${error}`;
      }
      //console.log("airport delays grab failed")
    });
    //console.log(airportDelayList)
    return { fail: fail, msg: errmsg, data: airportDelayList };
  }

  function grabAPConditions(airport) {
    let fail = false;
    let errmsg = "";
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
            try {
              airportsObj.noReport = false;
              airportsObj.airportName = airport.airports[i].displayname;
              airportsObj.iataCode = airport.airports[i].iataCode;
              airportsObj.condition =
                ajaxedLoc["v3-wx-observations-current"].wxPhraseLong;
              airportsObj.icon =
                ajaxedLoc["v3-wx-observations-current"].iconCode;
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
                  "CALM" ||
                ajaxedLoc["v3-wx-observations-current"].windSpeed == 0
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
              airportConditions.push(airportsObj);
            } catch (error) {
              fail = true;
              errmsg = `Airport conditions processing failed: ${error}`;
            }
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
            airportConditions.push(airportsObj);
            fail = true;
            errmsg = `Airport conditions processing failed (ajaxedLoc is missing?): ${error}`;
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
          airportConditions.push(airportsObj);
          fail = true;
          errmsg = `Airport conditions processing failed: ${error}`;
        }
      });
    }).fail(function (xhr, status, error) {
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
        airportConditions.push(airportsObj);
        fail = true;
        errmsg = `Airport conditions grabbing failed: ${error}`;
      }
    });
    return { fail: fail, msg: errmsg, data: airportConditions };
  }
  //console.log(airportConditions)

  function grabNationalAP(nationalAirports) {
    let fail = false;
    let errmsg = "";
    let url =
      "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes=";
    for (let li = 0; li < nationalAirports.length; li++) {
      url += nationalAirports[li].lat + "," + nationalAirports[li].lon + ";";
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
            fail = true;
            errmsg = `National Airports processing failed (ajaxedLoc is missing?)`;
            //console.log("national airports grab failed")
          }
        } catch (error) {
          nationalAirports.airports[i].icon = 44;
          nationalAirports.airports[i].temp = "";
          nationalAirports.airports[i].windspeed = "";
          nationalAirports.airports[i].delay = "No Report";
          fail = true;
          errmsg = `National Airports processing failed: ${error}`;
          //console.log("national airports grab failed")
        }
      });
    }).fail(function (xhr, status, error) {
      nationalAirports.airports[i].icon = 44;
      nationalAirports.airports[i].temp = "";
      nationalAirports.airports[i].windspeed = "";
      nationalAirports.airports[i].delay = "No Report";
      //console.log("national airports grab failed")
      fail = true;
      errmsg = `National Airports grabbing failed: ${error}`;
    });
    //console.log(nationalAirports)
    return { fail: fail, msg: errmsg, data: nationalAirports };
  }

  //console.log("grabbed data")
  function grabESCurrentConditions(
    lat,
    lon,
    units,
    key,
    name,
    currentConditions
  ) {
    let fail = false;
    let errmsg = "";
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
        fail = true;
        errmsg = `Processing current conditions failed: ${error}`;
        //console.log(spanish.currentConditions)
        //console.log("current conditions grab failed")
      }
    }).fail(function (xhr, status, error) {
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
      fail = true;
      errmsg = `Grabbing current condtions failed: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: currentConditions };
  }

  function grabESNearbyConditions(eightCities, units, key) {
    let fail = false;
    let errmsg = "";
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
            fail = true;
            errmsg = `Failed processing ${eightCities.cities[i].displayname}'s nearby location (spanish) data: ajaxedLoc is missing.`;
          }
        } catch (error) {
          nearbyCitiesObj.noReport = true;
          nearbyCitiesObj.cityname = eightCities.cities[i].displayname;
          nearbyCitiesObj.icon = 44;
          nearbyCitiesObj.temp = "";
          nearbyCitiesObj.wind = "";
          nearbyCitiesObj.windspeed = "";
          cities.push(nearbyCitiesObj);
          fail = true;
          errmsg = `Failed processing ${eightCities.cities[i].displayname}'s nearby location (spanish) data: ${error}`;
        }
      });
      //console.log(spanish.nearbyCities.cities)
      // console.log("nearby conditions grabbed")
    }).fail(function (xhr, status, error) {
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
      fail = true;
      errmsg = `Failed grabbing nearby location (spanish) data: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: cities };
  }

  function grabESExtended(lat, lon, units, key, name) {
    let fail = false;
    let errmsg = "";
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
        fail = true;
        errmsg = `Extended Forecast (Spanish) data processing failed: ${error}`;
      }
    }).fail(function (xhr, status, error) {
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
      fail = true;
      errmsg = `Extended Forecast (Spanish) data processing failed: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: extendedForecast };
  }

  function grabESAlmanac(lat, lon, key, units) {
    let fail = false;
    let errmsg = "";
    let almanac = {};
    let url =
      "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
      lat +
      "," +
      lon +
      "&format=json&units=" +
      units +
      "&language=es-US&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      try {
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
      } catch (error) {
        fail = true;
        errmsg = `Alamanac (spanish) processing failed: ${error}`;
      }
    }).fail(function (xhr, status, error) {
      almanac.noReport = true;
      almanac.sunrisetoday = "";
      almanac.sunrisetomorow = "";
      almanac.sunsettoday = "";
      almanac.sunsettomorrow = "";
      almanac.today = "";
      almanac.tomorrow = "";
      //console.log(spanish.almanac)
      //console.log("almanac grab fail")
      fail = true;
      errmsg = `Alamanac (spanish) grabbing failed: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: almanac };
  }

  function grabESMoons() {
    let fail = true;
    let errmsg = "";
    let almanac = {};
    let ii = 0;
    try {
      $.getJSON(
        `https://www.icalendar37.net/lunar/api/?lang=es&month=${dateFns.format(
          new Date(),
          "M"
        )}&year=${dateFns.format(new Date(), "YYYY")}`,
        function (data) {
          try {
            for (phase in data.phase) {
              if (phase < new Date().getDate()) {
                continue;
              }
              if (data.phase[phase].isPhaseLimit != false) {
                almanac.moonphases[ii].moon = {
                  "Luna nueva": "Nueva",
                  "Cuarto creciente": "Creciente",
                  "Luna llena": "Llena",
                  "Cuarto menguante": "Menguante",
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
          } catch (error) {
            fail = true;
            errmsg = `Almanac (Moon (spanish)) processing failed: ${error}`;
          }
        }
      ).fail(function () {
        for (let i = 0; i < 4; i++) {
          almanac.moonphases[i].date = "";
          almanac.moonphases[i].moon = "blank";
        }
        fail = true;
        errmsg = `Almanac (Moon (spanish)) grabbing failed: ${error}`;
        //console.log("first moon grab failed")
      });

      setTimeout(function () {
        $.getJSON(
          `https://www.icalendar37.net/lunar/api/?lang=es&month=${dateFns.format(
            dateFns.addMonths(new Date(), 1),
            "M"
          )}&year=${dateFns.format(dateFns.addMonths(new Date(), 1), "YYYY")}`,
          function (data) {
            try {
              for (phase in data.phase) {
                if (data.phase[phase].isPhaseLimit != false) {
                  almanac.moonphases[ii].moon = {
                    "Luna nueva": "Nueva",
                    "Cuarto creciente": "Creciente",
                    "Luna llena": "Llena",
                    "Cuarto menguante": "Menguante",
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
            } catch (error) {
              fail = true;
              errmsg = `Almanac (Second Moon (spanish)) processing failed: ${error}`;
            }
          }
        ).fail(function (xhr, status, error) {
          for (let i = 0; i < 4; i++) {
            if (almanac.moonphases[i].date != "")
              almanac.moonphases[i].date = "";
            almanac.moonphases[i].moon = "blank";
          }
          fail = true;
          errmsg = `Almanac (Second Moon (spanish)) grabbing failed: ${error}`;
          //console.log("second moon grab failed")
        });
        //console.log(spanish.almanac.moonphases)
      }, 500);
    } catch (error) {
      for (let i = 0; i < 8; i++) {
        almanac.moonphases[i].date = "";
        almanac.moonphases[i].moon = "blank";
        fail = true;
        errmsg = `Almanac (All Moons (spanish)) grabbing failed: ${error}`;
      }
      //console.log(spanish.almanac.moonphases)
      //console.log("all moon grabs failed")
    }
    let newformat = {
      noReport: false,
      moons: almanac.moonphases,
    };
    if (fail) {
      newformat.noReport = true;
    }
    return { fail: fail, msg: errmsg, data: newformat };
  }

  function grabCoursesData(golf, units, key) {
    let fail = false;
    let errmsg = "";
    let golfData = {};
    golf.courses.forEach((ci) => {
      let url =
        "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
        golf.courses[ci].lat +
        "," +
        golf.courses[ci].lon +
        "&format=json&units=" +
        units +
        "&language=en-US&apiKey=" +
        key;
      $.getJSON(url, function (data) {
        try {
          golfData.courseForecast[ci].cityname = golf.courses[ci].displayname;
          golfData.courseForecast[ci].noReport = false;
          let ii = 0;
          let dpi = 0;
          if (data.daypart[0].daypartName[0] == null) {
            ii = 1;
            dpi = 2;
          }
          for (
            let i = 0;
            i < golfData.courseForecast[ci].days.length;
            i++, ii++, dpi = dpi + 2
          ) {
            golfData.courseForecast[ci].days[i].cond =
              data.daypart[0].wxPhraseLong[dpi]
                .replaceAll("/", "/ ")
                .replaceAll("Thunderstorms", "T'storms")
                .replaceAll("Scattered", "Sct'd")
                .replaceAll("Thundershowers", "T'showers");
            golfData.courseForecast[ci].days[i].dayname = data.dayOfWeek[ii]
              .substring(0, 3)
              .toUpperCase();
            golfData.courseForecast[ci].days[i].high = data.temperatureMax[ii];
            golfData.courseForecast[ci].days[i].icon =
              data.daypart[0].iconCode[dpi];
            golfData.courseForecast[ci].days[i].low = data.temperatureMin[ii];
            golfData.courseForecast[ci].days[i].windspeed =
              data.daypart[0].windSpeed[dpi];
          }
          //console.log(golf.courseForecast[ci])
          //console.log("golf courses forecast " + ci + " grabbed")
        } catch (error) {
          golfData.courseForecast[ci].cityname = golf.courses[ci].displayname;
          golfData.courseForecast[ci].noReport = true;
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
            golfData.courseForecast[ci].days[i].cond = "";
            golfData.courseForecast[ci].days[i].dayname = "";
            golfData.courseForecast[ci].days[i].high = "";
            golfData.courseForecast[ci].days[i].icon = 44;
            golfData.courseForecast[ci].days[i].low = "";
            golfData.courseForecast[ci].days[i].windspeed = "";
          }
          //console.log(golf.courseForecast[ci])
          //console.log("golf courses forecast " + ci + " grab failed")
          fail = true;
          errmsg = `Golf (${ci}) data processing failed: ${error}`;
        }
      }).fail(function (xhr, status, error) {
        golfData.courseForecast[ci].cityname = golf.courses[ci].displayname;
        golfData.courseForecast[ci].noReport = true;
        for (let i = 0; i < golf.courseForecast[ci].days.length; i++) {
          golfData.courseForecast[ci].days[i].cond = "";
          golfData.courseForecast[ci].days[i].dayname = "";
          golfData.courseForecast[ci].days[i].high = "";
          golfData.courseForecast[ci].days[i].icon = "";
          golfData.courseForecast[ci].days[i].low = "";
          golfData.courseForecast[ci].days[i].windspeed = "";
        }
        //console.log(golf.courseForecast[ci])
        //console.log("golf courses forecast " + ci + " grab failed")
        fail = true;
        errmsg = `Golf (${ci}) data processing failed: ${error}`;
      });
    });
    //}
    return { fail: fail, msg: errmsg, data: golfData.courseForecast };
  }

  function grabResortsData(golf, units, key) {
    let fail = false;
    let errmsg = "";
    let golfData = {};
    golf.resorts.forEach((ri) => {
      let url =
        "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" +
        golf.resorts[ri].lat +
        "," +
        golf.resorts[ri].lon +
        "&format=json&units=" +
        units +
        "&language=en-US&apiKey=" +
        key;
      $.getJSON(url, function (data) {
        try {
          golfData.resortForecast[ri].cityname = golf.resorts[ri].displayname;
          golfData.resortForecast[ri].noReport = false;
          let ii = 0;
          let dpi = 0;
          if (data.daypart[0].daypartName[0] == null) {
            ii = 1;
            dpi = 2;
          }
          for (
            let i = 0;
            i < golfData.resortForecast[ci].days.length;
            i++, ii++, dpi = dpi + 2
          ) {
            golfData.resortForecast[ri].days[i].cond =
              data.daypart[0].wxPhraseLong[dpi]
                .replaceAll("/", "/ ")
                .replaceAll("Thunderstorms", "T'storms")
                .replaceAll("Scattered", "Sct'd")
                .replaceAll("Thundershowers", "T'showers");
            golfData.resortForecast[ri].days[i].dayname = data.dayOfWeek[ii]
              .substring(0, 3)
              .toUpperCase();
            golfData.resortForecast[ri].days[i].high = data.temperatureMax[ii];
            golfData.resortForecast[ri].days[i].icon =
              data.daypart[0].iconCode[dpi];
            golfData.resortForecast[ri].days[i].low = data.temperatureMin[ii];
            golfData.resortForecast[ri].days[i].windspeed =
              data.daypart[0].windSpeed[dpi];
          }
          //console.log(golf.resortForecast[ri])
          //console.log("golf resorts forecast " + ri + " grabbed")
        } catch (error) {
          golfData.resortForecast[ri].cityname = golf.resorts[ri].displayname;
          golfData.resortForecast[ri].noReport = true;
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
            golfData.resortForecast[ri].days[i].cond = "";
            golfData.resortForecast[ri].days[i].dayname = "";
            golfData.resortForecast[ri].days[i].high = "";
            golfData.resortForecast[ri].days[i].icon = 44;
            golfData.resortForecast[ri].days[i].low = "";
            golfData.resortForecast[ri].days[i].windspeed = "";
          }
          //console.log(golf.resortForecast[ri])
          //console.log("golf resorts forecast " + ri + " grab failed")
          fail = true;
          errmsg = `Error processing golf resort ${ri} data: ${error}`;
        }
      }).fail(function (xhr, status, error) {
        golfData.resortForecast[ri].cityname = golf.resorts[ri].displayname;
        golfData.resortForecast[ri].noReport = true;
        for (let i = 0; i < golf.resortForecast[ri].days.length; i++) {
          golfData.resortForecast[ri].days[i].cond = "";
          golfData.resortForecast[ri].days[i].dayname = "";
          golfData.resortForecast[ri].days[i].high = "";
          golfData.coursresortForecasteForecast[ri].days[i].icon = "";
          golfData.resortForecast[ri].days[i].low = "";
          golfData.resortForecast[ri].days[i].windspeed = "";
        }
        //console.log(golf.resortForecast[ri])
        //console.log("golf resorts forecast " + ri + " grab failed")
        fail = true;
        errmsg = `Error grabbing golf resort ${ri} data: ${error}`;
      });
    });
    //}
    return { fail: fail, msg: errmsg, data: golfData.resortForecast };
  }

  function grabHealthCurrentData(lat, lon, key, name) {
    let fail = false;
    let errmsg = "";
    let uvIndex = {};
    uvIndex.cityname = name;
    $.getJSON(
      "https://api.weather.com/v2/indices/uv/current?geocode=" +
        lat +
        "," +
        lon +
        "&language=en-US&format=json&apiKey=" +
        key,
      function (data) {
        try {
          uvIndex.current.uv = data.uvIndexCurrent.uvIndex;
          uvIndex.current.word = data.uvIndexCurrent.uvDesc;
        } catch (error) {
          uvIndex.current.uv = "noreport";
          uvIndex.current.word = "";
          fail = true;
          errmsg = `Failed to process UV Index data: ${error}`;
        }
      }
    ).fail(function (xhr, status, error) {
      uvIndex.current.uv = "noreport";
      uvIndex.current.word = "";
      fail = true;
      errmsg = `Failed to process UV Index data: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: uvIndex };
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
  function getHealth24HrData(lat, lon, key) {
    let fail = false;
    let errmsg = false;
    let uvIndex = {};
    $.getJSON(
      "https://api.weather.com/v2/indices/uv/hourly/24hour?geocode=" +
        lat +
        "," +
        lon +
        "&language=en-US&format=json&apiKey=" +
        key,
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
            fail = true;
            errmsg = `Failed to process UV Index (24HR) data: ${error}`;
          }
        }
      }
    ).fail(function (xhr, status, error) {
      for (let i = 0; i < 3; i++) {
        uvIndex.forecast[i].uv = "noreport";
        uvIndex.forecast[i].word = "";
        uvIndex.forecast[i].time = "";
        uvIndex.forecast[i].day = "";
        fail = true;
        errmsg = `Failed to grab UV Index (24HR) data: ${error}`;
      }
    });
    return { fail: fail, msg: errmsg, data: uvIndex.forecast };
  }

  function grabEXCurrentConditions(lat, lon, key, units, name) {
    let fail = false;
    let errmsg = "";
    let currentConditions = {};
    let url =
      "https://api.weather.com/v3/wx/observations/current?geocode=" +
      lat +
      "," +
      lon +
      "&units=" +
      units +
      "&language=en-US&format=json&apiKey=" +
      key;
    $.getJSON(url, function (data) {
      try {
        currentConditions.cityname = name;
        currentConditions.cond = data.wxPhraseLong;
        currentConditions.gusts =
          data.windGust != null || data.windGust != undefined
            ? data.windGust +
              (units == "m" ? " km/h" : units == "s" ? " m/s" : " mph")
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
        fail = true;
        errmsg = `Current Conditions (Extra Loc) data failed to process: ${error}`;
      }
    }).fail(function (xhr, status, error) {
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
      fail = true;
      errmsg = `Current Conditions (Extra Loc) data failed to grab: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: currentConditions };
  }

  function grabEXDayDesc(lat, lon, units, key, name) {
    let fail = false;
    let errmsg = "";
    let dayDesc = {};
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
      } catch (error) {
        dayDesc.cityname = name;
        dayDesc.noReport = true;
        for (let i = 0; i < dayDesc.times.length; i++, ii++) {
          dayDesc.times[i].timetitle = "";
          dayDesc.times[i].forecast = "";
        }
        fail = true;
        errmsg = `DayDesc (Extra Loc) data failed to process: ${error}`;
      }
    }).fail(function (xhr, status, error) {
      dayDesc.cityname = name;
      dayDesc.noReport = true;
      for (let i = 0; i < dayDesc.times.length; i++) {
        dayDesc.times[i].timetitle = "";
        dayDesc.times[i].forecast = "";
      }
      fail = true;
      errmsg = `DayDesc (Extra Loc) data failed to grab: ${error}`;
    });
    return { fail: fail, msg: errmsg, data: dayDesc };
  }

  function grabEXExtended(lat, lon, units, key, name) {
    let fail = false;
    let errmsg = "";
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
        fail = true;
        errmsg = `Failed to process Extended Forecast (Extra Loc) data: ${error}`;
      }
    }).fail(function (xhr, status, error) {
      extendedForecast.cityname = name;
      extendedForecast.noReport = true;
      for (let i = 0; i < extraLocal.extendedForecast.days.length; i++) {
        extendedForecast.days[i].cond = "";
        extendedForecast.days[i].dayname = "";
        extendedForecast.days[i].high = "";
        extendedForecast.days[i].icon = "";
        extendedForecast.days[i].low = "";
        extendedForecast.days[i].windspeed = "";
      }
      fail = true;
      errmsg = `Failed to grab Extended Forecast (Extra Loc) data: ${error}`;
    });
    return extendedForecast;
  }

  // React to a message from Data Driver.
  onmessage = (event) => {
    let sentdata = event.data;
    let type = sentdata.type;
    let attributes = sentdata.attributes;
    let data = null;
    let message = "";
    let fail = false;
    let func = null;

    if (type == "mainCC") {
      try {
        func = grabCurrentConditions(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.name,
          attributes.key,
          attributes.data
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "nearCC") {
      try {
        func = grabNearbyConditions(
          attributes.cities,
          attributes.unit,
          attributes.key
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "dayDesc") {
      try {
        func = grabDayDesc(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.key,
          attributes.name,
          attributes.data
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "exFcst") {
      try {
        func = grabExtended(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.key,
          attributes.name,
          attributes.data
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "almanac") {
      try {
        func = grabAlmanac(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.key,
          attributes.data
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "moons") {
      try {
        func = grabMoons(attributes.data);
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "warnings") {
      try {
        func = getWarnings(
          attributes.lat,
          attributes.lon,
          attributes.key,
          attributes.data
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "airportdelays") {
      try {
        func = grabAirportDelays(attributes.data);
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "airportcond") {
      try {
        func = grabAPConditions(attributes.data);
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "natairport") {
      try {
        func = grabNationalAP(attributes.data);
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "mainCCes") {
      try {
        func = grabESCurrentConditions(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.key,
          attributes.name,
          attributes.data
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "nearCCes") {
      try {
        func = grabESCurrentConditions(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.key,
          attributes.name,
          attributes.data
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "exFcstES") {
      try {
        func = grabESExtended(
          attributes.lat,
          attributes.lon,
          attributes.units,
          attributes.key,
          attributes.name
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "almanacES") {
      try {
        func = grabESAlmanac(
          attributes.lat,
          attributes.lon,
          attributes.key,
          attributes.unit
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "moonsES") {
      try {
        func = grabESMoons();
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "courses") {
      try {
        func = grabCoursesData(
          attributes.data,
          attributes.unit,
          attributes.key
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "resorts") {
      try {
        func = grabResortsData(
          attributes.data,
          attributes.unit,
          attributes.key
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "healthCur") {
      try {
        func = grabHealthCurrentData(
          attributes.lat,
          attributes.lon,
          attributes.key,
          attributes.name
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "health24hr") {
      try {
        func = getHealth24HrData(
          attributes.lat,
          attributes.lon,
          attributes.key
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "exCC") {
      try {
        func = grabEXCurrentConditions(
          attributes.lat,
          attributes.lon,
          attributes.key,
          attributes.unit,
          attributes.name
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "exDayDesc") {
      try {
        func = grabEXDayDesc(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.key,
          attributes.name
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    } else if (type == "exExFcst") {
      try {
        func = grabEXExtended(
          attributes.lat,
          attributes.lon,
          attributes.unit,
          attributes.key
        );
      } catch (error) {
        fail = true;
        message = error;
      }
    }

    // generate some magic

    if (fail != true) {
      data = func.data;
      fail = func.fail;
      message = func.msg;
    }

    postMessage({ fail: fail, msg: message, data: data });
  };
} else {
  console.log(
    "THIS IS SUPPOSED TO BE USED AS A WEB WORKER, NOT AS A SCRIPT! - PicelBoi"
  );
}
