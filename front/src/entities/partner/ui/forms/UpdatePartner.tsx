import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { OrganizationsStore } from "@entities/organization/model";
import PartnersStore from "@entities/partner/model/PartnersStore";
import { updatePartner } from "@shared/assets";
import { formRenderer, getSelectOptions, useFetch } from "@shared/lib";
import { UpdatePartner as UpdatePartnerType } from "@shared/misc";
import { Partner } from "@shared/misc/types/entities";
import { UpdatePost } from "@shared/misc/types/entities/post";
import DialogForm from "@shared/ui/forms/DialogForm";

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

  const onSubmit: SubmitHandler<UpdatePartnerType> = async (data) => {
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
