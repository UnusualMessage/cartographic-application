import { Feature } from "ol";
import { Modify } from "ol/interaction";
import { ModifyEvent } from "ol/interaction/Modify";

import { ModifyEvents } from "../../enums";
import type { ListenersInjector } from "../../types";

class ModifyInjector implements ListenersInjector<ModifyEvents> {
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
