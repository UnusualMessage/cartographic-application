import { v4 as uuid } from "uuid";

import { types } from "./types";
import { Equipment } from "../../misc";

export const equipment: Equipment[] = [
  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
    status: "waiting",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    status: "waiting",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    status: "disabled",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    status: "parking",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    status: "no-data",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    status: "disabled",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[1],
    status: "disabled",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[1],
    status: "waiting",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[1],
    status: "no-data",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[1],
    status: "parking",
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[1],
    status: "disabled",
  },
];
