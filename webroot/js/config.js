// Please note that config.js has CHANGED and if you need to set provider name, etc please go to config.provider.json.
// To set API keys or set aspect ratio, duplicate config.webmaster.json.example, rename the copy to config.webmaster.json, and enter the API keys/set aspect ratio there.
// This mainly covers configuration for packages and version information - nothing else.

// Define version
var simInfo = {
  version: "2.0 PRW",
};

// Define all packages
var simPackages = {
  intro: {
    name: "Intro",
    title: "Intro",
    slides: ["introSlide", "providerSlide"],
  },
  forecast: {
    name: "Forecast",
    title: "Your Local Forecast",
    slides: [
      "upNext",
      "bulletin",
      "dopplerRadar",
      "currentConditions",
      "nearbyCities",
      "dopplerRadar",
      "dayDesc",
      "extendedForecast",
      "alamanac",
      "regionalSat",
      "regionalRadar",
      "dopplerRadar",
    ],
  },

  extralocal: {
    name: "Extra Local",
    title: "Forecast for Unkn.",
    slides: [
      "upNext",
      "extraCurrentConditions",
      "extraDayDesc",
      "extraExtendedForecast",
    ],
  },
  minicore: {
    name: "Mini Core",
    title: "Your Local Forecast",
    slides: [
      "upNext",
      "dopplerRadar",
      "currentConditions",
      "dayDesc",
      "extendedForecast",
      "dopplerRadar",
    ],
  },
  spanish: {
    name: "Spanish",
    title: "Spanish Forecast",
    slides: [
      "upNext",
      "EScurrentConditions",
      "ESnearbyCities",
      "ESextendedForecast",
    ],
  },
  golf: {
    name: "Golf",
    title: "Golf",
    slides: ["upNext", "courseForecast"],
  },
  health: {
    name: "Health",
    title: "Health",
    slides: ["upNext", "healthTip", "uvIndex"],
  },
  airport: {
    name: "Airport",
    title: "Airport",
    slides: ["upNext", "airportConditions", "nationalAirports"],
  },
};

function locationUpdateConfig() {
  simPackages.extralocal.title = `Forecast for ${locationSettings.extraCity.displayname}`;
}

function loadProviderConfig(provider) {
  providerConfigUpdateMain(provider);
  providerConfigUpdateAudio(provider);
}

function loadWebmasterConfig(webmaster) {
  console.log(webmaster);
}

async function loadDefaultConfig() {
  await fetch("config.webmaster.json")
    .then((response) => response.json())
    .then((data) => loadWebmasterConfig(data));

  await fetch("config.provider.json")
    .then((response) => response.json())
    .then((data) => loadProviderConfig(data));
}

document.addEventListener("DOMContentLoaded", () => {
  loadDefaultConfig();
});
