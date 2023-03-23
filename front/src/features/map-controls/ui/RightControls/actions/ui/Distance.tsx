import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { InteractionsStore } from "@shared/misc";
import { LengthMeasurement as Icon } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

interface Props {
  type: "default" | "text";
}

const Distance = ({ type }: Props) => {
  const drawType = InteractionsStore.drawType;

  const classes = classNames({
    [wrapper]: type === "default",
  });

  return (
    <Button
      className={classes}
      icon={<Icon />}
      type={drawType === "measure-length" ? "primary" : type}
      onClick={() => switchDrawType(drawType, "measure-length")}
    />
  );
};

export default observer(Distance);
