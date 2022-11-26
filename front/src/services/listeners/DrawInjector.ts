import { Draw } from "ol/interaction";
import { v4 as uuid } from "uuid";
import { FeatureLike } from "ol/Feature";

import ListenersInjector, {
  DrawEvent as DrawEventType,
} from "./ListenersInjector";
import { InteractionsStore } from "../../stores/map";
import { Change, ChangeSet, Undo } from "../../types/map";
import { LayersService } from "../map";
import { geozonesLayerId } from "../../assets/map/config";
import { GeozonesStore } from "../../stores/entities";
import { Fill, Stroke, Style } from "ol/style";
import { DrawEvent } from "ol/interaction/Draw";

class DrawInjector implements ListenersInjector<DrawEventType> {
  private _draw: Draw;

  constructor(draw: Draw) {
    this._draw = draw;
  }

  public addEventListener(event: DrawEventType) {
    switch (event) {
      case "drawstart":
        return this.addDrawStart();
      case "drawabort":
        return this.addDrawAbort();
      case "drawend":
        return this.addDrawEnd();
    }
  }

  private addDrawStart() {
    const onDrawStart = () => {
      InteractionsStore.isDrawing = true;
    };

    this._draw.on("drawstart", onDrawStart);

    return () => {
      this._draw.un("drawstart", onDrawStart);
    };
  }

  private addDrawEnd() {
    const onDrawEnd = (event: DrawEvent) => {
      InteractionsStore.isDrawing = false;
      const interactionType = InteractionsStore.interactionType;

      const feature = event.feature;
      feature.setId(uuid());

      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      feature.setStyle(
        new Style({
          fill: new Fill({
            color: `rgb(${red},${green},${blue},${0.2})`,
          }),

          stroke: new Stroke({
            color: `rgb(${red},${green},${blue},${1})`,
            width: 2,
          }),
        })
      );

      if (interactionType === "geozones") {
        GeozonesStore.add(feature);

        const undo: Undo<FeatureLike> = (oldValue, newValue) => {
          LayersService.removeFeatureFromLayer(newValue, geozonesLayerId);
          GeozonesStore.remove(newValue);
        };

        const set: ChangeSet<FeatureLike> = [];

        const change: Change<FeatureLike> = {
          action: "createFeature",
          oldValue: feature,
          newValue: feature,
          undo: undo,
        };

        set.push(change);

        GeozonesStore.push(set);
      }
    };

    this._draw.on("drawend", onDrawEnd);

    return () => {
      this._draw.un("drawend", onDrawEnd);
    };
  }

  private addDrawAbort() {
    const onDrawAbort = () => {
      InteractionsStore.isDrawing = false;
    };

    this._draw.on("drawabort", onDrawAbort);

    return () => {
      this._draw.un("drawabort", onDrawAbort);
    };
  }
}

export default DrawInjector;
