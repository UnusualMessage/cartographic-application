import { makeAutoObservable } from "mobx";
import { Map, View } from "ol";
import BaseLayer from "ol/layer/Base";

class MapStore {
  private _map: Map | null;

  constructor() {
    this._map = null;

    makeAutoObservable(this);
  }

  public get map() {
    return this._map;
  }

  public initMap(layers: BaseLayer[], target: HTMLDivElement, view?: View) {
    this._map = new Map({
      target: target,
      view: view,
      layers: layers,
      controls: [],
    });
  }

  public addView(view: View) {
    this._map?.setView(view);
  }

  public addLayer(layer: BaseLayer) {
    this._map?.addLayer(layer);
  }
}

export default new MapStore();
