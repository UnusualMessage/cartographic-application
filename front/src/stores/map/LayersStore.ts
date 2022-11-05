import { makeAutoObservable } from "mobx";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { FeatureLike } from "ol/Feature";
import { Feature } from "ol";
import { BingMaps, OSM, XYZ } from "ol/source";
import { default as OLTileLayer } from "ol/layer/Tile";

import { BaseLayerType } from "../../types/common";
import { baseLayers } from "../../assets/map";
import { StyleLike } from "ol/style/Style";

class LayersStore {
  private _vectorLayers: VectorLayer<VectorSource>[];
  private _baseLayer: BaseLayerType;

  constructor() {
    this._vectorLayers = [];

    this._baseLayer = "osm";

    makeAutoObservable(this);
  }

  public get baseLayer() {
    return this._baseLayer;
  }

  public set baseLayer(type: BaseLayerType) {
    this._baseLayer = type;
  }

  public clearVectorLayer(id: string) {
    this.getVectorLayerById(id)?.getSource()?.clear();
  }

  public getVectorLayerById(id: string) {
    return this._vectorLayers.find((layer) => layer.get("id") === id);
  }

  public createVectorLayer(
    source: VectorSource,
    id: string,
    style?: StyleLike
  ) {
    const layer = new VectorLayer({
      source: source,
      style: style,
    });

    layer.set("id", id);

    this._vectorLayers.push(layer);

    return layer;
  }

  public removeVectorLayer(id: string) {
    this._vectorLayers = this._vectorLayers.filter((layer) => {
      if (layer.get("id") === id) {
        return layer;
      } else {
        layer.dispose();
        return;
      }
    });
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

    return new OLTileLayer({
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
