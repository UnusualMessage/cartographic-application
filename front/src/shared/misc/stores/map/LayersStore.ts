import { makeAutoObservable } from "mobx";
import LayerGroup from "ol/layer/Group";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { BaseLayer, WeatherLayer } from "../../types";

class LayersStore {
  private _vectorLayers: VectorLayer<VectorSource>[];
  private _layerGroups: LayerGroup[];

  private _baseLayerType: BaseLayer;
  private _weatherLayerType: WeatherLayer;

  constructor() {
    this._vectorLayers = [];
    this._layerGroups = [];

    this._baseLayerType = "osm";
    this._weatherLayerType = "none";

    makeAutoObservable(this);
  }

  public get baseLayerType() {
    return this._baseLayerType;
  }

  public set baseLayerType(value) {
    this._baseLayerType = value;
  }

  public get weatherLayerType() {
    return this._weatherLayerType;
  }

  public set weatherLayerType(value) {
    this._weatherLayerType = value;
  }

  public clearVectorLayer(id: string) {
    const layer = this.getVectorLayerById(id);
    layer?.getSource()?.clear();
  }

  public getVectorLayerById(id: string) {
    return this._vectorLayers.find((layer) => layer.get("id") === id);
  }

  public getLayerGroupById(id: string) {
    return this._layerGroups.find((group) => group.get("id") === id);
  }

  public resetVectorLayers() {
    for (const layer of this._vectorLayers) {
      layer.dispose();
    }

    this._vectorLayers = [];
  }

  public addVectorLayer(layer: VectorLayer<VectorSource>) {
    this._vectorLayers.push(layer);
  }

  public addLayerGroup(group: LayerGroup) {
    this._layerGroups.push(group);
  }

  public removeLayerGroup(id: string) {
    this._layerGroups = this._layerGroups.filter(
      (group) => group.get("id") !== id
    );
  }

  public removeVectorLayer(id: string) {
    this._vectorLayers = this._vectorLayers.filter(
      (layer) => layer.get("id") !== id
    );
  }

  public switchVectorLayer(id: string) {
    const layer = this.getVectorLayerById(id);

    if (layer) {
      layer.setVisible(!layer.getVisible());
    }
  }

  public toggleLayerGroup(id: string) {
    const group = this.getLayerGroupById(id);

    if (group) {
      group.setVisible(!group.getVisible());
    }
  }
}

export default new LayersStore();
