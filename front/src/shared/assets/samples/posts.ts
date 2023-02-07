import { v4 as uuid } from "uuid";

import { organizations } from "@shared/assets/samples/organizations";

import { Post } from "../../api/types/entities";

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
