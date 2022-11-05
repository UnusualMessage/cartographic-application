import { makeAutoObservable } from "mobx";
import { FeatureLike } from "ol/Feature";
import { ChangeSet } from "../../types/map";

class GeozonesStore {
  private _geozones: FeatureLike[];
  private _history: ChangeSet<FeatureLike>[];

  constructor() {
    this._geozones = [];
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

  public add(zone: FeatureLike) {
    const copy = this._geozones.slice();
    copy.push(zone);
    this._geozones = copy;
  }

  public remove(zone: FeatureLike) {
    this._geozones = this.geozones.filter((item) => item !== zone);
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
