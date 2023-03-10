import { observer } from "mobx-react-lite";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthStore } from "@entities/user";
import type { RoleNumber } from "@shared/misc";

interface Props extends PropsWithChildren {
  roles: RoleNumber;
}

const Authorized = ({ roles, children }: Props) => {
  const user = AuthStore.user;
  const entered = AuthStore.entered;
  const navigate = useNavigate();

  useEffect(() => {
    if (!entered) {
      navigate("/authorization");
    }
  }, [entered]);

  if (user?.roles === roles && entered) {
    return <>{children}</>;
  }

  return <></>;
};

export default observer(Authorized);
