import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { useFetch } from "../../../hooks";
import { Department } from "../../../types/entities";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";

interface Props {
  id?: string;
}

const RemoveDepartment = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [department, setDepartment] = useState<Department | undefined>(
    undefined
  );

  useFetch(async () => {
    if (id) {
      setDepartment(await DepartmentsStore.getById(id));
    }
  }, [id]);

  const handleRemove = async () => {
    if (department) {
      await DepartmentsStore.remove(department.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Удаление записи (подразделение)"}
      buttonText={"Удалить"}
      buttonIcon={<Icon icon={"remove"} />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите удаление записи ${department?.title} - ${department?.id}`}
    </DialogForm>
  );
};

export default observer(RemoveDepartment);
