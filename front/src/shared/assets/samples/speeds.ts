import { v4 as uuid } from "uuid";

import { organizations } from "./organizations";
import type { Speed } from "../../misc";

export const speeds: Speed[] = [
  {
    id: uuid(),
    title: "Обычное движение",
    organization: organizations[0],
    min: 20,
    max: 100,
    timeLimit: 60,
  },

  {
    id: uuid(),
    title: "Полевые работы",
    organization: organizations[0],
    min: 0,
    max: 10,
    timeLimit: 60,
  },

  {
    id: uuid(),
    title: "Стоянка",
    organization: organizations[0],
    min: 0,
    max: 5,
    timeLimit: 60,
  },
];
