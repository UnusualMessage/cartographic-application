import { makeAutoObservable } from "mobx";
import { Map, Overlay } from "ol";
import { Coordinate } from "ol/coordinate";

import {
  CommonEvent,
  ListenersInjector,
  MapInjector,
} from "../../services/listeners";
import {
  menuId,
  menuOffset,
  overlayId,
  overlayOffset,
} from "../../shared/constants/map";

interface CustomOverlay {
  element: HTMLElement | null;
  overlay: Overlay | null;
  active: boolean;
}

class OverlaysStore {
  private _featureInfo: CustomOverlay;
  private _contextMenu: CustomOverlay;

  private _cursorPosition: Coordinate | null;

  constructor() {
    this._featureInfo = {
      element: null,
      overlay: null,
      active: false,
    };

    this._contextMenu = {
      element: null,
      overlay: null,
      active: false,
    };

    this._cursorPosition = null;

    makeAutoObservable(this);
  }

  public get cursorPosition() {
    return this._cursorPosition;
  }

  public set cursorPosition(position) {
    this._cursorPosition = position;
  }

  public get isFeatureInfoActive() {
    return this._featureInfo.active;
  }

  public get isContextMenuActive() {
    return this._contextMenu.active;
  }

  public removeFeatureOverlay(map: Map) {
    this.hideOverlay(this._featureInfo);

    if (this._featureInfo.overlay) {
      map.removeOverlay(this._featureInfo.overlay);
      this.resetOverlay(this._featureInfo);
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

    map.addOverlay(overlay);
  }

  public initContextMenu(element: HTMLElement, map: Map) {
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

    if (!canvas) {
      return [];
    }

    const mapInjector: ListenersInjector<CommonEvent> = new MapInjector(
      map,
      canvas
    );

    const cleanups = [];

    cleanups.push(mapInjector.addEventListener("click"));
    cleanups.push(mapInjector.addEventListener("contextmenu"));

    map.addOverlay(overlay);

    return cleanups;
  }

  public hideContextMenu() {
    this.hideOverlay(this._contextMenu);
  }

  public hideFeatureInfo() {
    this.hideOverlay(this._featureInfo);
  }

  public showContextMenu(coordinates: Coordinate) {
    this.showOverlay(this._contextMenu, coordinates);
  }

  public showFeatureInfo(coordinates: Coordinate) {
    this.showOverlay(this._featureInfo, coordinates);
  }

  private hideOverlay(overlay: CustomOverlay) {
    overlay.active = false;
    overlay.overlay?.setPosition(undefined);
  }

  private showOverlay(overlay: CustomOverlay, coordinates: Coordinate) {
    overlay.active = true;
    overlay.overlay?.setPosition(coordinates);
  }

  private resetOverlay(overlay: CustomOverlay) {
    overlay.overlay = null;
    overlay.element = null;
    overlay.active = false;
  }
}

export default new OverlaysStore();
