import { makeAutoObservable } from "mobx";

import { geozones } from "@shared/assets";
import type { Geozone } from "@shared/misc";

class GeozonesStore {
  private _geozones: Geozone[];
  private _menuGeozoneId?: string;

  constructor() {
    this._geozones = geozones;
    this._menuGeozoneId = undefined;

    makeAutoObservable(this);
  }

  public get geozones() {
    return this._geozones;
  }

  public get menuGeozoneId() {
    return this._menuGeozoneId;
  }

  public choose(id?: string) {
    this._menuGeozoneId = id;
  }

  public getById(id: string) {
    return this._geozones.find((item) => item.id === id);
  }

  public add(zone: Geozone) {
    const copy = this._geozones.slice();
    copy.push(zone);
    this._geozones = copy;
  }

  public remove(id: string) {
    this._geozones = this.geozones.filter((item) => item.id !== id);
  }
}

export default new GeozonesStore();
