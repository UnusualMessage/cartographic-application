import { Button, ButtonGroup, Collapse } from "@blueprintjs/core";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { right } from "./group.module.scss";

import { MeasurementMode } from "../../../../stores/InteractionsStore";
import { InteractionsStore, LayersStore, MapStore } from "../../../../stores";
import Geocoder from "../Geocoder";

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

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const [isGeocoderOpen, setIsGeocoderOpen] = useState(false);

  const handleCollapse = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  const handleGeocoder = () => {
    setIsGeocoderOpen(!isGeocoderOpen);
  };

  const handlePanel = () => {
    setPanelVisible(!panelVisible);
  };

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

  return (
    <div className={right}>
      <Button
        icon={"wrench"}
        intent={isCollapseOpen ? "primary" : "none"}
        onClick={handleCollapse}
        large
      />

      <Geocoder isOpen={isGeocoderOpen} onClose={handleGeocoder} />

      <Collapse isOpen={isCollapseOpen} keepChildrenMounted>
        <ButtonGroup vertical large>
          <Button
            icon="layers"
            intent={panelVisible ? "primary" : "none"}
            onClick={handlePanel}
          />

          <Button icon={"geosearch"} intent={"none"} onClick={handleGeocoder} />

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
      </Collapse>
    </div>
  );
};

export default observer(RightButtonGroup);
