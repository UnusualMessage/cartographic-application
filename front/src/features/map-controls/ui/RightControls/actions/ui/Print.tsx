import { PrinterOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { MapStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const Print = () => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.print) {
    return <></>;
  }

  const print = () => {
    MapStore.printMap();
  };

  return (
    <Button
      className={wrapper}
      icon={<PrinterOutlined />}
      type={"default"}
      onClick={print}
    />
  );
};

export default Print;
