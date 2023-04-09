import { Feature, toWgs84 } from "@turf/turf";

import { Geozone, GeometryType } from "@shared/misc";

import { GeozonesStore } from "./index";

export const convertGeozone = (
  geozone: Geozone,
  type: GeometryType
): Feature => {
  let geometry;

  switch (type) {
    case "3857":
      geometry = geozone.feature?.geometry;
      break;

    case "4326":
      geometry = toWgs84(geozone.feature?.geometry);
      break;
  }

  return {
    type: "Feature",
    geometry: geometry ?? { type: "Polygon", coordinates: [] },
    properties: {},
  };
};

export const convertGeozones = (type: GeometryType): Feature[] => {
  const geozones = GeozonesStore.geozones;

  const features: Feature[] = [];

  for (const geozone of geozones) {
    features.push(convertGeozone(geozone, type));
  }

  return features;
};
