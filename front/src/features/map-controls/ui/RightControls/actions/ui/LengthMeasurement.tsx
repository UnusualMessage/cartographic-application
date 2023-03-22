import { Button } from "antd";
import { observer } from "mobx-react-lite";

import { InteractionsStore } from "@shared/misc";
import { LengthMeasurement as Icon } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

const LengthMeasurement = () => {
  const drawType = InteractionsStore.drawType;

  return (
    <Button
      className={wrapper}
      icon={<Icon />}
      type={drawType === "measure-length" ? "primary" : "default"}
      onClick={() => switchDrawType(drawType, "measure-length")}
    />
  );
};

export default observer(LengthMeasurement);
