import { makeAutoObservable } from "mobx";
import { Map } from "ol";
import { Draw } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import {
  invoke,
  getDrawCoordinateStyle,
  getDrawLengthStyle,
  getDrawAreaStyle,
  getGeozoneStyle,
} from "../../../lib";
import { Interactions, DrawEvents } from "../../enums";
import {
  LengthMeasurementInjector,
  DrawInjector,
  CoordinateMeasurementInjector,
  AreaMeasurementInjector,
} from "../../services";
import { ListenersInjector, Callback } from "../../types";

class DrawStore {
  private _draw?: Draw;
  private _cleanups: (Callback | undefined)[];

  constructor() {
    this._cleanups = [];

    makeAutoObservable(this);
  }

  public setup(type: Interactions, source: VectorSource, map: Map | null) {
    if (type === Interactions.none || type === Interactions.cursor) {
      return;
    }

    if (this._draw) {
      this.remove(map);
    }

    let draw: Draw;

    switch (type) {
      case Interactions.area:
        draw = this.getAreaMeasurementDraw(source);
        break;

      case Interactions.length:
        draw = this.getLengthMeasurementDraw(source);
        break;

      case Interactions.coordinate:
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
      style: getGeozoneStyle,
    });

    const drawInjector: ListenersInjector<DrawEvents> = new DrawInjector(draw);

    this.addEventListeners(drawInjector);

    return draw;
  }

  private getAreaMeasurementDraw(source: VectorSource) {
    const draw = new Draw({
      source: source,
      trace: true,
      type: "Polygon",
      style: getDrawAreaStyle,
    });

    const drawInjector: ListenersInjector<DrawEvents> =
      new AreaMeasurementInjector(draw);

    this.addEventListeners(drawInjector);

    return draw;
  }

  private getLengthMeasurementDraw(source: VectorSource) {
    const draw = new Draw({
      source: source,
      type: "LineString",
      style: getDrawLengthStyle,
    });

    const drawInjector: ListenersInjector<DrawEvents> =
      new LengthMeasurementInjector(draw);

    this.addEventListeners(drawInjector);

    return draw;
  }

  private getCoordinateMeasurementDraw(source: VectorSource) {
    const draw = new Draw({
      source: source,
      type: "Point",
      style: getDrawCoordinateStyle,
    });

    const drawInjector: ListenersInjector<DrawEvents> =
      new CoordinateMeasurementInjector(draw);

    this.addEventListeners(drawInjector);

    return draw;
  }

  private addEventListeners(injector: ListenersInjector<DrawEvents>) {
    this._cleanups.push(injector.addEventListener(DrawEvents.drawstart));
    this._cleanups.push(injector.addEventListener(DrawEvents.drawend));
    this._cleanups.push(injector.addEventListener(DrawEvents.drawabort));
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
