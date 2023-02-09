import { FeatureLike } from "ol/Feature";
import { Geometry, LineString, Point, Polygon } from "ol/geom";
import { Fill, Stroke, Text } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

import MeasurementStore from "@features/interactions/model/MeasurementStore";

import { formatArea, formatLength } from "../format";

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

const labelStyle = new Style({
  text: new Text({
    font: "14px Calibri,sans-serif",
    fill: new Fill({
      color: "rgba(255, 255, 255, 1)",
    }),
    backgroundFill: new Fill({
      color: "rgba(0, 0, 0, 1)",
    }),
    padding: [3, 3, 3, 3],
    textBaseline: "bottom",
    offsetY: -15,
  }),
});

export const getMeasurementStyle: StyleFunction = (feature: FeatureLike) => {
  const styles = [style];
  const geometry = feature.getGeometry() as Geometry | null;

  if (!geometry) {
    return;
  }

  const type = geometry.getType();

  let point, label;

  if (type === "Polygon") {
    point = (geometry as Polygon).getInteriorPoint();

    label = formatArea(geometry);
    MeasurementStore.area = label;
  } else if (type === "LineString") {
    point = new Point((geometry as LineString).getLastCoordinate());

    label = formatLength(geometry);
    MeasurementStore.length = label;
  }

  if (label) {
    if (point) {
      labelStyle.setGeometry(point);
    }

    labelStyle.getText().setText(label);
    styles.push(labelStyle);
  }

  return styles;
};
