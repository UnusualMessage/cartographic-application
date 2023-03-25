import { observer } from "mobx-react-lite";

import { AuthenticateUser } from "@features/auth";
import { Body } from "@widgets/wrappers";

import { wrapper } from "./authorization.module.scss";

const Authorization = () => {
  return (
    <Body>
      <AuthenticateUser className={wrapper} />
    </Body>
  );
};

export default observer(Authorization);
