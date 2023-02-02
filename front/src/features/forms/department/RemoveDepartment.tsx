import { observer } from "mobx-react-lite";

import { Remove } from "../../../components/auxiliary/forms/actions";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";

interface Props {
  id?: string;
}

const RemoveDepartment = ({ id }: Props) => {
  return <Remove name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(RemoveDepartment);
