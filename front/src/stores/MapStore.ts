import { makeAutoObservable, runInAction } from "mobx";
import { Feature, Map, Overlay, View } from "ol";
import BaseLayer from "ol/layer/Base";
import { Draw, Modify, Select, Snap } from "ol/interaction";
import VectorSource from "ol/source/Vector";
import { Type } from "ol/geom/Geometry";
import { get } from "ol/proj/projections";

import LayersStore from "./LayersStore";
import { DrawType } from "../types/DrawType";
import { overlayId } from "../assets/config";

class MapStore {
  private _map: Map | null;

  private _activeFeature: Feature | null;
  private _draw: Draw | null;

  constructor() {
    this._map = null;
    this._activeFeature = null;
    this._draw = null;

    makeAutoObservable(this);
  }

  public initMap(layers: BaseLayer[], target: HTMLDivElement, view?: View) {
    const extent = get("EPSG:3857").getExtent().slice();
    extent[0] += extent[0];
    extent[2] += extent[2];

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

  public getOverlayById(id: number) {
    return this._map?.getOverlayById(id);
  }

  public get getActiveFeature() {
    return this._activeFeature;
  }

  public addSelect() {
    const select = new Select();

    select.on("select", () => {
      runInAction(() => {
        this._activeFeature = select.getFeatures().item(0);
      });
    });

    this._map?.addInteraction(select);
  }

  public addDraw(source: VectorSource, drawType: DrawType) {
    const draw = new Draw({
      type: drawType as Type,
      source: source,
    });

    this._map?.addInteraction(draw);
    this._draw = draw;
  }

  public removeDraw() {
    if (this._draw) {
      this._map?.removeInteraction(this._draw);
    }
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
}

export default new MapStore();
