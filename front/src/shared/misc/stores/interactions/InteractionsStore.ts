import { makeAutoObservable } from "mobx";

import { InteractionType } from "../../types";

class InteractionsStore {
  private _type: InteractionType;
  private _interacting: boolean;

  constructor() {
    this._type = "none";
    this._interacting = false;

    makeAutoObservable(this);
  }

  public get type() {
    return this._type;
  }

  public set type(value) {
    this._type = value;
  }

  public get interacting() {
    return this._interacting;
  }

  public get isGeozonesActive() {
    return this.type === "geozones" || this.type === "cursor";
  }

  public get isMeasurementActive() {
    return (
      this.type === "measure-length" ||
      this.type === "measure-area" ||
      this.type === "measure-coordinate"
    );
  }

  public startInteraction() {
    this._interacting = true;
  }

  public stopInteraction() {
    this._interacting = false;
  }
}

export default new InteractionsStore();
