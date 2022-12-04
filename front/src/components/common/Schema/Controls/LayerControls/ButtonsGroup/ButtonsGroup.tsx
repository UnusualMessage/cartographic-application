import { Button, ButtonGroup, Collapse } from "@blueprintjs/core";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { active, wrapper } from "./buttons.module.scss";

import {
  InteractionsStore,
  LayersStore,
  MapStore,
} from "../../../../../../stores/map";
import { auxLayerId } from "../../../../../../assets/map/config";
import { InteractionType } from "../../../../../../types/map";
import classNames from "classnames";

interface Props {
  isPanelOpen: boolean;
  setIsPanelOpen: (value: boolean) => void;
  handlePrint: FullScreenHandle;
}

const ButtonsGroup = ({ isPanelOpen, setIsPanelOpen, handlePrint }: Props) => {
  const interactionType = InteractionsStore.interactionType;

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const handleCollapse = () => {
    setIsCollapseOpen(!isCollapseOpen);
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

  const classes = classNames({
    [wrapper]: true,
    [active]: isPanelOpen,
  });

  return (
    <div className={classes}>
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

export default observer(ButtonsGroup);
