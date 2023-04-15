import { Translate } from "ol/interaction";
import { TranslateEvent } from "ol/interaction/Translate";

import { TranslateEvents } from "../../enums";
import { FeaturesStore } from "../../stores";
import type { ListenersInjector } from "../../types";

class TranslateInjector implements ListenersInjector<TranslateEvents> {
  private _translate: Translate;

  constructor(translate: Translate) {
    this._translate = translate;
  }

  public addEventListener(event: TranslateEvents) {
    switch (event) {
      case TranslateEvents.translateend:
        return this.addTranslateEnd();
      case TranslateEvents.translatestart:
        return this.addTranslateStart();
    }
  }

  private addTranslateStart() {
    const onTranslateStart = (event: TranslateEvent) => {
      console.log(event);
    };

    this._translate.on("translatestart", onTranslateStart);
    console.log("translatestart injected");

    return () => {
      this._translate.un("translatestart", onTranslateStart);
      console.log("translatestart removed");
    };
  }

  private addTranslateEnd() {
    const onTranslateEnd = (event: TranslateEvent) => {
      const features = event.features.getArray();

      for (const feature of features) {
        FeaturesStore.updateFeature(feature);
      }
    };

    this._translate.on("translateend", onTranslateEnd);
    console.log("translatestart injected");

    return () => {
      this._translate.un("translateend", onTranslateEnd);
      console.log("translatestart removed");
    };
  }
}

export default TranslateInjector;
