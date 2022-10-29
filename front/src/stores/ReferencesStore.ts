import { makeAutoObservable } from "mobx";
import Reference from "../types/Reference";

class ReferencesStore {
  private _currentReference: Reference | null;

  constructor() {
    this._currentReference = null;

    makeAutoObservable(this);
  }

  public get currentReference() {
    return this._currentReference;
  }

  public set currentReference(reference: Reference | null) {
    this._currentReference = reference;
  }
}

export default new ReferencesStore();
