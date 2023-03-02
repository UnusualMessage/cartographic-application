import { CopyOutlined } from "@ant-design/icons";
import { useState } from "react";

import { useFetch, fromUuidToNumber } from "../../../lib";
import type { ApiStore } from "../../../misc";
import DialogForm from "../DialogForm";

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
      buttonIcon={<CopyOutlined />}
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
