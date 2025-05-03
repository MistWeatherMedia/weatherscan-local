var weatherData = {
  currentConditions: {
    noReport:false, cityname:"", humidity:"", pressure:"", wind:"", windspeed:"", gusts:"", icon:"", cond:"", temp:""
  }, nearbyCities: {
    cities: [],
  }, dayDesc: {
    noReport:false,
    cityname:"",
    times: [
      {timetitle:"",forecast:""},
      {timetitle:"",forecast:""},
      {timetitle:"",forecast:""},
    ],
  }, extendedForecast: {
    noReport:false,
    cityname:"",
    days: [
      {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
      {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
      {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
      {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
      {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
    ],
  }, almanac: {
    noReport:false,today:"",tomorrow:"",sunrisetoday:"",sunrisetomorow:"",sunsettoday:"",sunsettomorrow:"",moonphases:[
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
    ],
  }, alerts: {warnings:[]},
  radarUnavailable: false,
  extraLocal: {
    currentConditions: {
      noReport:false, cityname:"", humidity:"", pressure:"", wind:"", windspeed:"", gusts:"", icon:"", cond:"", temp:""
    },
    dayDesc: {
      noReport:false,
      cityname:"",
      times: [
        {timetitle:"",forecast:""},
        {timetitle:"",forecast:""},
        {timetitle:"",forecast:""},
      ],
    },
    extendedForecast: {
      noReport:false,
      cityname:"",
      days: [
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
      ],
    },
  },
  airportConditions: {
    airports:[],
  },
  nationalAirports: {
    airports:[
      {airportname:"Los Angeles Intl.",iataCode:"LAX",lat:"33.9422",lon:"-118.4036",temp:"",icon:"",windspeed:"",delay:""},
      {airportname:"Denver Intl.",iataCode:"DEN",lat:"39.8494",lon:"-104.6729",temp:"",icon:"",windspeed:"",delay:""},
      {airportname:"Dallas/Ft. Worth",iataCode:"DFW",lat:"32.8990",lon:"-97.0336",temp:"",icon:"",windspeed:"",delay:""},
      {airportname:"Chicago/O'Hare",iataCode:"ORD",lat:"41.9803",lon:"-87.9090",temp:"",icon:"",windspeed:"",delay:""},
      {airportname:"Atlanta Intl.",iataCode:"ATL",lat:"33.6324",lon:"-84.4333",temp:"",icon:"",windspeed:"",delay:""},
      {airportname:"New York/JFK",iataCode:"JFK",lat:"40.6446",lon:"-73.7797",temp:"",icon:"",windspeed:"",delay:""},
      {airportname:"San Francisco \nIntl.",iataCode:"SFO",lat:"37.6191",lon:"-122.3816",temp:"",icon:"",windspeed:"",delay:""},
      {airportname:"Sea-Tac Intl.",iataCode:"SEA",lat:"47.4484",lon:"-122.3086",temp:"",icon:"",windspeed:"",delay:""},
    ],
  },
  airportDelayList: [],
  spanish: {
    currentConditions: {
      noReport:false, cityname:"", humidity:"", pressure:"", wind:"", windspeed:"", gusts:"", icon:"", cond:"", temp:""
    }, nearbyCities: {
      cities: [],
    }, extendedForecast: {
      noReport:false,
      cityname:"",
      days: [
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
      ],
    }, almanac: {
      noReport:false,today:"",tomorrow:"",sunrisetoday:"",sunrisetomorow:"",sunsettoday:"",sunsettomorrow:"",moonphases:[
        {moon:"blank",date:""},
        {moon:"blank",date:""},
        {moon:"blank",date:""},
        {moon:"blank",date:""},
        {moon:"blank",date:""},
        {moon:"blank",date:""},
        {moon:"blank",date:""},
        {moon:"blank",date:""},
      ],
    }
  },
  golf: {
    courseForecast:[
      {
        noReport:false,
        cityname:"",
        days: [
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        ],
      },
      {
        noReport:false,
        cityname:"",
        days: [
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        ],
      },
      {
        noReport:false,
        cityname:"",
        days: [
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        ],
      },
    ],
    resortForecast:[
      {
        noReport:false,
        cityname:"",
        days: [
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        ],
      },
      {
        noReport:false,
        cityname:"",
        days: [
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        ],
      },
      {
        noReport:false,
        cityname:"",
        days: [
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
          {dayname:"",icon:"",cond:"",high:"",low:"",windspeed:""},
        ],
      },
    ],
  },
  uvIndex:{
    noReport: false,
    cityname: "",
    current:{uv:"", word:""},
    forecast:[
      {day:"", time:"", uv:"", word:""},
      {day:"", time:"", uv:"", word:""},
      {day:"", time:"", uv:"", word:""},
    ],
  }
}
function grabData() {
  //console.log("grabbed data")
  function grabCurrentConditions() {
    var url = "https://api.weather.com/v3/wx/observations/current?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&units=" + locationConfig.units +"&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      try {
        weatherData.currentConditions.cityname = locationConfig.mainCity.displayname
        weatherData.currentConditions.cond = data.wxPhraseLong
        weatherData.currentConditions.gusts = ((data.windGust != null || data.windGust != undefined) ? data.windGust + ((locationConfig.units == "e") ? " mph" : "km/h") : "None")
        weatherData.currentConditions.humidity = data.relativeHumidity + "%"
        weatherData.currentConditions.icon = data.iconCode
        weatherData.currentConditions.pressure = data.pressureAltimeter.toFixed(2)
        weatherData.currentConditions.temp = data.temperature
        weatherData.currentConditions.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
        weatherData.currentConditions.windspeed = data.windSpeed
        weatherData.currentConditions.noReport = false
      } catch (error) {
        weatherData.currentConditions.cityname = locationConfig.mainCity.displayname
        weatherData.currentConditions.cond = ""
        weatherData.currentConditions.gusts = ""
        weatherData.currentConditions.humidity = ""
        weatherData.currentConditions.icon = 44
        weatherData.currentConditions.pressure = ""
        weatherData.currentConditions.temp = ""
        weatherData.currentConditions.wind = ""
        weatherData.currentConditions.windspeed = ""
        weatherData.currentConditions.noReport = true
      }
    }).fail(function() {
      weatherData.currentConditions.cityname = locationConfig.mainCity.displayname
      weatherData.currentConditions.cond = ""
      weatherData.currentConditions.gusts = ""
      weatherData.currentConditions.humidity = ""
      weatherData.currentConditions.icon = 44
      weatherData.currentConditions.pressure = ""
      weatherData.currentConditions.temp = ""
      weatherData.currentConditions.wind = ""
      weatherData.currentConditions.windspeed = ""
      weatherData.currentConditions.noReport = true
    })
  }
  grabCurrentConditions();
  function grabNearbyConditions() {
    weatherData.nearbyCities.cities = []
    var url = "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes="
    for (var li = 0; li < locationConfig.eightCities.citiesAmount; li++) {
      url += locationConfig.eightCities.cities[li].lat + "," + locationConfig.eightCities.cities[li].lon + ";"
    }
    url += "&language=en-US&units=" + locationConfig.units + "&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      data.forEach((ajaxedLoc, i) => {
        var nearbyCitiesObj = {noReport:false,cityname:"", temp:"", icon:"", wind:"", windspeed:""};
        try {
        if (ajaxedLoc != undefined || ajaxedLoc != null || ajaxedLoc != "" || ajaxedLoc != " ") {
          nearbyCitiesObj.noReport = false
          nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
          nearbyCitiesObj.icon = ajaxedLoc["v3-wx-observations-current"].iconCode
          nearbyCitiesObj.temp = ajaxedLoc["v3-wx-observations-current"].temperature
          nearbyCitiesObj.wind = ((ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal == "CALM" || ajaxedLoc["v3-wx-observations-current"].windSpeed == 0) ? "Calm" : ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal + " " + ajaxedLoc["v3-wx-observations-current"].windSpeed)
          nearbyCitiesObj.windspeed = ajaxedLoc["v3-wx-observations-current"].windSpeed
          weatherData.nearbyCities.cities.push(nearbyCitiesObj)
        } else {
          nearbyCitiesObj.noReport = true
          nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
          nearbyCitiesObj.icon = 44
          nearbyCitiesObj.temp = ""
          nearbyCitiesObj.wind = ""
          nearbyCitiesObj.windspeed = ""
          weatherData.nearbyCities.cities.push(nearbyCitiesObj)
        }
        } catch (error) {
          nearbyCitiesObj.noReport = true
          nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
          nearbyCitiesObj.icon = 44
          nearbyCitiesObj.temp = ""
          nearbyCitiesObj.wind = ""
          nearbyCitiesObj.windspeed = ""
          weatherData.nearbyCities.cities.push(nearbyCitiesObj)
        }
      })
      //console.log(weatherData.nearbyCities.cities)
     // console.log("nearby conditions grabbed")
    }).fail(function(error) {
      for (var i; i < locationConfig.eightCities.citiesAmount; i++) {
        var nearbyCitiesObj = {noReport:false,cityname:"", temp:"", icon:"", wind:"", windspeed:""};
        nearbyCitiesObj.noReport = true
        nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
        nearbyCitiesObj.icon = 44
        nearbyCitiesObj.temp = ""
        nearbyCitiesObj.wind = ""
        nearbyCitiesObj.windspeed = ""
        weatherData.nearbyCities.cities.push(nearbyCitiesObj)
      }
      //console.log(weatherData.nearbyCities.cities)
      //console.log("nearby conditions grab failed")
      //console.log(error)
    })
  }
  grabNearbyConditions();
  function grabDayDesc() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&format=json&units=" + locationConfig.units + "&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var ii = 0
      try {
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
        }
        weatherData.dayDesc.cityname = locationConfig.mainCity.displayname
        weatherData.dayDesc.noReport = false
        for (var i = 0; i < weatherData.dayDesc.times.length; i++, ii++) {
          weatherData.dayDesc.times[i].timetitle = data.daypart[0].daypartName[ii]
          weatherData.dayDesc.times[i].forecast = data.daypart[0].narrative[ii]
        }
        //console.log(weatherData.dayDesc)
        //console.log("day descriptions grabbed")
      } catch (error) {
        weatherData.dayDesc.cityname = locationConfig.mainCity.displayname
        weatherData.dayDesc.noReport = true
        for (var i = 0; i < weatherData.dayDesc.times.length; i++, ii++) {
          weatherData.dayDesc.times[i].timetitle = ""
          weatherData.dayDesc.times[i].forecast = ""
        }
        //console.log(weatherData.dayDesc)
        //console.log("day descriptions grabs failed")
      }
    }).fail(function() {
      weatherData.dayDesc.cityname = locationConfig.mainCity.displayname
      weatherData.dayDesc.noReport = true
      for (var i = 0; i < weatherData.dayDesc.times.length; i++) {
        weatherData.dayDesc.times[i].timetitle = ""
        weatherData.dayDesc.times[i].forecast = ""
      }
      //console.log(weatherData.dayDesc)
      //console.log("day description grabs failed")
    })
  }
  grabDayDesc()
  function grabExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&format=json&units=" + locationConfig.units + "&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var daysDivs = ['one', "two", "three", "four", "five"]
      try {
        weatherData.extendedForecast.cityname = locationConfig.mainCity.displayname
        weatherData.extendedForecast.noReport = false
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.extendedForecast.days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.extendedForecast.days[i].cond = data.daypart[0].wxPhraseLong[dpi].replaceAll("/", "/ ").replaceAll("Thunderstorms", "T'storms").replaceAll("Scattered", "Sct'd")
          weatherData.extendedForecast.days[i].dayname = data.dayOfWeek[ii].substring(0,3).toUpperCase()
          weatherData.extendedForecast.days[i].high = data.temperatureMax[ii]
          weatherData.extendedForecast.days[i].icon = data.daypart[0].iconCode[dpi]
          weatherData.extendedForecast.days[i].low = data.temperatureMin[ii]
          weatherData.extendedForecast.days[i].windspeed = data.daypart[0].windSpeed[dpi]
        }
        //console.log(weatherData.extendedForecast)
        //console.log("extended forecast grabbed")
      } catch (error) {
        weatherData.extendedForecast.cityname = locationConfig.mainCity.displayname
        weatherData.extendedForecast.noReport = true
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.extendedForecast.days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.extendedForecast.days[i].cond = ""
          weatherData.extendedForecast.days[i].dayname = ""
          weatherData.extendedForecast.days[i].high = ""
          weatherData.extendedForecast.days[i].icon = 44
          weatherData.extendedForecast.days[i].low = ""
          weatherData.extendedForecast.days[i].windspeed = ""
        }
        //console.log(weatherData.extendedForecast)
        //console.log("extended forecast grab failed")
      }
    }).fail(function() {
      weatherData.extendedForecast.cityname = locationConfig.mainCity.displayname
      weatherData.extendedForecast.noReport = true
      for (var i = 0; i < weatherData.extendedForecast.days.length; i++) {
        weatherData.extendedForecast.days[i].cond = ""
        weatherData.extendedForecast.days[i].dayname = ""
        weatherData.extendedForecast.days[i].high = ""
        weatherData.extendedForecast.days[i].icon = ""
        weatherData.extendedForecast.days[i].low = ""
        weatherData.extendedForecast.days[i].windspeed = ""
      }
      //console.log(weatherData.extendedForecast)
      //console.log("extended forecast grab failed")
    })
  }
  grabExtended()
  function grabAlmanac() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&format=json&units=" + locationConfig.units + "&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var ii = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
      }
      weatherData.almanac.noReport = false
      weatherData.almanac.sunrisetoday = new Date(data.sunriseTimeLocal[ii])
      weatherData.almanac.sunrisetoday = weatherData.almanac.sunrisetoday.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.almanac.sunrisetomorow = new Date(data.sunriseTimeLocal[ii+1])
      weatherData.almanac.sunrisetomorow = weatherData.almanac.sunrisetomorow.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.almanac.sunsettoday = new Date(data.sunsetTimeLocal[ii])
      weatherData.almanac.sunsettoday = weatherData.almanac.sunsettoday.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.almanac.sunsettomorrow = new Date(data.sunsetTimeLocal[ii+1])
      weatherData.almanac.sunsettomorrow = weatherData.almanac.sunsettomorrow.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.almanac.today = data.dayOfWeek[ii].substring(0,3).toUpperCase()
      weatherData.almanac.tomorrow = data.dayOfWeek[ii+1].substring(0,3).toUpperCase()
      //console.log(weatherData.almanac)
      //console.log("almanac grabbed")
    }).fail(function() {
      weatherData.almanac.noReport = true
      weatherData.almanac.sunrisetoday = ""
      weatherData.almanac.sunrisetomorow = ""
      weatherData.almanac.sunsettoday = ""
      weatherData.almanac.sunsettomorrow = ""
      weatherData.almanac.today = ""
      weatherData.almanac.tomorrow = ""
      //console.log(weatherData.almanac)
      //console.log("almanac grab fail")
    })
  }
  grabAlmanac()
  function grabMoons() {
    var ii = 0
    try {
      $.getJSON(`https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format(new Date(),"M")}&year=${dateFns.format(new Date(),"YYYY")}`, function(data) {
        for (phase in data.phase) {
          if (data.phase[phase].isPhaseLimit != false) {
            if(phase < new Date().getDate()){continue}
            weatherData.almanac.moonphases[ii].moon = {"New Moon": "New", "First quarter": "First", "Full moon": "Full", "Last quarter": "Last"}[data.phase[phase].phaseName]
            weatherData.almanac.moonphases[ii].date = String(data.monthName).slice(0,3) + " " + phase
            weatherData.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.almanac.moonphases[ii].date.replace(' 1', ' 01').replace(' 2', ' 02').replace(' 3', ' 03').replace(' 4', ' 04').replace(' 5', ' 05').replace(' 6', ' 06').replace(' 7', ' 07').replace(' 8', ' 08').replace(' 9', ' 09') : weatherData.almanac.moonphases[ii].date)
            ii += 1;
          }
        }
        //console.log("first moons grabbed")
      }).fail(function() {
        for (var i = 0; i < 4; i++) {
          weatherData.almanac.moonphases[i].date = ""
          weatherData.almanac.moonphases[i].moon = "blank"
        }
        //console.log("first moon grab failed")
      })
      setTimeout(() => {
        $.getJSON(`https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format((dateFns.addMonths(new Date(),1)),"M")}&year=${dateFns.format(dateFns.addMonths(new Date(),1),"YYYY")}`, function(data) {
          for (phase in data.phase) {
            if (data.phase[phase].isPhaseLimit != false) {
              weatherData.almanac.moonphases[ii].moon = {"New Moon": "New", "First quarter": "First", "Full moon": "Full", "Last quarter": "Last"}[data.phase[phase].phaseName]
              weatherData.almanac.moonphases[ii].date = String(data.monthName).slice(0,3) + " " + phase
              weatherData.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.almanac.moonphases[ii].date.replace(' 1', ' 01').replace(' 2', ' 02').replace(' 3', ' 03').replace(' 4', ' 04').replace(' 5', ' 05').replace(' 6', ' 06').replace(' 7', ' 07').replace(' 8', ' 08').replace(' 9', ' 09') : weatherData.almanac.moonphases[ii].date)
              ii += 1;
            }
          }
          //console.log("second moons grabbed")
        }).fail(function() {
          for (var i = 0; i < 4; i++) {
            if (weatherData.almanac.moonphases[i].date != "")
            weatherData.almanac.moonphases[i].date = ""
            weatherData.almanac.moonphases[i].moon = "blank"
          }
          //console.log("second moon grab failed")
        })
        //console.log(weatherData.almanac.moonphases)
      }, 500);
    } catch (error) {
      for (var i = 0; i < 8; i++) {
        weatherData.almanac.moonphases[i].date = ""
        weatherData.almanac.moonphases[i].moon = "blank"
      }
      //console.log(weatherData.almanac.moonphases)
      //console.log("all moon grabs failed")
    }
  }
  grabMoons()
  function getWarnings() {
    var url = "https://api.weather.com/v3/alerts/headlines?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&format=json&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      weatherData.alerts = {warnings:[]}
      try {
        if (data != undefined) {
          var warnings = []
          //weatherData.alerts.alertsAmount = data.alerts.length
          for (var i = 0; i < data.alerts.length; i++) {
            warnings.push({alertNum: i+1, key: data.alerts[i].detailKey, warningtitle:"", warningdesc:"", severity:"", alertType:"", significance:"", headline:""})
            eachAlert(i)
          }
          
          function eachAlert(i) {
            $.getJSON("https://api.weather.com/v3/alerts/detail?alertId=" + warnings[i].key + "&format=json&language=en-US&apiKey=" + api_key, function(data) {
              warnings[i].warningtitle = data.alertDetail.eventDescription
              warnings[i].warningdesc = data.alertDetail.texts[0].description
              warnings[i].severity = sevalertNum(data.alertDetail.eventDescription)
              warnings[i].significance = data.alertDetail.significance
              warnings[i].alertType = data.alertDetail.messageType.replace("Cancel","Cancellation").replace("New","")
              warnings[i].headline = data.alertDetail.headlineText + "\n"
            })
            weatherData.alerts.warnings.push(warnings[i])
            //use this to test the sort
            // var warning1 = {alertNum: 2, key: data.alerts[0].detailKey, warningtitle:"Tornado Warning", warningdesc:"FAKE - wee woo wee woo", severity:sevalertNum("Tornado Warning"), alertType:"", significance:"W", headline:"FUCKED"}
            // var warning2 = {alertNum: 2, key: data.alerts[0].detailKey, warningtitle:"Severe Thunderstorm Warning", warningdesc:"FAKE - wee woo wee woo", severity:sevalertNum("Severe Thunderstorm Warning"), alertType:"", significance:"W", headline:"FUCKED"}
            // weatherData.alerts.warnings.push(warning1);
            // weatherData.alerts.warnings.push(warning2);
            weatherData.alerts.warnings.sort((a,b) => b.severity-a.severity)
            for (ii = 0; ii < data.alerts.length-1; ii++) {
              if (warnings[i].warningtitle == weatherData.alerts.warnings[ii]) {
                weatherData.alerts.warnings.pop()
                continue
              }
            }
            weatherData.alerts.alertsAmount = weatherData.alerts.warnings.length
          }
          //console.log(weatherData.alerts)
          //console.log("weather alerts found")
          //weatherData.alerts.warnings.sort(function(a, b){return a.severity - b.severity});
        } else {
          weatherData.alerts = {warnings:[]}
          weatherData.alerts.alertsAmount = 0
          //console.log(weatherData.alerts)
          //console.log("weather alerts grab failed or no alerts detected")
        }
      } catch (error) {
        weatherData.alerts = {warnings:[]}
        weatherData.alerts.alertsAmount = 0
        //console.log(weatherData.alerts)
        //console.log("weather alerts grab failed or no alerts detected")
      }
    }).fail(function() {
      weatherData.alerts = {warnings:[]}
      weatherData.alerts.alertsAmount = 0
      //console.log(weatherData.alerts)
      //console.log("weather alerts grab failed or no alerts detected")
    })
  }
  getWarnings()
}
function grabAirportData() {
  function grabAirportDelays() {
    weatherData.airportDelayList = []
    $.getJSON("/airports", function(eventdata) {
      for (const airportevent of eventdata) {
        var delay = {delayTime:"", iataCode:""}
        if (airportevent.airportClosure) {
          delay.delayTime = differenceUTC(airportevent.airportClosure.endTime)
          delay.iataCode = airportevent.airportId
          weatherData.airportDelayList.push(delay)
        } else if (airportevent.arrivalDelay) {
          delay.delayTime = formatMinutes(airportevent.arrivalDelay.averageDelay)
          delay.iataCode = airportevent.airportId
          weatherData.airportDelayList.push(delay)
        } else if (airportevent.departureDelay) {
          delay.delayTime = formatMinutes(airportevent.departureDelay.averageDelay)
          delay.iataCode = airportevent.airportId
          weatherData.airportDelayList.push(delay)
        } else if (airportevent.groundDelay) {
          delay.delayTime = formatMinutes(airportevent.groundDelay.avgDelay)
          delay.iataCode = airportevent.airportId
          weatherData.airportDelayList.push(delay)
        } else if (airportevent.groundStop) {
          delay.delayTime = differenceUTC(airportevent.groundStop.expTime)//NOT DEFINITIVE
          delay.iataCode = airportevent.airportId
          weatherData.airportDelayList.push(delay)
        } else if (airportevent.deicing) {
          delay.delayTime = differenceUTC(airportevent.deicing.expTime)
          delay.iataCode = airportevent.airportId
          weatherData.airportDelayList.push(delay)
        } else {
          delay.delayTime = "No Delay"
          delay.iataCode = airportevent.airportId
          weatherData.airportDelayList.push(delay)
        }
      }
      //console.log("airport delays grabbed")
    }).fail(function() {
      for (var i = 0; i < locationConfig.airport.airports.airportsAmount; i++) {
        var delay = {delayTime:"", iataCode:""}
        delay.delayTime = "No Report"
        delay.iataCode = locationConfig.airport.airports[i].iataCode
        weatherData.airportDelayList.push(delay)
      }
      //console.log("airport delays grab failed")
    })
    //console.log(weatherData.airportDelayList)
  }
  grabAirportDelays()
  function grabAPConditions() {
    weatherData.airportConditions.airports = []
    var url = "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes="
    for (var li = 0; li < locationConfig.airport.airportsAmount; li++) {
      url += locationConfig.airport.airports[li].lat + "," + locationConfig.airport.airports[li].lon + ";"
    }
    url += "&language=en-US&units=" + locationConfig.units + "&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      data.forEach((ajaxedLoc, i) => {
        var airportsObj = {noReport:false,airportName:"",iataCode:"",temp:"",icon:"",condition:"",humidity:"",pressure:"",wind:"",gusts:"",windspeed:"",delay:""}
        try {
          if (ajaxedLoc != undefined || ajaxedLoc != null || ajaxedLoc != "" || ajaxedLoc != " ") {
            airportsObj.noReport = false
            airportsObj.airportName = locationConfig.airport.airports[i].displayname
            airportsObj.iataCode = locationConfig.airport.airports[i].iataCode
            airportsObj.condition = ajaxedLoc["v3-wx-observations-current"].wxPhraseLong
            airportsObj.icon = ajaxedLoc["v3-wx-observations-current"].iconCode
            airportsObj.gusts = ((ajaxedLoc["v3-wx-observations-current"].windGust != null || ajaxedLoc["v3-wx-observations-current"].windGust != undefined) ? ajaxedLoc["v3-wx-observations-current"].windGust + ((locationConfig.units == "e") ? " mph" : "km/h") : "None")
            airportsObj.humidity = ajaxedLoc["v3-wx-observations-current"].relativeHumidity + "%"
            airportsObj.pressure = ajaxedLoc["v3-wx-observations-current"].pressureAltimeter
            airportsObj.temp = ajaxedLoc["v3-wx-observations-current"].temperature
            airportsObj.wind = ((ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal == "CALM" || ajaxedLoc["v3-wx-observations-current"].windSpeed == 0) ? "Calm" : ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal + " " + ajaxedLoc["v3-wx-observations-current"].windSpeed)
            airportsObj.windspeed = ajaxedLoc["v3-wx-observations-current"].windSpeed
            for (const delay of weatherData.airportDelayList) {
              if (delay.iataCode == airportsObj.iataCode) {
                airportsObj.delay = delay.delayTime
              }
            }
            if (airportsObj.delay == "") {
              airportsObj.delay = "No Delay"
            }
            //console.log("airport conditions grabbed")
            weatherData.airportConditions.airports.push(airportsObj)
          } else {
            airportsObj.noReport = true
            airportsObj.airportName = locationConfig.airport.airports[i].displayname
            airportsObj.condition = ""
            airportsObj.icon = 44
            airportsObj.gusts = ""
            airportsObj.humidity = ""
            airportsObj.pressure = ""
            airportsObj.temp = ""
            airportsObj.wind = ""
            airportsObj.windspeed = ""
            airportsObj.delay = "No Report"
            //console.log("airport conditions grab failed")
            weatherData.airportConditions.airports.push(airportsObj)
          }
        } catch (error) {
          airportsObj.noReport = true
          airportsObj.airportName = locationConfig.airport.airports[i].displayname
          airportsObj.condition = ""
          airportsObj.icon = 44
          airportsObj.gusts = ""
          airportsObj.humidity = ""
          airportsObj.pressure = ""
          airportsObj.temp = ""
          airportsObj.wind = ""
          airportsObj.windspeed = ""
          airportsObj.delay = "No Report"
          //console.log("airport conditions grab failed")
          weatherData.airportConditions.airports.push(airportsObj)
        }
      })
    }).fail(function () {
      for (var i = 0; i < locationConfig.airport.airportsAmount; i++) {
        var airportsObj = {noReport:false,airportName:"",temp:"",icon:"",condition:"",humidity:"",pressure:"",wind:"",gusts:"",windspeed:""}
        airportsObj.noReport = true
        airportsObj.airportName = locationConfig.airport.airports[i].displayname
        airportsObj.condition = ""
        airportsObj.icon = 44
        airportsObj.gusts = ""
        airportsObj.humidity = ""
        airportsObj.pressure = ""
        airportsObj.temp = ""
        airportsObj.wind = ""
        airportsObj.windspeed = ""
        airportsObj.delay = "No Report"
        //console.log("airport conditions grab failed")
        weatherData.airportConditions.airports.push(airportsObj)
      }
    })
    //console.log(weatherData.airportConditions)
  }
  function grabNationalAP() {
    var url = "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes="
    for (var li = 0; li < weatherData.nationalAirports.airports.length; li++) {
      url += weatherData.nationalAirports.airports[li].lat + "," + weatherData.nationalAirports.airports[li].lon + ";"
    }
    url += "&language=en-US&units=" + locationConfig.units + "&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      data.forEach((ajaxedLoc, i) => {
        weatherData.nationalAirports.airports[i].delay = ""
        try {
          if (ajaxedLoc != undefined || ajaxedLoc != null || ajaxedLoc != "" || ajaxedLoc != " ") {
            weatherData.nationalAirports.airports[i].icon = ajaxedLoc["v3-wx-observations-current"].iconCode
            weatherData.nationalAirports.airports[i].temp = ajaxedLoc["v3-wx-observations-current"].temperature
            weatherData.nationalAirports.airports[i].windspeed = ajaxedLoc["v3-wx-observations-current"].windSpeed
            for (const delay of weatherData.airportDelayList) {
              if (delay.iataCode == weatherData.nationalAirports.airports[i].iataCode) {
                weatherData.nationalAirports.airports[i].delay = delay.delayTime
              }
            }
            if (weatherData.nationalAirports.airports[i].delay == "") {
              weatherData.nationalAirports.airports[i].delay = "No Delay"
            }
            //console.log("national airports grabbed")
          } else {
            weatherData.nationalAirports.airports[i].icon = 44
            weatherData.nationalAirports.airports[i].temp = ""
            weatherData.nationalAirports.airports[i].windspeed = ""
            weatherData.nationalAirports.airports[i].delay = "No Report"
            //console.log("national airports grab failed")
          }
        } catch (error) {
          weatherData.nationalAirports.airports[i].icon = 44
          weatherData.nationalAirports.airports[i].temp = ""
          weatherData.nationalAirports.airports[i].windspeed = ""
          weatherData.nationalAirports.airports[i].delay = "No Report"
          //console.log("national airports grab failed")
        }
      })
    }).fail(function() {
      weatherData.nationalAirports.airports[i].icon = 44
      weatherData.nationalAirports.airports[i].temp = ""
      weatherData.nationalAirports.airports[i].windspeed = ""
      weatherData.nationalAirports.airports[i].delay = "No Report"
      //console.log("national airports grab failed")
    })
    //console.log(weatherData.nationalAirports)
  }
  setTimeout(() => {
    grabAPConditions()
    grabNationalAP()
  }, 1000);
}
function grabSpanishData() {
  //console.log("grabbed data")
  function grabESCurrentConditions() {
    var url = "https://api.weather.com/v3/wx/observations/current?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&units=" + locationConfig.units + "&language=es-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      try {
        weatherData.spanish.currentConditions.cityname = locationConfig.mainCity.displayname
        weatherData.spanish.currentConditions.cond = data.wxPhraseLong
        weatherData.spanish.currentConditions.gusts = ((data.windGust != null || data.windGust != undefined) ? data.windGust + ((locationConfig.units == "e") ? " mph" : "km/h") : "No")
        weatherData.spanish.currentConditions.humidity = data.relativeHumidity + "%"
        weatherData.spanish.currentConditions.icon = data.iconCode
        weatherData.spanish.currentConditions.pressure = data.pressureAltimeter.toFixed(2)
        weatherData.spanish.currentConditions.temp = data.temperature
        weatherData.spanish.currentConditions.wind = ((data.windDirectionCardinal == "CALMA" || data.windSpeed == 0) ? "Calma" : data.windDirectionCardinal + " " + data.windSpeed)
        weatherData.spanish.currentConditions.windspeed = data.windSpeed
        weatherData.spanish.currentConditions.noReport = false
        //console.log(weatherData.spanish.currentConditions)
        //console.log("current conditions grabbed")
      } catch (error) {
        weatherData.spanish.currentConditions.cityname = locationConfig.mainCity.displayname
        weatherData.spanish.currentConditions.cond = ""
        weatherData.spanish.currentConditions.gusts = ""
        weatherData.spanish.currentConditions.humidity = ""
        weatherData.spanish.currentConditions.icon = 44
        weatherData.spanish.currentConditions.pressure = ""
        weatherData.spanish.currentConditions.temp = ""
        weatherData.spanish.currentConditions.wind = ""
        weatherData.spanish.currentConditions.windspeed = ""
        weatherData.spanish.currentConditions.noReport = true
        //console.log(weatherData.spanish.currentConditions)
        //console.log("current conditions grab failed")
      }
    }).fail(function() {
      weatherData.spanish.currentConditions.cityname = locationConfig.mainCity.displayname
      weatherData.spanish.currentConditions.cond = ""
      weatherData.spanish.currentConditions.gusts = ""
      weatherData.spanish.currentConditions.humidity = ""
      weatherData.spanish.currentConditions.icon = 44
      weatherData.spanish.currentConditions.pressure = ""
      weatherData.spanish.currentConditions.temp = ""
      weatherData.spanish.currentConditions.wind = ""
      weatherData.spanish.currentConditions.windspeed = ""
      weatherData.spanish.currentConditions.noReport = true
      //console.log(weatherData.spanish.currentConditions)
      //console.log("current conditions grab failed")
    })
  }
  grabESCurrentConditions();
  function grabESNearbyConditions() {
    weatherData.spanish.nearbyCities.cities = []
    var url = "https://api.weather.com/v3/aggcommon/v3-wx-observations-current?geocodes="
    for (var li = 0; li < locationConfig.eightCities.citiesAmount; li++) {
      url += locationConfig.eightCities.cities[li].lat + "," + locationConfig.eightCities.cities[li].lon + ";"
    }
    url += "&language=es-US&units=" + locationConfig.units + "&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      data.forEach((ajaxedLoc, i) => {
        var nearbyCitiesObj = {noReport:false,cityname:"", temp:"", icon:"", wind:"", windspeed:""};
        try {
        if (ajaxedLoc != undefined || ajaxedLoc != null || ajaxedLoc != "" || ajaxedLoc != " ") {
          nearbyCitiesObj.noReport = false
          nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
          nearbyCitiesObj.icon = ajaxedLoc["v3-wx-observations-current"].iconCode
          nearbyCitiesObj.temp = ajaxedLoc["v3-wx-observations-current"].temperature
          nearbyCitiesObj.wind = ((ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal == "CALMA" || ajaxedLoc["v3-wx-observations-current"].windSpeed == 0) ? "Calma" : ajaxedLoc["v3-wx-observations-current"].windDirectionCardinal + " " + ajaxedLoc["v3-wx-observations-current"].windSpeed)
          nearbyCitiesObj.windspeed = ajaxedLoc["v3-wx-observations-current"].windSpeed
          weatherData.spanish.nearbyCities.cities.push(nearbyCitiesObj)
        } else {
          nearbyCitiesObj.noReport = true
          nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
          nearbyCitiesObj.icon = 44
          nearbyCitiesObj.temp = ""
          nearbyCitiesObj.wind = ""
          nearbyCitiesObj.windspeed = ""
          weatherData.spanish.nearbyCities.cities.push(nearbyCitiesObj)
        }
        } catch (error) {
          nearbyCitiesObj.noReport = true
          nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
          nearbyCitiesObj.icon = 44
          nearbyCitiesObj.temp = ""
          nearbyCitiesObj.wind = ""
          nearbyCitiesObj.windspeed = ""
          weatherData.spanish.nearbyCities.cities.push(nearbyCitiesObj)
        }
      })
      //console.log(weatherData.spanish.nearbyCities.cities)
     // console.log("nearby conditions grabbed")
    }).fail(function(error) {
      for (var i; i < locationConfig.eightCities.citiesAmount; i++) {
        var nearbyCitiesObj = {noReport:false,cityname:"", temp:"", icon:"", wind:"", windspeed:""};
        nearbyCitiesObj.noReport = true
        nearbyCitiesObj.cityname = locationConfig.eightCities.cities[i].displayname
        nearbyCitiesObj.icon = 44
        nearbyCitiesObj.temp = ""
        nearbyCitiesObj.wind = ""
        nearbyCitiesObj.windspeed = ""
        weatherData.spanish.nearbyCities.cities.push(nearbyCitiesObj)
      }
      //console.log(weatherData.spanish.nearbyCities.cities)
      //console.log("nearby conditions grab failed")
      //console.log(error)
    })
  }
  grabESNearbyConditions();
  function grabESExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&format=json&units=" + locationConfig.units + "&language=es-US&apiKey=" + api_key
    //console.log(url)
    $.getJSON(url, function(data) {
      var daysDivs = ['one', "two", "three", "four", "five"]
      try {
        weatherData.spanish.extendedForecast.cityname = locationConfig.mainCity.displayname
        weatherData.spanish.extendedForecast.noReport = false
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.spanish.extendedForecast.days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.spanish.extendedForecast.days[i].cond = data.daypart[0].wxPhraseLong[dpi].replaceAll(" / ", "/").replaceAll("/Viento", "")//.replaceAll("por la mañana", "AM").replaceAll("por la tarde", "PM")
          weatherData.spanish.extendedForecast.days[i].dayname = data.dayOfWeek[ii].substring(0,3).toUpperCase().replace("MIÉ", "MIERC").replace("SÁB", "SAB")
          weatherData.spanish.extendedForecast.days[i].high = data.temperatureMax[ii]
          weatherData.spanish.extendedForecast.days[i].icon = data.daypart[0].iconCode[dpi]
          weatherData.spanish.extendedForecast.days[i].low = data.temperatureMin[ii]
          weatherData.spanish.extendedForecast.days[i].windspeed = data.daypart[0].windSpeed[dpi]
        }
        //console.log(weatherData.spanish.extendedForecast)
        //console.log("extended forecast grabbed")
      } catch (error) {
        weatherData.spanish.extendedForecast.cityname = locationConfig.mainCity.displayname
        weatherData.spanish.extendedForecast.noReport = true
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.spanish.extendedForecast.days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.spanish.extendedForecast.days[i].cond = ""
          weatherData.spanish.extendedForecast.days[i].dayname = ""
          weatherData.spanish.extendedForecast.days[i].high = ""
          weatherData.spanish.extendedForecast.days[i].icon = 44
          weatherData.spanish.extendedForecast.days[i].low = ""
          weatherData.spanish.extendedForecast.days[i].windspeed = ""
        }
        //console.log(weatherData.spanish.extendedForecast)
        //console.log("extended forecast grab failed")
      }
    }).fail(function() {
      weatherData.spanish.extendedForecast.cityname = locationConfig.mainCity.displayname
      weatherData.spanish.extendedForecast.noReport = true
      for (var i = 0; i < weatherData.spanish.extendedForecast.days.length; i++) {
        weatherData.spanish.extendedForecast.days[i].cond = ""
        weatherData.spanish.extendedForecast.days[i].dayname = ""
        weatherData.spanish.extendedForecast.days[i].high = ""
        weatherData.spanish.extendedForecast.days[i].icon = ""
        weatherData.spanish.extendedForecast.days[i].low = ""
        weatherData.spanish.extendedForecast.days[i].windspeed = ""
      }
      //console.log(weatherData.spanish.extendedForecast)
      //console.log("extended forecast grab failed")
    })
  }
  grabESExtended()
  function grabESAlmanac() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&format=json&units=" + locationConfig.units + "&language=es-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var ii = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
      }
      weatherData.spanish.almanac.noReport = false
      weatherData.spanish.almanac.sunrisetoday = new Date(data.sunriseTimeLocal[ii])
      weatherData.spanish.almanac.sunrisetoday = weatherData.spanish.almanac.sunrisetoday.toLocaleTimeString('es-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.spanish.almanac.sunrisetomorow = new Date(data.sunriseTimeLocal[ii+1])
      weatherData.spanish.almanac.sunrisetomorow = weatherData.spanish.almanac.sunrisetomorow.toLocaleTimeString('es-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.spanish.almanac.sunsettoday = new Date(data.sunsetTimeLocal[ii])
      weatherData.spanish.almanac.sunsettoday = weatherData.spanish.almanac.sunsettoday.toLocaleTimeString('es-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.spanish.almanac.sunsettomorrow = new Date(data.sunsetTimeLocal[ii+1])
      weatherData.spanish.almanac.sunsettomorrow = weatherData.spanish.almanac.sunsettomorrow.toLocaleTimeString('es-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase().replaceAll(".", "")
      weatherData.spanish.almanac.today = data.dayOfWeek[ii].substring(0,3).toUpperCase().replace("MIÉ", "MIERC").replace("SÁB", "SAB")
      weatherData.spanish.almanac.tomorrow = data.dayOfWeek[ii+1].substring(0,3).toUpperCase().replace("MIÉ", "MIERC").replace("SÁB", "SAB")
      //console.log(weatherData.spanish.almanac)
      //console.log("almanac grabbed")
    }).fail(function() {
      weatherData.spanish.almanac.noReport = true
      weatherData.spanish.almanac.sunrisetoday = ""
      weatherData.spanish.almanac.sunrisetomorow = ""
      weatherData.spanish.almanac.sunsettoday = ""
      weatherData.spanish.almanac.sunsettomorrow = ""
      weatherData.spanish.almanac.today = ""
      weatherData.spanish.almanac.tomorrow = ""
      //console.log(weatherData.spanish.almanac)
      //console.log("almanac grab fail")
    })
  }
  grabESAlmanac()
  function grabESMoons() {
    var ii = 0
    try {
      $.getJSON(`https://www.icalendar37.net/lunar/api/?lang=es&month=${dateFns.format(new Date(),"M")}&year=${dateFns.format(new Date(),"YYYY")}`, function(data) {
        for (phase in data.phase) {
          if(phase < new Date().getDate()){continue}
          if (data.phase[phase].isPhaseLimit != false) {
            weatherData.spanish.almanac.moonphases[ii].moon = {"Luna nueva": "Nueva", "Cuarto creciente": "Creciente", "Luna llena": "Llena", "Cuarto menguante": "Menguante"}[data.phase[phase].phaseName]
            weatherData.spanish.almanac.moonphases[ii].date = String(data.monthName).slice(0,3) + " " + phase
            weatherData.spanish.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.spanish.almanac.moonphases[ii].date.replace(' 1', ' 01').replace(' 2', ' 02').replace(' 3', ' 03').replace(' 4', ' 04').replace(' 5', ' 05').replace(' 6', ' 06').replace(' 7', ' 07').replace(' 8', ' 08').replace(' 9', ' 09') : weatherData.spanish.almanac.moonphases[ii].date)
            ii += 1;
          }
        }
        //console.log("first moons grabbed")
      }).fail(function() {
        for (var i = 0; i < 4; i++) {
          weatherData.spanish.almanac.moonphases[i].date = ""
          weatherData.spanish.almanac.moonphases[i].moon = "blank"
        }
        //console.log("first moon grab failed")
      })
      setTimeout(() => {
        $.getJSON(`https://www.icalendar37.net/lunar/api/?lang=es&month=${dateFns.format((dateFns.addMonths(new Date(),1)),"M")}&year=${dateFns.format(dateFns.addMonths(new Date(),1),"YYYY")}`, function(data) {
          for (phase in data.phase) {
            if (data.phase[phase].isPhaseLimit != false) {
              weatherData.spanish.almanac.moonphases[ii].moon = {"Luna nueva": "Nueva", "Cuarto creciente": "Creciente", "Luna llena": "Llena", "Cuarto menguante": "Menguante"}[data.phase[phase].phaseName]
              weatherData.spanish.almanac.moonphases[ii].date = String(data.monthName).slice(0,3) + " " + phase
              weatherData.spanish.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.spanish.almanac.moonphases[ii].date.replace(' 1', ' 01').replace(' 2', ' 02').replace(' 3', ' 03').replace(' 4', ' 04').replace(' 5', ' 05').replace(' 6', ' 06').replace(' 7', ' 07').replace(' 8', ' 08').replace(' 9', ' 09') : weatherData.spanish.almanac.moonphases[ii].date)
              ii += 1;
            }
          }
          //console.log("second moons grabbed")
        }).fail(function() {
          for (var i = 0; i < 4; i++) {
            if (weatherData.spanish.almanac.moonphases[i].date != "")
            weatherData.spanish.almanac.moonphases[i].date = ""
            weatherData.spanish.almanac.moonphases[i].moon = "blank"
          }
          //console.log("second moon grab failed")
        })
        //console.log(weatherData.spanish.almanac.moonphases)
      }, 500);
    } catch (error) {
      for (var i = 0; i < 8; i++) {
        weatherData.spanish.almanac.moonphases[i].date = ""
        weatherData.spanish.almanac.moonphases[i].moon = "blank"
      }
      //console.log(weatherData.spanish.almanac.moonphases)
      //console.log("all moon grabs failed")
    }
  }
  grabESMoons()
}
function grabGolfData() {
  function grabCoursesData(ci) {
      var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.golf.courses[ci].lat + "," + locationConfig.golf.courses[ci].lon + "&format=json&units=" + locationConfig.units + "&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      try {
        weatherData.golf.courseForecast[ci].cityname = locationConfig.golf.courses[ci].displayname
        weatherData.golf.courseForecast[ci].noReport = false
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.golf.courseForecast[ci].days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.golf.courseForecast[ci].days[i].cond = data.daypart[0].wxPhraseLong[dpi].replaceAll("/", "/ ").replaceAll("Thunderstorms", "T'storms").replaceAll("Scattered", "Sct'd")
          weatherData.golf.courseForecast[ci].days[i].dayname = data.dayOfWeek[ii].substring(0,3).toUpperCase()
          weatherData.golf.courseForecast[ci].days[i].high = data.temperatureMax[ii]
          weatherData.golf.courseForecast[ci].days[i].icon = data.daypart[0].iconCode[dpi]
          weatherData.golf.courseForecast[ci].days[i].low = data.temperatureMin[ii]
          weatherData.golf.courseForecast[ci].days[i].windspeed = data.daypart[0].windSpeed[dpi]
        }
        //console.log(weatherData.golf.courseForecast[ci])
        //console.log("golf courses forecast " + ci + " grabbed")
      } catch (error) {
        weatherData.golf.courseForecast[ci].cityname = locationConfig.golf.courses[ci].displayname
        weatherData.golf.courseForecast[ci].noReport = true
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.golf.courseForecast[ci].days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.golf.courseForecast[ci].days[i].cond = ""
          weatherData.golf.courseForecast[ci].days[i].dayname = ""
          weatherData.golf.courseForecast[ci].days[i].high = ""
          weatherData.golf.courseForecast[ci].days[i].icon = 44
          weatherData.golf.courseForecast[ci].days[i].low = ""
          weatherData.golf.courseForecast[ci].days[i].windspeed = ""
        }
        //console.log(weatherData.golf.courseForecast[ci])
        //console.log("golf courses forecast " + ci + " grab failed")
      }
    }).fail(function() {
      weatherData.golf.courseForecast[ci].cityname = locationConfig.golf.courses[ci].displayname
      weatherData.golf.courseForecast[ci].noReport = true
      for (var i = 0; i < weatherData.golf.courseForecast[ci].days.length; i++) {
        weatherData.golf.courseForecast[ci].days[i].cond = ""
        weatherData.golf.courseForecast[ci].days[i].dayname = ""
        weatherData.golf.courseForecast[ci].days[i].high = ""
        weatherData.golf.courseForecast[ci].days[i].icon = ""
        weatherData.golf.courseForecast[ci].days[i].low = ""
        weatherData.golf.courseForecast[ci].days[i].windspeed = ""
      }
      //console.log(weatherData.golf.courseForecast[ci])
      //console.log("golf courses forecast " + ci + " grab failed")
    })
    //}
  }
  for (var i = 0; i < locationConfig.golf.coursesAmount; i++) {
    grabCoursesData(i)
  }
  function grabResortsData(ri) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.golf.resorts[ri].lat + "," + locationConfig.golf.resorts[ri].lon + "&format=json&units=" + locationConfig.units + "&language=en-US&apiKey=" + api_key
  $.getJSON(url, function(data) {
    try {
      weatherData.golf.resortForecast[ri].cityname = locationConfig.golf.resorts[ri].displayname
      weatherData.golf.resortForecast[ri].noReport = false
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < weatherData.golf.resortForecast[ci].days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.golf.resortForecast[ri].days[i].cond = data.daypart[0].wxPhraseLong[dpi].replaceAll("/", "/ ").replaceAll("Thunderstorms", "T'storms").replaceAll("Scattered", "Sct'd")
        weatherData.golf.resortForecast[ri].days[i].dayname = data.dayOfWeek[ii].substring(0,3).toUpperCase()
        weatherData.golf.resortForecast[ri].days[i].high = data.temperatureMax[ii]
        weatherData.golf.resortForecast[ri].days[i].icon = data.daypart[0].iconCode[dpi]
        weatherData.golf.resortForecast[ri].days[i].low = data.temperatureMin[ii]
        weatherData.golf.resortForecast[ri].days[i].windspeed = data.daypart[0].windSpeed[dpi]
      }
      //console.log(weatherData.golf.resortForecast[ri])
      //console.log("golf resorts forecast " + ri + " grabbed")
    } catch (error) {
      weatherData.golf.resortForecast[ri].cityname = locationConfig.golf.resorts[ri].displayname
      weatherData.golf.resortForecast[ri].noReport = true
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < weatherData.golf.resortForecast[ri].days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.golf.resortForecast[ri].days[i].cond = ""
        weatherData.golf.resortForecast[ri].days[i].dayname = ""
        weatherData.golf.resortForecast[ri].days[i].high = ""
        weatherData.golf.resortForecast[ri].days[i].icon = 44
        weatherData.golf.resortForecast[ri].days[i].low = ""
        weatherData.golf.resortForecast[ri].days[i].windspeed = ""
      }
      //console.log(weatherData.golf.resortForecast[ri])
      //console.log("golf resorts forecast " + ri + " grab failed")
    }
  }).fail(function() {
    weatherData.golf.resortForecast[ri].cityname = locationConfig.golf.resorts[ri].displayname
    weatherData.golf.resortForecast[ri].noReport = true
    for (var i = 0; i < weatherData.golf.resortForecast[ri].days.length; i++) {
      weatherData.golf.resortForecast[ri].days[i].cond = ""
      weatherData.golf.resortForecast[ri].days[i].dayname = ""
      weatherData.golf.resortForecast[ri].days[i].high = ""
      weatherData.golf.coursresortForecasteForecast[ri].days[i].icon = ""
      weatherData.golf.resortForecast[ri].days[i].low = ""
      weatherData.golf.resortForecast[ri].days[i].windspeed = ""
    }
    //console.log(weatherData.golf.resortForecast[ri])
    //console.log("golf resorts forecast " + ri + " grab failed")
  })
  //}
}
for (var i = 0; i < locationConfig.golf.resortsAmount; i++) {
  //grabResortsData(i)
}
}
function grabHealthData() {
  weatherData.uvIndex.cityname = locationConfig.mainCity.displayname
  $.getJSON("https://api.weather.com/v2/indices/uv/current?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    try {
      weatherData.uvIndex.current.uv = data.uvIndexCurrent.uvIndex
      weatherData.uvIndex.current.word = data.uvIndexCurrent.uvDesc
    } catch (error) {
      weatherData.uvIndex.current.uv = "noreport"
      weatherData.uvIndex.current.word = ""
    }
  }).fail(function() {
    weatherData.uvIndex.current.uv = "noreport"
    weatherData.uvIndex.current.word = ""
  })
  function getUvTimes(uvdata) {
    var timestamps = [9, 12, 15, 18], currentstamp = dateFns.getHours(new Date()), now = new Date(), startstamp, hour, i=0;
    var timearray = []
    switch (true) {
      case (currentstamp < 9):
        startstamp = 9; break
      case (currentstamp < 12):
        startstamp = 12; break
      case (currentstamp < 15):
        startstamp = 15; break
      case (currentstamp < 18):
        startstamp = 18.; break
      default:
        startstamp = 9
    }
    while (timearray.length < 4) {
      hour = dateFns.getHours(uvdata.fcstValidLocal[i])
      if (dateFns.isAfter(uvdata.fcstValidLocal[i], now) && (hour==startstamp || timearray.length > 0)) {
        if (timestamps.indexOf(hour) >= 0) {
          timearray.push(i)
        }
      }
      i++
    }
    return timearray;
  }
  function hourlyTime(time) {
    return (dateFns.format(time, "h a")).replace(" ", "")
  }
  $.getJSON("https://api.weather.com/v2/indices/uv/hourly/24hour?geocode=" + locationConfig.mainCity.lat + "," + locationConfig.mainCity.lon + "&language=en-US&format=json&apiKey=" + api_key, function(data) {
    try {
      var indexes = getUvTimes(data.uvIndex1hour)
      for (var i = 0; i < 3; i++) {
        weatherData.uvIndex.forecast[i].uv = data.uvIndex1hour.uvIndex[indexes[i]]
        weatherData.uvIndex.forecast[i].word = data.uvIndex1hour.uvDesc[indexes[i]]
        weatherData.uvIndex.forecast[i].time = hourlyTime(data.uvIndex1hour.fcstValidLocal[indexes[i]]).toUpperCase()
        weatherData.uvIndex.forecast[i].day = dateFns.format(new Date(data.uvIndex1hour.fcstValidLocal[indexes[i]]), "ddd").toUpperCase()
      }
    } catch (error) {
      for (var i = 0; i < 3; i++) {
        weatherData.uvIndex.forecast[i].uv = "noreport"
        weatherData.uvIndex.forecast[i].word = ""
        weatherData.uvIndex.forecast[i].time = ""
        weatherData.uvIndex.forecast[i].day = ""
      }
    }
  }).fail(function() {
    for (var i = 0; i < 3; i++) {
      weatherData.uvIndex.forecast[i].uv = "noreport"
      weatherData.uvIndex.forecast[i].word = ""
      weatherData.uvIndex.forecast[i].time = ""
      weatherData.uvIndex.forecast[i].day = ""
    }
  })
}
function grabExtraData() {
  function grabEXCurrentConditions() {
    var url = "https://api.weather.com/v3/wx/observations/current?geocode=" + locationConfig.extraCity.lat + "," + locationConfig.extraCity.lon + "&units=" + locationConfig.units + "&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      try {
        weatherData.extraLocal.currentConditions.cityname = locationConfig.extraCity.displayname
        weatherData.extraLocal.currentConditions.cond = data.wxPhraseLong
        weatherData.extraLocal.currentConditions.gusts = ((data.windGust != null || data.windGust != undefined) ? data.windGust + ((locationConfig.units == "e") ? " mph" : "km/h") : "None")
        weatherData.extraLocal.currentConditions.humidity = data.relativeHumidity + "%"
        weatherData.extraLocal.currentConditions.icon = data.iconCode
        weatherData.extraLocal.currentConditions.pressure = data.pressureAltimeter.toFixed(2)
        weatherData.extraLocal.currentConditions.temp = data.temperature
        weatherData.extraLocal.currentConditions.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
        weatherData.extraLocal.currentConditions.windspeed = data.windSpeed
        weatherData.extraLocal.currentConditions.noReport = false
      } catch (error) {
        weatherData.extraLocal.currentConditions.cityname = locationConfig.extraCity.displayname
        weatherData.extraLocal.currentConditions.cond = ""
        weatherData.extraLocal.currentConditions.gusts = ""
        weatherData.extraLocal.currentConditions.humidity = ""
        weatherData.extraLocal.currentConditions.icon = 44
        weatherData.extraLocal.currentConditions.pressure = ""
        weatherData.extraLocal.currentConditions.temp = ""
        weatherData.extraLocal.currentConditions.wind = ""
        weatherData.extraLocal.currentConditions.windspeed = ""
        weatherData.extraLocal.currentConditions.noReport = true
      }
    }).fail(function() {
      weatherData.extraLocal.currentConditions.cityname = locationConfig.extraCity.displayname
      weatherData.extraLocal.currentConditions.cond = ""
      weatherData.extraLocal.currentConditions.gusts = ""
      weatherData.extraLocal.currentConditions.humidity = ""
      weatherData.extraLocal.currentConditions.icon = 44
      weatherData.extraLocal.currentConditions.pressure = ""
      weatherData.extraLocal.currentConditions.temp = ""
      weatherData.extraLocal.currentConditions.wind = ""
      weatherData.extraLocal.currentConditions.windspeed = ""
      weatherData.extraLocal.currentConditions.noReport = true
    })
  }
  grabEXCurrentConditions();
  function grabEXDayDesc() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.extraCity.lat + "," + locationConfig.extraCity.lon + "&format=json&units=" + locationConfig.units + "&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var ii = 0
      try {
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
        }
        weatherData.extraLocal.dayDesc.cityname = locationConfig.extraCity.displayname
        weatherData.extraLocal.dayDesc.noReport = false
        for (var i = 0; i < weatherData.extraLocal.dayDesc.times.length; i++, ii++) {
          weatherData.extraLocal.dayDesc.times[i].timetitle = data.daypart[0].daypartName[ii]
          weatherData.extraLocal.dayDesc.times[i].forecast = data.daypart[0].narrative[ii]
        }
      } catch (error) {
        weatherData.extraLocal.dayDesc.cityname = locationConfig.extraCity.displayname
        weatherData.extraLocal.dayDesc.noReport = true
        for (var i = 0; i < weatherData.extraLocal.dayDesc.times.length; i++, ii++) {
          weatherData.extraLocal.dayDesc.times[i].timetitle = ""
          weatherData.extraLocal.dayDesc.times[i].forecast = ""
        }
      }
    }).fail(function() {
      weatherData.extraLocal.dayDesc.cityname = locationConfig.extraCity.displayname
      weatherData.extraLocal.dayDesc.noReport = true
      for (var i = 0; i < weatherData.extraLocal.dayDesc.times.length; i++) {
        weatherData.extraLocal.dayDesc.times[i].timetitle = ""
        weatherData.extraLocal.dayDesc.times[i].forecast = ""
      }
    })
  }
  grabEXDayDesc()
  function grabEXExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + locationConfig.extraCity.lat + "," + locationConfig.extraCity.lon + "&format=json&units=" + locationConfig.units + "&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var daysDivs = ['one', "two", "three", "four", "five"]
      try {
        weatherData.extraLocal.extendedForecast.cityname = locationConfig.extraCity.displayname
        weatherData.extraLocal.extendedForecast.noReport = false
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.extraLocal.extendedForecast.days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.extraLocal.extendedForecast.days[i].cond = data.daypart[0].wxPhraseLong[dpi].replaceAll("/", "/ ").replaceAll("Thunderstorms", "T'storms").replaceAll("Scattered", "Sct'd")
          weatherData.extraLocal.extendedForecast.days[i].dayname = data.dayOfWeek[ii].substring(0,3).toUpperCase()
          weatherData.extraLocal.extendedForecast.days[i].high = data.temperatureMax[ii]
          weatherData.extraLocal.extendedForecast.days[i].icon = data.daypart[0].iconCode[dpi]
          weatherData.extraLocal.extendedForecast.days[i].low = data.temperatureMin[ii]
          weatherData.extraLocal.extendedForecast.days[i].windspeed = data.daypart[0].windSpeed[dpi]
        }
      } catch (error) {
        weatherData.extraLocal.extendedForecast.cityname = locationConfig.extraCity.displayname
        weatherData.extraLocal.extendedForecast.noReport = true
        var ii = 0
        var dpi = 0
        if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          dpi = 2
        }
        for (var i = 0; i < weatherData.extraLocal.extendedForecast.days.length; i++, ii++, dpi = dpi + 2) {
          weatherData.extraLocal.extendedForecast.days[i].cond = ""
          weatherData.extraLocal.extendedForecast.days[i].dayname = ""
          weatherData.extraLocal.extendedForecast.days[i].high = ""
          weatherData.extraLocal.extendedForecast.days[i].icon = 44
          weatherData.extraLocal.extendedForecast.days[i].low = ""
          weatherData.extraLocal.extendedForecast.days[i].windspeed = ""
        }
      }
    }).fail(function() {
      weatherData.extraLocal.extendedForecast.cityname = locationConfig.extraCity.displayname
      weatherData.extraLocal.extendedForecast.noReport = true
      for (var i = 0; i < weatherData.extraLocal.extendedForecast.days.length; i++) {
        weatherData.extraLocal.extendedForecast.days[i].cond = ""
        weatherData.extraLocal.extendedForecast.days[i].dayname = ""
        weatherData.extraLocal.extendedForecast.days[i].high = ""
        weatherData.extraLocal.extendedForecast.days[i].icon = ""
        weatherData.extraLocal.extendedForecast.days[i].low = ""
        weatherData.extraLocal.extendedForecast.days[i].windspeed = ""
      }
    })
  }
  grabEXExtended()
}
function allData() {
  grabData();
  grabAirportData();
  grabSpanishData()
  grabGolfData()
  grabHealthData()
  grabExtraData()
  setTimeout(() => {
    initializeRadar(locradar)
    initializeRadar(satradar)
    initializeRadar(regradar)
  }, 5000);
}
function startPrograms() {
  slideKickOff();
  setTimeout(() => {
    crawlCheck()
  }, 500);/*
  initializeRadar(locradar)
  initializeRadar(satradar)
  initializeRadar(regradar)*/
  $('#main').fadeIn(0);
  setTimeout(() => {
    $('#startup').fadeOut(0);
  }, 1000);
}
function dataJS() {
  //time manager
  //var timezoneDifference;
setInterval(
  function () {
    var today = new Date();
    //today.setHours(today.getHours()-timezoneDifference)
    const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let dateday = weekday[today.getDay()];

    $('#date').text("\n" + dateday + " " + today.toString().replace('01', ' 1').replace('02', ' 2').replace('03', ' 3').replace('04', ' 4').replace('05', ' 5').replace('06', ' 6').replace('07', ' 7').replace('08', ' 8').replace('09', ' 9').slice(4,10).toUpperCase().trimRight() );
    $('#time').text( today.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' }).replace(/ /g,' ').toUpperCase() );
  }
, 1000);

setTimeout(function() {
  startPrograms()
  createMaps()
 setTimeout(() => {
  locradar.setCenter([locationConfig.radar.localCoords.lon, locationConfig.radar.localCoords.lat]);
  regradar.setCenter([locationConfig.radar.regionalCoords.lon, locationConfig.radar.regionalCoords.lat]);
  satradar.setCenter([locationConfig.radar.regionalCoords.lon, locationConfig.radar.regionalCoords.lat]);
 }, 500);
  audioPlayer.startPlaying(audioPlayer.playlist, true);
}, apperanceSettings.startupTime)
}
