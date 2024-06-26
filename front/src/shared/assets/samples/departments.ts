import { v4 as uuid } from "uuid";

import { organizations } from "./organizations";
import type { Department } from "../../misc";

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
