import { makeAutoObservable, runInAction } from "mobx";

import { organizations } from "@shared/assets";
import type { Organization } from "@shared/misc";

class OrganizationsStore {
  private _organizations: Organization[];
  private _organization?: Organization;

  constructor() {
    this._organizations = organizations;
    this._organization = organizations[0];

    makeAutoObservable(this);
  }

  get organization() {
    return this._organization;
  }

  get organizations() {
    return this._organizations;
  }

  set organizations(value) {
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
