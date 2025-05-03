var api_key = "";
var map_key = "";

var apperanceSettings = {
  providerName: "Mist Digital Cable",
  skipSettings: false, //set to true for no settings panel on startup
  startupTime: 5000, //How long you want to wait for everything to load
  //we recommend not setting startupTime to anything less than like 3000 (4 seconds) as it takes time to download info off the internet.
  enableCrawl: true, //set to fale if you don't want any ad crawl
  adMessage: ["If you are interested in TWC, EAS, or anything weather/tech related, join Mist Weather Media! Visit mistwx.com/discord right now!", "Want to watch Weatherscan and more from around the globe? Visit live.mistweather.com and search through the guide today!", "If a tornado warning is issued will you get the call? Sign up now to recieve a phone call warning when severe weather is headed your way. Visit weather.com/notify to learn more.", "Now Available! Get picture perfect weather with The Weather Channel HD.",],
  aspectRatio: 4/3, //3/2 or 4/3
  crawlInterval: 48000,
  version: "1.0",
};

var slideSettings = {//Don't change this
  order: [
    {slideLineup: [
        {group: "intro", slides: [
          { function: "introSlide" },
          { function: "providerSlide" },
        ]},
      ]},
  ],
};

var audioSettings = {
  enableMusic: true,
  shuffle: false,
  randomStart: true,
  narrations: true,
  order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], //1 to 35
};
var introPackage = {group: "intro", slides: [
  { function: "introSlide" },
  { function: "providerSlide" },
]}
var forecastPackage = {group: "forecast", slides: [
  { function: "upNext" },
  { function: "bulletin"},
  { function: "dopplerRadar" },
  { function: "currentConditions" },
  { function: "nearbyCities" },
  { function: "dopplerRadar" },
  { function: "dayDesc" },
  { function: "extendedForecast" },
  { function: "almanac" },
  { function: "regionalSat" },
  { function: "regionalRadar" },
  { function: "dopplerRadar" },
]}
var extraLocalPackage = {group: "extralocal", slides: [
  { function: "upNext" },
  { function: "extraCurrentConditions"},
  { function: "extraDayDesc"},
  { function: "extraExtendedForecast"},
]}
var miniCorePackage = {group: "minicore", slides: [
  { function: "upNext" },
  { function: "dopplerRadar" },
  { function: "currentConditions" },
  { function: "dayDesc" },
  { function: "extendedForecast" },
  { function: "dopplerRadar" },
]}
var spanishForecastPackage = {group: "spanish", slides: [
  { function: "upNext" },
  { function: "EScurrentConditions" },
  { function: "ESnearbyCities" },
  { function: "ESextendedForecast" },
  { function: "ESalmanac" },
]}
var golfPackage = {group: "golf", slides: [
  { function: "upNext" },
  { function: "courseForecast" }
]}
var healthPackage = {group: "health", slides: [
  { function: "upNext" },
  { function: "healthTip" },
  { function: "uvIndex" },
]}
var airportPackage = {group: "airport", slides: [
  { function: "upNext" },
  { function: "airportConditions" },
  { function: "nationalAirports" },
]}
