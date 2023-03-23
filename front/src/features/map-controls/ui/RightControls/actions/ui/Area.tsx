import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { InteractionsStore } from "@shared/misc";
import { AreaMeasurement as Icon } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

interface Props {
  type: "default" | "text";
}

const Area = ({ type }: Props) => {
  const drawType = InteractionsStore.drawType;

  const classes = classNames({
    [wrapper]: type === "default",
  });

  return (
    <Button
      className={classes}
      icon={<Icon />}
      type={drawType === "measure-area" ? "primary" : type}
      onClick={() => switchDrawType(drawType, "measure-area")}
    />
  );
};

export default observer(Area);
