import { AimOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { observer } from "mobx-react-lite";

import { InteractionsStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

const CoordinateMeasurement = () => {
  const drawType = InteractionsStore.drawType;

  return (
    <Button
      className={wrapper}
      icon={<AimOutlined />}
      type={drawType === "measure-coordinate" ? "primary" : "default"}
      onClick={() => switchDrawType(drawType, "measure-coordinate")}
    />
  );
};

export default observer(CoordinateMeasurement);
