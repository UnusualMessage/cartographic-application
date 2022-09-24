import { makeAutoObservable } from "mobx";

class StylesStore {
  private _fillColor: string;
  private _strokeColor: string;

  constructor() {
    this._fillColor = "black";
    this._strokeColor = "black";

    makeAutoObservable(this);
  }

  public get fillColor() {
    return this._fillColor;
  }

  public set fillColor(fillColor) {
    this._fillColor = fillColor;
  }

  public get strokeColor() {
    return this._strokeColor;
  }

  public set strokeColor(strokeColor) {
    this._strokeColor = strokeColor;
  }
}

export default new StylesStore();
