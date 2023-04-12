import { makeAutoObservable } from "mobx";
import LayerGroup from "ol/layer/Group";

import { BaseLayer, WeatherLayer } from "../../types";

class LayersStore {
  private _layerGroups: LayerGroup[];

  private _baseLayerType: BaseLayer;
  private _weatherLayerType: WeatherLayer;

  constructor() {
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

  public getLayerGroupById(id: string) {
    return this._layerGroups.find((group) => group.get("id") === id);
  }

  public addLayerGroup(group: LayerGroup) {
    this._layerGroups.push(group);
  }

  public removeLayerGroup(id: string) {
    this._layerGroups = this._layerGroups.filter(
      (group) => group.get("id") !== id
    );
  }

  public toggleLayerGroup(id: string) {
    const group = this.getLayerGroupById(id);

    if (group) {
      group.setVisible(!group.getVisible());
    }
  }
}

export default new LayersStore();
