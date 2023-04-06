import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import {
  ApiStore,
  FetchService,
  EquipmentType,
  CreateEquipmentType,
  UpdateEquipmentType,
} from "@shared/misc";

import EquipmentTypesService from "./EquipmentTypesService";

class EquipmentTypesStore
  implements ApiStore<EquipmentType, CreateEquipmentType, UpdateEquipmentType>
{
  private _types: EquipmentType[];
  private _type?: EquipmentType;

  private _api: EquipmentTypesService;
  private _fetch: FetchService;

  constructor() {
    this._types = [];
    this._type = undefined;

    this._api = new EquipmentTypesService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get type() {
    return this._type;
  }

  public set type(value) {
    this._type = value;
  }

  public get types() {
    return this._types;
  }

  public set types(value) {
    this._types = value;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.types = result;
      }
    );

    return this.types;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.type = result;
      }
    );

    return this._type;
  }

  public async add(entity: CreateEquipmentType) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this.types.push(result);
      }
    );
  }

  public async update(entity: UpdateEquipmentType) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this.types.findIndex((item) => item.id === entity.id);
        this.types[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this.types = this.types.filter((item) => item.id !== result.id);
      }
    );
  }

  public async duplicate(id: string) {
    const record = this.types.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this.types.push(copy);
    }
  }
}

export default new EquipmentTypesStore();
