import { Form, AuthenticateUser } from "@shared/misc";

export const authenticateUser = (): Form<AuthenticateUser> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Логин",
      name: "login",
    },

    {
      type: "password",
      label: "Пароль",
      name: "password",
    },
  ];
};
