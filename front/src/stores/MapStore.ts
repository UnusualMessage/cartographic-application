import { makeAutoObservable } from "mobx";
import { Map, View } from "ol";
import BaseLayer from "ol/layer/Base";
import { Draw, Modify, Select, Snap } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import LayersStore from "./LayersStore";

class MapStore {
  private _map: Map | null;

  constructor() {
    this._map = null;

    makeAutoObservable(this);
  }

  public initMap(layers: BaseLayer[], target: HTMLDivElement, view?: View) {
    this._map = new Map({
      target: target,
      view: view,
      layers: layers,
    });
  }

  public addSelect() {
    const select = new Select();

    this._map?.addInteraction(select);
  }

  public addDraw(source: VectorSource) {
    const draw = new Draw({
      type: "Polygon",
      source: source,
    });

    this._map?.addInteraction(draw);
  }

  public addModify(source: VectorSource) {
    const modify = new Modify({
      source: source,
    });

    this._map?.addInteraction(modify);
  }

  public addSnap(source: VectorSource) {
    const snap = new Snap({
      source: source,
    });

    this._map?.addInteraction(snap);
  }

  public addView(view: View) {
    this._map?.setView(view);
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
