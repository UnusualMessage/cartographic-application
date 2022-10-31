import { v4 as uuid } from "uuid";

import { Organization } from "../../types/entities";

export const organizations: Organization[] = [
  {
    id: uuid(),
    title: "ООО 'Рога и копыта!'",
  },
];
