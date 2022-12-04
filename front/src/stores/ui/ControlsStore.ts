import { makeAutoObservable } from "mobx";

class ControlsStore {
  private _mapDrawerActive: boolean;
  private _layersPanelActive: boolean;

  constructor() {
    this._mapDrawerActive = false;
    this._layersPanelActive = false;

    makeAutoObservable(this);
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
