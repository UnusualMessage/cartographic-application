import TileLayer from "ol/layer/Tile";
import { XYZ, OSM, BingMaps } from "ol/source";

import { baseLayers } from "../../../../assets";
import { BaseLayers } from "../../../../misc";

export const createBaseLayer = (type: BaseLayers) => {
  let source;
  const maxSourceZoom = 19;
  const zIndex = -1;

  switch (type) {
    case BaseLayers.otm:
      source = new XYZ({
        url: baseLayers[1].source,
        maxZoom: maxSourceZoom,
      });

      break;

    case BaseLayers.osm:
      source = new OSM({
        maxZoom: maxSourceZoom,
      });

      break;

    case BaseLayers.bingSatellite:
      source = new BingMaps({
        key: baseLayers[3].source,
        imagerySet: "Aerial",
        maxZoom: maxSourceZoom,
      });

      break;

    case BaseLayers.bingRoad:
      source = new BingMaps({
        key: baseLayers[2].source,
        imagerySet: "RoadOnDemand",
        maxZoom: maxSourceZoom,
      });

      break;

    case BaseLayers.googleRoad:
      source = new XYZ({
        url: baseLayers[4].source,
        maxZoom: maxSourceZoom,
      });

      break;

    case BaseLayers.googleSatellite:
      source = new XYZ({
        url: baseLayers[5].source,
        maxZoom: maxSourceZoom,
      });

      break;

    case BaseLayers.googleHybrid:
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
