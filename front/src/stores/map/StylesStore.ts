import { makeAutoObservable } from "mobx";

class StylesStore {
  private _fillColor: string;
  private _strokeColor: string;

  constructor() {
    this._fillColor = "#FFFFFF";
    this._strokeColor = "#000000";

    makeAutoObservable(this);
  }

  public get fillColor() {
    return this._fillColor;
  }

  public set fillColor(fillColor: string) {
    this._fillColor = fillColor;
  }

  public get strokeColor() {
    return this._strokeColor;
  }

  public set strokeColor(strokeColor: string) {
    this._strokeColor = strokeColor;
  }
}

export default new StylesStore();
