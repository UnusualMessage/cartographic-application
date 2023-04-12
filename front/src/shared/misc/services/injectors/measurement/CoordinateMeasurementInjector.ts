import { Point } from "ol/geom";
import { Draw } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";

import { measurementLayerId } from "../../../../constants";
import { formatCoordinate } from "../../../../lib";
import {
  InteractionsStore,
  TooltipStore,
  MeasurementStore,
} from "../../../stores";
import { ListenersInjector, DrawEvent as DrawEventType } from "../../../types";
import { LayersService } from "../../map";

class CoordinateMeasurementInjector
  implements ListenersInjector<DrawEventType>
{
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
      InteractionsStore.startInteraction();
      LayersService.clearVectorLayer(measurementLayerId);
      TooltipStore.hide();
    };

    this._draw.on("drawstart", onDrawStart);
    console.log("drawabort injected");

    return () => {
      this._draw.un("drawstart", onDrawStart);
      console.log("drawabort removed");
    };
  }

  private addDrawEnd() {
    const onDrawEnd = (event: DrawEvent) => {
      InteractionsStore.stopInteraction();

      const point = event.feature.getGeometry() as Point;
      const coordinate = formatCoordinate(point);

      TooltipStore.text = coordinate;
      MeasurementStore.coordinate = coordinate;

      TooltipStore.show(point.getCoordinates());
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
      InteractionsStore.stopInteraction();
    };

    this._draw.on("drawabort", onDrawAbort);
    console.log("drawabort injected");

    return () => {
      this._draw.un("drawabort", onDrawAbort);
      console.log("drawabort removed");
    };
  }
}

export default CoordinateMeasurementInjector;
