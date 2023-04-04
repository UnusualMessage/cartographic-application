import { baseUrl } from "@shared/constants";
import {
  Department,
  ApiService,
  UpdateDepartment,
  CreateDepartment,
  EntitiesService,
} from "@shared/misc";

class DepartmentsService
  extends EntitiesService<Department, CreateDepartment, UpdateDepartment>
  implements ApiService<Department, CreateDepartment, UpdateDepartment>
{
  constructor() {
    super(`${baseUrl}/Departments`);
  }
}

export default DepartmentsService;
