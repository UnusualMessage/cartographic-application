import { useState } from "react";
import { FullScreenHandle } from "react-full-screen";

import { LeftButtonGroup, RightButtonGroup } from "./ButtonGroup";
import LayersSwitcher from "./LayersSwitcher";

interface Props {
  handle: FullScreenHandle;
}

const ViewControls = ({ handle }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      {isPanelOpen ? <LayersSwitcher /> : <></>}

      <LeftButtonGroup />
      <RightButtonGroup
        isPanelOpen={isPanelOpen}
        setIsPanelOpen={setIsPanelOpen}
        handlePrint={handle}
      />
    </>
  );
};

export default ViewControls;
