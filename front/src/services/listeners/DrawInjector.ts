import { Draw } from "ol/interaction";
import { v4 as uuid } from "uuid";
import { FeatureLike } from "ol/Feature";

import ListenersInjector, { DrawEvent } from "./ListenersInjector";
import { FeaturesChangesStore } from "../../stores";
import { InteractionsStore } from "../../stores/map";
import Change, { Undo } from "../../types/map/Change";
import { LayersService } from "../map";
import { geozonesLayerId } from "../../assets/map/config";
import { GeozonesStore } from "../../stores/entities";

class DrawInjector implements ListenersInjector<DrawEvent> {
  private _draw: Draw;

  constructor(draw: Draw) {
    this._draw = draw;
  }

  public addEventListener(event: DrawEvent): void {
    switch (event) {
      case "drawstart":
        this.addDrawStart();
        break;
      case "drawabort":
        this.addDrawAbort();
        break;
      case "drawend":
        this.addDrawEnd();
        break;
    }
  }

  private addDrawStart() {
    this._draw.on("drawstart", () => {
      InteractionsStore.isDrawing = true;
    });
  }

  private addDrawEnd() {
    this._draw.on("drawend", (event) => {
      InteractionsStore.isDrawing = false;
      const interactionType = InteractionsStore.interactionType;

      const feature = event.feature;
      feature.setId(uuid());

      if (interactionType === "geozones") {
        GeozonesStore.add(feature);

        const undo: Undo<FeatureLike[]> = (oldValue, newValue) => {
          const feature = newValue.at(0);

          if (feature) {
            LayersService.removeFeatureFromLayer(feature, geozonesLayerId);
            GeozonesStore.remove(feature);
          }
        };

        const change: Change<FeatureLike[]> = {
          action: "createFeature",
          oldValue: [],
          newValue: [feature],
          undo: undo,
        };

        FeaturesChangesStore.push(change);
      }
    });
  }

  private addDrawAbort() {
    this._draw.on("drawend", () => {
      InteractionsStore.isDrawing = false;
    });
  }
}

export default DrawInjector;
