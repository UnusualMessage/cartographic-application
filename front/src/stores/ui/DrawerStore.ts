import { makeAutoObservable } from "mobx";

class DrawerStore {
  private _mapDrawerActive: boolean;

  constructor() {
    this._mapDrawerActive = false;

    makeAutoObservable(this);
  }

  public get mapDrawerActive() {
    return this._mapDrawerActive;
  }

  public show() {
    this._mapDrawerActive = true;
  }

  public hide() {
    this._mapDrawerActive = false;
  }
}

export default new DrawerStore();
