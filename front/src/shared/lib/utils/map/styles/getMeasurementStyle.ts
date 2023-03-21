import { FeatureLike } from "ol/Feature";
import { Geometry } from "ol/geom";
import { StyleFunction } from "ol/style/Style";

import { getAreaMeasurementStyle } from "./getAreaMeasurementStyle";
import { getCoordinateMeasurementStyle } from "./getCoordinateMeasurementStyle";
import { getLengthMeasurementStyle } from "./getLengthMeasurementStyle";

export const getMeasurementStyle: StyleFunction = (feature: FeatureLike) => {
  const geometry = feature.getGeometry() as Geometry | null;

  if (!geometry) {
    return;
  }

  const type = geometry.getType();

  switch (type) {
    case "Point":
      return getCoordinateMeasurementStyle(feature, 0);
    case "Polygon":
      return getAreaMeasurementStyle(feature, 0);
    case "LineString":
      return getLengthMeasurementStyle(feature, 0);
  }
};
