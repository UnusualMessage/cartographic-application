import { Employee, UpdateEmployee } from "@shared/misc";

export const getDefaultValues = (
  employee?: Employee
): Partial<UpdateEmployee> => {
  return {
    id: employee?.id,
    firstName: employee?.firstName,
    secondName: employee?.secondName,
    patronymic: employee?.patronymic,
    birthDate: employee?.birthDate,
    driverCard: employee?.driverCard,
    phone: employee?.phone,
    postId: employee?.post.id,
    organizationId: employee?.organization.id,
  };
};
