import { observer } from "mobx-react-lite";

import LayerControls from "../LayerControls";
import MainControls from "../MainControls";
import ViewControls from "../ViewControls";

const Controls = () => {
  return (
    <>
      <LayerControls />
      <ViewControls />
      <MainControls />
    </>
  );
};

export default observer(Controls);
