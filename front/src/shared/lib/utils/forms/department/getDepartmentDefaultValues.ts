import { Department, UpdateDepartment } from "../../../../misc";

export const getDepartmentDefaultValues = (
  department?: Department
): Partial<UpdateDepartment> => {
  return {
    id: department?.id,
    title: department?.title,
    organizationId: department?.organization.id,
  };
};
