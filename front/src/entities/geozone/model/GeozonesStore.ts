import { makeAutoObservable } from "mobx";
import { FeatureLike } from "ol/Feature";

import { geozones } from "@shared/assets";
import type { Changes, Geozone } from "@shared/misc";

class GeozonesStore {
  private _geozones: Geozone[];
  private _chosen?: string;
  private _history: Changes<FeatureLike>[];

  constructor() {
    this._geozones = geozones;
    this._chosen = undefined;
    this._history = [];

    makeAutoObservable(this);
  }

  public get geozones() {
    return this._geozones;
  }

  public get chosen() {
    return this._chosen;
  }

  public choose(id?: string) {
    this._chosen = id;
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

  public push(set: Changes<FeatureLike>) {
    const copy = this._history.slice();

    copy.push(set);

    this._history = copy;
  }
}

export default new GeozonesStore();
