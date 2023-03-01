import { v4 as uuid } from "uuid";

import type { User } from "../../misc";

export const users: User[] = [
  {
    id: uuid(),
    login: "Admin",
    fullName: "Котенко Никита Алексеевич",
    roles: 8,
  },

  {
    id: uuid(),
    login: "Moderator",
    fullName: "Котенко Никита Алексеевич",
    roles: 4,
  },

  {
    id: uuid(),
    login: "Monitor",
    fullName: "Котенко Никита Алексеевич",
    roles: 2,
  },

  {
    id: uuid(),
    login: "Guest",
    fullName: "Котенко Никита Алексеевич",
    roles: 1,
  },
];
