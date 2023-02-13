import { v4 as uuid } from "uuid";

import { organizations } from "@shared/assets/samples/organizations";

import { Department } from "../../misc/types/entities";

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
