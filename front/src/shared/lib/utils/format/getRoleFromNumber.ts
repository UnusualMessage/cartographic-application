import { Role, RoleNumber } from "@shared/api/types/api";

export const getRoleFromNumber = (role: RoleNumber): Role => {
  switch (role) {
    case 8:
      return "Admin";
    case 4:
      return "Moderator";
    case 2:
      return "Monitor";
    case 1:
      return "Guest";
  }
};
