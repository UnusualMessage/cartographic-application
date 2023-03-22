import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { observer } from "mobx-react-lite";

import { Geocoder } from "@entities/geocoder";
import { ControlsStore, MeasurementStore } from "@shared/misc";

import { wrapper, info, header } from "./control.module.scss";

const Control = () => {
  const active = ControlsStore.mapDrawerActive;

  const showDrawer = () => {
    ControlsStore.showDrawer();
  };

  const hideDrawer = () => {
    ControlsStore.hideDrawer();
  };

  return (
    <div className={wrapper}>
      <Space className={header}>
        <Button
          onClick={active ? hideDrawer : showDrawer}
          icon={<MenuOutlined />}
          type={active ? "primary" : "text"}
        />
        <Geocoder />
        <Button icon={<SearchOutlined />} type={"text"} />
      </Space>
      <div className={info}>
        <span>{MeasurementStore.area}</span>
        <span>{MeasurementStore.length}</span>
        <span>{MeasurementStore.coordinate}</span>
      </div>
    </div>
  );
};

export default observer(Control);
