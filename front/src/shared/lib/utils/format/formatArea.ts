import { Geometry } from "ol/geom";
import { getArea } from "ol/sphere";

export const formatArea = (polygon: Geometry) => {
  const area = getArea(polygon);
  let output;
  if (area > 10000) {
    output = Math.round((area / 1000000) * 100) / 100 + " км\xB2";
  } else {
    output = Math.round(area * 100) / 100 + " м\xB2";
  }
  return output;
};
