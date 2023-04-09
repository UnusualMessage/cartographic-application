import { v4 as uuid } from "uuid";

import { organizations } from "./organizations";
import type { User } from "../../misc";

export const users: User[] = [
  {
    id: uuid(),
    login: "Admin",
    fullName: "Админ Никита Алексеевич",
    organization: organizations[0],
    roles: 8,
  },

  {
    id: uuid(),
    login: "Moderator",
    fullName: "Модератор Никита Алексеевич",
    organization: organizations[0],
    roles: 4,
  },

  {
    id: uuid(),
    login: "Monitor",
    fullName: "Монитор Никита Алексеевич",
    organization: organizations[0],
    roles: 2,
  },

  {
    id: uuid(),
    login: "Guest",
    fullName: "Гость Никита Алексеевич",
    organization: organizations[0],
    roles: 1,
  },
];
