import { Point } from "ol/geom";
import { Draw } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";
import { toLonLat } from "ol/proj";

import { measurementLayerId } from "../../../../constants";
import { InteractionsStore, TooltipStore, LayersStore } from "../../../stores";
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
      InteractionsStore.isDrawing = true;
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
      InteractionsStore.isDrawing = false;

      const geometry = event.feature.getGeometry() as Point;
      const coordinate = toLonLat(geometry.getCoordinates());

      TooltipStore.text = `Широта: ${coordinate[1].toFixed(
        2
      )}° Долгота: ${coordinate[0].toFixed(2)}°`;

      TooltipStore.show(geometry.getCoordinates());
    };

    this._draw.on("drawend", onDrawEnd);

    return () => {
      this._draw.un("drawend", onDrawEnd);
    };
  }

  private addDrawAbort() {
    const onDrawAbort = () => {
      TooltipStore.hide();
      InteractionsStore.isDrawing = false;
    };

    this._draw.on("drawabort", onDrawAbort);

    return () => {
      this._draw.un("drawabort", onDrawAbort);
    };
  }
}

export default CoordinateMeasurementInjector;
