import { makeAutoObservable } from "mobx";
import { FullScreenHandle } from "react-full-screen";

class ControlsStore {
  private _fullScreenHandle: FullScreenHandle | null;
  private _fullScreenActive: boolean;

  private _mapDrawerActive: boolean;
  private _layersPanelActive: boolean;

  constructor() {
    this._mapDrawerActive = false;
    this._layersPanelActive = false;

    this._fullScreenActive = false;
    this._fullScreenHandle = null;

    makeAutoObservable(this);
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

  public showPanel() {
    this._layersPanelActive = true;
  }

  public hidePanel() {
    this._layersPanelActive = false;
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
