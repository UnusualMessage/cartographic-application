import { FullscreenOutlined, PrinterOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { auxLayerId } from "@shared/constants";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  MapStore,
  InteractionsStore,
} from "@shared/misc";
import { LengthMeasurement, LayersFilled } from "@shared/ui";
import AreaMesurement from "@shared/ui/icons/AreaMesurement";

import { active, wrapper } from "./buttons.module.scss";

const ButtonsGroup = () => {
  const drawType = InteractionsStore.drawType;
  const isPanelOpen = ControlsStore.layersPanelActive;
  const handleFullScreen = ControlsStore.fullScreenHandle;
  const fullScreenActive = ControlsStore.fullScreenActive;

  const switchPanel = () => {
    ControlsStore.switchPanel();
  };

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(auxLayerId);

    if (drawType === type) {
      InteractionsStore.drawType = "none";
    } else {
      InteractionsStore.drawType = type;
    }
  };

  const print = () => {
    MapStore.printMap();
  };

  const exitFullScreen = () => {
    handleFullScreen?.exit();
    ControlsStore.fullScreenActive = false;
  };

  const enterFullScreen = () => {
    handleFullScreen?.enter();
    ControlsStore.fullScreenActive = true;
  };

  const classes = classNames({
    [wrapper]: true,
    [active]: isPanelOpen,
  });

  return (
    <div className={classes}>
      <Space direction={"vertical"} size={2}>
        <Button
          icon={<LayersFilled />}
          type={isPanelOpen ? "primary" : "default"}
          onClick={switchPanel}
        />

        <Button
          icon={<LengthMeasurement />}
          type={drawType === "measure-length" ? "primary" : "default"}
          onClick={() => switchType("measure-length")}
        />

        <Button
          icon={<AreaMesurement />}
          type={drawType === "measure-area" ? "primary" : "default"}
          onClick={() => switchType("measure-area")}
        />

        <Button
          icon={<FullscreenOutlined />}
          type={fullScreenActive ? "primary" : "default"}
          onClick={fullScreenActive ? exitFullScreen : enterFullScreen}
        />

        <Button icon={<PrinterOutlined />} type={"default"} onClick={print} />
      </Space>
    </div>
  );
};

export default observer(ButtonsGroup);
