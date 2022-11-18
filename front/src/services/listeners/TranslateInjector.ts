import { Translate } from "ol/interaction";
import { Feature } from "ol";
import { cloneDeep } from "lodash";

import ListenersInjector, { TranslateEvent } from "./ListenersInjector";
import { GeozonesStore } from "../../stores/entities";
import { rememberFeaturesModifying } from "../../utils/features";

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
      const changes = rememberFeaturesModifying(
        initialFeatures,
        modifiedFeatures
      );
      GeozonesStore.push(changes);
    });
  }
}

export default TranslateInjector;
