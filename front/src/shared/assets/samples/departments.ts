import { v4 as uuid } from "uuid";

import { Department } from "../../../types/entities";
import { organizations } from "./organizations";

export const departments: Department[] = [
  {
    id: uuid(),
    title: "Инженерное подразделение",
    organization: organizations[1],
  },

  {
    id: uuid(),
    title: "Инженерное подразделение",
    organization: organizations[0],
  },
];
