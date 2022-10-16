import { useState } from "react";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";

import { LeftButtonGroup, RightButtonGroup } from "./ButtonGroup";
import LayersSwitcher from "./LayersSwitcher";

interface Props {
  handle: FullScreenHandle;
}

const ViewControls = ({ handle }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible ? <LayersSwitcher /> : <></>}

      <LeftButtonGroup />
      <RightButtonGroup
        panelVisible={visible}
        setPanelVisible={setVisible}
        handlePrint={handle}
      />
    </>
  );
};

export default observer(ViewControls);
