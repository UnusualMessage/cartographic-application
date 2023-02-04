import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui/forms/actions";

import { EmployeesStore } from "../../../stores/entities";

interface Props {
  id?: string;
}

const RemoveEmployee = ({ id }: Props) => {
  return <Remove name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(RemoveEmployee);
