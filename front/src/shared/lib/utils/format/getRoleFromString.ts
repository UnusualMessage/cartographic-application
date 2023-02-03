import { Role } from "../../../api/types/api";

export const getRoleFromString = (role: Role) => {
  switch (role) {
    case "Admin":
      return 8;
    case "Moderator":
      return 4;
    case "Monitor":
      return 2;
    case "Guest":
      return 1;
  }
};
