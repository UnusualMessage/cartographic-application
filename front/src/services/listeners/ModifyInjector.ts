import { Modify } from "ol/interaction";
import { Feature } from "ol";
import { cloneDeep } from "lodash";

import ListenersInjector, { ModifyEvent } from "./ListenersInjector";
import { GeozonesStore } from "../../stores/entities";
import { rememberFeaturesModifying } from "../../utils/features";

class ModifyInjector implements ListenersInjector<ModifyEvent> {
  private _modify: Modify;

  constructor(modify: Modify) {
    this._modify = modify;
  }

  addEventListener() {
    this.addModify();
  }

  private addModify() {
    let initialFeatures: Feature[];

    this._modify.on("modifystart", (event) => {
      initialFeatures = cloneDeep(event.features.getArray()) as Feature[];
    });

    this._modify.on("modifyend", (event) => {
      const modifiedFeatures = event.features.getArray() as Feature[];
      const changes = rememberFeaturesModifying(
        initialFeatures,
        modifiedFeatures
      );
      GeozonesStore.push(changes);
    });
  }
}

export default ModifyInjector;
