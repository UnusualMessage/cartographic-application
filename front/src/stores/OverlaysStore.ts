import { makeAutoObservable, runInAction } from "mobx";
import { Map, Overlay } from "ol";
import { Coordinate } from "ol/coordinate";

import { menuId, menuOffset, overlayId, overlayOffset } from "../assets/config";
import { Pixel } from "ol/pixel";
import { FeatureLike } from "ol/Feature";

interface CustomOverlay {
  element: HTMLDivElement;
  overlay: Overlay;
  active: boolean;
}

class OverlaysStore {
  private _featureInfo: CustomOverlay | null;
  private _contextMenu: CustomOverlay | null;

  private _selectedFeatures: FeatureLike[];
  private _copiedFeatures: FeatureLike[];

  constructor() {
    this._featureInfo = null;
    this._contextMenu = null;

    this._selectedFeatures = [];
    this._copiedFeatures = [];

    makeAutoObservable(this);
  }

  public removeFeatureOverlay(map: Map) {
    if (this._featureInfo) {
      this.hideOverlay(this._featureInfo);
      map.removeOverlay(this._featureInfo.overlay);
      this._featureInfo = null;
    }
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
      const pixel: Pixel = map.getEventPixel(e);

      this.showOverlay(this._contextMenu, map.getCoordinateFromPixel(pixel));
      this.hideOverlay(this._featureInfo);

      const features = map.getFeaturesAtPixel(pixel);

      runInAction(() => {
        this._selectedFeatures = features;
      });
    });

    map.addOverlay(overlay);
  }

  private hideOverlay(overlay: CustomOverlay | null) {
    if (overlay) {
      overlay.active = false;
      overlay.overlay.setPosition(undefined);
    }
  }

  public hideContextMenu() {
    this.hideOverlay(this._contextMenu);
  }

  private showOverlay(overlay: CustomOverlay | null, coordinates: Coordinate) {
    if (overlay) {
      overlay.active = true;
      overlay.overlay.setPosition(coordinates);
    }
  }

  public copy() {
    this._copiedFeatures = this._selectedFeatures.slice();
  }

  public get isFeatureInfoActive() {
    return this._featureInfo?.active;
  }

  public get isContextMenuActive() {
    return this._contextMenu?.active;
  }

  public get selectedFeatures() {
    return this._selectedFeatures;
  }

  public get copiedFeatures() {
    return this._copiedFeatures;
  }
}

export default new OverlaysStore();
