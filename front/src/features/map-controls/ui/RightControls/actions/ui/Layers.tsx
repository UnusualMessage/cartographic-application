import { Button } from "antd";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";
import { LayersFilled, Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";

interface Props {
  open: boolean;
}

const Layers = ({ open }: Props) => {
  const context = useContext(SchemaTemplateContext);

  return (
    <Condition truthy={context?.fastControls?.layers}>
      <Button
        className={wrapper}
        icon={<LayersFilled />}
        type={open ? "primary" : "default"}
        onClick={() => ControlsStore.switchPanel()}
      />
    </Condition>
  );
};

export default Layers;
