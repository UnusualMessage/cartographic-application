import {
  FilterOutlined,
  ExportOutlined,
  PrinterOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { PropsWithChildren } from "react";

import { content, header, wrapper, actions } from "./page.module.scss";

const TabPage = ({ children }: PropsWithChildren) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={actions}>
          <Button icon={<FilterOutlined />} type={"text"} />
          <Button icon={<ExportOutlined />} type={"text"} />
          <Button icon={<PrinterOutlined />} type={"text"} />
          <Button icon={<ReloadOutlined />} type={"text"} />
        </div>
      </div>
      <div className={content}>{children}</div>
    </div>
  );
};

export default TabPage;
