import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { InteractionsStore } from "@shared/misc";
import { PolygonFilled } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

interface Props {
  type: "default" | "text";
}

const Area = ({ type }: Props) => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.area) {
    return <></>;
  }

  const drawType = InteractionsStore.drawType;

  const classes = classNames({
    [wrapper]: type === "default",
  });

  return (
    <Button
      className={classes}
      icon={<PolygonFilled />}
      type={drawType === "measure-area" ? "primary" : type}
      onClick={() => switchDrawType(drawType, "measure-area")}
    />
  );
};

export default observer(Area);
