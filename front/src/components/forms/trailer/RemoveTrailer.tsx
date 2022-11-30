import { Icon } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import DialogForm from "../../auxiliary/forms/DialogForm";
import { TrailersStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { Trailer } from "../../../types/entities";

interface Props {
  id?: string;
}

const RemoveTrailer = ({ id }: Props) => {
  const [successful, setSuccessful] = useState(false);
  const [trailer, setTrailer] = useState<Trailer | undefined>(undefined);

  useFetch(async () => {
    if (id) {
      setTrailer(await TrailersStore.getById(id));
    }
  }, [id]);

  const handleRemove = async () => {
    if (trailer) {
      await TrailersStore.remove(trailer.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Удаление записи (прицеп)"}
      buttonText={"Удалить"}
      buttonIcon={<Icon icon={"remove"} />}
      buttonDisabled={!id}
      onAccept={id ? handleRemove : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите удаление записи ${trailer?.title} - ${trailer?.id}`}
    </DialogForm>
  );
};

export default observer(RemoveTrailer);
