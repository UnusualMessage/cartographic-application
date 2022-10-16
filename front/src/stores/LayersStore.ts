import { makeAutoObservable } from "mobx";
import VectorLayer, { default as OLVectorLayer } from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { FeatureLike } from "ol/Feature";
import { Feature } from "ol";

import { BaseLayerType } from "../types/BaseLayerType";
import { BingMaps, OSM, XYZ } from "ol/source";
import { default as OLTileLayer } from "ol/layer/Tile";

class LayersStore {
  private _vectorLayer: VectorLayer<VectorSource> | null;
  private _currentBaseLayer: BaseLayerType;

  constructor() {
    this._vectorLayer = null;
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

  public createVectorLayer(source: VectorSource) {
    return new OLVectorLayer({
      source: source,
      style: {
        "fill-color": "rgba(255, 255, 255, 0.2)",
        "stroke-color": "#ffcc33",
        "stroke-width": 2,
        "circle-radius": 7,
        "circle-fill-color": "#ffcc33",
      },
    });
  }

  public removeVectorLayer() {
    this._vectorLayer?.dispose();
    this._vectorLayer = null;
  }

  public createBaseLayer(type: BaseLayerType) {
    let source;
    const maxSourceZoom = 19;

    switch (type) {
      case "otm":
        return new OLTileLayer({
          source: new XYZ({
            url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
            maxZoom: maxSourceZoom,
          }),
        });

      case "osm":
        source = new OSM({
          maxZoom: maxSourceZoom,
        });

        return new OLTileLayer({
          source: source,
        });

      case "bing-satellite":
        source = new BingMaps({
          key: "AjQ9qFMMmfL8LMJ-Bp6a8Ut49IzFK-npLmsUcRWyFaGNvOG-uVgSu3kwHKLY-j8I",
          imagerySet: "Aerial",
          maxZoom: maxSourceZoom,
        });

        return new OLTileLayer({
          source: source,
        });
      case "bing-road":
        source = new BingMaps({
          key: "AjQ9qFMMmfL8LMJ-Bp6a8Ut49IzFK-npLmsUcRWyFaGNvOG-uVgSu3kwHKLY-j8I",
          imagerySet: "RoadOnDemand",
          maxZoom: maxSourceZoom,
        });

        return new OLTileLayer({
          source: source,
        });

      case "google-road":
        return new OLTileLayer({
          source: new XYZ({
            url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
            maxZoom: maxSourceZoom,
          }),
        });

      case "google-satellite":
        return new OLTileLayer({
          source: new XYZ({
            url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
            maxZoom: maxSourceZoom,
          }),
        });

      case "google-hybrid":
        return new OLTileLayer({
          source: new XYZ({
            url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
            maxZoom: maxSourceZoom,
          }),
        });

      default:
        return;
    }
  }

  public removeFeature(feature: FeatureLike) {
    if (this.vectorLayer) {
      this.vectorLayer.getSource()?.removeFeature(feature as Feature);
    }
  }
}

export default new LayersStore();
