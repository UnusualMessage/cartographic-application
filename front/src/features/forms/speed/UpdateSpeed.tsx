import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../../components/auxiliary/forms/DialogForm";
import { updateSpeed } from "../../../shared/assets/templates/forms";
import { useFetch } from "../../../shared/lib/hooks";
import {
  formRenderer,
  getSelectOptions,
} from "../../../shared/lib/utils/forms";
import { OrganizationsStore } from "../../../stores/entities";
import SpeedsStore from "../../../stores/entities/SpeedsStore";
import { Speed } from "../../../types/entities";
import { UpdateSpeed } from "../../../types/entities/Speed";

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
