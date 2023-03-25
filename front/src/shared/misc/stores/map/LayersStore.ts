import { makeAutoObservable } from "mobx";
import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import TileSource from "ol/source/Tile";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";

import { BaseLayer, WeatherLayer } from "../../types";

class LayersStore {
  private _vectorLayers: VectorLayer<VectorSource>[];
  private _baseLayerType: BaseLayer;
  private _weatherLayerType: WeatherLayer;

  constructor() {
    this._vectorLayers = [];

    this._baseLayerType = "osm";
    this._weatherLayerType = "none";

    makeAutoObservable(this);
  }

  public get baseLayerType() {
    return this._baseLayerType;
  }

  public set baseLayerType(value) {
    this._baseLayerType = value;
  }

  public get weatherLayerType() {
    return this._weatherLayerType;
  }

  public set weatherLayerType(value) {
    this._weatherLayerType = value;
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

  public createTileLayer(source: TileSource, id: string, zIndex?: number) {
    return new TileLayer({
      source: source,
      zIndex: zIndex,
      properties: {
        id,
      },
    });
  }

  public createVectorLayer(
    source: VectorSource,
    id: string,
    style?: StyleLike
  ) {
    const layer = new VectorLayer({
      source: source,
      style: style,
      renderBuffer: 1000,
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

  public removeFeatureFromLayer(feature: FeatureLike, id: string) {
    const layer = this._vectorLayers.find((layer) => layer.get("id") === id);

    if (layer) {
      layer.getSource()?.removeFeature(feature as Feature);
    }
  }
}

export default new LayersStore();
