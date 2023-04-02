import { baseUrl } from "@shared/constants";
import {
  ApiService,
  Employee,
  CreateEmployee,
  UpdateEmployee,
  EntitiesService,
} from "@shared/misc";

class EmployeesService
  extends EntitiesService<Employee, CreateEmployee, UpdateEmployee>
  implements ApiService<Employee, CreateEmployee, UpdateEmployee>
{
  constructor() {
    super(`${baseUrl}/Employees`);
  }
}

export default EmployeesService;
