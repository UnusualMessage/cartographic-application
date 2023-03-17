import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/department";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicateDepartment = ({ id }: Props) => {
  return <Duplicate name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(DuplicateDepartment);
