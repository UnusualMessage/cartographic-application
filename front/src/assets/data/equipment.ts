import { v4 as uuid } from "uuid";

import Equipment from "../../types/entities/Equipment";
import { types } from "./types";

export const equipment: Equipment[] = [
  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
  },
];
