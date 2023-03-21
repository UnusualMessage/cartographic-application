import { FullscreenOutlined, PrinterOutlined } from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { measurementLayerId } from "@shared/constants";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  MapStore,
  InteractionsStore,
} from "@shared/misc";
import { LengthMeasurement, LayersFilled, AreaMeasurement } from "@shared/ui";

import { active, wrapper, button } from "./buttons.module.scss";

const ButtonsGroup = () => {
  const drawType = InteractionsStore.drawType;
  const isPanelOpen = ControlsStore.layersPanelActive;
  const handleFullScreen = ControlsStore.fullScreenHandle;
  const fullScreenActive = ControlsStore.fullScreenActive;

  const switchPanel = () => {
    ControlsStore.switchPanel();
  };

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(measurementLayerId);

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
      <Button
        className={button}
        icon={<LayersFilled />}
        type={isPanelOpen ? "primary" : "default"}
        onClick={switchPanel}
      />

      <Button
        className={button}
        icon={<LengthMeasurement />}
        type={drawType === "measure-length" ? "primary" : "default"}
        onClick={() => switchType("measure-length")}
      />

      <Button
        className={button}
        icon={<AreaMeasurement />}
        type={drawType === "measure-area" ? "primary" : "default"}
        onClick={() => switchType("measure-area")}
      />

      <Button
        className={button}
        icon={<FullscreenOutlined />}
        type={fullScreenActive ? "primary" : "default"}
        onClick={fullScreenActive ? exitFullScreen : enterFullScreen}
      />

      <Button
        className={button}
        icon={<PrinterOutlined />}
        type={"default"}
        onClick={print}
      />
    </div>
  );
};

export default observer(ButtonsGroup);
