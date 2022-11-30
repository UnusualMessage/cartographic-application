import { Icon } from "@blueprintjs/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { OrganizationsStore } from "../../../stores/entities";
import { formRenderer, getSelectOptions } from "../../../utils/forms";
import { createPartner } from "../../../assets/forms";
import { CreatePartner } from "../../../types/entities/Partner";
import PartnersStore from "../../../stores/entities/PartnersStore";

const CreatePartner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CreatePartner>({
    defaultValues: {
      title: "",
      number: "",
      organizationId: "",
      inn: "",
      address: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<CreatePartner> = async (data) => {
    await PartnersStore.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Создание записи (контрагент)"}
      buttonText={"Создать"}
      buttonIcon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(
        createPartner(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(CreatePartner);
