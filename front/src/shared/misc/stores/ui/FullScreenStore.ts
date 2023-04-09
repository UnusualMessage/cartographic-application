import { makeAutoObservable } from "mobx";
import { FullScreenHandle } from "react-full-screen";

class FullScreenStore {
  private _handle?: FullScreenHandle;
  private _active: boolean;

  constructor() {
    this._active = false;
    this._handle = undefined;

    makeAutoObservable(this);
  }

  public get active() {
    return this._active;
  }

  public set active(value) {
    this._active = value;
  }

  public get handle() {
    return this._handle;
  }

  public set handle(handle) {
    this._handle = handle;
  }

  public enter() {
    this._handle?.enter();
    this._active = true;
  }

  public exit() {
    this.handle?.exit();
    this._active = false;
  }
}

export default new FullScreenStore();
