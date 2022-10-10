import { Modify } from "ol/interaction";
import { Feature } from "ol";
import { cloneDeep } from "lodash";
import { FeatureLike } from "ol/Feature";

import Change, { Undo } from "../../types/Change";
import ListenersInjector, { ModifyEvent } from "./ListenersInjector";
import { FeaturesChangesStore } from "../../stores/changes";

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

      const undo: Undo<FeatureLike[]> = (
        oldFeatures: FeatureLike[],
        newFeatures: FeatureLike[]
      ) => {
        for (let i = 0; i < oldFeatures.length; ++i) {
          (newFeatures[i] as Feature).setGeometry(
            (oldFeatures[i] as Feature).getGeometry()
          );
        }
      };

      const change: Change<FeatureLike[]> = {
        action: "modifyFeature",
        newValue: modifiedFeatures,
        oldValue: initialFeatures,
        undo: undo,
      };

      FeaturesChangesStore.push(change);
    });
  }
}

export default ModifyInjector;
