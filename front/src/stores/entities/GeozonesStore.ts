import { makeAutoObservable } from "mobx";
import { FeatureLike } from "ol/Feature";

class GeozonesStore {
  private _geozones: FeatureLike[];

  constructor() {
    this._geozones = [];

    makeAutoObservable(this);
  }

  public get geozones() {
    return this._geozones;
  }

  public add(zone: FeatureLike) {
    const copy = this._geozones.slice();
    copy.push(zone);
    this._geozones = copy;
  }

  public remove(zone: FeatureLike) {
    this._geozones = this.geozones.filter((item) => item !== zone);
  }
}

export default new GeozonesStore();
