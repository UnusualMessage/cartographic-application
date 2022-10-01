import { makeAutoObservable } from "mobx";
import { FeatureLike } from "ol/Feature";

class FeaturesStore {
  private _selectedFeatures: FeatureLike[];
  private _copiedFeatures: FeatureLike[];
  private _clickedFeature: FeatureLike | null;

  constructor() {
    this._selectedFeatures = [];
    this._copiedFeatures = [];
    this._clickedFeature = null;

    makeAutoObservable(this);
  }

  public get clickedFeature() {
    return this._clickedFeature;
  }

  public set clickedFeature(clickedFeature) {
    this._clickedFeature = clickedFeature;
  }

  public get selectedFeatures() {
    return this._selectedFeatures;
  }

  public set selectedFeatures(selectedFeatures) {
    this._selectedFeatures = selectedFeatures;
  }

  public get copiedFeatures() {
    return this._copiedFeatures;
  }

  public set copiedFeatures(copiedFeatures) {
    this._copiedFeatures = copiedFeatures;
  }
}

export default new FeaturesStore();
