import { Feature, toWgs84 } from "@turf/turf";

import { Geozone, Projections } from "@shared/misc";

import { GeozonesStore } from "./index";

export const convertGeozone = (
  geozone: Geozone,
  projection: Projections
): Feature => {
  let geometry;

  switch (projection) {
    case Projections.EPSG3857:
      geometry = geozone.feature?.geometry;
      break;

    case Projections.EPSG4326:
      geometry = toWgs84(geozone.feature?.geometry);
      break;
  }

  return {
    type: "Feature",
    geometry: geometry ?? { type: "Polygon", coordinates: [] },
    properties: {},
  };
};

export const convertGeozones = (type: Projections): Feature[] => {
  const geozones = GeozonesStore.geozones;

  const features: Feature[] = [];

  for (const geozone of geozones) {
    features.push(convertGeozone(geozone, type));
  }

  return features;
};
