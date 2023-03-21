import { makeAutoObservable, runInAction } from "mobx";
import { Map, Overlay } from "ol";
import { Coordinate } from "ol/coordinate";
import { ReactNode } from "react";

import { tooltipId, tooltipOffset } from "../../../constants";
import { OverlaysService } from "../../services";
import { CustomOverlay } from "../../types";

class TooltipStore {
  private _tooltip: CustomOverlay;
  private _text: ReactNode;

  constructor() {
    this._tooltip = {
      overlay: undefined,
      element: undefined,
      active: false,
    };

    this._text = "";

    makeAutoObservable(this);
  }

  public get coordinates() {
    return this._tooltip.overlay?.getPosition();
  }

  public get active() {
    return this._tooltip.active;
  }

  public get text() {
    return this._text;
  }

  public set text(value) {
    this._text = value;
  }

  public init(element: HTMLElement, map: Map) {
    OverlaysService.removeOverlay(this._tooltip, map);

    const overlay = new Overlay({
      element: element,
      id: tooltipId,
      offset: tooltipOffset,
    });

    this._tooltip = {
      overlay: overlay,
      element: element,
      active: false,
    };

    map.addOverlay(overlay);

    return [];
  }

  public show(coordinates: Coordinate) {
    runInAction(() => {
      OverlaysService.showOverlay(this._tooltip, coordinates);
    });
  }

  public hide() {
    runInAction(() => {
      OverlaysService.hideOverlay(this._tooltip);
    });
  }
}

export default new TooltipStore();
