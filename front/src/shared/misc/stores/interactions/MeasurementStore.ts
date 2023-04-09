import { makeAutoObservable } from "mobx";

class MeasurementStore {
  private _area: string;
  private _distance: string;
  private _coordinate: string;

  constructor() {
    this._area = "0.0 м\xB2";
    this._distance = "0.0 м";
    this._coordinate = "Широта: 0° Долгота: 0°";

    makeAutoObservable(this);
  }

  public get area() {
    return this._area;
  }

  public set area(value) {
    this._area = value;
  }

  public get distance() {
    return this._distance;
  }

  public set distance(value) {
    this._distance = value;
  }

  public get coordinate() {
    return this._coordinate;
  }

  public set coordinate(value) {
    this._coordinate = value;
  }

  public reset() {
    this.resetCoordinate();
    this.resetArea();
    this.resetDistance();
  }

  public resetArea() {
    this._area = "0.0 м\xB2";
  }

  public resetDistance() {
    this._distance = "0.0 м";
  }

  public resetCoordinate() {
    this._coordinate = "Широта: 0° Долгота: 0°";
  }
}

export default new MeasurementStore();
