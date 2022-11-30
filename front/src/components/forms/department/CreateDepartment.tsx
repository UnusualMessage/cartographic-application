import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { OrganizationsStore } from "../../../stores/entities";
import { formRenderer, getSelectOptions } from "../../../utils/forms";
import { CreateDepartment } from "../../../types/entities/Department";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";
import { createDepartment } from "../../../assets/forms";

const CreateDepartment = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CreateDepartment>();

  const onSubmit: SubmitHandler<CreateDepartment> = async (data) => {
    await DepartmentsStore.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Создание записи (подразделение)"}
      buttonText={"Создать"}
      buttonIcon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(
        createDepartment(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(CreateDepartment);
