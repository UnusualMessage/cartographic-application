import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { departments } from "@shared/assets";
import {
  Department,
  CreateDepartment,
  UpdateDepartment,
  ApiStore,
  FetchService,
} from "@shared/misc";

import DepartmentsService from "./DepartmentsService";

class DepartmentsStore
  implements ApiStore<Department, CreateDepartment, UpdateDepartment>
{
  private _departments: Department[];
  private _department?: Department;

  private _api: DepartmentsService;
  private _fetch: FetchService;

  constructor() {
    this._departments = departments;
    this._department = undefined;

    this._api = new DepartmentsService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get departments() {
    return this._departments;
  }

  public set departments(value) {
    this._departments = value;
  }

  public get department() {
    return this._department;
  }

  public set department(value) {
    this._department = value;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result: Department[]) => {
        this.departments = result;
      }
    );

    return this._departments;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result: Department) => {
        this.department = result;
      }
    );

    return this._department;
  }

  public async add(entity: CreateDepartment) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result: Department) => {
        this._departments.push(result);
      }
    );
  }

  public async update(entity: UpdateDepartment) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this._departments.findIndex(
          (item) => item.id === entity.id
        );
        this._departments[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this._departments = this._departments.filter(
          (item) => item.id !== result.id
        );
      }
    );
  }

  public async duplicate(id: string) {
    const record = this._departments.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._departments.push(copy);
    }
  }
}

export default new DepartmentsStore();
