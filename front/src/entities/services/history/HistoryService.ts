import { Toaster } from "@blueprintjs/core";

import { GeozonesStore } from "../../stores/entities";
import { NotificationsService } from "../ui";

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
