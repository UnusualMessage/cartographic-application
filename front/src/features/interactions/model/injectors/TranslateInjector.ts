import { Feature } from "ol";
import { Polygon } from "ol/geom";
import { Translate } from "ol/interaction";
import { TranslateEvent } from "ol/interaction/Translate";

import { GeozonesStore } from "@entities/geozone";
import ListenersInjector, {
  TranslateEvent as TranslateEventType,
} from "@shared/api/types/map/ListenersInjector";

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
