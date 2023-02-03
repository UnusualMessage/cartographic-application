import { observer } from "mobx-react-lite";

import DepartmentsStore from "../../../../entities/stores/entities/DepartmentsStore";
import { Duplicate } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const DuplicateDepartment = ({ id }: Props) => {
  return <Duplicate name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(DuplicateDepartment);
