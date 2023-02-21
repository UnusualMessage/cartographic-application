import { makeAutoObservable } from "mobx";
import { Map } from "ol";
import { altKeyOnly } from "ol/events/condition";
import { Modify } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import { invoke } from "../../../lib";
import { ModifyInjector } from "../../services";
import { ListenersInjector, ModifyEvent, Callback } from "../../types";

class ModifyStore {
  private _modify?: Modify;
  private _cleanup?: Callback;

  constructor() {
    makeAutoObservable(this);
  }

  public setup(source: VectorSource, map: Map | null) {
    if (this._modify) {
      this.remove(map);
    }

    const modify = new Modify({
      source: source,
      condition: altKeyOnly,
    });

    const modifyInjector: ListenersInjector<ModifyEvent> = new ModifyInjector(
      modify
    );

    this._cleanup = modifyInjector.addEventListener("modifystart");

    map?.addInteraction(modify);

    this._modify = modify;

    return () => {
      this.remove(map);
    };
  }

  private remove(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._modify) {
      map.removeInteraction(this._modify);
      invoke(this._cleanup);

      this._modify = undefined;
      this._cleanup = undefined;
    }
  }
}

export default new ModifyStore();
