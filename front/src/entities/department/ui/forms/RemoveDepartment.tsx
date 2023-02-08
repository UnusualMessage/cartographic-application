import { observer } from "mobx-react-lite";

import Remove from "@shared/ui/forms/actions/Remove";

import DepartmentsStore from "../../model/DepartmentsStore";

interface Props {
  id?: string;
}

const RemoveDepartment = ({ id }: Props) => {
  return <Remove name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(RemoveDepartment);
