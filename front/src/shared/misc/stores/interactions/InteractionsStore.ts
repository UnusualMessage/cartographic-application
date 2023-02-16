import { makeAutoObservable } from "mobx";

import { DrawType } from "../../types";

class InteractionsStore {
  private _drawType: DrawType;
  private _drawing: boolean;

  constructor() {
    this._drawType = "none";
    this._drawing = false;

    makeAutoObservable(this);
  }

  public get drawType() {
    return this._drawType;
  }

  public set drawType(value) {
    this._drawType = value;
  }

  public set isDrawing(isDrawing: boolean) {
    this._drawing = isDrawing;
  }

  public get isGeozonesActive() {
    return this.drawType === "geozones" || this.drawType === "cursor";
  }

  public get isMeasurementActive() {
    return (
      this.drawType === "measure-length" || this.drawType === "measure-area"
    );
  }

  public startDrawing() {
    this._drawing = true;
  }

  public stopDrawing() {
    this._drawing = false;
  }
}

export default new InteractionsStore();
