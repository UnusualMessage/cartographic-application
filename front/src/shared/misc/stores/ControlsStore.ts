import { makeAutoObservable } from "mobx";
import { FullScreenHandle } from "react-full-screen";

import { MapControl } from "../types";

class ControlsStore {
  private _fullScreenHandle: FullScreenHandle | null;
  private _fullScreenActive: boolean;

  private _mapDrawerActive: boolean;
  private _layersPanelActive: boolean;

  private _currentMapControl: MapControl;

  private _currentSearchCategory: "fields" | "equipment" | "geocoder";

  constructor() {
    this._mapDrawerActive = false;
    this._layersPanelActive = false;

    this._fullScreenActive = false;
    this._fullScreenHandle = null;

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

  public get fullScreenActive() {
    return this._fullScreenActive;
  }

  public set fullScreenActive(active) {
    this._fullScreenActive = active;
  }

  public get fullScreenHandle() {
    return this._fullScreenHandle;
  }

  public set fullScreenHandle(handle) {
    this._fullScreenHandle = handle;
  }

  public get layersPanelActive() {
    return this._layersPanelActive;
  }

  public get mapDrawerActive() {
    return this._mapDrawerActive;
  }

  public switchPanel() {
    this._layersPanelActive = !this.layersPanelActive;
  }

  public showDrawer() {
    this._mapDrawerActive = true;
  }

  public hideDrawer() {
    this._mapDrawerActive = false;
  }
}

export default new ControlsStore();
