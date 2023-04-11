import TileLayer from "ol/layer/Tile";
import { XYZ, OSM, BingMaps } from "ol/source";

import { baseLayers } from "../../../../assets";
import { BaseLayer } from "../../../../misc";

export const createBaseLayer = (type: BaseLayer) => {
  let source;
  const maxSourceZoom = 19;
  const zIndex = -1;

  switch (type) {
    case "otm":
      source = new XYZ({
        url: baseLayers[1].source,
        maxZoom: maxSourceZoom,
      });

      break;

    case "osm":
      source = new OSM({
        maxZoom: maxSourceZoom,
      });

      break;

    case "bing-satellite":
      source = new BingMaps({
        key: baseLayers[3].source,
        imagerySet: "Aerial",
        maxZoom: maxSourceZoom,
      });

      break;

    case "bing-road":
      source = new BingMaps({
        key: baseLayers[2].source,
        imagerySet: "RoadOnDemand",
        maxZoom: maxSourceZoom,
      });

      break;

    case "google-road":
      source = new XYZ({
        url: baseLayers[4].source,
        maxZoom: maxSourceZoom,
      });

      break;

    case "google-satellite":
      source = new XYZ({
        url: baseLayers[5].source,
        maxZoom: maxSourceZoom,
      });

      break;

    case "google-hybrid":
      source = new XYZ({
        url: baseLayers[6].source,
        maxZoom: maxSourceZoom,
      });

      break;
  }

  return new TileLayer({
    source: source,
    zIndex: zIndex,
  });
};
