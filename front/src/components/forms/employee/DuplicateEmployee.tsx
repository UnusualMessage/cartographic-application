import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
import { useState } from "react";

import DialogForm from "../../auxiliary/DialogForm";
import { EmployeesStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { Employee } from "../../../types/entities";

interface Props {
  id?: string;
}

const DuplicateEmployee = ({ id }: Props) => {
  const [employee, setEmployee] = useState<Employee | undefined>(undefined);
  const [successful, setSuccessful] = useState(false);

  useFetch(async () => {
    if (id) {
      setEmployee(await EmployeesStore.getById(id));
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (employee) {
      await EmployeesStore.duplicate(employee.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Дублирование записи (сотрудник)"}
      buttonText={"Дублировать"}
      buttonIcon={<Icon icon={"duplicate"} />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите дублирование записи ${employee?.firstName} - ${employee?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicateEmployee);
