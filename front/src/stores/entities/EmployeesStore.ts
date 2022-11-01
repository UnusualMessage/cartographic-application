import { makeAutoObservable } from "mobx";

import { Employee } from "../../types/entities";
import { employees } from "../../assets/data";

class EmployeesStore {
  private _employees: Employee[];

  constructor() {
    this._employees = employees;

    makeAutoObservable(this);
  }

  public get employees() {
    return this._employees;
  }

  public remove(id: string) {
    this._employees = this._employees.filter((employee) => employee.id !== id);
  }
}

export default new EmployeesStore();
