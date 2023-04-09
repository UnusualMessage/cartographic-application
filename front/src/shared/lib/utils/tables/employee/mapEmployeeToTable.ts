import { Employee, TableEmployee } from "../../../../misc";

export const mapEmployeeToTable = (employee: Employee): TableEmployee => {
  return {
    id: employee.id,
    key: employee.id,
    firstName: employee.firstName,
    secondName: employee.secondName,
    email: employee.email,
    post: employee.post.title,
    organization: employee.organization.title,
    department: employee.department?.title,
    patronymic: employee.patronymic,
    phone: employee.phone,
    birthDate: employee.birthDate,
    driverCard: employee.driverCard,
  };
};
