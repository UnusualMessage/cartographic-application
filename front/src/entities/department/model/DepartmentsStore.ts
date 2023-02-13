import { makeAutoObservable, runInAction } from "mobx";

import { ApiStore } from "@shared/misc/types/api/ApiStore";
import Department, {
  CreateDepartment,
  UpdateDepartment,
} from "@shared/misc/types/entities/Department";
import { departments } from "@shared/assets/samples/departments";

class DepartmentsStore
  implements ApiStore<Department, CreateDepartment, UpdateDepartment>
{
  private _departments: Department[];
  private _department: Department | undefined;

  constructor() {
    this._departments = departments;
    this._department = undefined;

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

  public async getById(id: string) {
    runInAction(() => {
      this._department = this._departments.find((item) => item.id === id);
    });

    return this._department;
  }

  public async add(entity: CreateDepartment) {
    const data = this._departments.slice();

    runInAction(() => {
      this._departments = data;
    });
  }

  public async duplicate(id: string) {
    const data = this._departments.slice();

    runInAction(() => {
      this._departments = data;
    });
  }

  public async update(entity: UpdateDepartment) {
    const data = this._departments.slice();

    runInAction(() => {
      this._departments = data;
    });
  }

  public async remove(id: string) {
    const data = this._departments.slice().filter((item) => item.id !== id);

    runInAction(() => {
      this._departments = data;
      this._department = undefined;
    });
  }
}

export default new DepartmentsStore();
