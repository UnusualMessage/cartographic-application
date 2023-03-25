import {
  FilterOutlined,
  ExportOutlined,
  PrinterOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Space, Button } from "antd";
import { PropsWithChildren } from "react";

import { content, header, wrapper } from "./page.module.scss";

const TabPage = ({ children }: PropsWithChildren) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <Space>
          <Button icon={<FilterOutlined />} type={"text"} />
          <Button icon={<ExportOutlined />} type={"text"} />
          <Button icon={<PrinterOutlined />} type={"text"} />
          <Button icon={<ReloadOutlined />} type={"text"} />
        </Space>
      </div>
      <div className={content}>{children}</div>
    </div>
  );
};

export default TabPage;
