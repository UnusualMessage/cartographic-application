import { AimOutlined } from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { InteractionsStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

interface Props {
  type: "default" | "text";
}

const Coordinate = ({ type }: Props) => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.coordinate) {
    return <></>;
  }

  const drawType = InteractionsStore.drawType;
  const classes = classNames({
    [wrapper]: type === "default",
  });

  return (
    <Button
      className={classes}
      icon={<AimOutlined />}
      type={drawType === "measure-coordinate" ? "primary" : type}
      onClick={() => switchDrawType(drawType, "measure-coordinate")}
    />
  );
};

export default observer(Coordinate);
