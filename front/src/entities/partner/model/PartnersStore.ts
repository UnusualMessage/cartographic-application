import { makeAutoObservable, runInAction } from "mobx";

import { partners } from "@shared/assets/samples";
import { ApiStore } from "@shared/misc/types/api";
import Partner, {
  CreatePartner,
  UpdatePartner,
} from "@shared/misc/types/entities/Partner";

class PartnersStore implements ApiStore<Partner, CreatePartner, UpdatePartner> {
  private _partners: Partner[];
  private _partner: Partner | undefined;

  constructor() {
    this._partners = partners;
    this._partner = undefined;

    makeAutoObservable(this);
  }

  public get partners() {
    return this._partners;
  }

  public get partner() {
    return this._partner;
  }

  public set partner(value) {
    this._partner = value;
  }

  public async getById(id: string) {
    runInAction(() => {
      this._partner = this._partners.find((item) => item.id === id);
    });

    return this._partner;
  }

  public async add(entity: CreatePartner) {
    const data = this._partners.slice();

    runInAction(() => {
      this._partners = data;
    });
  }

  public async duplicate(id: string) {
    const data = this._partners.slice();

    runInAction(() => {
      this._partners = data;
    });
  }

  public async update(entity: UpdatePartner) {
    const data = this._partners.slice();

    runInAction(() => {
      this._partners = data;
    });
  }

  public async remove(id: string) {
    const data = this._partners.slice().filter((item) => item.id !== id);

    runInAction(() => {
      this._partners = data;
      this._partner = undefined;
    });
  }
}

export default new PartnersStore();
