import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { UpdateSpeed } from "@shared/api/types/entities/Speed";
import { updateSpeed } from "@shared/assets";
import { formRenderer, getSelectOptions, useFetch } from "@shared/lib";

import { OrganizationsStore } from "../../../../entities/stores/entities";
import SpeedsStore from "../../../../entities/stores/entities/SpeedsStore";
import { Speed } from "../../../../shared/api/types/entities";
import DialogForm from "../../auxiliary/forms/DialogForm";

interface Props {
  id?: string;
}

const UpdateSpeed = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [speed, setSpeed] = useState<Speed | undefined>(undefined);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateSpeed>({
    defaultValues: useMemo(() => {
      return {
        title: speed?.title,
        min: speed?.min,
        max: speed?.max,
        timeLimit: speed?.timeLimit,
        organizationId: speed?.organization.id,
      };
    }, [speed]),
  });

  useFetch(async () => {
    if (id) {
      const speed = await SpeedsStore.getById(id);
      setSpeed(speed);
      reset(speed);
    }
  }, [id]);

  const onSubmit: SubmitHandler<UpdateSpeed> = async (data) => {
    await SpeedsStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Редактирование записи (скоростной режим)"}
      buttonText={"Редактировать"}
      buttonIcon={<Icon icon={"edit"} />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(
        updateSpeed(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(UpdateSpeed);
