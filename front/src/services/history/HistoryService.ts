import { Toaster } from "@blueprintjs/core";

import { FeaturesChangesStore } from "../../stores";
import { NotificationsService } from "../ui";

class HistoryService {
  private _toaster: Toaster | null;

  constructor() {
    this._toaster = null;
  }

  public save() {
    if (FeaturesChangesStore.changesCount) {
      FeaturesChangesStore.save();
      NotificationsService.showNotification("Изменения сохранены", "success");
    }
  }

  public undo() {
    if (FeaturesChangesStore.changesCount) {
      FeaturesChangesStore.undo();
      NotificationsService.showNotification("Изменение отменено", "success");
    }
  }
}

export default new HistoryService();
