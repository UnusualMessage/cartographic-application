import { Fill, Stroke } from "ol/style";
import Style, { StyleFunction } from "ol/style/Style";

export const style = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0)",
  }),
  stroke: new Stroke({
    color: "rgba(255, 0, 0, 1)",
    width: 1,
  }),
});

export const getBorderStyle: StyleFunction = () => {
  return [style];
};
