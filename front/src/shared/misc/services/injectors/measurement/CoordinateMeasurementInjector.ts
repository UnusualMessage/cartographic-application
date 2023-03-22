import { Point } from "ol/geom";
import { Draw } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";

import { measurementLayerId } from "../../../../constants";
import { formatCoordinate } from "../../../../lib";
import {
  InteractionsStore,
  TooltipStore,
  LayersStore,
  MeasurementStore,
} from "../../../stores";
import { ListenersInjector, DrawEvent as DrawEventType } from "../../../types";

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
      InteractionsStore.startDrawing();
      LayersStore.clearVectorLayer(measurementLayerId);
      TooltipStore.hide();
    };

    this._draw.on("drawstart", onDrawStart);

    return () => {
      this._draw.un("drawstart", onDrawStart);
    };
  }

  private addDrawEnd() {
    const onDrawEnd = (event: DrawEvent) => {
      InteractionsStore.stopDrawing();

      const point = event.feature.getGeometry() as Point;
      const coordinate = formatCoordinate(point);

      TooltipStore.text = coordinate;
      MeasurementStore.coordinate = coordinate;

      TooltipStore.show(point.getCoordinates());
    };

    this._draw.on("drawend", onDrawEnd);

    return () => {
      this._draw.un("drawend", onDrawEnd);
    };
  }

  private addDrawAbort() {
    const onDrawAbort = () => {
      TooltipStore.hide();
      InteractionsStore.stopDrawing();
    };

    this._draw.on("drawabort", onDrawAbort);

    return () => {
      this._draw.un("drawabort", onDrawAbort);
    };
  }
}

export default CoordinateMeasurementInjector;
