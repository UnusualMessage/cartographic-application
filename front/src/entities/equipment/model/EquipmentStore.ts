import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { equipment } from "@shared/assets";
import {
  Equipment,
  ApiStore,
  CreateEquipment,
  UpdateEquipment,
  FetchService,
} from "@shared/misc";

import EquipmentsService from "./EquipmentsService";

class EquipmentStore
  implements ApiStore<Equipment, CreateEquipment, UpdateEquipment>
{
  private _equipments: Equipment[];
  private _equipment?: Equipment;

  private _api: EquipmentsService;
  private _fetch: FetchService;

  constructor() {
    this._equipments = equipment;
    this._equipment = undefined;

    this._api = new EquipmentsService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get equip() {
    return this._equipment;
  }

  public set equip(value) {
    this._equipment = value;
  }

  public get equipment() {
    return this._equipments;
  }

  public set equipment(value) {
    this._equipments = value;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.equipment = result;
      }
    );

    return this._equipments;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.equip = result;
      }
    );

    return this._equipment;
  }

  public async add(entity: CreateEquipment) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this._equipments.push(result);
      }
    );
  }

  public async update(entity: UpdateEquipment) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this._equipments.findIndex(
          (item) => item.id === entity.id
        );
        this._equipments[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this._equipments = this._equipments.filter(
          (item) => item.id !== result.id
        );
      }
    );
  }

  public async duplicate(id: string) {
    const record = this._equipments.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._equipments.push(copy);
    }
  }
}

export default new EquipmentStore();
