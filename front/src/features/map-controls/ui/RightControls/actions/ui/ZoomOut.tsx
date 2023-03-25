import { ZoomOutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ViewStore } from "@shared/misc";
import { Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";

const ZoomOut = () => {
  const context = useContext(SchemaTemplateContext);

  return (
    <Condition truthy={context?.fastControls?.zoomOut}>
      <Button
        className={wrapper}
        icon={<ZoomOutOutlined />}
        onClick={() => ViewStore.zoomOut()}
      />
    </Condition>
  );
};

export default ZoomOut;
