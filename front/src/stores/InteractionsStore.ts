import { DrawType } from "../types/DrawType";
import { makeAutoObservable } from "mobx";

class InteractionsStore {
  private _currentDrawType: DrawType;

  constructor() {
    this._currentDrawType = "Point";

    makeAutoObservable(this);
  }

  public get getDrawType() {
    return this._currentDrawType;
  }

  public changeDrawType(newDrawType: DrawType) {
    this._currentDrawType = newDrawType;
  }
}

export default new InteractionsStore();
