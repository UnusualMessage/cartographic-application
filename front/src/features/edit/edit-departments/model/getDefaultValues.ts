import { AuthStore } from "@entities/auth";
import { Department, UpdateDepartment } from "@shared/misc";

export const getDefaultValues = (
  department?: Department
): Partial<UpdateDepartment> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: department?.id,
    title: department?.title,
    organizationId: currentOrganization?.id,
  };
};
