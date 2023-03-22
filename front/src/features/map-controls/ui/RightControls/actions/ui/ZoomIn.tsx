import { ZoomInOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { ViewStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const ZoomIn = () => {
  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  return (
    <Button className={wrapper} icon={<ZoomInOutlined />} onClick={zoomIn} />
  );
};

export default ZoomIn;
