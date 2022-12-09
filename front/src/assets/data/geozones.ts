import { v4 as uuid } from "uuid";
import { area, BBox, randomPolygon, toMercator } from "@turf/turf";

import { Geozone } from "../../types/entities";
import { organizations } from "./organizations";

interface Options {
  bbox?: BBox;
  num_vertices: number;
}

const polygonOptions: Options = { bbox: [35, 55, 130, 65], num_vertices: 5 };

const randomPolygons = toMercator(randomPolygon(10, polygonOptions));

export const geozones: Geozone[] = randomPolygons.features.map(
  (feature, index) => {
    return {
      id: uuid(),
      area: area(feature.geometry) / 1e5,
      title: `Поле №${index + 1}`,
      organization: organizations[0],
      children: [],
      type: "field",
      geometry: {
        type: "Polygon",
        coordinates: feature.geometry.coordinates,
      },
    };
  }
);

const random = toMercator(randomPolygon(1, polygonOptions)).features[0];

geozones[0].children.push({
  id: uuid(),
  area: area(random.geometry),
  title: `Поле №${21}`,
  type: "field",
  children: [],
  organization: organizations[0],
  geometry: {
    type: "Polygon",
    coordinates: random.geometry.coordinates,
  },
});
