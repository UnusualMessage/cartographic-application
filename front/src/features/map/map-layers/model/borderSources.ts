import VectorSource from "ol/source/Vector";

import { createBorderSource } from "./createBorderSource";

interface Item {
  id: string;
  source: VectorSource;
  maxZoom?: number;
  minZoom?: number;
}

export const borderSources: Item[] = [
  {
    id: "admin_level_2",
    source: createBorderSource("admin_level_2"),
  },

  {
    id: "admin_level_3",
    source: createBorderSource("admin_level_3"),
  },

  {
    id: "admin_level_4",
    source: createBorderSource("admin_level_4"),
  },

  {
    id: "admin_level_5",
    source: createBorderSource("admin_level_5"),
  },

  {
    id: "admin_level_6",
    source: createBorderSource("admin_level_6"),
    minZoom: 8,
    maxZoom: 10,
  },

  {
    id: "admin_level_8",
    source: createBorderSource("admin_level_8"),
    minZoom: 10,
    maxZoom: 13,
  },

  {
    id: "admin_level_9",
    source: createBorderSource("admin_level_9"),
    minZoom: 13,
  },
];
