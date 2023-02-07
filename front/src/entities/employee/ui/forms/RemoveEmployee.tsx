import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/employee/model";
import { Remove } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const RemoveEmployee = ({ id }: Props) => {
  return <Remove name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(RemoveEmployee);
