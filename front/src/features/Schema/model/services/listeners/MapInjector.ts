import { Map, MapBrowserEvent } from "ol";
import { Pixel } from "ol/pixel";

import MapStore from "@features/Schema/model/stores/MapStore";

import ListenersInjector, { CommonEvent } from "./ListenersInjector";

class MapInjector implements ListenersInjector<CommonEvent> {
  private _map: Map;
  private _canvas: HTMLCanvasElement | undefined;

  constructor(map: Map, canvas?: HTMLCanvasElement) {
    this._map = map;
    this._canvas = canvas;
  }

  public addEventListener(event: CommonEvent) {
    switch (event) {
      case "click":
        return this.addMapClick();
      case "contextmenu":
        return this.addMapContextMenu();
      case "pointermove":
        return this.addPointerMove();
    }
  }

  public addPointerMove() {
    const onPointerMove = (e: MapBrowserEvent<any>) => {
      const event = e.originalEvent;
      const pixel: Pixel = this._map.getEventPixel(event);
      MapStore.cursorCoordinate = this._map.getCoordinateFromPixel(pixel);
    };

    this._map.on("pointermove", onPointerMove);

    return () => {
      this._map.un("pointermove", onPointerMove);
    };
  }

  private addMapContextMenu() {
    const onContextMenu = (e: MouseEvent) => {
      // const pixel: Pixel = this._map.getEventPixel(e);
      // const cursor: Coordinate = this._map.getCoordinateFromPixel(pixel);
      //
      // OverlaysStore.showContextMenu(cursor);
      // OverlaysStore.hideFeatureInfo();
      // OverlaysStore.cursorPosition = cursor;
      // InteractionsService.stopDrawing();
    };

    this._canvas?.addEventListener("contextmenu", onContextMenu);

    return () => {
      this._canvas?.removeEventListener("contextmenu", onContextMenu);
    };
  }

  private addMapClick() {
    const onClick = (e: MapBrowserEvent<any>) => {
      // const pixel = this._map.getEventPixel(e.originalEvent);
      // const features = this._map.getFeaturesAtPixel(pixel);
      //
      // OverlaysStore.hideContextMenu();
      //
      // if (!features.length) {
      //   FeaturesStore.clickedFeature = null;
      //   OverlaysStore.hideFeatureInfo();
      //   return;
      // }
      //
      // FeaturesStore.clickedFeature = features[0];
      // OverlaysStore.showFeatureInfo(this._map.getCoordinateFromPixel(pixel));
    };

    this._map.on("click", onClick);

    return () => {
      this._map.un("click", onClick);
    };
  }
}

export default MapInjector;
