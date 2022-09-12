import BaseLayer from "ol/layer/Base";
import { makeAutoObservable } from "mobx";
import TileSource from "ol/source/Tile";
import TileLayer from "ol/layer/Tile";

class LayersStore {
  private readonly _layers: BaseLayer[];
  
  constructor() {
    this._layers = [];
    
    makeAutoObservable(this);
  }
  
  public createLayer(source: TileSource, name: string) {
    const newLayer = new TileLayer({
      source: source,
    });
    
    newLayer.set("name", name);
    
    this._layers.push(newLayer);
    
    return newLayer;
  }
  
  public get getLayers() {
    return this._layers;
  }
}

export default new LayersStore();