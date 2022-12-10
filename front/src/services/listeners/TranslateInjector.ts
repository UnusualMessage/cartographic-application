import { Translate } from "ol/interaction";
import { Feature } from "ol";
import { TranslateEvent } from "ol/interaction/Translate";
import { Polygon } from "ol/geom";

import ListenersInjector, {
  TranslateEvent as TranslateEventType,
} from "./ListenersInjector";
import { GeozonesStore } from "../../stores/entities";

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
      const modifiedFeatures = event.features.getArray() as Feature<Polygon>[];

      const ids = modifiedFeatures.map((item) => item.get("id"));
      const coordinates = modifiedFeatures.map((item) => {
        const geometry = item.getGeometry();

        if (geometry) {
          return geometry.getCoordinates();
        }

        return;
      });

      GeozonesStore.translate(ids, coordinates);
    };

    this._translate.on("translateend", onTranslateEnd);

    return () => {
      this._translate.un("translateend", onTranslateEnd);
    };
  }
}

export default TranslateInjector;
