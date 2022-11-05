import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import DialogForm from "../../auxiliary/DialogForm";
import { EmployeesStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { Employee } from "../../../types/entities";

interface Props {
  id?: string;
}

const RemoveEmployee = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [employee, setEmployee] = useState<Employee | undefined>(undefined);

  useFetch(async () => {
    if (id) {
      setEmployee(await EmployeesStore.getById(id));
    }
  }, [id]);

  const handleRemove = async () => {
    if (employee) {
      await EmployeesStore.remove(employee.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Удаление записи (сотрудник)"}
      buttonText={"Удалить"}
      buttonIcon={<Icon icon={"remove"} />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите удаление записи ${employee?.firstName} - ${employee?.id}`}
    </DialogForm>
  );
};

export default observer(RemoveEmployee);
