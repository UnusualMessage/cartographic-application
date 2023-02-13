import { v4 as uuid } from "uuid";

import { organizations } from "@shared/assets/samples/organizations";

import { departments } from "./departments";
import { Trailer } from "../../misc/types/entities";

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
