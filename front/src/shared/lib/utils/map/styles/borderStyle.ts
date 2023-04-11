import { Fill, Stroke } from "ol/style";
import Style from "ol/style/Style";

export const borderStyle = new Style({
  fill: new Fill({
    color: "rgba(255, 255, 255, 0)",
  }),
  stroke: new Stroke({
    color: "rgba(255, 0, 0, 1)",
    width: 1,
  }),
});
