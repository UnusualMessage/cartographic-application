import { useState } from "react";
import { useFetch } from "../../../../../shared/lib/hooks";
import DialogForm from "../DialogForm";
import { Icon } from "@blueprintjs/core";
import { ApiStore } from "../../../../../shared/api/types/api";
import { fromUuidToNumber } from "../../../../../shared/lib/utils/format";

interface Item {
  id: string;
}

interface Props<T> {
  id?: string;
  name: string;
  store: ApiStore<T, any, any>;
}

const Duplicate = <T extends Item>({ id, name, store }: Props<T>) => {
  const [item, setItem] = useState<T | undefined>(undefined);
  const [successful, setSuccessful] = useState(false);

  useFetch(async () => {
    if (id) {
      setItem(await store.getById(id));
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (item) {
      await store.duplicate(item.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={`Дублирование записи (${name})`}
      buttonText={"Дублировать"}
      buttonIcon={<Icon icon={"duplicate"} />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите дублирование записи с номером ${fromUuidToNumber(
        item?.id ?? "???"
      )}`}
    </DialogForm>
  );
};

export default Duplicate;
