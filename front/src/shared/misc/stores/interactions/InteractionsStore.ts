import { makeAutoObservable } from "mobx";

import { Interactions } from "../../enums";

class InteractionsStore {
  private _type: Interactions;
  private _interacting: boolean;

  constructor() {
    this._type = Interactions.none;
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

  public startInteraction() {
    this._interacting = true;
  }

  public stopInteraction() {
    this._interacting = false;
  }
}

export default new InteractionsStore();
