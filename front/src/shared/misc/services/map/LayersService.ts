import BaseLayer from "ol/layer/Base";
import { XYZ, OSM, BingMaps } from "ol/source";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";

import { weatherLayers, baseLayers } from "../../../assets";
import { LayersStore, MapStore } from "../../stores";
import type { BaseLayer as BaseLayerType, WeatherLayer } from "../../types";

class LayersService {
  public createVectorLayer(
    source: VectorSource,
    id: string,
    style?: StyleLike
  ) {
    const layer = LayersStore.createVectorLayer(source, id, style);
    MapStore.addLayer(layer);
    return layer;
  }

  public createBaseLayer(type: BaseLayerType) {
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

      default:
        return;
    }

    const layer = LayersStore.createTileLayer(source, "", zIndex);

    MapStore.addLayer(layer);

    return layer;
  }

  public createWeatherLayer(type: WeatherLayer) {
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

    if (!source) {
      return;
    }

    const layer = LayersStore.createTileLayer(source, "");

    MapStore.addLayer(layer);

    return layer;
  }

  public removeVectorLayer(id: string) {
    const layer = LayersStore.getVectorLayerById(id);

    if (layer) {
      MapStore.removeLayer(layer);
      LayersStore.removeVectorLayer(id);
    }
  }

  public removeLayer(layer: BaseLayer) {
    MapStore.removeLayer(layer);
  }
}

export default new LayersService();
