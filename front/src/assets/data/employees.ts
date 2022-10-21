import { v4 as uuid } from "uuid";

import { Employee } from "../../types/entities";
import { areas } from "./areas";

export const employees: Employee[] = [
  {
    id: uuid(),
    fullName: "Котенко Никита Алексеевич",
    role: {
      id: uuid(),
      name: "Водитель",
    },
    area: areas[0],
  },

  {
    id: uuid(),
    fullName: "Котенко Алексей Николаевич",
    role: {
      id: uuid(),
      name: "Водитель",
    },
    area: areas[1],
  },
];
