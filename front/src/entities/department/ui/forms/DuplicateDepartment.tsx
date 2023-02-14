import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui";

import { DepartmentsStore } from "../../model";

interface Props {
  id?: string;
}

const DuplicateDepartment = ({ id }: Props) => {
  return <Duplicate name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(DuplicateDepartment);
