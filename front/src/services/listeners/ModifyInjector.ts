import { Modify } from "ol/interaction";
import { Feature } from "ol";
import { ModifyEvent } from "ol/interaction/Modify";

import ListenersInjector, {
  ModifyEvent as ModifyEventType,
} from "./ListenersInjector";

class ModifyInjector implements ListenersInjector<ModifyEventType> {
  private _modify: Modify;

  constructor(modify: Modify) {
    this._modify = modify;
  }

  addEventListener() {
    return this.addModify();
  }

  private addModify() {
    const onModifyEnd = (event: ModifyEvent) => {
      const modifiedFeatures = event.features.getArray() as Feature[];
    };

    this._modify.on("modifyend", onModifyEnd);

    return () => {
      this._modify.un("modifyend", onModifyEnd);
    };
  }
}

export default ModifyInjector;
