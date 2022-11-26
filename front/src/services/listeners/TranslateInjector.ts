import { Translate } from "ol/interaction";
import { Feature } from "ol";
import { cloneDeep } from "lodash";

import ListenersInjector, {
  TranslateEvent as TranslateEventType,
} from "./ListenersInjector";
import { GeozonesStore } from "../../stores/entities";
import { rememberFeaturesModifying } from "../../utils/features";
import { TranslateEvent } from "ol/interaction/Translate";

class TranslateInjector implements ListenersInjector<TranslateEventType> {
  private _translate: Translate;

  constructor(translate: Translate) {
    this._translate = translate;
  }

  public addEventListener() {
    return this.addTranslate();
  }

  private addTranslate() {
    let initialFeatures: Feature[];

    const onTranslateStart = (event: TranslateEvent) => {
      initialFeatures = cloneDeep(event.features.getArray()) as Feature[];
    };

    const onTranslateEnd = (event: TranslateEvent) => {
      const modifiedFeatures = event.features.getArray() as Feature[];
      const changes = rememberFeaturesModifying(
        initialFeatures,
        modifiedFeatures
      );
      GeozonesStore.push(changes);
    };

    this._translate.on("translatestart", onTranslateStart);
    this._translate.on("translateend", onTranslateEnd);

    return () => {
      this._translate.un("translatestart", onTranslateStart);
      this._translate.un("translateend", onTranslateEnd);
    };
  }
}

export default TranslateInjector;
