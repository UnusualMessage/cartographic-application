import { Geometry } from "ol/geom";
import { getLength } from "ol/sphere";

export const formatLength = (line: Geometry) => {
  const length = getLength(line);
  let output;
  if (length > 100) {
    output = Math.round((length / 1000) * 100) / 100 + " km";
  } else {
    output = Math.round(length * 100) / 100 + " m";
  }
  return output;
};
