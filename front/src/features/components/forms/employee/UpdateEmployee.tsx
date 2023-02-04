import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { UpdateEmployee } from "@shared/api/types/entities/Employee";
import { updateEmployee } from "@shared/assets";
import { formRenderer, getSelectOptions, useFetch } from "@shared/lib";

import {
  EmployeesStore,
  OrganizationsStore,
  PostsStore,
} from "../../../../entities/stores/entities";
import { Employee } from "../../../../shared/api/types/entities";
import DialogForm from "../../../../shared/ui/forms/DialogForm";

interface Props {
  id?: string;
}

const UpdateEmployee = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [employee, setEmployee] = useState<Employee | undefined>(undefined);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateEmployee>({
    defaultValues: useMemo(() => {
      return {
        firstName: employee?.firstName,
        secondName: employee?.secondName,
        patronymic: employee?.patronymic,
        phone: employee?.phone,
        birthDate: employee?.birthDate,
        organizationId: employee?.organization.id,
        postId: employee?.post.id,
        driverCard: employee?.driverCard,
      };
    }, [employee]),
  });

  useFetch(async () => {
    if (id) {
      const employee = await EmployeesStore.getById(id);
      setEmployee(employee);
      reset(employee);
    }
  }, [id]);

  const onSubmit: SubmitHandler<UpdateEmployee> = async (data) => {
    await EmployeesStore.update(data);
    setSuccessful(true);
  };

  const organizations = OrganizationsStore.organizations;
  const posts = PostsStore.posts;

  return (
    <DialogForm
      title={"Редактирование записи (сотрудник)"}
      buttonText={"Редактировать"}
      buttonIcon={<Icon icon={"edit"} />}
      buttonDisabled={!id}
      onAccept={id ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(
        updateEmployee(
          getSelectOptions(organizations),
          getSelectOptions(posts)
        ),
        register,
        errors
      )}
    </DialogForm>
  );
};

export default observer(UpdateEmployee);
