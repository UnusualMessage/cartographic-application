import { v4 as uuid } from "uuid";

import type { Organization } from "../../misc";

export const organizations: Organization[] = [
  {
    id: uuid(),
    title: "ООО 'Сельхоз'",
  },

  {
    id: uuid(),
    title: "ООО 'Хозсель'",
  },
];
