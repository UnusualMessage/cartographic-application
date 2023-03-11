import { Button, Form } from "antd";
import { observer } from "mobx-react-lite";
import { SubmitHandler, useForm, Control } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AuthStore } from "@entities/user";
import { authenticateUser } from "@shared/assets";
import { formRenderer } from "@shared/lib";
import { AuthenticateUser } from "@shared/misc";

import { content, wrapper } from "./authorization.module.scss";

const Authorization = () => {
  const redirect = useNavigate();

  const { control, handleSubmit, reset } = useForm<AuthenticateUser>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<AuthenticateUser> = async (data) => {
    const user: AuthenticateUser = {
      login: data.login,
      password: data.password,
    };

    await AuthStore.authenticateUser(user);

    if (AuthStore.entered) {
      redirect("/");
    }

    reset();
  };

  return (
    <div className={wrapper}>
      <Form
        className={content}
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
    </div>
  );
};

export default observer(Authorization);
