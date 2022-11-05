import { Button, ButtonGroup, Collapse } from "@blueprintjs/core";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { right, wrapper } from "./group.module.scss";

import { MeasurementMode } from "../../../../../stores/map/InteractionsStore";
import {
  InteractionsStore,
  LayersStore,
  MapStore,
} from "../../../../../stores/map";
import classNames from "classnames";
import { auxLayerId } from "../../../../../assets/map/config";

interface Props {
  isPanelOpen: boolean;
  setIsPanelOpen: (value: boolean) => void;
  isGeocoderOpen: boolean;
  setIsGeocoderOpen: (value: boolean) => void;
  handlePrint: FullScreenHandle;
}

const RightButtonGroup = ({
  isPanelOpen,
  setIsPanelOpen,
  isGeocoderOpen,
  setIsGeocoderOpen,
  handlePrint,
}: Props) => {
  const measurementMode = InteractionsStore.measurementMode;

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const handleCollapse = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  const handleGeocoder = () => {
    setIsGeocoderOpen(!isGeocoderOpen);
  };

  const handlePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const switchMeasurementMode = (mode: MeasurementMode) => {
    LayersStore.clearVectorLayer(auxLayerId);

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
    <div className={classNames(wrapper, right)}>
      <Button
        icon={"wrench"}
        intent={isCollapseOpen ? "primary" : "none"}
        onClick={handleCollapse}
        large
      />

      <Collapse isOpen={isCollapseOpen} keepChildrenMounted>
        <ButtonGroup vertical large>
          <Button
            icon="layers"
            intent={isPanelOpen ? "primary" : "none"}
            onClick={handlePanel}
          />

          <Button
            icon={"geosearch"}
            intent={isGeocoderOpen ? "primary" : "none"}
            onClick={handleGeocoder}
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
      </Collapse>
    </div>
  );
};

export default observer(RightButtonGroup);
