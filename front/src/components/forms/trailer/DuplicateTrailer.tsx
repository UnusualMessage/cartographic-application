import { observer } from "mobx-react-lite";
import { Icon } from "@blueprintjs/core";
import { useState } from "react";

import DialogForm from "../../auxiliary/DialogForm";
import { TrailersStore } from "../../../stores/entities";
import { useFetch } from "../../../hooks";
import { Trailer } from "../../../types/entities";

interface Props {
  id?: string;
}

const DuplicateTrailer = ({ id }: Props) => {
  const [trailer, setTrailer] = useState<Trailer | undefined>(undefined);
  const [successful, setSuccessful] = useState(false);

  useFetch(async () => {
    if (id) {
      setTrailer(await TrailersStore.getById(id));
    }
  }, [id]);

  const handleDuplicate = async () => {
    if (trailer) {
      await TrailersStore.duplicate(trailer.id);
      setSuccessful(true);
    }
  };

  return (
    <DialogForm
      title={"Дублирование записи (прицеп)"}
      buttonText={"Дублировать"}
      buttonIcon={<Icon icon={"duplicate"} />}
      buttonDisabled={!id}
      onAccept={id ? handleDuplicate : undefined}
      successful={successful}
      setSuccessful={setSuccessful}
    >
      {`Подтвердите дублирование записи ${trailer?.title} - ${trailer?.id}`}
    </DialogForm>
  );
};

export default observer(DuplicateTrailer);
