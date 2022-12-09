import { v4 as uuid } from "uuid";
import { randomPolygon, toMercator } from "@turf/turf";

import { Geozone } from "../../types/entities";
import { organizations } from "./organizations";

const randomPolygons = toMercator(randomPolygon(10));

export const geozones: Geozone[] = randomPolygons.features.map(
  (feature, index) => {
    return {
      id: uuid(),
      title: `Поле №${index + 1}`,
      organization: organizations[0],
      geometry: {
        type: "Polygon",
        coordinates: feature.geometry.coordinates,
      },
    };
  }
);
