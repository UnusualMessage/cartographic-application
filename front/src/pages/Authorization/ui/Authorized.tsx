import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";

import { AuthStore } from "@entities/user";
import type { RoleNumber } from "@shared/misc";
import { NotAuthorized } from "@shared/ui";

interface Props extends PropsWithChildren {
  roles: RoleNumber[];
}

const Authorized = ({ roles, children }: Props) => {
  const user = AuthStore.user;
  const entered = AuthStore.entered;

  if (user?.roles && roles.includes(user.roles) && entered) {
    return <>{children}</>;
  }

  return <NotAuthorized />;
};

export default observer(Authorized);
