import { makeAutoObservable } from "mobx";
import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";
import { Geometry } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { v4 as uuid } from "uuid";

import { getFeaturesCenter } from "../../../lib";

class FeaturesStore {
  private _features: FeatureLike[];
  private _selectedFeatures: FeatureLike[];
  private _copiedFeatures: FeatureLike[];
  private _clickedFeature?: FeatureLike;

  constructor() {
    this._features = [];
    this._selectedFeatures = [];
    this._copiedFeatures = [];
    this._clickedFeature = undefined;

    makeAutoObservable(this);
  }

  public set clickedFeature(value: FeatureLike | undefined) {
    this._clickedFeature = value;
  }

  public get features() {
    return this._features;
  }

  public set features(features) {
    this._features = features;
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

  public addFeatureToLayer(
    feature: FeatureLike,
    layer: VectorLayer<VectorSource>
  ) {
    this.addFeature(feature);
    layer.getSource()?.addFeature(feature as Feature);
  }

  public addFeature(feature: FeatureLike) {
    const temp = this.features.slice();
    temp.push(feature);
    this.features = temp;
  }

  public updateFeature(feature: FeatureLike) {
    this.features = this.features.map((item) => {
      if (item.getId() === feature.getId()) {
        return feature;
      } else {
        return item;
      }
    });
  }

  public copySelectedFeatures() {
    this.copiedFeatures = this.selectedFeatures;
  }

  public removeSelectedFeatures(targetLayer: VectorLayer<VectorSource>) {
    const source = targetLayer.getSource();
    let copy = this.features;

    this.selectedFeatures.forEach((selected) => {
      copy = copy.filter((item) => item.getId() !== selected.getId());
      source?.removeFeature(selected as Feature);
    });

    this.features = copy;
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

  public clear(targetLayer: VectorLayer<VectorSource>) {
    this.clearBuffer();

    const source = targetLayer.getSource();

    this.features.forEach((feature) => {
      source?.removeFeature(feature as Feature);
    });

    this.features = [];
  }

  public clearBuffer() {
    this._clickedFeature = undefined;
    this._copiedFeatures = [];
    this._selectedFeatures = [];
  }
}

export default new FeaturesStore();
