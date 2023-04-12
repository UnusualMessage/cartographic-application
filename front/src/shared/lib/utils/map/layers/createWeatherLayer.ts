import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";

import { weatherLayers } from "../../../../assets";
import { WeatherLayers } from "../../../../misc";

export const createWeatherLayer = (type: WeatherLayers) => {
  let source;

  switch (type) {
    case WeatherLayers.clouds:
      source = new XYZ({
        url: weatherLayers[3].source,
        crossOrigin: "Anonymous",
      });

      break;

    case WeatherLayers.wind:
      source = new XYZ({
        url: weatherLayers[2].source,
        crossOrigin: "Anonymous",
      });

      break;

    case WeatherLayers.temperatures:
      source = new XYZ({
        url: weatherLayers[0].source,
        crossOrigin: "Anonymous",
      });

      break;

    case WeatherLayers.precipitation:
      source = new XYZ({
        url: weatherLayers[1].source,
        crossOrigin: "Anonymous",
      });

      break;
  }

  return new TileLayer({
    source: source,
  });
};
