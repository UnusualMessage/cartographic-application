import BaseLayer from "ol/layer/Base";
import { makeAutoObservable } from "mobx";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { FeatureLike } from "ol/Feature";
import { Feature } from "ol";

class LayersStore {
  private readonly _layers: BaseLayer[];

  constructor() {
    this._layers = [];

    makeAutoObservable(this);
  }

  public get drawLayer() {
    const drawLayer = this._layers.find(
      (layer) => layer.get("name") === "draw"
    );
    return drawLayer as VectorLayer<VectorSource>;
  }

  public clearDrawLayer() {
    this.drawLayer.getSource()?.clear();
  }

  public createLayer(layer: BaseLayer, name: string) {
    layer.set("name", name);
    this._layers.push(layer);

    return layer;
  }

  public removeLayer(layer: BaseLayer) {
    this._layers.filter(
      (currentLayer) => currentLayer.get("name") !== layer.get("name")
    );
  }

  public removeFeature(feature: FeatureLike) {
    this.drawLayer.getSource()?.removeFeature(feature as Feature);
  }
}

export default new LayersStore();
