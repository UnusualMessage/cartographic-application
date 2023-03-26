import { fromLonLat } from "ol/proj";
import { v4 as uuid } from "uuid";

import { types } from "./types";
import type { Equipment } from "../../misc";

export const equipment: Equipment[] = [
  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
    status: "waiting",
    location: fromLonLat([36.29, 54.51]) as [number, number],
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    status: "waiting",
    location: fromLonLat([36.33, 54.57]) as [number, number],
  },
];
