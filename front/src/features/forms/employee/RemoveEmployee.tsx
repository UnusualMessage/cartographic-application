import { observer } from "mobx-react-lite";

import { EmployeesStore } from "../../../entities/stores/entities";
import { Remove } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const RemoveEmployee = ({ id }: Props) => {
  return <Remove name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(RemoveEmployee);
