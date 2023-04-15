import { FileAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

import { routes } from "@shared/assets";

const ToReports = () => {
  return (
    <Link to={routes.reports.path}>
      <Button icon={<FileAddOutlined />} size={"large"} type={"text"}>
        Отчеты
      </Button>
    </Link>
  );
};

export default ToReports;
