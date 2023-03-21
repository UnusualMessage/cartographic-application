import { makeAutoObservable } from "mobx";
import { Map, Overlay } from "ol";

import { tooltipId, tooltipOffset } from "../../../constants";
import { OverlaysService } from "../../services";
import { CustomOverlay } from "../../types";

class TooltipStore {
  private _tooltip: CustomOverlay;

  constructor() {
    this._tooltip = {
      overlay: undefined,
      element: undefined,
      active: false,
    };

    makeAutoObservable(this);
  }

  public get coordinates() {
    return this._tooltip.overlay?.getPosition();
  }

  public get active() {
    return this._tooltip.active;
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
}

export default new TooltipStore();
