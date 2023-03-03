import { Employee, TableEmployee } from "../../../../misc";

export const mapEmployeeToTable = (employee: Employee): TableEmployee => {
  return {
    id: employee.id,
    key: employee.id,
    firstName: employee.firstName,
    secondName: employee.secondName,
    post: employee.post.title,
    organization: employee.organization.title,
    patronymic: employee.patronymic,
    phone: employee.phone,
    birthDate: employee.birthDate,
    driverCard: employee.driverCard,
  };
};
