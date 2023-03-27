import { LayersSwitch } from "@entities/layers-switch";

import ActionsGroup from "./ActionsGroup";

const RightControls = () => {
  return (
    <>
      <ActionsGroup />
      <LayersSwitch />
    </>
  );
};

export default RightControls;
