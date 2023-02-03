import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@blueprintjs/core";

import { content, wrapper } from "./authorization.module.scss";

import { AuthenticateUser } from "../../../shared/api/types/entities/User";
import { AuthStore } from "../../../entities/stores/entities";
import { formRenderer } from "../../../shared/lib/utils/forms";
import { authenticateUser } from "../../../shared/assets";

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
