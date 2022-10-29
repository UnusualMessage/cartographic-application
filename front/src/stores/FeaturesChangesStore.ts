import { FeatureLike } from "ol/Feature";
import { makeAutoObservable } from "mobx";

import Change from "../types/Change";

class FeaturesChangesStore {
  private _featuresHistory: Change<FeatureLike[]>[];

  constructor() {
    this._featuresHistory = [];

    makeAutoObservable(this);
  }

  public get changesCount() {
    return this._featuresHistory.length;
  }

  public get featuresHistory() {
    return this._featuresHistory;
  }

  public save() {
    this._featuresHistory = [];
  }

  public undo() {
    const lastChange = this._featuresHistory.pop();

    if (lastChange) {
      lastChange.undo(lastChange.oldValue, lastChange.newValue);
    }
  }

  public push(change: Change<FeatureLike[]>) {
    const copy = this._featuresHistory.slice();

    copy.push(change);

    this._featuresHistory = copy;
  }
}

export default new FeaturesChangesStore();
