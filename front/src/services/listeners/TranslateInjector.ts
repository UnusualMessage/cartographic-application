import { Translate } from "ol/interaction";
import { Feature } from "ol";
import { cloneDeep } from "lodash";
import { FeatureLike } from "ol/Feature";

import { Change, ChangeSet, Undo } from "../../types/map";
import ListenersInjector, { TranslateEvent } from "./ListenersInjector";
import { GeozonesStore } from "../../stores/entities";
import { InteractionsStore } from "../../stores/map";

class TranslateInjector implements ListenersInjector<TranslateEvent> {
  private _translate: Translate;

  constructor(translate: Translate) {
    this._translate = translate;
  }

  public addEventListener() {
    this.addTranslate();
  }

  private addTranslate() {
    let initialFeatures: Feature[];

    this._translate.on("translatestart", (event) => {
      initialFeatures = cloneDeep(event.features.getArray()) as Feature[];
    });

    this._translate.on("translateend", (event) => {
      const modifiedFeatures = event.features.getArray() as Feature[];

      const type = InteractionsStore.interactionType;

      const set: ChangeSet<FeatureLike> = [];

      for (const newFeature of modifiedFeatures) {
        const undo: Undo<FeatureLike> = (
          oldFeature: FeatureLike,
          newFeature: FeatureLike
        ) => {
          (newFeature as Feature).setGeometry(
            (oldFeature as Feature).getGeometry()
          );
        };

        const oldFeature = initialFeatures.at(
          modifiedFeatures.indexOf(newFeature)
        );

        if (oldFeature) {
          const change: Change<FeatureLike> = {
            action: "modifyFeature",
            newValue: newFeature,
            oldValue: oldFeature,
            undo: undo,
          };

          set.push(change);
        }
      }

      if (type === "geozones" || type === "cursor") {
        GeozonesStore.push(set);
      }
    });
  }
}

export default TranslateInjector;
