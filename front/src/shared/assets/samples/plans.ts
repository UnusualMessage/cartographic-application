import { v4 as uuid } from "uuid";

import type { Plan } from "../../misc";

export const plans: Plan[] = [
  {
    id: uuid(),
    title: "Горох",
    type: "Горох",
    target: 1553.12,
    year: 2022,
  },

  {
    id: uuid(),
    title: "Горох",
    type: "Горох",
    target: 1353.12,
    year: 2021,
  },

  {
    id: uuid(),
    title: "Картофель",
    type: "Картофель",
    target: 7331.31,
    year: 2022,
  },

  {
    id: uuid(),
    title: "Картофель",
    type: "Картофель",
    target: 5631.31,
    year: 2021,
  },

  {
    id: uuid(),
    title: "Пшеница яровая",
    type: "Пшеница",
    target: 5142.12,
    year: 2022,
  },

  {
    id: uuid(),
    title: "Пшеница яровая",
    type: "Пшеница",
    target: 3442.12,
    year: 2021,
  },

  {
    id: uuid(),
    title: "Кукуруза на зерно",
    type: "Кукуруза",
    target: 2465.16,
    year: 2022,
  },

  {
    id: uuid(),
    title: "Кукуруза на зерно",
    type: "Кукуруза",
    target: 2565.16,
    year: 2021,
  },
];
