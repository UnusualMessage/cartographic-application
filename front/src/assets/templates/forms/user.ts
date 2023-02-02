import { AuthenticateUser } from "../../../types/entities/User";
import { Form } from "../../../types/forms";

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
