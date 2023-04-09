import { Input } from "antd";
import { useLocation } from "react-router-dom";

import { Panel } from "entities/map";

const ShareResult = () => {
  const url = useLocation();

  return (
    <Panel>
      <Input
        defaultValue={"https://localhost:3000" + url.pathname + url.search}
      />
    </Panel>
  );
};

export default ShareResult;
