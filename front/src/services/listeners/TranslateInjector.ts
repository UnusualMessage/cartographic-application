import { Translate } from "ol/interaction";
import { Feature } from "ol";
import { cloneDeep } from "lodash";
import { FeatureLike } from "ol/Feature";

import Change, { Undo } from "../../types/Change";
import ListenersInjector, { TranslateEvent } from "./ListenersInjector";
import { FeaturesChangesStore } from "../../stores";

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
        action: "translateFeature",
        newValue: modifiedFeatures,
        oldValue: initialFeatures,
        undo: undo,
      };

      FeaturesChangesStore.push(change);
    });
  }
}

export default TranslateInjector;
