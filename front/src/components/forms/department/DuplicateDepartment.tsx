import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
import { useState } from "react";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { useFetch } from "../../../hooks";
import { Department } from "../../../types/entities";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";

interface Props {
  id?: string;
}

const DuplicateDepartment = ({ id }: Props) => {
  const [department, setDepartment] = useState<Department | undefined>(
    undefined
  );
  const [successful, setSuccessful] = useState(false);

  useFetch(async () => {
    if (id) {
      setDepartment(await DepartmentsStore.getById(id));
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (department) {
      await DepartmentsStore.duplicate(department.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Дублирование записи (подразделение)"}
      buttonText={"Дублировать"}
      buttonIcon={<Icon icon={"duplicate"} />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите дублирование записи ${department?.title} - ${department?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicateDepartment);
