import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui";

import { DepartmentsStore } from "../../model";

interface Props {
  id?: string;
}

const RemoveDepartment = ({ id }: Props) => {
  return <Remove name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(RemoveDepartment);