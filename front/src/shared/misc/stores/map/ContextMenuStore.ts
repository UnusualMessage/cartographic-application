import { makeAutoObservable } from "mobx";
import { Map, Overlay } from "ol";
import { Coordinate } from "ol/coordinate";

import { menuOffset, menuId } from "../../../constants";
import { CommonEvents } from "../../enums";
import { OverlaysService, MapInjector } from "../../services";
import { CustomOverlay, ListenersInjector } from "../../types";

class ContextMenuStore {
  private _menu: CustomOverlay;

  constructor() {
    this._menu = {
      overlay: undefined,
      element: undefined,
      active: false,
    };

    makeAutoObservable(this);
  }

  public get active() {
    return this._menu.active;
  }

  public get coordinates() {
    return this._menu.overlay?.getPosition();
  }

  public init(element: HTMLElement, map: Map) {
    OverlaysService.removeOverlay(this._menu, map);

    const overlay = new Overlay({
      element: element,
      offset: menuOffset,
      id: menuId,
    });

    this._menu = {
      overlay: overlay,
      element: element,
      active: false,
    };

    const el = map.getViewport();
    const canvas = el.getElementsByTagName("canvas").item(0);

    if (!canvas) {
      return [];
    }

    const mapInjector: ListenersInjector<CommonEvents> = new MapInjector(
      map,
      canvas
    );

    const cleanups = [];

    cleanups.push(mapInjector.addEventListener(CommonEvents.click));
    cleanups.push(mapInjector.addEventListener(CommonEvents.contextmenu));

    map.addOverlay(overlay);

    return cleanups;
  }

  public show(coordinates: Coordinate) {
    OverlaysService.showOverlay(this._menu, coordinates);
  }

  public hide() {
    OverlaysService.hideOverlay(this._menu);
  }
}

export default new ContextMenuStore();
