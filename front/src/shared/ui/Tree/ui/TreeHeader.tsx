import { GroupOutlined } from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Button } from "antd";
import { ChangeEventHandler } from "react";

import { wrapper } from "./header.module.scss";
import Condition from "../../Condition";

interface Props {
  menuItems: MenuProps["items"];
  onGroupSwitch: MenuProps["onClick"];
  searchValue?: string;
  selected: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
}

const TreeHeader = ({
  menuItems,
  searchValue,
  selected,
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
          menu={{
            items: menuItems,
            selectable: true,
            onClick: onGroupSwitch,
            selectedKeys: [selected],
          }}
          trigger={["click"]}
        >
          <Button icon={<GroupOutlined />} type="text" />
        </Dropdown>
      </Condition>
    </div>
  );
};

export default TreeHeader;
