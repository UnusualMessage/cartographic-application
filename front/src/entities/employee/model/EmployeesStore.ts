import { makeAutoObservable, runInAction } from "mobx";

import { employees } from "@shared/assets";
import {
  Employee,
  CreateEmployee,
  UpdateEmployee,
  ApiStore,
} from "@shared/misc";

class EmployeesStore
  implements ApiStore<Employee, CreateEmployee, UpdateEmployee>
{
  private _employees: Employee[];
  private _employee?: Employee;

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
    console.log(entity);
    const employees = this._employees.slice();

    runInAction(() => {
      this._employees = employees;
    });
  }

  public async duplicate(id: string) {
    console.log(id);
    const employees = this._employees.slice();

    runInAction(() => {
      this._employees = employees;
    });
  }

  public async update(entity: UpdateEmployee) {
    console.log(entity);
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
