import { makeAutoObservable } from "mobx";
import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { BingMaps, OSM, XYZ } from "ol/source";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";

import { baseLayers, weatherLayers } from "../../../assets";
import { BaseLayer, WeatherLayer } from "../../types";

class LayersStore {
  private _vectorLayers: VectorLayer<VectorSource>[];
  private _baseLayer: BaseLayer;
  private _weatherLayer: WeatherLayer;

  constructor() {
    this._vectorLayers = [];

    this._baseLayer = "osm";
    this._weatherLayer = "none";

    makeAutoObservable(this);
  }

  public get weatherLayer() {
    return this._weatherLayer;
  }

  public set weatherLayer(value) {
    this._weatherLayer = value;
  }

  public get baseLayer() {
    return this._baseLayer;
  }

  public set baseLayer(type: BaseLayer) {
    this._baseLayer = type;
  }

  public clearVectorLayer(id: string) {
    this.getVectorLayerById(id)?.getSource()?.clear();
  }

  public getVectorLayerById(id: string) {
    return this._vectorLayers.find((layer) => layer.get("id") === id);
  }

  public resetVectorLayers() {
    for (const layer of this._vectorLayers) {
      layer.dispose();
    }

    this._vectorLayers = [];
  }

  public createVectorLayer(
    source: VectorSource,
    id: string,
    style?: StyleLike
  ) {
    const layer = new VectorLayer({
      source: source,
      style: style,
      properties: {
        id: id,
      },
    });

    this._vectorLayers.push(layer);

    return layer;
  }

  public removeVectorLayer(id: string) {
    this._vectorLayers = this._vectorLayers.filter(
      (layer) => layer.get("id") !== id
    );
  }

  public createWeatherLayer(type: WeatherLayer) {
    let source;

    switch (type) {
      case "clouds":
        source = new XYZ({
          url: weatherLayers[3].source,
        });

        break;

      case "wind":
        source = new XYZ({
          url: weatherLayers[2].source,
        });

        break;

      case "temperatures":
        source = new XYZ({
          url: weatherLayers[0].source,
        });

        break;

      case "precipitation":
        source = new XYZ({
          url: weatherLayers[1].source,
        });

        break;
    }

    return new TileLayer({
      source: source,
    });
  }

  public createBaseLayer(type: BaseLayer) {
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

    return new TileLayer({
      source: source,
      zIndex: zIndex,
    });
  }

  public removeFeatureFromLayer(feature: FeatureLike, id: string) {
    const layer = this._vectorLayers.find((layer) => layer.get("id") === id);

    if (layer) {
      layer.getSource()?.removeFeature(feature as Feature);
    }
  }
}

export default new LayersStore();
