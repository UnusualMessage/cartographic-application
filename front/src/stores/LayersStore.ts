import BaseLayer from "ol/layer/Base";
import { makeAutoObservable } from "mobx";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

class LayersStore {
  private readonly _layers: BaseLayer[];
  private _drawLayer: VectorLayer<VectorSource> | null;

  constructor() {
    this._layers = [];
    this._drawLayer = null;

    makeAutoObservable(this);
  }

  public get drawLayer() {
    return this._drawLayer;
  }

  public set drawLayer(layer: VectorLayer<VectorSource> | null) {
    this._drawLayer = layer;
  }

  public get drawLayerFeatures() {
    return this.drawLayer?.getSource()?.getFeatures();
  }

  public clearDrawLayer() {
    const layer = this.drawLayer;

    layer?.getSource()?.clear();
  }

  public createLayer(layer: BaseLayer, name: string) {
    layer.set("name", name);

    this._layers.push(layer);

    return layer;
  }

  public createFeatureLayer(layer: VectorLayer<VectorSource>, name: string) {
    layer.set("name", name);
    this._layers.push(layer);

    return layer;
  }
}

export default new LayersStore();
