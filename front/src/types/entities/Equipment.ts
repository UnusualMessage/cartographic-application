import EquipmentType from "./EquipmentType";

export default interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
}
