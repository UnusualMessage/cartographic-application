import { Form, Button } from "antd";
import { Control, useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AuthStore } from "@entities/user";
import { formRenderer } from "@shared/lib";
import { AuthenticateUser as AuthenticateUserType } from "@shared/misc";

import { authenticateUser } from "../../model";

interface Props {
  className: string;
}

const AuthenticateUser = ({ className }: Props) => {
  const redirect = useNavigate();

  const { control, handleSubmit, reset } = useForm<AuthenticateUserType>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<AuthenticateUserType> = async (data) => {
    const user: AuthenticateUserType = {
      login: data.login,
      password: data.password,
    };

    await AuthStore.authenticateUser(user);

    if (AuthStore.entered) {
      switch (AuthStore.user?.roles) {
        case 8:
          redirect("/admin");
          break;
        default:
          redirect("/system/monitoring");
      }
    }

    reset();
  };

  return (
    <Form
      className={className}
      onFinish={handleSubmit(onSubmit)}
      layout={"vertical"}
    >
      {formRenderer(authenticateUser(), control as unknown as Control)}

      <Form.Item>
        <Button type={"primary"} htmlType={"submit"}>
          Ок
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthenticateUser;
