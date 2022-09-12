import { makeAutoObservable } from "mobx";
import { Map, View } from "ol";
import BaseLayer from "ol/layer/Base";

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
}

export default new MapStore();
