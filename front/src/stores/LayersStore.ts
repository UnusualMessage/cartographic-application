import BaseLayer from "ol/layer/Base";
import { makeAutoObservable } from "mobx";

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
  
  public get getLayers() {
    return this._layers;
  }
}

export default new LayersStore();