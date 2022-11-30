import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/forms/DialogForm";
import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "../../../stores/entities";
import { formRenderer, getSelectOptions } from "../../../utils/forms";
import { createEmployee } from "../../../assets/forms";
import { observer } from "mobx-react-lite";
import { CreateEmployee } from "../../../types/entities/Employee";

const CreateEmployee = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CreateEmployee>();

  const onSubmit: SubmitHandler<CreateEmployee> = async (data) => {
    await EmployeesStore.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  const organizations = OrganizationsStore.organizations;
  const posts = PostsStore.posts;

  return (
    <DialogForm
      title={"Создание записи (сотрудник)"}
      buttonText={"Создать"}
      buttonIcon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(
        createEmployee(
          getSelectOptions(organizations),
          getSelectOptions(posts)
        ),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(CreateEmployee);
