import { observer } from "mobx-react-lite";

import { EmployeesStore } from "../../../../entities/stores/entities";
import { Duplicate } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const DuplicateEmployee = ({ id }: Props) => {
  return <Duplicate name={"сотрудник"} store={EmployeesStore} id={id} />;
};

export default observer(DuplicateEmployee);
