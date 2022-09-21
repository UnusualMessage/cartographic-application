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
import FeaturesStore from "./FeaturesStore";

interface Interactions {
  select: Select | null;
  translate: Translate | null;
  draw: Draw | null;
  snap: Snap | null;
  modify: Modify | null;
  dragBox: DragBox | null;
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
      dragBox: null,
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

    const dragBox = new DragBox({
      condition: platformModifierKeyOnly,
    });

    dragBox.on("boxstart", () => {
      select.getFeatures().clear();
      FeaturesStore.selectedFeatures = [];
    });

    dragBox.on("boxend", () => {
      const extent = dragBox.getGeometry().getExtent();
      const boxFeatures = source
        .getFeaturesInExtent(extent)
        .filter((feature) => feature.getGeometry()?.intersectsExtent(extent));

      const rotation = map.getView().getRotation();
      const oblique = rotation % (Math.PI / 2) !== 0;

      if (oblique) {
        const anchor = [0, 0];
        const geometry = dragBox.getGeometry().clone();
        geometry.rotate(-rotation, anchor);
        const extent = geometry.getExtent();

        boxFeatures.forEach((feature) => {
          const geometry = feature.getGeometry()?.clone();

          if (geometry) {
            geometry.rotate(-rotation, anchor);
            if (geometry.intersectsExtent(extent)) {
              FeaturesStore.selectedFeatures.push(feature);
              select.getFeatures().push(feature);
            }
          }
        });
      } else {
        FeaturesStore.selectedFeatures = boxFeatures;
        select.getFeatures().extend(boxFeatures);
      }
    });

    const translate = new Translate({
      features: select.getFeatures(),
      condition: (event) => {
        return primaryAction(event) && !this._drawing;
      },
    });

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

    if (this._interactions.dragBox) {
      map.removeInteraction(this._interactions.dragBox);
    }
  }
}

export default new InteractionsStore();
