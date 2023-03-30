import { fromLonLat } from "ol/proj";
import { v4 as uuid } from "uuid";

import { types } from "./types";
import type { Equipment } from "../../misc";

export const equipment: Equipment[] = [
  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
    status: "waiting",
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([36.29, 54.51]),
      },
      properties: {},
    },
  },

  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
    status: "waiting",
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([36.59, 54.51]),
      },
      properties: {},
    },
  },

  {
    id: uuid(),
    name: "LADA 4X4 T883",
    type: types[0],
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
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
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
  },

  {
    id: uuid(),
    name: "LADA 4X4 У847",
    type: types[0],
    status: "disabled",
    feature: {
      id: uuid(),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: fromLonLat([35.33, 54.17]),
      },
      properties: {},
    },
  },
];
