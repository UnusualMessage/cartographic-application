import { v4 as uuid } from "uuid";

import Partner from "../../types/entities/Partner";
import { organizations } from "./organizations";

export const partners: Partner[] = [
  {
    id: uuid(),
    title: "ООО Моя оборона",
    organization: organizations[0],
    address: "ул. Пушкина",
    inn: "40 54 669825 25",
  },

  {
    id: uuid(),
    title: "ООО Твоя оборона",
    organization: organizations[0],
    address: "ул. Колотушкина",
    inn: "41 54 669825 25",
  },
];
