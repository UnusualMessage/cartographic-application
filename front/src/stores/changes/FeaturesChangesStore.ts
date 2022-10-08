import { FeatureLike } from "ol/Feature";
import { makeAutoObservable } from "mobx";
import { Feature } from "ol";

import Change, { Action, Undo } from "../../types/Change";

class FeaturesChangesStore {
  private _featuresHistory: Change<FeatureLike>[];

  constructor() {
    this._featuresHistory = [];

    makeAutoObservable(this);
  }

  public get changesCount() {
    return this._featuresHistory.length;
  }

  public get lastChange() {
    return this._featuresHistory[this._featuresHistory.length - 1];
  }

  public save() {
    this._featuresHistory = [];
  }

  public undo() {
    const lastChange = this._featuresHistory.pop();

    if (lastChange) {
      lastChange.undo();
    }
  }

  public push(action: Action, feature: Feature, undo: Undo) {
    const copy = this._featuresHistory.slice();

    copy.push({
      action: action,
      target: feature,
      undo: undo,
    });

    this._featuresHistory = copy;
  }
}

export default new FeaturesChangesStore();
