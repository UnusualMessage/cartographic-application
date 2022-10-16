import { Intent, Toaster } from "@blueprintjs/core";
import { FeaturesChangesStore } from "../../stores";

class HistoryService {
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

  public save() {
    if (FeaturesChangesStore.changesCount) {
      FeaturesChangesStore.save();
      this.showNotification("Изменения сохранены", "success");
    }
  }

  public undo() {
    if (FeaturesChangesStore.changesCount) {
      FeaturesChangesStore.undo();
      this.showNotification("Изменение отменено", "success");
    }
  }
}

export default new HistoryService();
