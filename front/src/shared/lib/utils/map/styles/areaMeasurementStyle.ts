import { FeatureLike } from "ol/Feature";
import { Geometry, Polygon, LineString, MultiPoint } from "ol/geom";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

import { TooltipStore } from "../../../../misc";
import { formatArea } from "../../format";

const polygonStyle = new Style({
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

export const getDrawAreaStyle: StyleFunction = (feature: FeatureLike) => {
  const styles = [polygonStyle, pointsStyle];
  const geometry = feature.getGeometry() as Geometry | null;

  if (!geometry) {
    return;
  }

  if (geometry.getType() !== "Point" && geometry.getType() !== "LineString") {
    const coordinate = (geometry as Polygon)
      .getInteriorPoint()
      .getCoordinates();
    TooltipStore.text = formatArea(geometry);
    TooltipStore.show(coordinate);
  }

  return styles;
};

export const getVisibleAreaStyle: StyleFunction = () => {
  return [polygonStyle];
};
