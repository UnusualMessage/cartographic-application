import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

const visibleStyle = new Style({
  image: new CircleStyle({
    radius: 6,
    stroke: new Stroke({
      color: "#1677FF",
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(255, 255, 255, 1)",
    }),
  }),
});

const drawStyle = new Style({
  image: new CircleStyle({
    radius: 0,
  }),
});

export const getCoordinateMeasurementStyle: StyleFunction = () => {
  return [visibleStyle];
};

export const getCoordinateMeasurementStyle1: StyleFunction = () => {
  return [drawStyle];
};
