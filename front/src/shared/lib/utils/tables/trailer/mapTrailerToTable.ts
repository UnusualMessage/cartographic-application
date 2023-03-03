import { Trailer, TableTrailer } from "../../../../misc";

export const mapTrailerToTable = (trailer: Trailer): TableTrailer => {
  return {
    id: trailer.id,
    key: trailer.id,
    title: trailer.title,
    organization: trailer.organization.title,
    department: trailer.department.title,
  };
};
