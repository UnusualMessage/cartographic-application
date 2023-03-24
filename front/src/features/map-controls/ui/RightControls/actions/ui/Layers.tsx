import { Button } from "antd";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";
import { LayersFilled } from "@shared/ui";

import { wrapper } from "./action.module.scss";

interface Props {
  open: boolean;
}

const Layers = ({ open }: Props) => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.layers) {
    return <></>;
  }

  const switchPanel = () => {
    ControlsStore.switchPanel();
  };

  return (
    <Button
      className={wrapper}
      icon={<LayersFilled />}
      type={open ? "primary" : "default"}
      onClick={switchPanel}
    />
  );
};

export default Layers;
