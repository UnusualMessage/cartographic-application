import { Icon } from "@blueprintjs/core";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { formRenderer } from "../../../../shared";
import { ApiStore } from "../../../../shared/api/types/api";
import { Form } from "../../../../shared/api/types/forms";
import DialogForm from "../../../../shared/ui/DialogForm";

interface Props<T, CreateT> {
  name: string;
  store: ApiStore<T, CreateT, any>;
  form: Form<CreateT>;
}

const Create = <T, CreateT extends FieldValues>({
  name,
  store,
  form,
}: Props<T, CreateT>) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CreateT>();

  const onSubmit: SubmitHandler<CreateT> = async (data) => {
    await store.add(data);
    reset();
  };

  const onDeny = () => {
    reset();
  };

  return (
    <DialogForm
      title={`Создание записи (${name})`}
      buttonText={"Создать"}
      buttonIcon={<Icon icon={"add"} />}
      onAccept={handleSubmit(onSubmit)}
      onDeny={onDeny}
      successful={isSubmitSuccessful}
    >
      {formRenderer(form, register, errors)}
    </DialogForm>
  );
};
export default Create;
