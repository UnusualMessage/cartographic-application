import { v4 as uuid } from "uuid";

import { Organization } from "../../api/types/entities";

export const organizations: Organization[] = [
  {
    id: uuid(),
    title: "ООО 'Сельхоз'",
    text: "Какая же классная организация, столько геозон, техники, планов и достижений (текст короче)",
  },

  {
    id: uuid(),
    title: "ООО 'Хозсель'",
    text: "Какая же классная организация, столько геозон, техники, планов и достижений (текст короче)",
  },
];
