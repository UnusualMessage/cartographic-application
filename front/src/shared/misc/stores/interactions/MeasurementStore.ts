import { makeAutoObservable } from "mobx";

class MeasurementStore {
  private _area: string;
  private _length: string;
  private _coordinate: string;

  constructor() {
    this._area = "0.0 м\xB2";
    this._length = "0.0 м";
    this._coordinate = "Широта: 0° Долгота: 0°";

    makeAutoObservable(this);
  }

  public get area() {
    return this._area;
  }

  public set area(value) {
    this._area = value;
  }

  public get length() {
    return this._length;
  }

  public set length(value) {
    this._length = value;
  }

  public get coordinate() {
    return this._coordinate;
  }

  public set coordinate(value) {
    this._coordinate = value;
  }
}

export default new MeasurementStore();
