import { makeAutoObservable, runInAction } from "mobx";

import { organizations } from "@shared/assets/samples";

import { Organization } from "../../../shared/api/types/entities";

class OrganizationsStore {
  private _organizations: Organization[];
  private _organization: Organization | undefined;

  constructor() {
    this._organizations = organizations;
    this._organization = organizations[0];

    makeAutoObservable(this);
  }

  get organization(): Organization | undefined {
    return this._organization;
  }

  get organizations(): Organization[] {
    return this._organizations;
  }

  set organizations(value: Organization[]) {
    this._organizations = value;
  }

  public async getById(id: string) {
    runInAction(() => {
      this._organization = this._organizations.find((item) => item.id === id);
    });

    return this._organization;
  }
}

export default new OrganizationsStore();
