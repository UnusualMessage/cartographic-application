import { ButtonGroup } from "@blueprintjs/core";

import { wrapper } from "./buttons.module.scss";
import { PropsWithChildren } from "react";

const TableButtons = ({ children }: PropsWithChildren) => {
  return (
    <ButtonGroup className={wrapper} minimal large>
      {children}
    </ButtonGroup>
  );
};

export default TableButtons;
