import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { DepartmentsStore } from "@entities/department";
import { OrganizationsStore } from "@entities/organization";
import { TrailersStore } from "@entities/trailer/model";
import { updateTrailer } from "@shared/assets";
import { formRenderer, getSelectOptions, useFetch } from "@shared/lib";
import { UpdateTrailer as UpdateTrailerType } from "@shared/misc";
import { Trailer } from "@shared/misc/types/entities";
import DialogForm from "@shared/ui/forms/DialogForm";

interface Props {
  id?: string;
}

const UpdateTrailer = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [trailer, setTrailer] = useState<Trailer | undefined>(undefined);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateTrailerType>({
    defaultValues: useMemo(() => {
      return {
        title: trailer?.title,
        organizationId: trailer?.organization.id,
        departmentId: trailer?.department.id,
      };
    }, [trailer]),
  });

  useFetch(async () => {
    if (id) {
      const trailer = await TrailersStore.getById(id);
      setTrailer(trailer);
      reset(trailer);
    }
  }, [id]);

  const onSubmit: SubmitHandler<UpdateTrailerType> = async (data) => {
    await TrailersStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;
  const departments = DepartmentsStore.departments;

  return (
    <DialogForm
      title={"Редактирование записи (прицеп)"}
      buttonText={"Редактировать"}
      buttonIcon={<Icon icon={"edit"} />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(
        updateTrailer(
          getSelectOptions(organizations),
          getSelectOptions(departments)
        ),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(UpdateTrailer);
