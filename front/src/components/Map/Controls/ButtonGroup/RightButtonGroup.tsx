import { Button, ButtonGroup } from "@blueprintjs/core";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";

import { right } from "./group.module.scss";

import { MeasurementMode } from "../../../../stores/InteractionsStore";
import { InteractionsStore, LayersStore, MapStore } from "../../../../stores";

interface Props {
  panelVisible: boolean;
  setPanelVisible: (value: boolean) => void;
  handlePrint: FullScreenHandle;
}

const RightButtonGroup = ({
  panelVisible,
  setPanelVisible,
  handlePrint,
}: Props) => {
  const measurementMode = InteractionsStore.measurementMode;

  const switchMeasurementMode = (mode: MeasurementMode) => {
    LayersStore.clearAuxLayer();

    if (measurementMode === mode) {
      InteractionsStore.measurementMode = "none";
    } else {
      InteractionsStore.measurementMode = mode;
    }
  };

  const print = () => {
    MapStore.printMap();
  };

  const handlePanelVisibility = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <ButtonGroup vertical large className={right}>
      <Button
        icon="layers"
        intent={panelVisible ? "primary" : "none"}
        onClick={handlePanelVisibility}
      />

      <Button
        icon="one-to-one"
        intent={measurementMode == "length" ? "primary" : "none"}
        onClick={() => switchMeasurementMode("length")}
      />

      <Button
        icon="polygon-filter"
        intent={measurementMode == "area" ? "primary" : "none"}
        onClick={() => switchMeasurementMode("area")}
      />

      <Button
        icon="fullscreen"
        intent={handlePrint.active ? "primary" : "none"}
        onClick={handlePrint.active ? handlePrint.exit : handlePrint.enter}
      />

      <Button icon="print" intent={"none"} onClick={print} />
    </ButtonGroup>
  );
};

export default observer(RightButtonGroup);
