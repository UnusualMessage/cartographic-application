import { FeatureLike } from "ol/Feature";
import { Geometry } from "ol/geom";
import { StyleFunction } from "ol/style/Style";

import { getDrawAreaStyle } from "./getAreaMeasurementStyle";
import { getVisibleCoordinateStyle } from "./getCoordinateMeasurementStyle";
import { getDrawLengthStyle } from "./getLengthMeasurementStyle";

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
      return getDrawAreaStyle(feature, 0);
    case "LineString":
      return getDrawLengthStyle(feature, 0);
  }
};
