import { Geozone, TableGeozone } from "../../../../misc";

export const mapGeozoneToTable = (geozone: Geozone): TableGeozone => {
  return {
    id: geozone.id,
    key: geozone.id,
    title: geozone.title,
    organization: geozone.organization.title,
    department: geozone.department?.title,
  };
};
