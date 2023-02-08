import { Tag } from "@blueprintjs/core";

import { RoleNumber } from "@shared/api/types/api";
import { getRoleFromNumber } from "@shared/lib";

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
