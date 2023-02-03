import { v4 as uuid } from "uuid";

import { Employee } from "../../api/types/entities";
import { organizations } from "./organizations";
import { posts } from "./posts";

export const employees: Employee[] = [
  {
    id: uuid(),
    firstName: "Никита",
    secondName: "Котенко",
    patronymic: "Алексеевич",
    phone: "8 (953) 972-31-06",
    post: posts[0],
    organization: organizations[0],
  },

  {
    id: uuid(),
    firstName: "Алексей",
    secondName: "Котенко",
    patronymic: "Николаевич",
    post: posts[0],
    organization: organizations[0],
  },
];
