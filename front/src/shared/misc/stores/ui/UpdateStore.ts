import { makeAutoObservable } from "mobx";

import type { UpdateStatus } from "../../types";

class UpdateStore {
  private _status: UpdateStatus;

  constructor() {
    this._status = "active";

    makeAutoObservable(this);
  }

  public get stopped() {
    return this._status === "stopped";
  }

  public get active() {
    return this._status === "active";
  }

  public get paused() {
    return this._status === "paused";
  }

  public stop() {
    this._status = "stopped";
  }

  public pause() {
    this._status = "paused";
  }

  public resume() {
    this._status = "active";
  }
}

export default new UpdateStore();
