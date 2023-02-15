import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui";

import { EmployeesStore } from "../../model";

interface Props {
  id?: string;
}

const RemoveEmployee = ({ id }: Props) => {
  return <Remove name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(RemoveEmployee);
