import { observer } from "mobx-react-lite";

import Duplicate from "@shared/ui/forms/actions/Duplicate";

import { EmployeesStore } from "../../../stores/entities";

interface Props {
  id?: string;
}

const DuplicateEmployee = ({ id }: Props) => {
  return <Duplicate name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(DuplicateEmployee);
