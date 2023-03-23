import { MenuOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import { wrapper, header, title } from "./control.module.scss";
import { Measure, Search } from "./controls";

const { Text } = Typography;

const Control = () => {
  const active = ControlsStore.mapDrawerActive;
  const controlType = ControlsStore.currentMapControl;

  let control = <></>;
  let label = "";

  switch (controlType) {
    case "measurement":
      control = <Measure />;
      label = "Измерение";
      break;
    case "search":
      control = <Search />;
  }

  const showDrawer = () => {
    ControlsStore.showDrawer();
  };

  const hideDrawer = () => {
    ControlsStore.hideDrawer();
  };

  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={title}>
          <Button
            onClick={active ? hideDrawer : showDrawer}
            icon={<MenuOutlined />}
            type={active ? "primary" : "text"}
          />

          <Text strong>{label}</Text>
        </div>

        {control}
      </div>
      {/*<div className={info}>*/}
      {/*  <span>{MeasurementStore.area}</span>*/}
      {/*  <span>{MeasurementStore.length}</span>*/}
      {/*  <span>{MeasurementStore.coordinate}</span>*/}
      {/*</div>*/}
    </div>
  );
};

export default observer(Control);
