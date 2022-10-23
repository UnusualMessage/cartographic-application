import { makeAutoObservable } from "mobx";

import { equipment } from "../../assets/data";
import { Equipment } from "../../types/entities";

class EquipmentStore {
  private _equipment: Equipment[];

  constructor() {
    this._equipment = equipment;

    makeAutoObservable(this);
  }

  public get equipment() {
    return this._equipment;
  }

  public set equipment(equipment: Equipment[]) {
    this._equipment = equipment;
  }
}

export default new EquipmentStore();
