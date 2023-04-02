import { LayersSwitch } from "@entities/layers-switch";
import { ActionsGroup } from "@entities/map-actions";

const FastControls = () => {
  return (
    <>
      <ActionsGroup />
      <LayersSwitch />
    </>
  );
};

export default FastControls;
