import { makeAutoObservable } from "mobx";
import { Map } from "ol";
import { Draw } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import {
  invoke,
  getDrawCoordinateStyle,
  getDrawLengthStyle,
  getDrawAreaStyle,
} from "../../../lib";
import {
  LengthMeasurementInjector,
  DrawInjector,
  CoordinateMeasurementInjector,
} from "../../services";
import { ListenersInjector, Callback, DrawEvent, DrawType } from "../../types";

class DrawStore {
  private _draw?: Draw;
  private _cleanups: (Callback | undefined)[];

  constructor() {
    this._cleanups = [];

    makeAutoObservable(this);
  }

  public setup(type: DrawType, source: VectorSource, map: Map | null) {
    if (type === "none" || type === "cursor") {
      return;
    }

    if (this._draw) {
      this.remove(map);
    }

    let draw: Draw;

    switch (type) {
      case "measure-area":
        draw = this.getAreaMeasurementDraw(source);
        break;

      case "measure-length":
        draw = this.getLengthMeasurementDraw(source);
        break;

      case "measure-coordinate":
        draw = this.getCoordinateMeasurementDraw(source);
        break;
      default:
        draw = this.getGeozonesDraw(source);
    }

    map?.addInteraction(draw);

    this._draw = draw;

    return () => {
      this.remove(map);
    };
  }

  private getGeozonesDraw(source: VectorSource) {
    const draw = new Draw({
      type: "Polygon",
      source: source,
    });

    const drawInjector: ListenersInjector<DrawEvent> = new DrawInjector(draw);

    this._cleanups.push(drawInjector.addEventListener("drawstart"));
    this._cleanups.push(drawInjector.addEventListener("drawend"));
    this._cleanups.push(drawInjector.addEventListener("drawabort"));

    return draw;
  }

  private getAreaMeasurementDraw(source: VectorSource) {
    return new Draw({
      source: source,
      trace: true,
      type: "Polygon",
      style: (feature) => {
        return getDrawAreaStyle(feature, 0);
      },
    });
  }

  private getLengthMeasurementDraw(source: VectorSource) {
    const draw = new Draw({
      source: source,
      type: "LineString",
      style: (feature) => {
        return getDrawLengthStyle(feature, 0);
      },
    });

    const drawInjector: ListenersInjector<DrawEvent> =
      new LengthMeasurementInjector(draw);

    this._cleanups.push(drawInjector.addEventListener("drawstart"));
    this._cleanups.push(drawInjector.addEventListener("drawend"));
    this._cleanups.push(drawInjector.addEventListener("drawabort"));

    return draw;
  }

  private getCoordinateMeasurementDraw(source: VectorSource) {
    const draw = new Draw({
      source: source,
      type: "Point",
      style: (feature) => {
        return getDrawCoordinateStyle(feature, 0);
      },
    });

    const drawInjector: ListenersInjector<DrawEvent> =
      new CoordinateMeasurementInjector(draw);

    this._cleanups.push(drawInjector.addEventListener("drawstart"));
    this._cleanups.push(drawInjector.addEventListener("drawend"));
    this._cleanups.push(drawInjector.addEventListener("drawabort"));

    return draw;
  }

  private remove(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._draw) {
      map.removeInteraction(this._draw);

      for (const cleanup of this._cleanups) {
        invoke(cleanup);
      }

      this._draw = undefined;
      this._cleanups = [];
    }
  }
}

export default new DrawStore();
