import { observer } from "mobx-react-lite";

import { AuthenticateUser } from "@features/auth";

import { content, wrapper } from "./authorization.module.scss";

const Authorization = () => {
  return (
    <div className={wrapper}>
      <AuthenticateUser className={content} />
    </div>
  );
};

export default observer(Authorization);
