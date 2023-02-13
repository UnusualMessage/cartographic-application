import { Toaster } from "@blueprintjs/core";

class NotificationsService {
  private _toaster: Toaster | null;

  constructor() {
    this._toaster = null;
  }

  public set toaster(value: Toaster | null) {
    this._toaster = value;
  }
}

export default new NotificationsService();
