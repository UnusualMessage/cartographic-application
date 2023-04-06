import { observer } from "mobx-react-lite";

import { EquipmentTypesStore } from "@entities/business";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicateEquipmentType = ({ id }: Props) => {
  return <Duplicate name={"тип техники"} store={EquipmentTypesStore} id={id} />;
};

export default observer(DuplicateEquipmentType);
