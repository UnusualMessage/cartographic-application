import { FeatureLike } from "ol/Feature";
import { Geometry, Point, LineString, MultiPoint } from "ol/geom";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

import {
  TooltipStore,
  InteractionsStore,
  MeasurementStore,
} from "../../../../misc";
import { formatLength } from "../../format";

const segmentsStyle = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0.2)",
  }),
  stroke: new Stroke({
    color: "#1677FF",
    width: 3,
  }),

  image: new CircleStyle({
    radius: 0,
  }),
});

const pointsStyle = new Style({
  image: new CircleStyle({
    radius: 4,
    stroke: new Stroke({
      color: "#1677FF",
      width: 2,
    }),
    fill: new Fill({
      color: "rgba(255, 255, 255, 1)",
    }),
  }),

  geometry: (feature) => {
    const coordinates = (feature.getGeometry() as LineString).getCoordinates();
    coordinates.pop();
    return new MultiPoint(coordinates);
  },
});

export const getDrawLengthStyle: StyleFunction = (feature: FeatureLike) => {
  if (!InteractionsStore.interacting) {
    return;
  }

  const styles = [segmentsStyle, pointsStyle];
  const geometry = feature.getGeometry() as Geometry | null;

  if (!geometry) {
    return;
  }

  const point = new Point((geometry as LineString).getLastCoordinate());

  const length = formatLength(geometry);

  MeasurementStore.distance = length;
  TooltipStore.text = length;
  TooltipStore.show(point.getCoordinates());

  return styles;
};

export const getVisibleLengthStyle: StyleFunction = () => {
  return [segmentsStyle];
};
