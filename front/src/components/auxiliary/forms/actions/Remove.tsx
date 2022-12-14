import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import { useFetch } from "../../../../hooks";
import DialogForm from "../DialogForm";
import { ApiStore } from "../../../../types/api";
import { fromUuidToNumber } from "../../../../utils/format";

interface Item {
  id: string;
}

interface Props<T> {
  id?: string;
  name: string;
  store: ApiStore<T, any, any>;
}

const Remove = <T extends Item>({ id, name, store }: Props<T>) => {
  const [successful, setSuccessful] = useState(false);
  const [item, setItem] = useState<T | undefined>(undefined);

  useFetch(async () => {
    if (id) {
      setItem(await store.getById(id));
    }
  }, [id]);

  const handleRemove = async () => {
    if (item) {
      await store.remove(item.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={`Удаление записи (${name})`}
      buttonText={"Удалить"}
      buttonIcon={<Icon icon={"remove"} />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите удаление записи с номером ${fromUuidToNumber(item?.id ?? "???")}`}
    </DialogForm>
  );
};

export default Remove;
