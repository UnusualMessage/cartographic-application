import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { InteractionsStore } from "@shared/misc";
import { LineStringFilled } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

interface Props {
  type: "default" | "text";
}

const Distance = ({ type }: Props) => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.distance) {
    return <></>;
  }

  const drawType = InteractionsStore.drawType;

  const classes = classNames({
    [wrapper]: type === "default",
  });

  return (
    <Button
      className={classes}
      icon={<LineStringFilled />}
      type={drawType === "measure-length" ? "primary" : type}
      onClick={() => switchDrawType(drawType, "measure-length")}
    />
  );
};

export default observer(Distance);
