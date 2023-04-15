import { FileAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

import { routes } from "@shared/assets";

const ToReferences = () => {
  return (
    <Link to={routes.references.path}>
      <Button icon={<FileAddOutlined />} size={"large"} type={"text"}>
        Справочники
      </Button>
    </Link>
  );
};

export default ToReferences;
