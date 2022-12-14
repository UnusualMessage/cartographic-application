import { observer } from "mobx-react-lite";

import { wrapper } from "./users.module.scss";

import { UsersStore } from "../../../stores/entities";
import User from "./User";

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
