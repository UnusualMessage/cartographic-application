import { GroupOutlined } from "@ant-design/icons";
import { Dropdown, Input, MenuProps } from "antd";
import { ChangeEventHandler } from "react";

import { wrapper } from "./header.module.scss";
import Condition from "../../Condition";

interface Props {
  menuItems: MenuProps["items"];
  onGroupSwitch: MenuProps["onClick"];
  searchValue?: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
}

const TreeHeader = ({
  menuItems,
  searchValue,
  onSearchChange,
  onGroupSwitch,
}: Props) => {
  return (
    <div className={wrapper}>
      <Input
        placeholder={"Искать..."}
        onChange={onSearchChange}
        value={searchValue}
      />
      <Condition truthy={menuItems ? menuItems.length > 1 : false}>
        <Dropdown
          menu={{ items: menuItems, selectable: true, onClick: onGroupSwitch }}
          trigger={["click"]}
        >
          <GroupOutlined />
        </Dropdown>
      </Condition>
    </div>
  );
};

export default TreeHeader;
