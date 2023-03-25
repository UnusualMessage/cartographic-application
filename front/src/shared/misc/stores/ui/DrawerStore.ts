import { makeAutoObservable } from "mobx";

class DrawerStore {
  private _open: boolean;

  constructor() {
    this._open = false;

    makeAutoObservable(this);
  }

  public get open() {
    return this._open;
  }

  public show() {
    this._open = true;
  }

  public hide() {
    this._open = false;
  }
}

export default new DrawerStore();
