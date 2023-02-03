import { makeAutoObservable, runInAction } from "mobx";

import { equipment } from "../../shared/assets/data";
import { Equipment } from "../../types/entities";

class EquipmentStore {
  private readonly _equipments: Equipment[];
  private _equipment: Equipment | undefined;

  constructor() {
    this._equipments = equipment;
    this._equipment = undefined;

    makeAutoObservable(this);
  }

  public get equipment() {
    return this._equipments;
  }

  public async getById(id: string) {
    runInAction(() => {
      this._equipment = this._equipments.find((item) => item.id === id);
    });

    return this._equipment;
  }
}

export default new EquipmentStore();
