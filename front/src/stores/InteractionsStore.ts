import { makeAutoObservable } from "mobx";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { Draw, Modify, Select, Snap, Translate } from "ol/interaction";
import { altKeyOnly, primaryAction } from "ol/events/condition";
import { Type } from "ol/geom/Geometry";

import { DrawType } from "../types/DrawType";
import FeaturesStore from "./FeaturesStore";

interface Interactions {
  select: Select | null;
  translate: Translate | null;
  draw: Draw | null;
  snap: Snap | null;
  modify: Modify | null;
}

class InteractionsStore {
  private _currentDrawType: DrawType;
  private _readonly: boolean;
  private _drawing: boolean;

  private _interactions: Interactions;

  constructor() {
    this._currentDrawType = "Polygon";
    this._readonly = false;
    this._drawing = false;

    this._interactions = {
      select: null,
      translate: null,
      draw: null,
      snap: null,
      modify: null,
    };

    makeAutoObservable(this);
  }

  public get getDrawType() {
    return this._currentDrawType;
  }

  public changeDrawType(newDrawType: DrawType) {
    this._currentDrawType = newDrawType;
  }

  public get readonly() {
    return this._readonly;
  }

  public set readonly(readonly: boolean) {
    this._readonly = readonly;
  }

  public addDraw(source: VectorSource, map: Map, drawType: DrawType) {
    if (this._interactions.draw) {
      map.removeInteraction(this._interactions.draw);
    }

    if (drawType === "None") {
      return;
    }

    const draw = new Draw({
      type: this.getDrawType as Type,
      source: source,
    });

    draw.on("drawstart", () => {
      this._drawing = true;
    });

    draw.on(["drawend", "drawabort"], () => {
      this._drawing = false;
    });

    map.addInteraction(draw);

    this._interactions.draw = draw;
  }

  public addSelectAndTranslate(source: VectorSource, map: Map) {
    if (this._interactions.select) {
      map.removeInteraction(this._interactions.select);
    }

    if (this._interactions.translate) {
      map.removeInteraction(this._interactions.translate);
    }

    const select = new Select({
      multi: true,
    });

    select.on("select", () => {
      FeaturesStore.selectedFeatures = select.getFeatures().getArray();
    });

    const translate = new Translate({
      features: select.getFeatures(),
      condition: (event) => {
        return primaryAction(event) && !this._drawing;
      },
    });

    map.addInteraction(select);
    map.addInteraction(translate);

    this._interactions.select = select;
    this._interactions.translate = translate;
  }

  public addModify(source: VectorSource, map: Map) {
    if (this._interactions.modify) {
      map.removeInteraction(this._interactions.modify);
    }

    const modify = new Modify({
      source: source,
      condition: altKeyOnly,
    });

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
    if (!map || this._readonly) {
      return;
    }

    this.addSelectAndTranslate(source, map);
    this.addDraw(source, map, this._currentDrawType);
    this.addModify(source, map);
    this.addSnap(source, map);
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
  }
}

export default new InteractionsStore();
