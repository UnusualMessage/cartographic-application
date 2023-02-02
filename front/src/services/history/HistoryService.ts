import { Toaster } from "@blueprintjs/core";

import { NotificationsService } from "../ui";
import { GeozonesStore } from "../../stores/entities";

class HistoryService {
  private _toaster: Toaster | null;

  constructor() {
    this._toaster = null;
  }

  public save() {
    if (GeozonesStore.changesCount) {
      GeozonesStore.save();
      NotificationsService.showNotification("Изменения сохранены", "success");
    }
  }

  public undo() {
    if (GeozonesStore.changesCount) {
      GeozonesStore.undo();
      NotificationsService.showNotification("Изменение отменено", "success");
    }
  }
}

export default new HistoryService();
