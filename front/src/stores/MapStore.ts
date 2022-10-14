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

  public dispose() {
    this._map?.dispose();
    this._map = null;
  }

  public initMap(layers: BaseLayer[], target: HTMLDivElement, view?: View) {
    if (this._map) {
      this._map.setTarget(target);
    } else {
      this._map = new Map({
        target: target,
        view: view,
        layers: layers,
        controls: [],
      });
    }
  }

  public addView(view: View) {
    this._map?.setView(view);
  }

  public addLayer(layer: BaseLayer) {
    this._map?.addLayer(layer);
  }

  public removeLayer(layer: BaseLayer) {
    this._map?.removeLayer(layer);
  }
}

export default new MapStore();
