import { Space, Button } from "antd";
import { PropsWithChildren } from "react";

import { content, header, wrapper } from "./page.module.scss";
import Icon from "../Icon";

const TabPage = ({ children }: PropsWithChildren) => {
  const filterIcon = <Icon icon={"filter"} />;
  const exportIcon = <Icon icon={"export"} />;
  const printIcon = <Icon icon={"print"} />;
  const refreshIcon = <Icon icon={"refresh"} />;

  return (
    <div className={wrapper}>
      <div className={header}>
        <Space>
          <Button icon={filterIcon} type={"text"} />
          <Button icon={exportIcon} type={"text"} />
          <Button icon={printIcon} type={"text"} />
          <Button icon={refreshIcon} type={"text"} />
        </Space>
      </div>
      <div className={content}>{children}</div>
    </div>
  );
};

export default TabPage;
