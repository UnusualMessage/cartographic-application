import { Draw } from "ol/interaction";

import { measurementLayerId } from "../../../../constants";
import { InteractionsStore, TooltipStore, LayersStore } from "../../../stores";
import { ListenersInjector, DrawEvent as DrawEventType } from "../../../types";

class AreaMeasurementInjector implements ListenersInjector<DrawEventType> {
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
      InteractionsStore.startDrawing();
      LayersStore.clearVectorLayer(measurementLayerId);
    };

    this._draw.on("drawstart", onDrawStart);

    return () => {
      this._draw.un("drawstart", onDrawStart);
    };
  }

  private addDrawEnd() {
    const onDrawEnd = () => {
      InteractionsStore.stopDrawing();
    };

    this._draw.on("drawend", onDrawEnd);

    return () => {
      this._draw.un("drawend", onDrawEnd);
    };
  }

  private addDrawAbort() {
    const onDrawAbort = () => {
      TooltipStore.hide();
      InteractionsStore.startDrawing();
    };

    this._draw.on("drawabort", onDrawAbort);

    return () => {
      this._draw.un("drawabort", onDrawAbort);
    };
  }
}

export default AreaMeasurementInjector;
