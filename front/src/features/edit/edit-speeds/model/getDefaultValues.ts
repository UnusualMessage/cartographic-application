import { AuthStore } from "@entities/auth";
import { Speed, UpdateSpeed } from "@shared/misc";

export const getDefaultValues = (speed?: Speed): Partial<UpdateSpeed> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: speed?.id,
    title: speed?.title,
    min: speed?.min,
    max: speed?.max,
    timeLimit: speed?.timeLimit,
    organizationId: currentOrganization?.id,
    departmentId: speed?.department?.id,
  };
};
