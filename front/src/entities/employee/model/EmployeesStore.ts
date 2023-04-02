import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { employees } from "@shared/assets";
import { isError } from "@shared/lib";
import {
  Employee,
  CreateEmployee,
  UpdateEmployee,
  ApiStore,
  ResponseService,
} from "@shared/misc";

import EmployeesService from "./EmployeesService";

class EmployeesStore
  implements ApiStore<Employee, CreateEmployee, UpdateEmployee>
{
  private _employees: Employee[];
  private _employee?: Employee;

  private _apiService: EmployeesService;
  private _responseService: ResponseService;

  constructor() {
    this._employees = employees;
    this._employee = undefined;

    this._apiService = new EmployeesService();
    this._responseService = new ResponseService();

    makeAutoObservable(this);
  }

  public get employees() {
    return this._employees;
  }

  public get employee() {
    return this._employee;
  }

  public set employee(value) {
    this._employee = value;
  }

  public async getAll() {
    return this._employees;
  }

  public async getById(id: string) {
    const response = await this._apiService.getById(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._employee = response;
    this._responseService.invokeSuccess();
    return response;
  }

  public async add(entity: CreateEmployee) {
    const response = await this._apiService.post(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._employees.push(response);
    this._responseService.invokeSuccess();
  }

  public async duplicate(id: string) {
    const record = this._employees.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._employees.push(copy);
    }
  }

  public async update(entity: UpdateEmployee) {
    const response = await this._apiService.put(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    const index = this._employees.findIndex((item) => item.id === entity.id);
    this._employees[index] = response;

    this._responseService.invokeSuccess();
  }

  public async remove(id: string) {
    const response = await this._apiService.delete(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._employees = this._employees.filter((item) => item.id !== response.id);
    this._responseService.invokeSuccess();
  }
}

export default new EmployeesStore();
