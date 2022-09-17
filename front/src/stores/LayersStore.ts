import BaseLayer from "ol/layer/Base";
import { makeAutoObservable } from "mobx";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

class LayersStore {
  private readonly _layers: BaseLayer[];

  constructor() {
    this._layers = [];

    makeAutoObservable(this);
  }

  public createLayer(layer: BaseLayer, name: string) {
    layer.set("name", name);

    this._layers.push(layer);

    return layer;
  }

  public get drawLayer() {
    return this.getLayers.find((layer) => {
      return layer.get("name") === "draw";
    }) as VectorLayer<VectorSource>;
  }

  public get getLayers() {
    return this._layers;
  }
}

export default new LayersStore();
