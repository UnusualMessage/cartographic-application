import { Department, UpdateDepartment } from "@shared/misc";

export const getDefaultValues = (
  department?: Department
): Partial<UpdateDepartment> => {
  return {
    id: department?.id,
    title: department?.title,
    organizationId: department?.organization.id,
  };
};
