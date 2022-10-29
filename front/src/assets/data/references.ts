import { v4 as uuid } from "uuid";

import Reference from "../../types/Reference";

export const references: Reference[] = [
  {
    id: uuid(),
    title: "Контрагенты",
  },

  {
    id: uuid(),
    title: "Организации",
  },

  {
    id: uuid(),
    title: "Геозоны",
  },

  {
    id: uuid(),
    title: "Места хранения",
  },

  {
    id: uuid(),
    title: "Места назначения",
  },
];
