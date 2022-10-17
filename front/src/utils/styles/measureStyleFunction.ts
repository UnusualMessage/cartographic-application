import { Geometry, LineString, Point, Polygon } from "ol/geom";
import { formatArea, formatLength } from "../format";
import { FeatureLike } from "ol/Feature";
import Style, { StyleFunction } from "ol/style/Style";
import { Fill, RegularShape, Stroke, Text } from "ol/style";
import CircleStyle from "ol/style/Circle";

const style = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0.2)",
  }),
  stroke: new Stroke({
    color: "rgba(0, 0, 0, 0.5)",
    lineDash: [10, 10],
    width: 2,
  }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({
      color: "rgba(0, 0, 0, 0.7)",
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
      color: "rgba(0, 0, 0, 0.7)",
    }),
    padding: [3, 3, 3, 3],
    textBaseline: "bottom",
    offsetY: -15,
  }),
  image: new RegularShape({
    radius: 8,
    points: 3,
    angle: Math.PI,
    displacement: [0, 10],
    fill: new Fill({
      color: "rgba(0, 0, 0, 0.7)",
    }),
  }),
});

new Style({
  text: new Text({
    font: "12px Calibri,sans-serif",
    fill: new Fill({
      color: "rgba(255, 255, 255, 1)",
    }),
    backgroundFill: new Fill({
      color: "rgba(0, 0, 0, 0.4)",
    }),
    padding: [2, 2, 2, 2],
    textAlign: "left",
    offsetX: 15,
  }),
});

const segmentStyle = new Style({
  text: new Text({
    font: "12px Calibri,sans-serif",
    fill: new Fill({
      color: "rgba(255, 255, 255, 1)",
    }),
    backgroundFill: new Fill({
      color: "rgba(0, 0, 0, 0.4)",
    }),
    padding: [2, 2, 2, 2],
    textBaseline: "bottom",
    offsetY: -12,
  }),
  image: new RegularShape({
    radius: 6,
    points: 3,
    angle: Math.PI,
    displacement: [0, 8],
    fill: new Fill({
      color: "rgba(0, 0, 0, 0.4)",
    }),
  }),
});

const segmentStyles = [segmentStyle];

export const measureStyleFunction: StyleFunction = (
  feature: FeatureLike,
  segments: number
) => {
  const styles = [style];
  const geometry = feature.getGeometry() as Geometry | null;

  if (!geometry) {
    return;
  }

  const type = geometry.getType();

  let point, label, line;

  if (type === "Polygon") {
    point = (geometry as Polygon).getInteriorPoint();
    label = formatArea(geometry);
    line = new LineString((geometry as Polygon).getCoordinates()[0]);
  } else if (type === "LineString") {
    point = new Point((geometry as LineString).getLastCoordinate());
    label = formatLength(geometry);
    line = geometry as LineString;
  }

  if (segments && line) {
    let count = 0;
    line.forEachSegment((first, second) => {
      const segment = new LineString([first, second]);
      const label = formatLength(segment);

      if (segmentStyles.length - 1 < count) {
        segmentStyles.push(segmentStyle.clone());
      }

      const segmentPoint = new Point(segment.getCoordinateAt(0.5));
      segmentStyles[count].setGeometry(segmentPoint);
      segmentStyles[count].getText().setText(label);

      styles.push(segmentStyles[count]);
      count++;
    });
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
