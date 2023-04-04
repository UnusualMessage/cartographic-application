import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { employees } from "@shared/assets";
import {
  Employee,
  CreateEmployee,
  UpdateEmployee,
  ApiStore,
  FetchService,
} from "@shared/misc";

import EmployeesService from "./EmployeesService";

class EmployeesStore
  implements ApiStore<Employee, CreateEmployee, UpdateEmployee>
{
  private _employees: Employee[];
  private _employee?: Employee;

  private _api: EmployeesService;
  private _fetch: FetchService;

  constructor() {
    this._employees = employees;
    this._employee = undefined;

    this._api = new EmployeesService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get employees() {
    return this._employees;
  }

  public set employees(value) {
    this._employees = value;
  }

  public get employee() {
    return this._employee;
  }

  public set employee(value) {
    this._employee = value;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.employees = result;
      }
    );

    return this._employees;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.employee = result;
      }
    );

    return this._employee;
  }

  public async add(entity: CreateEmployee) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this._employees.push(result);
      }
    );
  }

  public async update(entity: UpdateEmployee) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this._employees.findIndex(
          (item) => item.id === entity.id
        );
        this._employees[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this._employees = this._employees.filter(
          (item) => item.id !== result.id
        );
      }
    );
  }

  public async duplicate(id: string) {
    const record = this._employees.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._employees.push(copy);
    }
  }
}

export default new EmployeesStore();
