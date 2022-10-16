import { makeAutoObservable } from "mobx";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { DragBox, Draw, Modify, Select, Snap, Translate } from "ol/interaction";
import {
  altKeyOnly,
  platformModifierKeyOnly,
  primaryAction,
} from "ol/events/condition";
import { Type } from "ol/geom/Geometry";

import { DrawType } from "../types/DrawType";
import {
  DragBoxEvent,
  DragBoxInjector,
  DrawEvent,
  DrawInjector,
  ListenersInjector,
  ModifyEvent,
  ModifyInjector,
  SelectEvent,
  SelectInjector,
  TranslateEvent,
  TranslateInjector,
} from "../services/listeners";
import { measureStyleFunction } from "../utils/styles/measureStyleFunction";

interface Interactions {
  select: Select | null;
  translate: Translate | null;
  draw: Draw | null;
  snap: Snap | null;
  modify: Modify | null;
  dragBox: DragBox | null;
}

class InteractionsStore {
  private _drawType: DrawType;
  private _drawing: boolean;

  private _measurementActive: boolean;

  private _interactions: Interactions;

  constructor() {
    this._drawType = "Polygon";
    this._drawing = false;

    this._measurementActive = false;

    this._interactions = {
      select: null,
      translate: null,
      draw: null,
      snap: null,
      modify: null,
      dragBox: null,
    };

    makeAutoObservable(this);
  }

  public get drawType() {
    return this._drawType;
  }

  public set drawType(drawType: DrawType) {
    this._drawType = drawType;
  }

  public set isDrawing(isDrawing: boolean) {
    this._drawing = isDrawing;
  }

  public get measurementActive() {
    return this._measurementActive;
  }

  public set measurementActive(active: boolean) {
    this._measurementActive = active;
  }

  public setupMeasurementTool(source: VectorSource, map: Map) {
    const drawType = "Polygon";

    const draw = new Draw({
      source: source,
      type: drawType,
      style: function (feature) {
        return measureStyleFunction(feature, 0);
      },
    });

    draw.on("drawstart", () => {
      source.clear();
    });

    this._interactions.draw = draw;

    map.addInteraction(draw);
  }

  public addDraw(source: VectorSource, map: Map, drawType: DrawType) {
    if (this._interactions.draw) {
      map.removeInteraction(this._interactions.draw);
    }

    if (drawType === "None") {
      return;
    }

    const draw = new Draw({
      type: this.drawType as Type,
      source: source,
    });

    const drawInjector: ListenersInjector<DrawEvent> = new DrawInjector(draw);

    drawInjector.addEventListener("drawstart");
    drawInjector.addEventListener("drawend");
    drawInjector.addEventListener("drawabort");

    map.addInteraction(draw);

    this._interactions.draw = draw;
  }

  public stopDrawing() {
    if (this._interactions.draw) {
      this._interactions.draw.abortDrawing();
    }
  }

  public addSelectAndTranslate(source: VectorSource, map: Map) {
    if (this._interactions.select) {
      map.removeInteraction(this._interactions.select);
    }

    if (this._interactions.translate) {
      map.removeInteraction(this._interactions.translate);
    }

    const select = new Select();

    const dragBox = new DragBox({
      condition: platformModifierKeyOnly,
    });

    const translate = new Translate({
      features: select.getFeatures(),
      condition: (event) => {
        return primaryAction(event) && !this._drawing;
      },
    });

    const dragBoxInjector: ListenersInjector<DragBoxEvent> =
      new DragBoxInjector(dragBox, select, source);

    const selectInjector: ListenersInjector<SelectEvent> = new SelectInjector(
      select
    );

    const translateInjector: ListenersInjector<TranslateEvent> =
      new TranslateInjector(translate);

    selectInjector.addEventListener("select");
    dragBoxInjector.addEventListener("boxstart");
    dragBoxInjector.addEventListener("boxend");
    translateInjector.addEventListener("translatestart");

    map.addInteraction(select);
    map.addInteraction(translate);
    map.addInteraction(dragBox);

    this._interactions.select = select;
    this._interactions.translate = translate;
    this._interactions.dragBox = dragBox;
  }

  public addModify(source: VectorSource, map: Map) {
    if (this._interactions.modify) {
      map.removeInteraction(this._interactions.modify);
    }

    const modify = new Modify({
      source: source,
      condition: altKeyOnly,
    });

    const modifyInjector: ListenersInjector<ModifyEvent> = new ModifyInjector(
      modify
    );
    modifyInjector.addEventListener("modifystart");

    map.addInteraction(modify);

    this._interactions.modify = modify;
  }

  public addSnap(source: VectorSource, map: Map) {
    if (this._interactions.snap) {
      map.removeInteraction(this._interactions.snap);
    }

    const snap = new Snap({
      source: source,
    });

    map.addInteraction(snap);

    this._interactions.snap = snap;
  }

  public addInteractions(source: VectorSource, map: Map | null) {
    if (!map) {
      return;
    }

    this.addSelectAndTranslate(source, map);
    this.addDraw(source, map, this.drawType);
    this.addModify(source, map);
    this.addSnap(source, map);
  }

  public clearSelectBuffer() {
    this._interactions.select?.getFeatures().clear();
  }

  public removeInteractions(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._interactions.draw) {
      map.removeInteraction(this._interactions.draw);
    }

    if (this._interactions.select) {
      map.removeInteraction(this._interactions.select);
    }

    if (this._interactions.translate) {
      map.removeInteraction(this._interactions.translate);
    }

    if (this._interactions.modify) {
      map.removeInteraction(this._interactions.modify);
    }

    if (this._interactions.snap) {
      map.removeInteraction(this._interactions.snap);
    }

    if (this._interactions.dragBox) {
      map.removeInteraction(this._interactions.dragBox);
    }
  }
}

export default new InteractionsStore();
