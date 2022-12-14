import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@blueprintjs/core";

import { wrapper, content } from "./authorization.module.scss";

import { AuthenticateUser } from "../../../types/entities/User";
import { AuthStore } from "../../../stores/entities";
import { formRenderer } from "../../../utils/forms";
import { authenticateUser } from "../../../assets/forms";

const Authorization = () => {
  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthenticateUser>({
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

    if (AuthStore.entered()) {
      redirect("/");
    }

    reset();
  };

  return (
    <div className={wrapper}>
      <form className={content} onSubmit={handleSubmit(onSubmit)}>
        {formRenderer(authenticateUser(), register, errors)}

        <Button type={"submit"} intent={"primary"}>
          Ок
        </Button>
      </form>
    </div>
  );
};

export default observer(Authorization);
