import { makeAutoObservable } from "mobx";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { Draw, Modify, Select, Snap, Translate } from "ol/interaction";

import { DrawType } from "../types/DrawType";
import MapStore from "./MapStore";
import { altKeyOnly } from "ol/events/condition";
import { Type } from "ol/geom/Geometry";

interface Interactions {
  select: Select | null;
  translate: Translate | null;
  draw: Draw | null;
  snap: Snap | null;
  modify: Modify | null;
}

class InteractionsStore {
  private _currentDrawType: DrawType;

  private _interactions: Interactions;

  constructor() {
    this._currentDrawType = "Polygon";

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
    if (newDrawType === "None") {
      this.removeDraw();
      return;
    }

    this._currentDrawType = newDrawType;
  }

  public removeDraw() {
    const map = MapStore.getMap;
    const draw = this._interactions.draw;

    if (map && draw) {
      map.removeInteraction(draw);
    }

    this._interactions.draw = null;
  }

  public addInteractions(source: VectorSource, map: Map | null) {
    if (this._interactions.select) {
      map?.removeInteraction(this._interactions.select);
    }

    if (this._interactions.modify) {
      map?.removeInteraction(this._interactions.modify);
    }

    if (this._interactions.translate) {
      map?.removeInteraction(this._interactions.translate);
    }

    if (this._interactions.snap) {
      map?.removeInteraction(this._interactions.snap);
    }

    if (this._interactions.draw) {
      map?.removeInteraction(this._interactions.draw);
    }

    const select = new Select();

    const translate = new Translate({
      features: select.getFeatures(),
    });

    const draw = new Draw({
      type: this.getDrawType as Type,
      source: source,
    });

    const modify = new Modify({
      source: source,
      condition: altKeyOnly,
    });

    const snap = new Snap({
      source: source,
    });

    map?.addInteraction(select);
    map?.addInteraction(translate);
    map?.addInteraction(draw);
    map?.addInteraction(modify);
    map?.addInteraction(snap);

    this._interactions = {
      select: select,
      translate: translate,
      draw: draw,
      snap: snap,
      modify: modify,
    };
  }
}

export default new InteractionsStore();
