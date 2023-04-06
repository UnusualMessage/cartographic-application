import { AuthStore } from "@entities/auth";
import { Trailer, UpdateTrailer } from "@shared/misc";

export const getDefaultValues = (trailer?: Trailer): Partial<UpdateTrailer> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: trailer?.id,
    title: trailer?.title,
    organizationId: currentOrganization?.id,
    departmentId: trailer?.department?.id,
  };
};
