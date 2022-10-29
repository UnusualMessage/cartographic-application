import { makeAutoObservable } from "mobx";
import { FeatureLike } from "ol/Feature";
import { Feature } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Geometry } from "ol/geom";
import { v4 as uuid } from "uuid";

import { getFeaturesCenter } from "../utils/features";

class FeaturesStore {
  private _features: FeatureLike[];
  private _selectedFeatures: FeatureLike[];
  private _copiedFeatures: FeatureLike[];
  private _clickedFeature: FeatureLike | null;

  constructor() {
    this._selectedFeatures = [];
    this._copiedFeatures = [];
    this._features = [];
    this._clickedFeature = null;

    makeAutoObservable(this);
  }

  public get features() {
    return this._features;
  }

  public set features(features) {
    this._features = features;
  }

  public set clickedFeature(clickedFeature: FeatureLike | null) {
    this._clickedFeature = clickedFeature;
  }

  public get selectedFeatures() {
    return this._selectedFeatures;
  }

  public set selectedFeatures(selectedFeatures: FeatureLike[]) {
    this._selectedFeatures = selectedFeatures;
  }

  public get copiedFeatures() {
    return this._copiedFeatures;
  }

  public set copiedFeatures(copiedFeatures: FeatureLike[]) {
    this._copiedFeatures = copiedFeatures;
  }

  public clearBuffer() {
    this._clickedFeature = null;
    this._copiedFeatures = [];
    this._selectedFeatures = [];
  }

  public copySelectedFeatures() {
    this.copiedFeatures = this.selectedFeatures;
  }

  public removeSelectedFeatures(targetLayer: VectorLayer<VectorSource>) {
    const source = targetLayer.getSource();

    this.selectedFeatures.forEach((selected) => {
      source?.removeFeature(selected as Feature);
      this.features = this._features.filter(
        (feature) => feature.getId() !== selected.getId()
      );
    });
  }

  public insertCopiedFeatures(
    targetLayer: VectorLayer<VectorSource>,
    cursorPosition: number[]
  ) {
    const source = targetLayer.getSource();
    const cursor = cursorPosition;
    const copy = this.features.slice();

    const featuresCenter = getFeaturesCenter(this.copiedFeatures);

    this.copiedFeatures.forEach((feature) => {
      const geometry = (feature.getGeometry() as Geometry).clone();

      geometry.translate(
        cursor[0] - featuresCenter[0],
        cursor[1] - featuresCenter[1]
      );

      const newFeature = new Feature(geometry);
      newFeature.setId(uuid());

      source?.addFeature(newFeature);
      copy.push(newFeature);
    });

    this.features = copy;
  }

  public removeFeature(feature: FeatureLike) {
    this.features = this.features.filter(
      (currentFeature) => currentFeature.getId() !== feature.getId()
    );
  }

  public addFeature(feature: FeatureLike) {
    const copy = this.features.slice();
    copy.push(feature);
    this.features = copy;
  }
}

export default new FeaturesStore();
