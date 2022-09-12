import { makeAutoObservable } from "mobx";
import { Map, View } from "ol";
import BaseLayer from "ol/layer/Base";
import LayersStore from "./LayersStore";

class MapStore {
  private _map: Map | null;
  
  constructor() {
    this._map = null;
    
    makeAutoObservable(this);
  }
  
  public initMap(view: View, layers: BaseLayer[], target: HTMLDivElement) {
    this._map = new Map({
      target: target,
      view: view,
      layers: layers,
    });
  }
  
  public addLayer(layer: BaseLayer) {
    this._map?.addLayer(layer);
  }
  
  public removeLayerByName(name: string) {
    LayersStore.getLayers.forEach((layer) => {
      if (layer.get("name") === name) {
        this._map?.removeLayer(layer);
      }
    });
  }
}

export default new MapStore();
