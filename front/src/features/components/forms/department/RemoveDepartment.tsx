import { observer } from "mobx-react-lite";

import DepartmentsStore from "../../../../entities/stores/entities/DepartmentsStore";
import { Remove } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const RemoveDepartment = ({ id }: Props) => {
  return <Remove name={"подразделение"} store={DepartmentsStore} id={id} />;
};

export default observer(RemoveDepartment);
