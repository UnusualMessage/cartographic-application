import { makeAutoObservable } from "mobx";
import { FullScreenHandle } from "react-full-screen";

export type ControlType =
  | "search"
  | "measurement"
  | "layers"
  | "drawing"
  | "full-screen"
  | "print"
  | "share"
  | "about";

class ControlsStore {
  private _fullScreenHandle: FullScreenHandle | null;
  private _fullScreenActive: boolean;

  private _mapDrawerActive: boolean;
  private _layersPanelActive: boolean;

  private _currentMapControl: ControlType;

  constructor() {
    this._mapDrawerActive = false;
    this._layersPanelActive = false;

    this._fullScreenActive = false;
    this._fullScreenHandle = null;

    this._currentMapControl = "search";

    makeAutoObservable(this);
  }

  public get currentMapControl() {
    return this._currentMapControl;
  }

  public set currentMapControl(value) {
    this._currentMapControl = value;
  }

  public get fullScreenActive() {
    return this._fullScreenActive;
  }

  public set fullScreenActive(active: boolean) {
    this._fullScreenActive = active;
  }

  public get fullScreenHandle() {
    return this._fullScreenHandle;
  }

  public set fullScreenHandle(handle: FullScreenHandle | null) {
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
