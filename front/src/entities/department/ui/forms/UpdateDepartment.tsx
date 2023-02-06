import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Department, {
  UpdateDepartment,
} from "@shared/api/types/entities/Department";
import { updateDepartment } from "@shared/assets/templates/forms/department";
import { useFetch } from "@shared/lib";
import { formRenderer, getSelectOptions } from "@shared/lib/utils/forms";
import DialogForm from "@shared/ui/forms/DialogForm";

import OrganizationsStore from "../../../stores/entities/OrganizationsStore";
import DepartmentsStore from "../../model/DepartmentsStore";

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
