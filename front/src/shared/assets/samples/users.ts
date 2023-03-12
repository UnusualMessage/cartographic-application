import { v4 as uuid } from "uuid";

import type { User } from "../../misc";

export const users: User[] = [
  {
    id: uuid(),
    login: "Admin",
    fullName: "Админ Никита Алексеевич",
    roles: 8,
  },

  {
    id: uuid(),
    login: "Moderator",
    fullName: "Модератор Никита Алексеевич",
    roles: 4,
  },

  {
    id: uuid(),
    login: "Monitor",
    fullName: "Монитор Никита Алексеевич",
    roles: 2,
  },

  {
    id: uuid(),
    login: "Guest",
    fullName: "Гость Никита Алексеевич",
    roles: 1,
  },
];
