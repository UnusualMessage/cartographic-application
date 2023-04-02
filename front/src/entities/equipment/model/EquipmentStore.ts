import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { equipment } from "@shared/assets";
import { isError } from "@shared/lib";
import {
  Equipment,
  ApiStore,
  CreateEquipment,
  UpdateEquipment,
  ResponseService,
} from "@shared/misc";

import EquipmentsService from "./EquipmentsService";

class EquipmentStore
  implements ApiStore<Equipment, CreateEquipment, UpdateEquipment>
{
  private _equipments: Equipment[];
  private _equipment?: Equipment;

  private _apiService: EquipmentsService;
  private _responseService: ResponseService;

  constructor() {
    this._equipments = equipment;
    this._equipment = undefined;

    this._responseService = new ResponseService();
    this._apiService = new EquipmentsService();

    makeAutoObservable(this);
  }

  public get equipment() {
    return this._equipments;
  }

  public async getAll() {
    return this._equipments;
  }

  public async getById(id: string) {
    const response = await this._apiService.getById(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._equipment = response;
    this._responseService.invokeSuccess();
    return response;
  }

  public async add(entity: CreateEquipment) {
    const response = await this._apiService.post(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._equipments.push(response);
    this._responseService.invokeSuccess();
  }

  public async duplicate(id: string) {
    const record = this._equipments.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._equipments.push(copy);
    }
  }

  public async update(entity: UpdateEquipment) {
    const response = await this._apiService.put(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    const index = this._equipments.findIndex((item) => item.id === entity.id);
    this._equipments[index] = response;

    this._responseService.invokeSuccess();
  }

  public async remove(id: string) {
    const response = await this._apiService.delete(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._equipments = this._equipments.filter(
      (item) => item.id !== response.id
    );
    this._responseService.invokeSuccess();
  }
}

export default new EquipmentStore();
