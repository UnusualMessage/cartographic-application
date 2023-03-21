import { Map, MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import { Pixel } from "ol/pixel";

import {
  MapStore,
  FeaturesStore,
  InteractionsStore,
  ContextMenuStore,
} from "../../stores";
import type { CommonEvent, ListenersInjector } from "../../types";

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

      const features = this._map.getFeaturesAtPixel(pixel);

      if (features.length) {
        MapStore.setDefaultCursor();
      } else if (InteractionsStore.isMeasurementActive) {
        MapStore.setCrosshairCursor();
      }
    };

    this._map.on("pointermove", onPointerMove);

    return () => {
      this._map.un("pointermove", onPointerMove);
    };
  }

  private addMapContextMenu() {
    const onContextMenu = (e: MouseEvent) => {
      const pixel: Pixel = this._map.getEventPixel(e);
      const cursor: Coordinate = this._map.getCoordinateFromPixel(pixel);

      if (InteractionsStore.drawType === "cursor") {
        ContextMenuStore.show(cursor);
      }
    };

    this._canvas?.addEventListener("contextmenu", onContextMenu);

    return () => {
      this._canvas?.removeEventListener("contextmenu", onContextMenu);
    };
  }

  private addMapClick() {
    const onClick = (e: MapBrowserEvent<any>) => {
      const pixel = this._map.getEventPixel(e.originalEvent);
      const features = this._map.getFeaturesAtPixel(pixel);

      ContextMenuStore.hide();

      if (!features.length) {
        FeaturesStore.clickedFeature = null;
        ContextMenuStore.hide();
        return;
      }

      FeaturesStore.clickedFeature = features[0];
    };

    this._map.on("click", onClick);

    return () => {
      this._map.un("click", onClick);
    };
  }
}

export default MapInjector;
