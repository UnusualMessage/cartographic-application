import { v4 as uuid } from "uuid";

import { Post } from "../../api/types/entities";
import { organizations } from "./organizations";

export const posts: Post[] = [
  {
    id: uuid(),
    title: "Водитель",
    organization: organizations[0],
  },

  {
    id: uuid(),
    title: "Кладовщик",
    organization: organizations[0],
  },
];
