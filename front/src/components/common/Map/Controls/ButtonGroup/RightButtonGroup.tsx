import { Button, ButtonGroup, Collapse } from "@blueprintjs/core";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { right, wrapper } from "./group.module.scss";

import {
  InteractionsStore,
  LayersStore,
  MapStore,
} from "../../../../../stores/map";
import classNames from "classnames";
import { auxLayerId } from "../../../../../assets/map/config";
import { InteractionType } from "../../../../../types/map";

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
  const interactionType = InteractionsStore.interactionType;

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

  const switchType = (type: InteractionType) => {
    LayersStore.clearVectorLayer(auxLayerId);

    if (interactionType === type) {
      InteractionsStore.interactionType = "none";
    } else {
      InteractionsStore.interactionType = type;
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
            icon="draw"
            intent={
              InteractionsStore.isGeozoneInteractionsActive ? "primary" : "none"
            }
            onClick={() =>
              switchType(
                InteractionsStore.isGeozoneInteractionsActive
                  ? "none"
                  : "geozones"
              )
            }
          />

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
            intent={interactionType === "measure-length" ? "primary" : "none"}
            onClick={() => switchType("measure-length")}
          />

          <Button
            icon="polygon-filter"
            intent={interactionType === "measure-area" ? "primary" : "none"}
            onClick={() => switchType("measure-area")}
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
