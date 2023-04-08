import { observer } from "mobx-react-lite";

import { EquipmentTypesStore } from "@entities/business";
import { Remove } from "@shared/ui";

interface Props {
  id?: string;
}

const RemoveEquipmentType = ({ id }: Props) => {
  return <Remove name={"тип техники"} store={EquipmentTypesStore} id={id} />;
};

export default observer(RemoveEquipmentType);
