import { Form } from "@shared/api/types/forms";
import { AuthenticateUser } from "@shared/api/types/entities/User";

export const authenticateUser = (): Form<AuthenticateUser> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Логин",
      name: "login",
    },

    {
      type: "text",
      required: "Заполните поле!",
      label: "Пароль",
      name: "password",
    },
  ];
};
