import { v4 as uuid } from "uuid";

import { organizations } from "./organizations";
import { Post } from "../../misc/types/entities";

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
