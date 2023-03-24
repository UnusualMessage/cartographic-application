import { ZoomOutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ViewStore } from "@shared/misc";

import { wrapper } from "./action.module.scss";

const ZoomOut = () => {
  const context = useContext(SchemaTemplateContext);

  if (!context?.fastControls?.zoomOut) {
    return <></>;
  }

  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  return (
    <Button className={wrapper} icon={<ZoomOutOutlined />} onClick={zoomOut} />
  );
};

export default ZoomOut;
