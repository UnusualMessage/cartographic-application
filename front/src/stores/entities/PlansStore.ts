import { Plan } from "../../types/entities";
import { plans } from "../../assets/data";

class PlansStore {
  private _plans: Plan[];

  constructor() {
    this._plans = plans;
  }

  public get plans() {
    return this._plans;
  }

  public set plans(plans: Plan[]) {
    this._plans = plans;
  }
}

export default new PlansStore();
