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
} from "../../services/listeners";
import { getMeasurementStyle } from "../../shared/lib/utils/map/getMeasurementStyle";
import { InteractionType } from "../../shared/api/types/map";

interface Interactions {
  select: Select | null;
  translate: Translate | null;
  draw: Draw | null;
  snap: Snap | null;
  modify: Modify | null;
  dragBox: DragBox | null;
}

class InteractionsStore {
  private _interactionType: InteractionType;
  private _drawing: boolean;

  private _interactions: Interactions;

  constructor() {
    this._interactionType = "none";
    this._drawing = false;

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

  public get interactionType() {
    return this._interactionType;
  }

  public set interactionType(value) {
    this._interactionType = value;
  }

  public set isDrawing(isDrawing: boolean) {
    this._drawing = isDrawing;
  }

  public get isGeozoneInteractionsActive() {
    return (
      this._interactionType === "geozones" || this._interactionType === "cursor"
    );
  }

  public get isAuxInteractionsActive() {
    return (
      this._interactionType === "measure-length" ||
      this._interactionType === "measure-area"
    );
  }

  public setupMeasurementTool(source: VectorSource, map: Map) {
    const type = this.interactionType;

    if (type !== "measure-area" && type !== "measure-length") {
      return;
    }

    const drawType = type === "measure-area" ? "Polygon" : "LineString";

    const draw = new Draw({
      source: source,
      type: drawType,
      style: (feature) => {
        return getMeasurementStyle(feature, 0);
      },
    });

    this._interactions.draw = draw;

    map.addInteraction(draw);

    return () => {
      this.removeInteractions(map);
    };
  }

  public addDraw(source: VectorSource, map: Map) {
    if (this._interactions.draw) {
      map.removeInteraction(this._interactions.draw);
    }

    const type = this.interactionType;

    if (type === "cursor") {
      return;
    }

    const drawType: Type = "Polygon";

    const draw = new Draw({
      type: drawType,
      source: source,
    });

    const drawInjector: ListenersInjector<DrawEvent> = new DrawInjector(draw);

    drawInjector.addEventListener("drawstart");
    drawInjector.addEventListener("drawend");
    drawInjector.addEventListener("drawabort");

    map.addInteraction(draw);

    this._interactions.draw = draw;

    return () => {
      this.removeDraw(map);
    };
  }

  public stopDrawing() {
    if (this._interactions.draw) {
      this._interactions.draw.abortDrawing();
    }
  }

  public addSelectAndTranslate(source: VectorSource, map: Map) {
    this.removeSelect(map);
    this.removeTranslate(map);
    this.removeDragBox(map);

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

    return () => {
      this.removeSelect(map);
      this.removeTranslate(map);
      this.removeDragBox(map);
    };
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

    return () => {
      this.removeModify(map);
    };
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

    return () => {
      this.removeSnap(map);
    };
  }

  public addInteractions(source: VectorSource, map: Map | null) {
    if (!map) {
      return;
    }

    this.addSelectAndTranslate(source, map);
    this.addDraw(source, map);
    this.addModify(source, map);
    this.addSnap(source, map);
  }

  public clearSelectBuffer() {
    this._interactions.select?.getFeatures().clear();
  }

  public removeDragBox(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._interactions.dragBox) {
      map.removeInteraction(this._interactions.dragBox);
    }
  }

  public removeDraw(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._interactions.draw) {
      map.removeInteraction(this._interactions.draw);
    }
  }

  public removeSelect(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._interactions.select) {
      map.removeInteraction(this._interactions.select);
    }
  }

  public removeSnap(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._interactions.snap) {
      map.removeInteraction(this._interactions.snap);
    }
  }

  public removeTranslate(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._interactions.translate) {
      map.removeInteraction(this._interactions.translate);
    }
  }

  public removeModify(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._interactions.modify) {
      map.removeInteraction(this._interactions.modify);
    }
  }

  public removeInteractions(map: Map | null) {
    this.removeSnap(map);
    this.removeSelect(map);
    this.removeTranslate(map);
    this.removeDraw(map);
    this.removeModify(map);
  }
}

export default new InteractionsStore();
