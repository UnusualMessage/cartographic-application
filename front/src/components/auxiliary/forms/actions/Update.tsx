import { useState } from "react";
import {
  DeepPartial,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useFetch } from "../../../../shared/lib/hooks";
import DialogForm from "../DialogForm";
import { Icon } from "@blueprintjs/core";
import { formRenderer } from "../../../../shared/lib/utils/forms";
import { ApiStore } from "../../../../types/api";
import { Form } from "../../../../types/forms";

interface Item {
  id: string;
}

interface Props<T, UpdateT> {
  name: string;
  store: ApiStore<T, any, UpdateT>;
  item?: T;
  setItem: (item: T) => void;
  defaultValues: DeepPartial<UpdateT>;
  form: Form<UpdateT>;
}

const Update = <T extends Item, UpdateT extends FieldValues>({
  name,
  store,
  item,
  setItem,
  defaultValues,
  form,
}: Props<T, UpdateT>) => {
  const [successful, setSuccessful] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateT>({
    defaultValues: defaultValues,
  });

  useFetch(async () => {
    if (item) {
      const data = await store.getById(item.id);

      if (data) {
        setItem(data);
      }
    }
  }, [item]);

  const onSubmit: SubmitHandler<UpdateT> = async (data) => {
    await store.update(data);
    setSuccessful(true);
  };

  return (
    <DialogForm
      title={`Редактирование записи (${name})`}
      buttonText={"Редактировать"}
      buttonIcon={<Icon icon={"edit"} />}
      buttonDisabled={!item}
      onAccept={item ? handleSubmit(onSubmit) : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {formRenderer(form, register, errors)}
    </DialogForm>
  );
};

export default Update;
