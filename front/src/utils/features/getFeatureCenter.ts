import { Circle, Geometry } from "ol/geom";
import { GeoJSON } from "ol/format";
import { AllGeoJSON, centerOfMass } from "@turf/turf";
import { FeatureLike } from "ol/Feature";

export const getFeatureCenter = (feature: FeatureLike) => {
  const geometry = (feature.getGeometry() as Geometry).clone();

  if (geometry.getType() === "Circle") {
    return (geometry as Circle).getCenter();
  } else {
    const format = new GeoJSON();

    const formattedGeometry = format.writeGeometryObject(geometry);

    return centerOfMass(formattedGeometry as AllGeoJSON).geometry.coordinates;
  }
};
