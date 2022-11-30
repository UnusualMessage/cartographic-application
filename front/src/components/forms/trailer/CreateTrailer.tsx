import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import DialogForm from "../../auxiliary/DialogForm";
import {
  DepartmentsStore,
  OrganizationsStore,
  TrailersStore,
} from "../../../stores/entities";
import { formRenderer, getSelectOptions } from "../../../utils/forms";
import { createTrailer } from "../../../assets/forms";
import { CreateTrailer } from "../../../types/entities/Trailer";

const CreateTrailer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CreateTrailer>();

  const onSubmit: SubmitHandler<CreateTrailer> = async (data) => {
    await TrailersStore.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  return (
    <DialogForm
      title={"Создание записи (прицеп)"}
      buttonText={"Создать"}
      buttonIcon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(
        createTrailer(
          getSelectOptions(organizations),
          getSelectOptions(departments)
        ),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(CreateTrailer);
