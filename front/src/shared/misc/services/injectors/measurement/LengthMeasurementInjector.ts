import { Draw } from "ol/interaction";

import { measurementLayerId } from "../../../../constants";
import { DrawEvents } from "../../../enums";
import { InteractionsStore, TooltipStore } from "../../../stores";
import { ListenersInjector } from "../../../types";
import { LayersService } from "../../map";

class LengthMeasurementInjector implements ListenersInjector<DrawEvents> {
  private _draw: Draw;

  constructor(draw: Draw) {
    this._draw = draw;
  }

  public addEventListener(event: DrawEvents) {
    switch (event) {
      case DrawEvents.drawstart:
        return this.addDrawStart();
      case DrawEvents.drawabort:
        return this.addDrawAbort();
      case DrawEvents.drawend:
        return this.addDrawEnd();
    }
  }

  private addDrawStart() {
    const onDrawStart = () => {
      InteractionsStore.startInteraction();
      LayersService.clearVectorLayer(measurementLayerId);
    };

    this._draw.on("drawstart", onDrawStart);
    console.log("drawstart injected");

    return () => {
      this._draw.un("drawstart", onDrawStart);
      console.log("drawstart removed");
    };
  }

  private addDrawEnd() {
    const onDrawEnd = () => {
      InteractionsStore.stopInteraction();
    };

    this._draw.on("drawend", onDrawEnd);
    console.log("drawend injected");

    return () => {
      this._draw.un("drawend", onDrawEnd);
      console.log("drawend removed");
    };
  }

  private addDrawAbort() {
    const onDrawAbort = () => {
      TooltipStore.hide();
      InteractionsStore.startInteraction();
    };

    this._draw.on("drawabort", onDrawAbort);
    console.log("drawabort injected");

    return () => {
      this._draw.un("drawabort", onDrawAbort);
      console.log("drawabort removed");
    };
  }
}

export default LengthMeasurementInjector;
