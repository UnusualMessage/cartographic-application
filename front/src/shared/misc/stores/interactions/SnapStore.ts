import { makeAutoObservable } from "mobx";
import { Map } from "ol";
import { Snap } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import { invoke } from "../../../lib";
import { Callback } from "../../types";

class SnapStore {
  private _snap?: Snap;
  private _cleanup?: Callback;

  constructor() {
    makeAutoObservable(this);
  }

  public setup(source: VectorSource, map: Map) {
    if (this._snap) {
      this.remove(map);
    }

    const snap = new Snap({
      source: source,
    });

    map.addInteraction(snap);

    this._snap = snap;

    return () => {
      this.remove(map);
    };
  }

  private remove(map: Map | null) {
    if (!map) {
      return;
    }

    if (this._snap) {
      map.removeInteraction(this._snap);
      invoke(this._cleanup);

      this._snap = undefined;
      this._cleanup = undefined;
    }
  }
}

export default new SnapStore();
