import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import { wrapper, header } from "./control.module.scss";
import { MeasurementControl } from "./controls";

const Control = () => {
  const active = ControlsStore.mapDrawerActive;
  const controlType = ControlsStore.currentMapControl;

  let control = <></>;

  switch (controlType) {
    case "measurement":
      control = <MeasurementControl />;
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
        <Button
          onClick={active ? hideDrawer : showDrawer}
          icon={<MenuOutlined />}
          type={active ? "primary" : "text"}
        />

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
