import { centerOfMass, lineString } from "@turf/turf";
import { FeatureLike } from "ol/Feature";
import { Coordinate } from "ol/coordinate";

import { getFeatureCenter } from "@shared/lib";

export const getFeaturesCenter = (features: FeatureLike[]) => {
  const centers: Coordinate[] = [];

  features.forEach((feature) => {
    const center = getFeatureCenter(feature);
    centers.push(center);
  });

  if (centers.length > 1) {
    return centerOfMass(lineString(centers)).geometry.coordinates;
  } else {
    return centers[0];
  }
};
