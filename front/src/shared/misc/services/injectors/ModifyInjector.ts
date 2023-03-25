import { Feature } from "ol";
import { Modify } from "ol/interaction";
import { ModifyEvent } from "ol/interaction/Modify";

import type {
  ListenersInjector,
  ModifyEvent as ModifyEventType,
} from "../../types";

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
      console.log(modifiedFeatures);
    };

    this._modify.on("modifyend", onModifyEnd);
    console.log("modifyend injected");

    return () => {
      this._modify.un("modifyend", onModifyEnd);
      console.log("modifyend removed");
    };
  }
}

export default ModifyInjector;
