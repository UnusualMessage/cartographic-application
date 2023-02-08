import { Button, ButtonGroup } from "@blueprintjs/core";
import { PropsWithChildren } from "react";

import { content, header, wrapper } from "./page.module.scss";

const TabPage = ({ children }: PropsWithChildren) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <ButtonGroup minimal>
          <Button icon={"filter"} />
          <Button icon={"export"} />
          <Button icon={"print"} />
          <Button icon={"refresh"} />
        </ButtonGroup>
      </div>
      <div className={content}>{children}</div>
    </div>
  );
};

export default TabPage;
