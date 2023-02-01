import { v4 as uuid } from "uuid";

import { Trailer } from "../../types/entities";
import { departments } from "./departments";
import { organizations } from "./organizations";

export const trailers: Trailer[] = [
  {
    id: uuid(),
    title: "Прицеп №1",
    organization: organizations[1],
    department: departments[0],
  },

  {
    id: uuid(),
    title: "Прицеп №2",
    organization: organizations[1],
    department: departments[0],
  },
];
