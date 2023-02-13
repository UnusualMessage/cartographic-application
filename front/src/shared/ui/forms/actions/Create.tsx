import { Icon } from "@blueprintjs/core";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { ApiStore } from "@shared/misc/types/api";
import { Form } from "@shared/misc/types/forms";
import { formRenderer } from "@shared/lib/utils/forms";

import DialogForm from "../DialogForm";

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
