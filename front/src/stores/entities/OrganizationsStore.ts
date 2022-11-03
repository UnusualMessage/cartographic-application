import { makeAutoObservable } from "mobx";
import { Organization } from "../../types/entities";
import { organizations } from "../../assets/data";

class OrganizationsStore {
  private _organizations: Organization[];

  constructor() {
    this._organizations = organizations;

    makeAutoObservable(this);
  }

  get organizations(): Organization[] {
    return this._organizations;
  }

  set organizations(value: Organization[]) {
    this._organizations = value;
  }
}

export default new OrganizationsStore();
