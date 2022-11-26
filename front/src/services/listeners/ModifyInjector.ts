import { Modify } from "ol/interaction";
import { Feature } from "ol";
import { cloneDeep } from "lodash";
import { ModifyEvent } from "ol/interaction/Modify";

import ListenersInjector, {
  ModifyEvent as ModifyEventType,
} from "./ListenersInjector";
import { GeozonesStore } from "../../stores/entities";
import { rememberFeaturesModifying } from "../../utils/features";

class ModifyInjector implements ListenersInjector<ModifyEventType> {
  private _modify: Modify;

  constructor(modify: Modify) {
    this._modify = modify;
  }

  addEventListener() {
    return this.addModify();
  }

  private addModify() {
    let initialFeatures: Feature[];

    const onModifyStart = (event: ModifyEvent) => {
      initialFeatures = cloneDeep(event.features.getArray()) as Feature[];
    };

    const onModifyEnd = (event: ModifyEvent) => {
      const modifiedFeatures = event.features.getArray() as Feature[];
      const changes = rememberFeaturesModifying(
        initialFeatures,
        modifiedFeatures
      );
      GeozonesStore.push(changes);
    };

    this._modify.on("modifystart", onModifyStart);
    this._modify.on("modifyend", onModifyEnd);

    return () => {
      this._modify.un("modifystart", onModifyStart);
      this._modify.un("modifyend", onModifyEnd);
    };
  }
}

export default ModifyInjector;
