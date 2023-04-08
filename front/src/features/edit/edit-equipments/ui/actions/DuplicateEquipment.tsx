import { observer } from "mobx-react-lite";

import { EquipmentStore } from "@entities/business";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicateEquipment = ({ id }: Props) => {
  return <Duplicate name={"техника"} store={EquipmentStore} id={id} />;
};

export default observer(DuplicateEquipment);
