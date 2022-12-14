import { makeAutoObservable } from "mobx";

class MeasurementStore {
  private _area: string;
  private _length: string;

  constructor() {
    this._area = "0.0 м\xB2";
    this._length = "0.0 м";

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
}

export default new MeasurementStore();
