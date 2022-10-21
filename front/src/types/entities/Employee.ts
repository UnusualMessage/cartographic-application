import EmployeeRole from "./EmployeeRole";
import Area from "./Area";

export default interface Employee {
  id: string;
  fullName: string;
  role: EmployeeRole;
  area: Area;
}
