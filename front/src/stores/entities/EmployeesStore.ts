import { makeAutoObservable } from "mobx";

import { Employee } from "../../types/entities";
import { employees } from "../../assets/data";

class EmployeesStore {
  private readonly _employees: Employee[];

  constructor() {
    this._employees = employees;

    makeAutoObservable(this);
  }

  public get employees() {
    return this._employees;
  }
}

export default new EmployeesStore();
