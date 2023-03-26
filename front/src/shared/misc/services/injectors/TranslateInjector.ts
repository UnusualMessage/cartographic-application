import { Translate } from "ol/interaction";
import { TranslateEvent } from "ol/interaction/Translate";

import type {
  ListenersInjector,
  TranslateEvent as TranslateEventType,
} from "../../types";

class TranslateInjector implements ListenersInjector<TranslateEventType> {
  private _translate: Translate;

  constructor(translate: Translate) {
    this._translate = translate;
  }

  public addEventListener() {
    return this.addTranslate();
  }

  private addTranslate() {
    const onTranslateEnd = (event: TranslateEvent) => {
      console.log(event);
    };

    this._translate.on("translatestart", onTranslateEnd);
    console.log("translatestart injected");

    return () => {
      this._translate.un("translatestart", onTranslateEnd);
      console.log("translatestart removed");
    };
  }
}

export default TranslateInjector;
