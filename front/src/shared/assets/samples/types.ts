import { v4 as uuid } from "uuid";

import { organizations } from "./organizations";
import type { EquipmentType } from "../../misc";

export const types: EquipmentType[] = [
  {
    id: uuid(),
    name: "Автомобиль",
    organization: organizations[0],
  },

  {
    id: uuid(),
    name: "Грузовик",
    organization: organizations[0],
  },
];
