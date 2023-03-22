import { Button } from "antd";

import { ControlsStore } from "@shared/misc";
import { LayersFilled } from "@shared/ui";

import { wrapper } from "./action.module.scss";

interface Props {
  open: boolean;
}

const Layers = ({ open }: Props) => {
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
