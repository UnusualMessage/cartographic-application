import { makeAutoObservable } from "mobx";
import { Map, MapBrowserEvent } from "ol";
import {
  platformModifierKeyOnly,
  primaryAction,
  click,
} from "ol/events/condition";
import { DragBox, Select, Translate } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import InteractionsStore from "./InteractionsStore";
import { invoke, getSelectStyle } from "../../../lib";
import { DragBoxEvents, SelectEvents, TranslateEvents } from "../../enums";
import {
  DragBoxInjector,
  SelectInjector,
  TranslateInjector,
} from "../../services";
import { Callback, ListenersInjector } from "../../types";

interface ComplexCleanup {
  dragBox: Callback[];
  select: Callback[];
  translate: Callback[];
}

class SelectStore {
  private _dragBox?: DragBox;
  private _select?: Select;
  private _translate?: Translate;

  private _cleanup: ComplexCleanup;

  constructor() {
    this._cleanup = {
      select: [],
      dragBox: [],
      translate: [],
    };

    makeAutoObservable(this);
  }

  public clearSelectBuffer() {
    this._select?.getFeatures().clear();
  }

  public setup(source: VectorSource, map: Map) {
    this.remove(map);

    const condition = (event: MapBrowserEvent<UIEvent>) => {
      return platformModifierKeyOnly(event) && click(event);
    };

    const select = new Select({
      condition: condition,
      style: getSelectStyle,
    });

    const dragBox = new DragBox({
      condition: platformModifierKeyOnly,
    });

    const translate = new Translate({
      features: select.getFeatures(),
      condition: (event) => {
        return primaryAction(event) && !InteractionsStore.interacting;
      },
    });

    const dragBoxInjector: ListenersInjector<DragBoxEvents> =
      new DragBoxInjector(dragBox, select, source);

    const selectInjector: ListenersInjector<SelectEvents> = new SelectInjector(
      select
    );

    const translateInjector: ListenersInjector<TranslateEvents> =
      new TranslateInjector(translate);

    this._cleanup.select.push(
      selectInjector.addEventListener(SelectEvents.select)
    );
    this._cleanup.dragBox.push(
      dragBoxInjector.addEventListener(DragBoxEvents.boxstart)
    );
    this._cleanup.dragBox.push(
      dragBoxInjector.addEventListener(DragBoxEvents.boxend)
    );
    this._cleanup.translate.push(
      translateInjector.addEventListener(TranslateEvents.translatestart)
    );
    this._cleanup.translate.push(
      translateInjector.addEventListener(TranslateEvents.translateend)
    );

    map.addInteraction(select);
    map.addInteraction(translate);
    map.addInteraction(dragBox);

    this._select = select;
    this._translate = translate;
    this._dragBox = dragBox;

    return () => {
      this.remove(map);
    };
  }

  private remove(map: Map | null) {
    this.removeTranslate(map);
    this.removeDragBox(map);
    this.removeSelect(map);
  }

  private removeSelect(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._select) {
      map.removeInteraction(this._select);

      for (const cleanup of this._cleanup.select) {
        invoke(cleanup);
      }

      this._select = undefined;
      this._cleanup.select = [];
    }
  }

  private removeTranslate(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._translate) {
      map.removeInteraction(this._translate);

      for (const cleanup of this._cleanup.translate) {
        invoke(cleanup);
      }

      this._translate = undefined;
      this._cleanup.translate = [];
    }
  }

  private removeDragBox(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._dragBox) {
      map.removeInteraction(this._dragBox);

      for (const cleanup of this._cleanup.dragBox) {
        invoke(cleanup);
      }

      this._dragBox = undefined;
      this._cleanup.dragBox = [];
    }
  }
}

export default new SelectStore();
