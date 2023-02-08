import { observer } from "mobx-react-lite";

import { UsersStore } from "@entities/user";

import User from "./User";
import { wrapper } from "./users.module.scss";

const Users = () => {
  const users = UsersStore.users;

  return (
    <div className={wrapper}>
      {users.map((user) => {
        return (
          <User
            key={`users-${user.id}`}
            login={user.login}
            roles={user.roles}
          />
        );
      })}
    </div>
  );
};

export default observer(Users);
