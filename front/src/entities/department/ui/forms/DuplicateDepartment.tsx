import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui/forms/actions";

import DepartmentsStore from "../../model/DepartmentsStore";

interface Props {
  id?: string;
}

const DuplicateDepartment = ({ id }: Props) => {
  return <Duplicate name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(DuplicateDepartment);
