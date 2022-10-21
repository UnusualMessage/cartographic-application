import { v4 as uuid } from "uuid";

import { Area } from "../../types/entities";

export const areas: Area[] = [
  {
    id: uuid(),
    title: "Кимовские просторы",
  },

  {
    id: uuid(),
    title: "Узловские просторы",
  },
];
