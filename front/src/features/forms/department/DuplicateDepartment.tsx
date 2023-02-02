import { observer } from "mobx-react-lite";

import { Duplicate } from "../../../components/auxiliary/forms/actions";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";

interface Props {
  id?: string;
}

const DuplicateDepartment = ({ id }: Props) => {
  return <Duplicate name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(DuplicateDepartment);
