import { makeAutoObservable } from "mobx";

class AlertsStore {
  private _isOpen: boolean;
  private _info: string;

  constructor() {
    this._isOpen = false;
    this._info = "";

    makeAutoObservable(this);
  }

  public get info() {
    return this._info;
  }

  public set info(value) {
    this._info = value;
  }

  public get isOpen() {
    return this._isOpen;
  }

  public set isOpen(value) {
    this._isOpen = value;
  }
}

export default new AlertsStore();
