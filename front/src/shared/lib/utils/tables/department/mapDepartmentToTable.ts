import { Department, TableDepartment } from "../../../../misc";

export const mapDepartmentToTable = (
  department: Department
): TableDepartment => {
  return {
    id: department.id,
    key: department.id,
    title: department.title,
    organization: department.organization.title,
  };
};
