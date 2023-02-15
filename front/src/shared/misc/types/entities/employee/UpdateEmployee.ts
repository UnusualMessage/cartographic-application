import { CreateEmployee } from "./CreateEmployee";

export interface UpdateEmployee extends CreateEmployee {
  id: string;
}
