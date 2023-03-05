import { EditOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { updateDepartment } from "@shared/assets";
import { useFetch, formRenderer, getSelectOptions } from "@shared/lib";
import {
  Department,
  UpdateDepartment as UpdateDepartmentType,
} from "@shared/misc";
import { DialogForm } from "@shared/ui";

import { OrganizationsStore } from "../../../organization";
import { DepartmentsStore } from "../../model";

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
  } = useForm<UpdateDepartmentType>({
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

  const onSubmit: SubmitHandler<UpdateDepartmentType> = async (data) => {
    await DepartmentsStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;

  return (
    <DialogForm
      title={"Редактирование записи (подразделение)"}
      buttonText={"Редактировать"}
      buttonIcon={<EditOutlined />}
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
