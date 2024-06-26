import { Map, MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import { Pixel } from "ol/pixel";

import { Interactions, CommonEvents } from "../../enums";
import {
  FeaturesStore,
  InteractionsStore,
  ContextMenuStore,
} from "../../stores";
import type { ListenersInjector } from "../../types";

class MapInjector implements ListenersInjector<CommonEvents> {
  private _map: Map;
  private _canvas: HTMLCanvasElement | undefined;

  constructor(map: Map, canvas?: HTMLCanvasElement) {
    this._map = map;
    this._canvas = canvas;
  }

  public addEventListener(event: CommonEvents) {
    switch (event) {
      case CommonEvents.click:
        return this.addMapClick();
      case CommonEvents.contextmenu:
        return this.addMapContextMenu();
      case CommonEvents.pointermove:
        return this.addPointerMove();
    }
  }

  public addPointerMove() {
    const onPointerMove = () => {
      return;
    };

    this._map.on("pointermove", onPointerMove);
    console.log("onPointerMove injected");

    return () => {
      this._map.un("pointermove", onPointerMove);
      console.log("onPointerMove removed");
    };
  }

  private addMapContextMenu() {
    const onContextMenu = (e: MouseEvent) => {
      const pixel: Pixel = this._map.getEventPixel(e);
      const cursor: Coordinate = this._map.getCoordinateFromPixel(pixel);

      if (InteractionsStore.type === Interactions.cursor) {
        ContextMenuStore.show(cursor);
      }
    };

    this._canvas?.addEventListener("contextmenu", onContextMenu);
    console.log("contextmenu injected");

    return () => {
      this._canvas?.removeEventListener("contextmenu", onContextMenu);
      console.log("contextmenu removed");
    };
  }

  private addMapClick() {
    const onClick = (e: MapBrowserEvent<any>) => {
      const pixel = this._map.getEventPixel(e.originalEvent);
      const features = this._map.getFeaturesAtPixel(pixel);

      ContextMenuStore.hide();

      if (!features.length) {
        FeaturesStore.clickedFeature = undefined;
        ContextMenuStore.hide();
        return;
      }

      FeaturesStore.clickedFeature = features[0];
    };

    this._map.on("click", onClick);
    console.log("mapclick injected");

    return () => {
      this._map.un("click", onClick);
      console.log("mapclick removed");
    };
  }
}

export default MapInjector;
