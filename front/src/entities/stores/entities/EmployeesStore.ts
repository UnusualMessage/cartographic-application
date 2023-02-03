import { makeAutoObservable, runInAction } from "mobx";

import { ApiStore } from "@shared/api/types/api";
import {
  CreateEmployee,
  UpdateEmployee,
} from "@shared/api/types/entities/Employee";
import { employees } from "@shared/assets/samples";

import { Employee } from "../../../shared/api/types/entities";

class EmployeesStore
  implements ApiStore<Employee, CreateEmployee, UpdateEmployee>
{
  private _employees: Employee[];
  private _employee: Employee | undefined;

  constructor() {
    this._employees = employees;
    this._employee = undefined;

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

  public async getById(id: string) {
    runInAction(() => {
      this._employee = this._employees.find((item) => item.id === id);
    });

    return this._employee;
  }

  public async add(entity: CreateEmployee) {
    const employees = this._employees.slice();

    runInAction(() => {
      this._employees = employees;
    });
  }

  public async duplicate(id: string) {
    const employees = this._employees.slice();

    runInAction(() => {
      this._employees = employees;
    });
  }

  public async update(entity: UpdateEmployee) {
    const employees = this._employees.slice();

    runInAction(() => {
      this._employees = employees;
    });
  }

  public async remove(id: string) {
    const employees = this._employees
      .slice()
      .filter((employee) => employee.id !== id);

    runInAction(() => {
      this._employees = employees;
      this._employee = undefined;
    });
  }
}

export default new EmployeesStore();
