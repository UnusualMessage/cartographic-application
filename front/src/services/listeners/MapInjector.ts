import ListenersInjector, { CommonEvent } from "./ListenersInjector";
import { Map } from "ol";
import { Pixel } from "ol/pixel";
import { Coordinate } from "ol/coordinate";

import { FeaturesStore } from "../../stores";
import { InteractionsStore, OverlaysStore } from "../../stores/map";

class MapInjector implements ListenersInjector<CommonEvent> {
  private _map: Map;
  private _canvas: HTMLCanvasElement;

  constructor(map: Map, canvas: HTMLCanvasElement) {
    this._map = map;
    this._canvas = canvas;
  }

  public addEventListener(event: CommonEvent): void {
    switch (event) {
      case "click":
        this.addMapClick();
        break;
      case "contextmenu":
        this.addMapContextMenu();
        break;
    }
  }

  private addMapContextMenu() {
    this._canvas.addEventListener("contextmenu", (e) => {
      const pixel: Pixel = this._map.getEventPixel(e);
      const cursor: Coordinate = this._map.getCoordinateFromPixel(pixel);

      OverlaysStore.showContextMenu(cursor);
      OverlaysStore.hideFeatureInfo();
      OverlaysStore.cursorPosition = cursor;
      InteractionsStore.stopDrawing();
    });
  }

  private addMapClick() {
    this._map.on("click", (e) => {
      const pixel = this._map.getEventPixel(e.originalEvent);
      const features = this._map.getFeaturesAtPixel(pixel);

      OverlaysStore.hideContextMenu();

      if (!features.length) {
        FeaturesStore.clickedFeature = null;
        OverlaysStore.hideFeatureInfo();
        return;
      }

      FeaturesStore.clickedFeature = features[0];
      OverlaysStore.showFeatureInfo(this._map.getCoordinateFromPixel(pixel));
    });
  }
}

export default MapInjector;
