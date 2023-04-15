import { makeAutoObservable } from "mobx";

import { BaseLayers, WeatherLayers } from "../../enums";

class LayersStore {
  private _baseLayerType: BaseLayers;
  private _weatherLayerType: WeatherLayers;

  constructor() {
    this._baseLayerType = BaseLayers.osm;
    this._weatherLayerType = WeatherLayers.none;

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
}

export default new LayersStore();
