import { makeAutoObservable } from "mobx";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { FeatureLike } from "ol/Feature";
import { Feature } from "ol";
import { BingMaps, OSM, XYZ } from "ol/source";
import { default as OLTileLayer } from "ol/layer/Tile";

import { BaseLayerType } from "../../types/BaseLayerType";
import { measureStyleFunction } from "../../utils/styles/measureStyleFunction";
import { baseLayers } from "../../assets/map";

class LayersStore {
  private _vectorLayer: VectorLayer<VectorSource> | null;
  private _auxLayer: VectorLayer<VectorSource> | null;
  private _currentBaseLayer: BaseLayerType;

  constructor() {
    this._vectorLayer = null;
    this._auxLayer = null;
    this._currentBaseLayer = "osm";

    makeAutoObservable(this);
  }

  public get currentBaseLayer() {
    return this._currentBaseLayer;
  }

  public set currentBaseLayer(type: BaseLayerType) {
    this._currentBaseLayer = type;
  }

  public get vectorLayer() {
    return this._vectorLayer;
  }

  public createAuxLayer(source: VectorSource) {
    this._auxLayer = new VectorLayer({
      source: source,
      style: (feature) => {
        return measureStyleFunction(feature, 0);
      },
    });

    return this._auxLayer;
  }

  public clearAuxLayer() {
    this._auxLayer?.getSource()?.clear();
  }

  public removeAuxLayer() {
    this._auxLayer?.dispose();
    this._auxLayer = null;
  }

  public createVectorLayer(source: VectorSource) {
    this._vectorLayer = new VectorLayer({
      source: source,
    });

    return this._vectorLayer;
  }

  public removeVectorLayer() {
    this._vectorLayer?.dispose();
    this._vectorLayer = null;
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

  public removeFeature(feature: FeatureLike) {
    if (this.vectorLayer) {
      this.vectorLayer.getSource()?.removeFeature(feature as Feature);
    }
  }
}

export default new LayersStore();
