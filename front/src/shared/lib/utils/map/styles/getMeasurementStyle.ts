import { FeatureLike } from "ol/Feature";
import { Geometry } from "ol/geom";
import { StyleFunction } from "ol/style/Style";

import { getVisibleAreaStyle } from "./areaMeasurementStyle";
import { getVisibleCoordinateStyle } from "./coordinateMeasurementStyle";
import { getVisibleLengthStyle } from "./lengthMeasurementStyle";

export const getMeasurementStyle: StyleFunction = (feature: FeatureLike) => {
  const geometry = feature.getGeometry() as Geometry | null;

  if (!geometry) {
    return;
  }

  const type = geometry.getType();

  switch (type) {
    case "Point":
      return getVisibleCoordinateStyle(feature, 0);
    case "Polygon":
      return getVisibleAreaStyle(feature, 0);
    case "LineString":
      return getVisibleLengthStyle(feature, 0);
  }
};
