import { Trailer, UpdateTrailer } from "@shared/misc";

export const getTrailerDefaultValues = (
  trailer?: Trailer
): Partial<UpdateTrailer> => {
  return {
    id: trailer?.id,
    title: trailer?.title,
    organizationId: trailer?.organization.id,
    departmentId: trailer?.department.id,
  };
};
