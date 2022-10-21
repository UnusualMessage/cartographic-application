import { v4 as uuid } from "uuid";

import { EmployeeRole } from "../../types/entities";

export const roles: EmployeeRole[] = [
  {
    id: uuid(),
    name: "Водитель",
  },

  {
    id: uuid(),
    name: "Автомобиль",
  },

  {
    id: uuid(),
    name: "Грузовик",
  },
];
