import { makeAutoObservable } from "mobx";

import { InteractionType } from "@shared/api";

class DrawingStore {
  private _interactionType: InteractionType;
  private _drawing: boolean;

  constructor() {
    this._interactionType = "none";
    this._drawing = false;

    makeAutoObservable(this);
  }

  public get interactionType() {
    return this._interactionType;
  }

  public set interactionType(value) {
    this._interactionType = value;
  }

  public set isDrawing(isDrawing: boolean) {
    this._drawing = isDrawing;
  }
}

export default new DrawingStore();
