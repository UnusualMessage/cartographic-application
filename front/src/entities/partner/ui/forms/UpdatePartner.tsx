import { EditOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { updatePartner } from "@shared/assets";
import { useFetch, formRenderer, getSelectOptions } from "@shared/lib";
import {
  Partner,
  UpdatePost,
  UpdatePartner as UpdatePartnerType,
} from "@shared/misc";
import { DialogForm } from "@shared/ui";

import { OrganizationsStore } from "../../../organization";
import { PartnersStore } from "../../model";

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
      buttonIcon={<EditOutlined />}
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
