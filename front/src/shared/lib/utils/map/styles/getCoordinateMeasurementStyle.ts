import { FeatureLike } from "ol/Feature";
import { Point } from "ol/geom";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

import { TooltipStore } from "../../../../misc";

const style = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0.2)",
  }),
  stroke: new Stroke({
    color: "rgba(0, 0, 0, 1)",
    width: 2,
  }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({
      color: "rgba(0, 0, 0, 1)",
    }),
    fill: new Fill({
      color: "rgba(255, 255, 255, 0.2)",
    }),
  }),
});

export const getCoordinateMeasurementStyle: StyleFunction = (
  feature: FeatureLike
) => {
  const geometry = feature.getGeometry() as Point;

  const coordinates = geometry.getCoordinates();

  TooltipStore.show(coordinates);

  return [style];
};
