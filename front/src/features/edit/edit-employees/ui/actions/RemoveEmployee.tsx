import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/business";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemoveEmployee = ({ id }: Props) => {
  return <Remove name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(RemoveEmployee);
