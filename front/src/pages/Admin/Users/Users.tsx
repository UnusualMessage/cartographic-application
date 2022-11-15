import { observer } from "mobx-react-lite";
import { Tag } from "@blueprintjs/core";

import { wrapper } from "./users.module.scss";

import { UsersStore } from "../../../stores/entities";
import { getRoleFromNumber } from "../../../utils/format";

const Users = () => {
  const users = UsersStore.users;

  return (
    <div className={wrapper}>
      {users.map((user) => {
        return (
          <Tag
            key={`users-${user.id}`}
            onRemove={() => {
              return;
            }}
            icon={"person"}
            large
            fill
            interactive
            intent={"primary"}
          >{`${user.login} (${getRoleFromNumber(user.roles)})`}</Tag>
        );
      })}
    </div>
  );
};

export default observer(Users);
