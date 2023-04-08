import { AuthStore } from "@entities/auth";
import { Geozone, UpdateGeozone } from "@shared/misc";

export const getDefaultValues = (geozone?: Geozone): Partial<UpdateGeozone> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: geozone?.id,
    title: geozone?.title,
    organizationId: currentOrganization?.id,
    departmentId: geozone?.department?.id,
  };
};
