import { Tag } from "@blueprintjs/core";

import { getRoleFromNumber } from "../../../../shared/lib";
import { RoleNumber } from "../../../../shared/api/types/api";

interface Props {
  login: string;
  roles: RoleNumber;
}

const User = ({ login, roles }: Props) => {
  return (
    <Tag
      onRemove={() => {
        return;
      }}
      icon={"person"}
      large
      fill
      interactive
      intent={"primary"}
    >{`${login} (${getRoleFromNumber(roles)})`}</Tag>
  );
};

export default User;
