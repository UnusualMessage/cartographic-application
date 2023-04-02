import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { departments } from "@shared/assets";
import { isError } from "@shared/lib";
import {
  Department,
  CreateDepartment,
  UpdateDepartment,
  ApiStore,
  ResponseService,
} from "@shared/misc";

import DepartmentsService from "./DepartmentsService";

class DepartmentsStore
  implements ApiStore<Department, CreateDepartment, UpdateDepartment>
{
  private _departments: Department[];
  private _department?: Department;

  private _responseService: ResponseService;
  private _apiService: DepartmentsService;

  constructor() {
    this._departments = departments;
    this._department = undefined;

    this._responseService = new ResponseService();
    this._apiService = new DepartmentsService();

    makeAutoObservable(this);
  }

  public get departments() {
    return this._departments;
  }

  public get department() {
    return this._department;
  }

  public set department(value) {
    this._department = value;
  }

  public async getAll() {
    return this._departments;
  }

  public async getById(id: string) {
    const response = await this._apiService.getById(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._department = response;
    this._responseService.invokeSuccess();
    return response;
  }

  public async add(entity: CreateDepartment) {
    const response = await this._apiService.post(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._departments.push(response);
    this._responseService.invokeSuccess();
  }

  public async duplicate(id: string) {
    const record = this._departments.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._departments.push(copy);
    }
  }

  public async update(entity: UpdateDepartment) {
    const response = await this._apiService.put(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    const index = this._departments.findIndex((item) => item.id === entity.id);
    this._departments[index] = response;

    this._responseService.invokeSuccess();
  }

  public async remove(id: string) {
    const response = await this._apiService.delete(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._departments = this._departments.filter(
      (item) => item.id !== response.id
    );
    this._responseService.invokeSuccess();
  }
}

export default new DepartmentsStore();
