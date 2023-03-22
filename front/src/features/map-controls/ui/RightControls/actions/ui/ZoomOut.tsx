import { ZoomOutOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { ViewStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const ZoomOut = () => {
  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  return (
    <Button className={wrapper} icon={<ZoomOutOutlined />} onClick={zoomOut} />
  );
};

export default ZoomOut;
