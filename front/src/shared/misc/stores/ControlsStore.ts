import { makeAutoObservable } from "mobx";

import { MapControl } from "../types";

class ControlsStore {
  private _layersPanelActive: boolean;

  private _currentMapControl: MapControl;
  private _currentSearchCategory: "fields" | "equipment" | "geocoder";

  constructor() {
    this._layersPanelActive = false;

    this._currentMapControl = "search";
    this._currentSearchCategory = "fields";

    makeAutoObservable(this);
  }

  public get currentMapControl() {
    return this._currentMapControl;
  }

  public set currentMapControl(value) {
    this._currentMapControl = value;
  }

  public get currentSearchCategory() {
    return this._currentSearchCategory;
  }

  public set currentSearchCategory(value) {
    this._currentSearchCategory = value;
  }

  public get layersPanelActive() {
    return this._layersPanelActive;
  }

  public switchPanel() {
    this._layersPanelActive = !this.layersPanelActive;
  }
}

export default new ControlsStore();
