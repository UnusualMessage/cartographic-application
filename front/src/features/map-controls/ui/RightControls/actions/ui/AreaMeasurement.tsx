import { Button } from "antd";
import { observer } from "mobx-react-lite";

import { InteractionsStore } from "@shared/misc";
import { AreaMeasurement as Icon } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

const AreaMeasurement = () => {
  const drawType = InteractionsStore.drawType;

  return (
    <Button
      className={wrapper}
      icon={<Icon />}
      type={drawType === "measure-area" ? "primary" : "default"}
      onClick={() => switchDrawType(drawType, "measure-area")}
    />
  );
};

export default observer(AreaMeasurement);
