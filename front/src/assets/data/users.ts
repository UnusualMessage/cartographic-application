import { v4 as uuid } from "uuid";

import { User } from "../../types/entities";

export const users: User[] = [
  {
    id: uuid(),
    login: "Admin",
    roles: 8,
  },

  {
    id: uuid(),
    login: "Moderator",
    roles: 4,
  },

  {
    id: uuid(),
    login: "Monitor",
    roles: 2,
  },

  {
    id: uuid(),
    login: "Guest",
    roles: 1,
  },
];
