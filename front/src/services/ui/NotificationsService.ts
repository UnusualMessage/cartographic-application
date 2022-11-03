import { Intent, Toaster } from "@blueprintjs/core";

class NotificationsService {
  private _toaster: Toaster | null;

  constructor() {
    this._toaster = null;
  }

  public set toaster(value: Toaster | null) {
    this._toaster = value;
  }

  public showNotification(message: string, intent: Intent) {
    this._toaster?.show({
      message: message,
      timeout: 2000,
      intent: intent,
    });
  }
}

export default new NotificationsService();
