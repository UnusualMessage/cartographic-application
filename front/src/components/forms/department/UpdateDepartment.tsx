import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { OrganizationsStore } from "../../../stores/entities";
import { useFetch } from "../../../shared/lib/hooks";
import { Department } from "../../../types/entities";
import {
  formRenderer,
  getSelectOptions,
} from "../../../shared/lib/utils/forms";
import { UpdateDepartment } from "../../../types/entities/Department";
import DepartmentsStore from "../../../stores/entities/DepartmentsStore";
import { updateDepartment } from "../../../shared/assets/forms";

interface Props {
  id?: string;
}

const UpdateDepartment = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [department, setDepartment] = useState<Department | undefined>(
    undefined
  );

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateDepartment>({
    defaultValues: useMemo(() => {
      return {
        title: department?.title,
        organizationId: department?.organization.id,
      };
    }, [department]),
  });

  useFetch(async () => {
    if (id) {
      const department = await DepartmentsStore.getById(id);
      setDepartment(department);
      reset(department);
    }
  }, [id]);

  const onSubmit: SubmitHandler<UpdateDepartment> = async (data) => {
    await DepartmentsStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Редактирование записи (подразделение)"}
      buttonText={"Редактировать"}
      buttonIcon={<Icon icon={"edit"} />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(
        updateDepartment(getSelectOptions(organizations)),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(UpdateDepartment);
