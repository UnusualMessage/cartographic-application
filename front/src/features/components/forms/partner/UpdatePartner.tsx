import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { OrganizationsStore } from "../../../../entities/stores/entities";
import { useFetch } from "../../../../shared/lib/hooks";
import { Partner } from "../../../../shared/api/types/entities";
import { UpdatePost } from "../../../../shared/api/types/entities/Post";
import {
  formRenderer,
  getSelectOptions,
} from "../../../../shared/lib/utils/forms";
import { updatePartner } from "../../../../shared/assets/templates/forms";
import PartnersStore from "../../../../entities/stores/entities/PartnersStore";
import { UpdatePartner } from "../../../../shared/api/types/entities/Partner";

interface Props {
  id?: string;
}

const UpdatePartner = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [partner, setPartner] = useState<Partner | undefined>(undefined);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdatePost>({
    defaultValues: useMemo(() => {
      return {
        title: partner?.title,
        organizationId: partner?.organization.id,
        phone: partner?.phone,
        inn: partner?.inn,
        address: partner?.address,
      };
    }, [partner]),
  });

  useFetch(async () => {
    if (id) {
      const partner = await PartnersStore.getById(id);
      setPartner(partner);
      reset(partner);
    }
  }, [id]);

  const onSubmit: SubmitHandler<UpdatePartner> = async (data) => {
    await PartnersStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Редактирование записи (контрагент)"}
      buttonText={"Редактировать"}
      buttonIcon={<Icon icon={"edit"} />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(
        updatePartner(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(UpdatePartner);
