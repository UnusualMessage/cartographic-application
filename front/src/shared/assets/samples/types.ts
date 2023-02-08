import { v4 as uuid } from "uuid";

import { EquipmentType } from "../../api/types/entities";

export const types: EquipmentType[] = [
  {
    id: uuid(),
    name: "Автомобиль",
  },

  {
    id: uuid(),
    name: "Грузовик",
  },
];
