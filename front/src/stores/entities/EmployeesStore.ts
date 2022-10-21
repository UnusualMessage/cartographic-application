import { Employee } from "../../types/entities";
import { employees } from "../../assets/data";

class EmployeesStore {
  private _employees: Employee[];

  constructor() {
    this._employees = employees;
  }

  public get employees() {
    return this._employees;
  }

  public set employees(employees: Employee[]) {
    this._employees = employees;
  }
}

export default new EmployeesStore();
