import { Stroke, Fill } from "ol/style";
import CircleStyle from "ol/style/Circle";
import Style, { StyleFunction } from "ol/style/Style";

const style = new Style({
  image: new CircleStyle({
    radius: 5,

    stroke: new Stroke({
      color: "#1677FF",
      width: 2,
    }),
    fill: new Fill({
      color: "rgba(255, 255, 255, 1)",
    }),
  }),
});

export const getEquipmentStyle: StyleFunction = () => {
  return [style];
};
