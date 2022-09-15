import { makeAutoObservable } from "mobx";
import { Map, Overlay, View } from "ol";
import BaseLayer from "ol/layer/Base";

import LayersStore from "./LayersStore";
import { overlayId } from "../assets/config";

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

    this._map.on("click", (e) => {
      const pixel = this._map?.getEventPixel(e.originalEvent);
      const overlay = this._map?.getOverlayById(overlayId);

      if (overlay && pixel) {
        overlay.setPosition(this._map?.getCoordinateFromPixel(pixel));
      }
    });
  }

  public get getMap() {
    return this._map;
  }

  public getOverlayById(id: number) {
    return this._map?.getOverlayById(id);
  }

  public removeLayerByName(name: string) {
    LayersStore.getLayers.forEach((layer) => {
      if (layer.get("name") === name) {
        this._map?.removeLayer(layer);
      }
    });
  }

  addOverlay = (overlay: Overlay) => {
    this._map?.addOverlay(overlay);
  };

  public addView(view: View) {
    this._map?.setView(view);
  }

  public addLayer(layer: BaseLayer) {
    this._map?.addLayer(layer);
  }
}

export default new MapStore();
