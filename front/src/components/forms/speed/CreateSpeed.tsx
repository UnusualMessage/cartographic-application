import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import DialogForm from "../../auxiliary/DialogForm";
import { OrganizationsStore } from "../../../stores/entities";
import { formRenderer, getSelectOptions } from "../../../utils/forms";
import { createSpeed } from "../../../assets/forms";
import { CreateSpeed } from "../../../types/entities/Speed";
import SpeedsStore from "../../../stores/entities/SpeedsStore";

const CreateSpeed = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CreateSpeed>({
    defaultValues: {
      title: "",
      min: 0,
      max: 0,
      timeLimit: 0,
      organizationId: "",
    },
  });

  const onSubmit: SubmitHandler<CreateSpeed> = async (data) => {
    await SpeedsStore.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Создание записи (скоростной режим)"}
      buttonText={"Создать"}
      buttonIcon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(
        createSpeed(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(CreateSpeed);
