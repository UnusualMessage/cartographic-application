import { v4 as uuid } from "uuid";

import { Employee } from "../../types/entities";
import { organizations } from "./organizations";
import { posts } from "./posts";

export const employees: Employee[] = [
  {
    id: uuid(),
    fullName: "Котенко Никита Алексеевич",
    post: posts[0],
    organization: organizations[0],
  },

  {
    id: uuid(),
    fullName: "Котенко Алексей Николаевич",
    post: posts[0],
    organization: organizations[0],
  },
];
