import { EditOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { updateSpeed } from "@shared/assets";
import { formRenderer, getSelectOptions, useFetch } from "@shared/lib";
import { UpdateSpeed as UpdateSpeedType, Speed } from "@shared/misc";
import { DialogForm } from "@shared/ui";

import { OrganizationsStore } from "../../../organization";
import { SpeedsStore } from "../../model";

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
  } = useForm<UpdateSpeedType>({
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

  const onSubmit: SubmitHandler<UpdateSpeedType> = async (data) => {
    await SpeedsStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Редактирование записи (скоростной режим)"}
      buttonText={"Редактировать"}
      buttonIcon={<EditOutlined />}
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
