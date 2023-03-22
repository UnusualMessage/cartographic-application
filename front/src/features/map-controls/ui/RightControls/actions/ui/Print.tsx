import { PrinterOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { MapStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const Print = () => {
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
