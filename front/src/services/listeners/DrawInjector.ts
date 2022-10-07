import { Draw } from "ol/interaction";
import { v4 as uuid } from "uuid";

import ListenersInjector, { DrawEvent } from "./ListenersInjector";
import InteractionsStore from "../../stores/InteractionsStore";
import FeaturesStore from "../../stores/FeaturesStore";

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

      const feature = event.feature;
      feature.setId(uuid());

      FeaturesStore.addFeature(event.feature);
    });
  }

  private addDrawAbort() {
    this._draw.on("drawend", () => {
      InteractionsStore.isDrawing = false;
    });
  }
}

export default DrawInjector;
