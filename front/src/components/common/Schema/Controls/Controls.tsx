import { observer } from "mobx-react-lite";

import ViewControls from "./ViewControls";
import LayerControls from "./LayerControls";
import MainControls from "./MainControls";

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
