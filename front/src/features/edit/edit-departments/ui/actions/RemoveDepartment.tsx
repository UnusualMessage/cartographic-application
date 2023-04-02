import { observer } from "mobx-react-lite";

import { DepartmentsStore } from "@entities/department";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemoveDepartment = ({ id }: Props) => {
  return <Remove name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(RemoveDepartment);
