import { observer } from "mobx-react-lite";

import { EmployeesStore } from "@entities/business";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicateEmployee = ({ id }: Props) => {
  return <Duplicate name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(DuplicateEmployee);
