import { fromLonLat } from "ol/proj";
import { v4 as uuid } from "uuid";

import { organizations } from "./organizations";
import { types } from "./types";
import type { Equipment } from "../../misc";

export const equipment: Equipment[] = [
  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
    status: "parking",
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([36.29, 54.51]),
      },
      properties: {},
    },
    organization: organizations[0],
  },

  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
    status: "no-data",
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([36.59, 54.51]),
      },
      properties: {},
    },
    organization: organizations[0],
  },

  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[1],
    status: "waiting",
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([36.99, 54.71]),
      },
      properties: {},
    },
    organization: organizations[0],
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[1],
    status: "disabled",
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([36.33, 54.57]),
      },
      properties: {},
    },
    organization: organizations[0],
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([35.33, 54.17]),
      },
      properties: {},
    },
    status: "working",
    organization: organizations[0],
  },
];
