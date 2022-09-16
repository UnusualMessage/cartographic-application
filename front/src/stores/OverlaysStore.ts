import { makeAutoObservable } from "mobx";
import { Map, Overlay } from "ol";

import { menuId, menuOffset, overlayId, overlayOffset } from "../assets/config";
import { Coordinate } from "ol/coordinate";
import { Pixel } from "ol/pixel";

interface CustomOverlay {
  element: HTMLDivElement;
  overlay: Overlay;
  active: boolean;
}

class OverlaysStore {
  private _featureInfo: CustomOverlay | null;
  private _contextMenu: CustomOverlay | null;

  constructor() {
    this._featureInfo = null;
    this._contextMenu = null;

    makeAutoObservable(this);
  }

  public initFeatureOverlay(element: HTMLDivElement, map: Map) {
    const overlay = new Overlay({
      element: element,
      offset: overlayOffset,
      id: overlayId,
    });

    this._featureInfo = {
      overlay: overlay,
      element: element,
      active: false,
    };

    map.on("click", (e) => {
      const pixel = map.getEventPixel(e.originalEvent);
      const features = map.getFeaturesAtPixel(pixel);

      this.hideOverlay(this._contextMenu);

      if (!features.length) {
        this.hideOverlay(this._featureInfo);
        return;
      }

      this.showOverlay(this._featureInfo, map.getCoordinateFromPixel(pixel));
    });

    map.addOverlay(overlay);
  }

  public initContextMenu(element: HTMLDivElement, map: Map) {
    const overlay = new Overlay({
      element: element,
      offset: menuOffset,
      id: menuId,
    });

    this._contextMenu = {
      overlay: overlay,
      element: element,
      active: false,
    };

    const el = map.getViewport();
    const canvas = el.getElementsByTagName("canvas").item(0);

    canvas?.addEventListener("contextmenu", (e) => {
      this.showOverlay(
        this._contextMenu,
        map.getCoordinateFromPixel([e.x, e.y])
      );

      this.hideOverlay(this._featureInfo);
    });

    map.addOverlay(overlay);
  }

  private hideOverlay(overlay: CustomOverlay | null) {
    if (overlay) {
      overlay.active = false;
      overlay.overlay.setPosition(undefined);
    }
  }

  private showOverlay(overlay: CustomOverlay | null, coordinates: Coordinate) {
    if (overlay) {
      overlay.active = true;
      overlay.overlay.setPosition(coordinates);
    }
  }

  public get isFeatureInfoActive() {
    return this._featureInfo?.active;
  }

  public get isContextMenuActive() {
    return this._contextMenu?.active;
  }
}

export default new OverlaysStore();
