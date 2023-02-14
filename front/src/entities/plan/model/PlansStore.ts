import { makeAutoObservable } from "mobx";

import { plans } from "@shared/assets";
import { Plan } from "@shared/misc";

class PlansStore {
  private _plans: Plan[];
  private _chosenYear?: number;

  constructor() {
    this._plans = plans;
    this._chosenYear = undefined;

    makeAutoObservable(this);
  }

  public get plans() {
    return this._plans;
  }

  public set plans(plans: Plan[]) {
    this._plans = plans;
  }

  public get chosenYear() {
    return this._chosenYear;
  }

  public set chosenYear(year: number | undefined) {
    this._chosenYear = year;
  }
}

export default new PlansStore();
