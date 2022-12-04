import { observer } from "mobx-react-lite";
import { FullScreenHandle } from "react-full-screen";
import { useState } from "react";

import ButtonsGroup from "./ButtonsGroup";
import ControlsGroup from "./ControlsGroup";

interface Props {
  handlePrint: FullScreenHandle;
}

const LayerControls = ({ handlePrint }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <ButtonsGroup
        handlePrint={handlePrint}
        isPanelOpen={isPanelOpen}
        setIsPanelOpen={setIsPanelOpen}
      />
      <ControlsGroup isPanelOpen={isPanelOpen} />
    </>
  );
};

export default observer(LayerControls);
