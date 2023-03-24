import { ZoomInOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ViewStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const ZoomIn = () => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.zoomIn) {
    return <></>;
  }

  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  return (
    <Button className={wrapper} icon={<ZoomInOutlined />} onClick={zoomIn} />
  );
};

export default ZoomIn;
