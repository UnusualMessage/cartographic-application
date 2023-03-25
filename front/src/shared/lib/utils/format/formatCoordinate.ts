import { Point } from "ol/geom";
import { toLonLat } from "ol/proj";

export const formatCoordinate = (geometry: Point) => {
  const coordinate = toLonLat(geometry.getCoordinates());

  return `Широта: ${coordinate[1].toFixed(2)}° Долгота: ${coordinate[0].toFixed(
    2
  )}°`;
};
