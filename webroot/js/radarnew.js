/*
 * This is kinda a beta version of the script,
 * go ahead and play around with it.
 * If I change anything to it by the time the XL
 * is released, I'll make sure to send it to you.
 * -Jenson
 */
/*
var locradar,
  regradar,
  satradar,
  loctimestamps,
  regtimestamps,
  sattimestamps,
  radarAnimation;
mapboxgl.accessToken = map_key;

function createMaps() {
  locradar = new mapboxgl.Map({
    container: "locradar",
    style: {
      version: 8,
      sources: {
        "raster-tiles": {
          type: "raster",
          tiles: [
            "https://api.mapbox.com/styles/v1/goldbblazez/ckgc8lzdz4lzh19qt7q9wbbr9/tiles/{z}/{x}/{y}?access_token=" +
              map_key,
          ],

          tileSize: 512,
        },
      },
      layers: [
        {
          id: "basemap",
          type: "raster",
          source: "raster-tiles",
          layout: { visibility: "visible" },
          minzoom: 0,
          maxzoom: 22,
          paint: {
            "raster-opacity": 0,
          },
        },
      ],
    },
    zoom: 7,
    center: [locationConfig.mainCity.lon, locationConfig.mainCity.lat],
  });

  locradar.on("style.load", () => {
    locradar.setFog({});
  });

  regradar = new mapboxgl.Map({
    container: "regradar",
    style: {
      version: 8,
      sources: {
        "raster-tiles": {
          type: "raster",
          tiles: [
            "https://api.mapbox.com/styles/v1/joemolinelli/cm711136q001601s09sld0sbr/tiles/{z}/{x}/{y}?access_token=" +
              map_key,
          ],
          tileSize: 512,
        },
      },
      layers: [
        {
          id: "basemap",
          type: "raster",
          source: "raster-tiles",
          layout: { visibility: "visible" },
          minzoom: 0,
          maxzoom: 22,
        },
      ],
    },
    zoom: 5.25,
    center: [locationConfig.mainCity.lon, locationConfig.mainCity.lat],
  });

  regradar.on("style.load", () => {
    regradar.setFog({});
  });

  satradar = new mapboxgl.Map({
    container: "satradar",
    style: {
      version: 8,
      sources: {
        "raster-tiles": {
          type: "raster",
          tiles: [
            "https://api.mapbox.com/styles/v1/joemolinelli/cm711136q001601s09sld0sbr/tiles/{z}/{x}/{y}?access_token=" +
              map_key,
          ],
          tileSize: 512,
        },
      },
      layers: [
        {
          id: "basemap",
          type: "raster",
          source: "raster-tiles",
          layout: { visibility: "visible" },
          minzoom: 0,
          maxzoom: 22,
        },
      ],
    },
    zoom: 5.25,
    center: [locationConfig.mainCity.lon, locationConfig.mainCity.lat],
  });

  satradar.on("style.load", () => {
    satradar.setFog({});
  });
}

async function fetchRadarTimestamps(map, frameCount) {
  var timestamps =
    map === locradar
      ? loctimestamps
      : map === regradar
      ? regtimestamps
      : sattimestamps;
  timestamps = [];
  var mapType = map === satradar ? "sat" : "twcRadarMosaic";
  try {
    const response = await fetch(
      `https://api.weather.com/v3/TileServer/series/productSet/PPAcore?filter=${mapType}&apiKey=${api_key}`
    );
    const data = await response.json();

    if (mapType === "twcRadarMosaic" && !data.seriesInfo?.twcRadarMosaic) {
      console.error("No radar series info found.");
      return [];
    }
    if (mapType === "sat" && !data.seriesInfo?.sat) {
      console.error("No radar series info found.");
      return [];
    }

    if (mapType === "sat") {
      return (sortedTS = data.seriesInfo?.sat.series
        .sort((a, b) => a.ts - b.ts)
        .map((item) => item.ts)
        .slice(-frameCount));
    }
    return (sortedTS = data.seriesInfo.twcRadarMosaic.series
      .sort((a, b) => a.ts - b.ts)
      .map((item) => item.ts)
      .slice(-frameCount));
  } catch (error) {
    console.error("Failed to fetch radar timestamps:", error);
    return [];
  }
}

async function addRadarLayers(map, timestamps) {
  for (const timestamp of timestamps) {
    const sourceId = `radar_${timestamp}`;
    const layerId = `radarlayer_${timestamp}`;
    const mapType = map === satradar ? "sat" : "twcRadarMosaic";

    if (!map.getSource(sourceId)) {
      // Add raster source for the timestamp
      map.addSource(sourceId, {
        type: "raster",
        tiles: [
          `https://api.weather.com/v3/TileServer/tile/${mapType}?ts=${timestamp}&xyz={x}:{y}:{z}&apiKey=${api_key}`,
        ],
        tileSize: 512,
        minzoom: 5,
        maxzoom: 12,
      });
    }

    if (!map.getLayer(layerId)) {
      map.addLayer({
        id: layerId,
        type: "raster",
        source: sourceId,
        layout: { visibility: "none" },
        paint: {
          "raster-opacity": 0.8,
          "raster-fade-duration": 0,
          "raster-brightness-max": 0.9,
        },
      });
    }
  }
}

function animateRadar(map, timestamps) {
  //let interval = (map === locradar) ? 70 : (map === regradar) ? 15 : 120;
  let interval = map == regradar ? 30 : 90;
  const layerPrefix = "radarlayer_";
  let currentIndex = 0;

  const validLayers = timestamps
    .map((ts) => `${layerPrefix}${ts}`)
    .filter((layerId) => map.getLayer(layerId));

  if (validLayers.length === 0) {
    console.error("No radar layers available for animation.");
    return;
  }

  const setLayerVisibility = (layerId, visibility) => {
    if (map.getLayer(layerId)) {
      map.setLayoutProperty(layerId, "visibility", visibility);
    }
  };

  validLayers.forEach((layerId) => setLayerVisibility(layerId, "none"));
  setLayerVisibility(validLayers[0], "visible");

  var animationInterval = setInterval(() => {
    setLayerVisibility(validLayers[currentIndex], "none");
    currentIndex = (currentIndex + 1) % validLayers.length;
    setLayerVisibility(validLayers[currentIndex], "visible");
    if (currentIndex === validLayers.length - 1) {
      clearInterval(animationInterval);
    }
  }, interval);

  radarAnimation = setInterval(() => {
    animationInterval = setInterval(() => {
      setLayerVisibility(validLayers[currentIndex], "none");
      currentIndex = (currentIndex + 1) % validLayers.length;
      setLayerVisibility(validLayers[currentIndex], "visible");
      if (currentIndex === validLayers.length - 1) {
        clearInterval(animationInterval);
      }
    }, interval);
  }, interval * validLayers.length + 2000);
}

function cleanupOldRadarLayers(map, timestamps) {
  const layerPrefix = "radarlayer_";

  map
    .getStyle()
    .layers.filter((layer) => layer.id.startsWith(layerPrefix))
    .forEach((layer) => {
      const timestamp = layer.id.split("_")[1];
      if (!timestamps.includes(Number(timestamp))) {
        map.removeLayer(layer.id);
        map.removeSource(layer.source);
      }
    });
}
async function initializeRadar(map) {
  var timestamps =
    map === locradar
      ? loctimestamps
      : map === regradar
      ? regtimestamps
      : sattimestamps;
  cleanupOldRadarLayers(map, timestamps);
  clearInterval(radarAnimation);
  if (map == locradar) {
    loctimestamps = await fetchRadarTimestamps(map);
    await addRadarLayers(map, loctimestamps);
  } else if (map == regradar) {
    regtimestamps = await fetchRadarTimestamps(map);
    await addRadarLayers(map, regtimestamps);
  } else {
    sattimestamps = await fetchRadarTimestamps(map);
    await addRadarLayers(map, sattimestamps);
  }
  //const animation = animateRadar(map, timestamps)
  map.resize();
}

async function startRadar(map) {
  var timestamps = map === locradar ? loctimestamps : map === regradar ? regtimestamps : sattimestamps;
  // cleanupOldRadarLayers(map, timestamps)
  clearInterval(radarAnimation);
  // timestamps = await fetchRadarTimestamps(map)
  // await addRadarLayers(map, timestamps)
  const animation = animateRadar(map, timestamps);
  map.resize();
}
/*
async function startRadar(map) {
    //cleanupOldRadarLayers(map, timestamps)
    //clearInterval(radarAnimation)
    //await addRadarLayers(map, timestamps)
    //const animation = animateRadar(map, timestamps)
    map.resize()
}*/
/*
//maybe use this later?
function stopRadar() {
  //var timestamps = map === locradar ? loctimestamps : map === regradar ? regtimestamps : sattimestamps; //map is not defined, very smart move there jenson
  timestamps = [];
  clearInterval(radarAnimation);
}
*/