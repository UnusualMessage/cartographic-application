import { makeAutoObservable } from "mobx";
import { FeatureLike } from "ol/Feature";

class FeaturesStore {
  private _selectedFeatures: FeatureLike[];
  private _copiedFeatures: FeatureLike[];

  constructor() {
    this._selectedFeatures = [];
    this._copiedFeatures = [];

    makeAutoObservable(this);
  }

  public get copiedFeatures() {
    return this._copiedFeatures;
  }

  public set copiedFeatures(copiedFeatures) {
    this._copiedFeatures = copiedFeatures;
  }

  public get selectedFeatures() {
    return this._selectedFeatures;
  }

  public set selectedFeatures(selectedFeatures) {
    this._selectedFeatures = selectedFeatures;
  }
}

export default new FeaturesStore();
