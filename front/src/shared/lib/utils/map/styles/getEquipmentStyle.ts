import { Stroke, Fill, RegularShape } from "ol/style";
import Style, { StyleFunction } from "ol/style/Style";

const style = new Style({
  image: new RegularShape({
    points: 3,
    radius: 8,
    angle: Math.PI / 2,

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
