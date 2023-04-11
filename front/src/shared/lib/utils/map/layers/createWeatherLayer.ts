import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";

import { weatherLayers } from "../../../../assets";
import { WeatherLayer } from "../../../../misc";

export const createWeatherLayer = (type: WeatherLayer) => {
  let source;

  switch (type) {
    case "clouds":
      source = new XYZ({
        url: weatherLayers[3].source,
        crossOrigin: "Anonymous",
      });

      break;

    case "wind":
      source = new XYZ({
        url: weatherLayers[2].source,
        crossOrigin: "Anonymous",
      });

      break;

    case "temperatures":
      source = new XYZ({
        url: weatherLayers[0].source,
        crossOrigin: "Anonymous",
      });

      break;

    case "precipitation":
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
