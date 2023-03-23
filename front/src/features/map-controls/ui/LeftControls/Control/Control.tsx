import { MenuOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import { wrapper, header, title, main } from "./control.module.scss";
import { Measure, Search, Share } from "./controls";
import { MeasurementPanel, SharePanel } from "./panels";

const { Text } = Typography;

const Control = () => {
  const active = ControlsStore.mapDrawerActive;
  const controlType = ControlsStore.currentMapControl;

  let control = <></>;
  let panel = <></>;
  let label = "";

  switch (controlType) {
    case "measurement":
      control = <Measure />;
      label = "Измерение";
      panel = (
        <div className={main}>
          <MeasurementPanel />
        </div>
      );
      break;
    case "search":
      control = <Search />;
      break;
    case "share":
      control = <Share />;
      label = "Поделиться";
      panel = (
        <div className={main}>
          <SharePanel />
        </div>
      );
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
        {panel}
      </div>
    </div>
  );
};

export default observer(Control);
