import { FeatureLike } from "ol/Feature";
import { Geometry, Point, LineString } from "ol/geom";
import { Fill, Stroke, Text } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

import { MeasurementStore } from "../../../../misc";
import { formatLength } from "../../format";

const style = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0.2)",
  }),
  stroke: new Stroke({
    color: "#1677FF",
    width: 4,
    lineDash: [10, 12],
  }),
  image: new CircleStyle({
    radius: 0,
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
    offsetY: -30,
  }),
});

export const getDrawLengthStyle: StyleFunction = (feature: FeatureLike) => {
  const styles = [style];
  const geometry = feature.getGeometry() as Geometry | null;

  if (!geometry) {
    return;
  }

  const point = new Point((geometry as LineString).getLastCoordinate());
  const label = formatLength(geometry);

  MeasurementStore.length = label;

  if (label) {
    labelStyle.setGeometry(point);
    labelStyle.getText().setText(label);

    styles.push(labelStyle);
  }

  return styles;
};
