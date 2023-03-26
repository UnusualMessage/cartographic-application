import { LineString, MultiPoint } from "ol/geom";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

const polygonStyle = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0.5)",
  }),
  stroke: new Stroke({
    color: "#1677FF",
    width: 3,
  }),

  image: new CircleStyle({
    radius: 0,
  }),
});

const selectStyle = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0.5)",
  }),
  stroke: new Stroke({
    color: "#f5222d",
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

export const getGeozoneStyle: StyleFunction = () => {
  return [polygonStyle, pointsStyle];
};

export const getSelectStyle: StyleFunction = () => {
  return [selectStyle, pointsStyle];
};
