import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { observer } from "mobx-react-lite";

import { Geocoder } from "@entities/geocoder";
import { ControlsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";

const InteractionsControl = () => {
  const active = ControlsStore.mapDrawerActive;

  const showDrawer = () => {
    ControlsStore.showDrawer();
  };

  const hideDrawer = () => {
    ControlsStore.hideDrawer();
  };

  return (
    <Space className={wrapper}>
      <Button
        onClick={active ? hideDrawer : showDrawer}
        icon={<MenuOutlined />}
        type={active ? "primary" : "text"}
      />
      <Geocoder />
      <Button icon={<SearchOutlined />} type={"text"} />
    </Space>
  );
};

export default observer(InteractionsControl);
