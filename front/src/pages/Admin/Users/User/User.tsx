import { Tag } from "@blueprintjs/core";

import { RoleNumber } from "../../../../types/api";
import { getRoleFromNumber } from "../../../../utils/format";

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
