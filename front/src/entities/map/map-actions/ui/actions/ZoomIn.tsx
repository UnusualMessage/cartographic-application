import { ZoomInOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ViewService } from "@shared/misc";
import { Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";

const ZoomIn = () => {
  const context = useContext(SchemaTemplateContext);

  return (
    <Condition truthy={context?.fastControls?.zoomIn}>
      <Button
        className={wrapper}
        icon={<ZoomInOutlined />}
        onClick={() => ViewService.zoomIn()}
      />
    </Condition>
  );
};

export default ZoomIn;
