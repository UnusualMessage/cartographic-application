import Role from "./Role";
import Area from "./Area";

export default interface Employee {
  id: string;
  fullName: string;
  role: Role;
  area: Area;
}
