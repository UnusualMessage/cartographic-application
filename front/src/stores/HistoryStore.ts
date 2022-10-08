import { FeatureLike } from "ol/Feature";
import { makeAutoObservable } from "mobx";
import { Feature } from "ol";

import Change, { Action } from "../types/Action";

class HistoryStore {
  public _featuresHistory: Change<FeatureLike>[];

  constructor() {
    this._featuresHistory = [];

    makeAutoObservable(this);
  }

  public applyChanges() {
    this._featuresHistory = [];
  }

  public undo() {
    const change = this._featuresHistory.pop();

    if (!change) {
      return;
    }

    switch (change.action) {
      case "createFeature":
    }
  }

  public updateHistory(action: Action, feature: Feature) {
    const copy = this._featuresHistory.slice();

    copy.push({
      action: action,
      target: feature,
    });

    this._featuresHistory = copy;
  }
}

export default new HistoryStore();
