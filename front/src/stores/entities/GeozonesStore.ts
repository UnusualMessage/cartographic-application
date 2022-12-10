import { makeAutoObservable } from "mobx";
import { FeatureLike } from "ol/Feature";
import { geozones } from "../../assets/data";

import { ChangeSet } from "../../types/map";
import { Geozone } from "../../types/entities";

class GeozonesStore {
  private _geozones: Geozone[];
  private _history: ChangeSet<FeatureLike>[];

  constructor() {
    this._geozones = geozones;
    this._history = [];

    makeAutoObservable(this);
  }

  public get geozones() {
    return this._geozones;
  }

  public get changesCount() {
    return this._history.length;
  }

  public get history() {
    return this._history;
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

  public save() {
    this._history = [];
  }

  public undo() {
    const lastSet = this._history.pop();

    if (lastSet) {
      for (const change of lastSet) {
        change.undo(change.oldValue, change.newValue);
      }
    }
  }

  public push(set: ChangeSet<FeatureLike>) {
    const copy = this._history.slice();

    copy.push(set);

    this._history = copy;
  }
}

export default new GeozonesStore();
